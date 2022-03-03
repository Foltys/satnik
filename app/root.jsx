import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import { useState } from "react";

import translation from "./locale/translation";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  const [order, setOrder] = useState({});
  const setOrderItem = (key, value) => {
    const newOrder = order;
    newOrder[key] = value;
    setOrder(newOrder);
    console.log(order);
  };
  const translate = translation("ua");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#F8EBDB]">
        <Outlet context={{ translate, setOrderItem, order}} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
