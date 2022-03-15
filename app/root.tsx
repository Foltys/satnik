import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";

import { MouseEventHandler, useEffect, useState } from "react";

import translation, { Translator } from "./locale/translation";
import Header from "./components/Header";

const styles = require("./styles/app.css");

export interface OutletContext {
  translator: any;
  setOrderItem: any;
  order: any;
  submitOrder: any;
  addPersonToOrder: any;
}

export type Order = {
  fullname: string;
  phone: string;
  email: string;
  delivery_type: "delivery" | "pickup";
  delivery_fullname: string;
  delivery_street: string;
  delivery_city: string;
  delivery_zip: string;
  delivery_phone: string;
  delivery_time: {};
  persons: Person[];
  state: "open";
  lang: "ua" | "cs";
  created_at: {};
  updated_at: {};
};

export type Person = {
  sex: "man" | "woman";
  adult: boolean;
  fullname: string;
  age: number;
  clothing_size: string;
  shoe_size: string;
  requirements: Requirement[];
};

type Requirement = {
  description: string;
};

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
    name: "Šatník - Pomoc Ukrajině",
    "twitter:image": "https://app.satnikpraha.cz/og_share.png",
    "twitter:card": "summary_large_image",
    "twitter:title": description,
    "twitter:description": "Pomáháme Ukrajině s Šatníkem Praha",
    "og:url": "https://app.satnikpraha.cz/",
    "og:type": "website",
    "og:title": "Šatník - Pomoc Ukrajině",
    "og:description": "Šatník Praha - Pomoc Ukrajině",
    "og:image": "https://app.satnikpraha.cz/og_share.png",
  };
}

function getFromSupported(language: string) {
  return ["ua", "cs"].includes(language) ? language : "cs";
}

export const loader = async ({ request }: { request: Request }) => {
  let url = new URL(request.url);
  if (url.searchParams.has("lng")) {
    return getFromSupported(url.searchParams.get("lng") as string);
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
    return getFromSupported(request.headers.get("accept-language") as string);
  }
  return "cs";
};

export default function App() {
  const locale = useLoaderData();
  const [order, setOrder] = useState({
    delivery: "delivery",
    persons: [],
  } as any);
  // const [genderSelected, setCurrentGender] = useState();

  const [translator, setTranslator] = useState<Translator>({
    translate: translation(locale),
    language: locale,
  });

  const setOrderItem = (key: string, value: any) => {
    const newOrder = order as any;
    newOrder[key] = value;
    setOrder(newOrder);
  };
  const submitOrder = () => {
    console.log({ order });
  };

  const switchLanguage =
    (currentLanguage: string): MouseEventHandler =>
    (e) => {
      const newLanguage = currentLanguage == "cs" ? "ua" : "cs";
      setTranslator({
        translate: translation(newLanguage),
        language: newLanguage,
      });
    };

  type PersonDetails = {};
  const addPersonToOrder = (details: PersonDetails, id?: number) => {
    if (id) {
      order.persons[id] = details;
    } else {
      order.persons.push(details);
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B82SVEWMJ2"
        ></script>
        <script async src="/ga.js"></script>
      </head>
      <body className="bg-[#F8EBDB]">
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <Header
            translator={translator}
            switchLanguage={switchLanguage(translator.language)}
          />
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative">
                <Outlet
                  context={{
                    translator,
                    setOrderItem,
                    order,
                    submitOrder,
                    // setCurrentGender,
                    // genderSelected,
                    addPersonToOrder,
                  }}
                />
              </div>
              <div className="lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  className="rounded-lg w-full object-cover object-center"
                  alt="illustration"
                />
              </div>
            </div>
          </section>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}