import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";

import { useEffect, useState } from "react";

import translation from "./locale/translation";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return { title: "Šatník Praha - App for Ukraine" };
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

  const switchLanguage = () => {
    const newLocale = translator.language == "ua" ? "cs" : "ua";
    
    setTranslator({
      translate: translation(newLocale),
      language: newLocale,
      switch: switchLanguage,
    });
  }

  const [translator, setTranslator] = useState({
    translate: translation(locale),
    language: locale,
    switch: switchLanguage,
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
        <Outlet
          context={{
            translator,
            setOrderItem,
            order,
            submitOrder,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
