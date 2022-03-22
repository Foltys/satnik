// app/sessions.js
import {
    createCookie,
    createCookieSessionStorage,
  } from "remix";
  
  // In this example the Cookie is created separately.
  const sessionCookie = createCookie("__session", {
    secrets: ["r3m1xr0ck5"],
    sameSite: true,
  });
  
  const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
      // The root directory where you want to store the files.
      // Make sure it's writable!
      cookie: sessionCookie,
    });
  
  export { getSession, commitSession, destroySession };