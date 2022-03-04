import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  Link,
} from "remix";

import { useEffect, useState } from "react";

import translation from "./locale/translation";

import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", href: "/icons/favicon-32x32.png" },
  ];
}

export function meta() {
  const description = `Šatník Praha - Pomoc Ukrajině`;
  return {
    description,
    keywords: "ukraine,help,ukrajina,válka",
    "twitter:image": "https://app.satnikpraha.cz/ogshare.png",
    "twitter:card": "summary_large_image",
    "twitter:title": description,
    "twitter:description": "Pomáháme Ukrajině s Šatníkem Praha",
  };
}

function getFromSupported(language) {
  return ["ua", "cs"].includes(language) ? language : "cs";
}

export const loader = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.has("lng")) {
    return getFromSupported(url.searchParams.get("lng"));
  }

  // then we use the cookie, using this cookie we can store the user preference with a form
  let cookie = Object.fromEntries(
    request.headers
      .get("Cookie")
      ?.split(";")
      .map((cookie) => cookie.split("=")) ?? []
  );

  if (cookie.i18next) {
    return getFromSupported(cookie.i18next);
  }

  // and then we check the Accept-Language header and use that, this will have the value
  // of the language the user use for their OS
  if (request.headers.has("accept-language")) {
    return getFromSupported(request.headers.get("accept-language"));
  }
  return "cs";
};

export default function App() {
  const locale = useLoaderData();
  const [order, setOrder] = useState({});

  const setCzech = (e) => {
    setTranslator({
      translate: translation("cs"),
      language: "cs",
    });
  };
  const setUkrainian = (e) => {
    setTranslator({
      translate: translation("ua"),
      language: "ua",
    });
  };

  const [translator, setTranslator] = useState({
    translate: translation(locale),
    language: locale,
  });

  useEffect(() => {
    console.log(translator);
  }, [translator]);

  const setOrderItem = (key, value) => {
    const newOrder = order;
    newOrder[key] = value;
    setOrder(newOrder);
  };
  const submitOrder = () => {
    console.log({ order });
  };
  // const switchLanguage = (language) => {
  //   setLanguage({ translate: translation(getFromSupported(language)) });
  // };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#F8EBDB]">
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <header className="text-gray-600 body-font sticky top-0 bg-[#F8EBDB] z-10 pb-2">
            <div className="container mx-auto flex flex-wrap flex-row items-center">
              <Link
                className="flex title-font font-medium items-center text-gray-900 ml-5 md:ml-0"
                to="/"
              >
                <img
                  src="red.svg"
                  className="w-16 h-16 md:w-32 md:h-32"
                  alt="Šatník Praha"
                />
                <span className="ml-3 text-xl hidden">Šatník</span>
              </Link>
              <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900 hidden" href="/">
                  First Link
                </a>
              </nav>
              <button
                onClick={translator.language == "cs" ? setUkrainian : setCzech}
                className="inline-flex items-center text-[#0A9DBF] font-semibold  border-0 py-2 px-5 focus:outline-[#eb2f06] outline outline-offset-2 outline-[#0A9DBF] rounded-full text-base mr-5 hover:outline-[#eb2f06]"
              >
                {translator.language == "cs" ? (
                  <svg
                    width="25"
                    height="19"
                    viewBox="0 0 25 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H25V19H0V0Z"
                      fill="#FFD500"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H25V9.5H0V0Z"
                      fill="#005BBB"
                    />
                  </svg>
                ) : (
                  <svg
                    width="25"
                    height="19"
                    viewBox="0 0 25 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0H25V9.5H0V0Z" fill="white" />
                    <path d="M0 9.5H25V19H0V9.5Z" fill="#D7141A" />
                    <path d="M14.0625 9.5L0 0V19L14.0625 9.5Z" fill="#11457E" />
                  </svg>
                )}
                <span className="hidden md:flex ml-2">
                  {translator.translate("language")}
                </span>
              </button>
            </div>
          </header>
          <Outlet
            context={{
              translator,
              setOrderItem,
              order,
              submitOrder,
              setCzech,
              setUkrainian,
            }}
          />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
