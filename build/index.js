var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name3 in all)
    __defProp(target, name3, { get: all[name3], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");
var import_dotenv = __toESM(require("dotenv"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/vorcigernix/dev/satnik/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_react = require("react");

// app/locale/translation.ts
init_react();

// app/locale/translations/cs.json
var language = "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var optional = "(voliteln\xE9)";
var delivery_address = "Adresa pro doru\u010Den\xED";
var shoes = "Boty";
var boy = "Chlapec";
var what_do_you_need = "Co p\u0159esn\u011B pot\u0159ebujete?";
var spread_info = "D\xE1t o \u0160atn\xEDku v\u011Bd\u011Bt ostatn\xEDm";
var kid = "D\xEDt\u011B";
var girl = "D\xEDvka";
var volunteer_info = "Dobrovoln\xEDc\xED d\u011Blaj\xED, co m\u016F\u017Eou, aby k v\xE1m objednan\xE9 oble\u010Den\xED co nejd\u0159\xEDve dorazilo.";
var finish = "Dokon\u010Dit";
var deliver_to_adress = "Doru\u010Den\xED na adresu";
var email = "E-mail";
var name = "Jm\xE9no";
var name_and_surname = "Jm\xE9no a p\u0159\xEDjmen\xED";
var who_is_wearing = "Kdo bude oble\u010Den\xED nosit? V dal\u0161\xEDch kroc\xEDch m\u016F\u017Eete objednat oble\u010Den\xED i pro dal\u0161\xED osoby.";
var contact = "Kontaktn\xED informace";
var city = "M\u011Bsto";
var city_to_deliver = "M\xEDsto doru\u010Den\xED";
var man = "Mu\u017E";
var cloth_example = "Nap\u0159\xEDklad 1 triko, 1 jarn\xED boty, 2 ks svetr, \u0161ampon, hygienick\xE9 pot\u0159eby";
var to_order = "Objednat";
var orderer = "Objedn\xE1vaj\xEDc\xED";
var order = "Objedn\xE1vka";
var remove = "Odebrat";
var pickup = "Osobn\xED vyzvednut\xED";
var pickup_holesovice = "Osobn\xED vyzvednut\xED v Hole\u0161ovic\xEDch";
var gender = "Pohlav\xED";
var continue2 = "Pokra\u010Dovat";
var continue_to_cloth_selection = "Pokra\u010Dovat na v\xFDb\u011Br oble\u010Den\xED";
var cloth_enquiry = "Popt\xE1vka oble\u010Den\xED a dal\u0161\xEDch nezbytnost\xED";
var add_person = "P\u0159idat dal\u0161\xED osobu";
var for_who_and_what = "Pro koho a co objedn\xE1v\xE1te";
var zip = "PS\u010C";
var order_check = "Shrnut\xED objedn\xE1vky";
var phone = "Telefon";
var phone_to_find_you = "Telefonn\xED \u010D\xEDslo, na kter\xE9m v\xE1s zastihneme";
var delivery_date = "Term\xEDn doru\u010Den\xED";
var show_on_map = "Uk\xE1zat na map\u011B";
var street_example = "Ulice 123";
var street_and_number = "Ulice a \u010D\xEDslo popisn\xE9";
var edit = "Upravit";
var edit_contact = "Upravit kontaktn\xED \xFAdaje";
var order_success = "\xDAsp\u011B\u0161n\u011B jste si objednali oble\u010Den\xED";
var picker_name = "Uve\u010Fte jm\xE9no osoby, kter\xE1 bude z\xE1silku p\u0159eb\xEDrat";
var phone_if_other = "Uve\u010Fte, pokud se li\u0161\xED od telefonn\xEDho \u010D\xEDsla v\xFD\u0161e";
var age = "V\u011Bk";
var cloth_size = "Velikost oble\u010Den\xED";
var shoes_size = "Velikost bot";
var optional_big = "Voliteln\xE9";
var select_clothes = "V\xFDb\u011Br oble\u010Den\xED";
var pick = "Vybrat";
var wait_for_email = "Vy\u010Dkejte na e-mail s dal\u0161\xEDmi informacemi.";
var woman = "\u017Dena";
var think_of_you = "Mysl\xEDme na v\xE1s";
var regards = "S pozdravem";
var cs_default = {
  language,
  optional,
  delivery_address,
  shoes,
  boy,
  what_do_you_need,
  spread_info,
  kid,
  girl,
  volunteer_info,
  finish,
  deliver_to_adress,
  email,
  name,
  name_and_surname,
  who_is_wearing,
  contact,
  city,
  city_to_deliver,
  man,
  cloth_example,
  to_order,
  orderer,
  order,
  remove,
  pickup,
  pickup_holesovice,
  gender,
  continue: continue2,
  continue_to_cloth_selection,
  cloth_enquiry,
  add_person,
  for_who_and_what,
  zip,
  order_check,
  phone,
  phone_to_find_you,
  delivery_date,
  show_on_map,
  street_example,
  street_and_number,
  edit,
  edit_contact,
  order_success,
  picker_name,
  phone_if_other,
  age,
  cloth_size,
  shoes_size,
  optional_big,
  select_clothes,
  pick,
  wait_for_email,
  woman,
  think_of_you,
  regards
};

// app/locale/translations/ua.json
var language2 = "\u010Ce\u0161tina";
var optional2 = "(\u0417\u0430 \u0431\u0430\u0436\u0430\u043D\u043D\u044F\u043C)";
var delivery_address2 = "\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0440\u0443\u0447\u0435\u043D\u043D\u044F ";
var shoes2 = "\u0412\u0437\u0443\u0442\u0442\u044F";
var boy2 = "\u0425\u043B\u043E\u043F\u0435\u0446\u044C ";
var what_do_you_need2 = "\u0429\u043E \u0441\u0430\u043C\u0435 \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E ?";
var spread_info2 = "\u041F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043E\u043C \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 ";
var kid2 = "\u0414\u0438\u0442\u0438\u043D\u0430";
var girl2 = "\u0414\u0456\u0432\u0447\u0438\u043D\u0430";
var volunteer_info2 = "\xAB\u0412\u043E\u043B\u043E\u043D\u0442\u0435\u0440\u0438 \u0440\u043E\u0431\u043B\u044F\u0442\u044C \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435, \u0449\u043E\u0431 \u0434\u043E\u0440\u0443\u0447\u0438\u0442\u0438 \u0432\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u044F\u043A\u043E\u043C\u043E\u0433\u0430 \u0448\u0432\u0438\u0434\u0448\u0435\xBB.";
var finish2 = "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438";
var deliver_to_adress2 = "\u0414\u043E\u0440\u0443\u0447\u0435\u043D\u043D\u044F \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E  ";
var email2 = "E-mail";
var name2 = "\u0406\u043C'\u044F";
var name_and_surname2 = "\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435";
var who_is_wearing2 = "\xAB\u0414\u043B\u044F \u043A\u043E\u0433\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043E\u0434\u044F\u0433? \u041D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043A\u0440\u043E\u043A\u0430\u0445 \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043C\u043E\u0432\u0438\u0442\u0438 \u043E\u0434\u044F\u0433 \u0434\u043B\u044F \u0456\u043D\u0448\u0438\u0445 \u043E\u0441\u0456\u0431\xBB.";
var contact2 = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F";
var city2 = "\u041C\u0456\u0441\u0442\u043E";
var city_to_deliver2 = "\u041C\u0456\u0441\u0442\u043E \u0434\u043E\u0440\u0443\u0447\u0435\u043D\u043D\u044F ";
var man2 = "\u0427\u043E\u043B\u043E\u0432\u0456\u043A ";
var cloth_example2 = "\u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: 1 \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430, 1 \u0432\u0435\u0441\u043D\u044F\u043D\u0435 \u0432\u0437\u0443\u0442\u0442\u044F, 2 \u0441\u0432\u0435\u0442\u0440\u0438, \u0448\u0430\u043C\u043F\u0443\u043D\u044C, \u0437\u0430\u0441\u043E\u0431\u0438 \u0433\u0456\u0433\u0456\u0435\u043D\u0438 ";
var to_order2 = "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438";
var orderer2 = "\u0417\u0430\u043C\u043E\u0432\u043D\u0438\u043A ";
var order2 = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F";
var remove2 = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438";
var pickup2 = "\u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0439 \u0432\u0456\u0434\u0431\u0456\u0440 ";
var pickup_holesovice2 = "\u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0439 \u0432\u0456\u0434\u0431\u0456\u0440 \u0432 \u0413\u043E\u043B\u0435\u0448\u043E\u0432\u0456\u0446\u0430\u0445";
var gender2 = "\u0421\u0442\u0430\u0442\u044C";
var continue3 = "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 ";
var continue_to_cloth_selection2 = "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0437 \u0432\u0438\u0431\u043E\u0440\u043E\u043C \u043E\u0434\u044F\u0433\u0443 ";
var cloth_enquiry2 = "\u0417\u0430\u043F\u0438\u0442 \u043D\u0430 \u043E\u0434\u044F\u0433 \u0442\u0430 \u0437\u0430\u0441\u043E\u0431\u0438 \u043F\u0435\u0440\u0448\u043E\u0457 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E\u0441\u0442\u0456";
var add_person2 = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u0438 \u043E\u0441\u043E\u0431\u0443 ";
var for_who_and_what2 = "\u0414\u043B\u044F \u043A\u043E\u0433\u043E \u0456 \u0449\u043E \u0441\u0430\u043C\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454\u0442\u0435 \u0437\u0430\u043C\u043E\u0432\u0438\u0442\u0438";
var zip2 = "\u0406\u043D\u0434\u0435\u043A\u0441 ";
var order_check2 = "\u041F\u0456\u0434\u0441\u0443\u043C\u043E\u043A \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F";
var phone2 = "\u0422\u0435\u043B\u0435\u0444\u043E\u043D";
var phone_to_find_you2 = "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0437\u0430 \u044F\u043A\u0438\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437 \u0432\u0430\u043C\u0438 \u0437\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044F";
var delivery_date2 = "\u0414\u0430\u0442\u0430 \u0434\u043E\u0440\u0443\u0447\u0435\u043D\u043D\u044F ";
var show_on_map2 = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0456";
var street_example2 = "\u0412\u0443\u043B\u0438\u0446\u044F 123";
var street_and_number2 = "\u0412\u0443\u043B\u0438\u0446\u044F \u0442\u0430 \u043D\u043E\u043C\u0435\u0440 \u0431\u0443\u0434\u0438\u043D\u043A\u0443 ";
var edit2 = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438";
var edit_contact2 = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E";
var order_success2 = "\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0432\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ";
var picker_name2 = "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F \u043E\u0441\u043E\u0431\u0438 \u0443\u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u043E\u0457 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0432\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F";
var phone_if_other2 = "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u043A\u0430\u0436\u0456\u0442\u044C \u044F\u043A\u0449\u043E \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u0432\u0456\u0434 \u0432\u043A\u0430\u0437\u0430\u043D\u043E\u0433\u043E \u0432\u0438\u0449\u0435";
var age2 = "\u0412\u0456\u043A";
var size = "\u0420\u043E\u0437\u043C\u0456\u0440";
var optional_big2 = "\u0417\u0430 \u0431\u0430\u0436\u0430\u043D\u043D\u044F\u043C";
var select_clothes2 = "\u0412\u0438\u0431\u0456\u0440 \u043E\u0434\u044F\u0433\u0443";
var pick2 = "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 ";
var wait_for_email2 = "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043B\u0438\u0441\u0442\u0430 \u0437 \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u043E\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0454\u044E ";
var woman2 = "\u0416\u0456\u043D\u043A\u0430";
var think_of_you2 = "\u041C\u0438 \u043F\u0456\u043A\u043B\u0443\u0454\u043C\u043E\u0441\u044C \u043F\u0440\u043E \u0432\u0430\u0441";
var regards2 = "\u0417 \u043F\u043E\u0432\u0430\u0433\u043E\u044E";
var ua_default = {
  language: language2,
  optional: optional2,
  delivery_address: delivery_address2,
  shoes: shoes2,
  boy: boy2,
  what_do_you_need: what_do_you_need2,
  spread_info: spread_info2,
  kid: kid2,
  girl: girl2,
  volunteer_info: volunteer_info2,
  finish: finish2,
  deliver_to_adress: deliver_to_adress2,
  email: email2,
  name: name2,
  name_and_surname: name_and_surname2,
  who_is_wearing: who_is_wearing2,
  contact: contact2,
  city: city2,
  city_to_deliver: city_to_deliver2,
  man: man2,
  cloth_example: cloth_example2,
  to_order: to_order2,
  orderer: orderer2,
  order: order2,
  remove: remove2,
  pickup: pickup2,
  pickup_holesovice: pickup_holesovice2,
  gender: gender2,
  continue: continue3,
  continue_to_cloth_selection: continue_to_cloth_selection2,
  cloth_enquiry: cloth_enquiry2,
  add_person: add_person2,
  for_who_and_what: for_who_and_what2,
  zip: zip2,
  order_check: order_check2,
  phone: phone2,
  phone_to_find_you: phone_to_find_you2,
  delivery_date: delivery_date2,
  show_on_map: show_on_map2,
  street_example: street_example2,
  street_and_number: street_and_number2,
  edit: edit2,
  edit_contact: edit_contact2,
  order_success: order_success2,
  picker_name: picker_name2,
  phone_if_other: phone_if_other2,
  age: age2,
  size,
  optional_big: optional_big2,
  select_clothes: select_clothes2,
  pick: pick2,
  wait_for_email: wait_for_email2,
  woman: woman2,
  think_of_you: think_of_you2,
  regards: regards2
};

// app/locale/translation.ts
function translation(locale) {
  const translationToUse = locale == "ua" ? ua_default : cs_default;
  return function translate(string) {
    return translationToUse[string] || "missing translation: " + string;
  };
}

// app/components/Header.tsx
init_react();
var import_remix2 = __toESM(require_remix());
function Header({ translator, switchLanguage }) {
  return /* @__PURE__ */ React.createElement("header", {
    className: "text-gray-600 body-font sticky top-0 bg-[#F8EBDB] z-10 pb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex flex-wrap flex-row items-center"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "flex title-font font-medium items-center text-gray-900 ml-5 md:ml-0",
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "red.svg",
    className: "w-16 h-16 md:w-32 md:h-32",
    alt: "\u0160atn\xEDk Praha"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-3 text-xl hidden"
  }, "\u0160atn\xEDk")), /* @__PURE__ */ React.createElement("nav", {
    className: "ml-auto flex flex-wrap items-center text-base justify-center"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "mr-5 hover:text-gray-900 hidden",
    href: "/"
  }, "First Link")), /* @__PURE__ */ React.createElement("button", {
    onClick: switchLanguage,
    className: "w-40  justify-center inline-flex items-center text-[#0A9DBF] font-semibold  border-0 py-2 px-5 focus:outline-[#eb2f06] outline outline-offset-2 outline-[#0A9DBF] rounded-full text-base mr-5 hover:outline-[#eb2f06]"
  }, translator.language == "cs" ? /* @__PURE__ */ React.createElement("svg", {
    width: "25",
    height: "19",
    viewBox: "0 0 25 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 0H25V19H0V0Z",
    fill: "#FFD500"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 0H25V9.5H0V0Z",
    fill: "#005BBB"
  })) : /* @__PURE__ */ React.createElement("svg", {
    width: "25",
    height: "19",
    viewBox: "0 0 25 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0H25V9.5H0V0Z",
    fill: "white"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M0 9.5H25V19H0V9.5Z",
    fill: "#D7141A"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.0625 9.5L0 0V19L14.0625 9.5Z",
    fill: "#11457E"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "hidden md:flex ml-2"
  }, translator.translate("language")))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SOW2OA5Q.css";

// route:/home/vorcigernix/dev/satnik/app/root.tsx
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "icon", href: "/icons/favicon-32x32.png" }
  ];
}
function meta() {
  const description = `\u0160atn\xEDk Praha - Pomoc Ukrajin\u011B`;
  return {
    description,
    keywords: "ukraine,help,ukrajina,v\xE1lka",
    name: "\u0160atn\xEDk - Pomoc Ukrajin\u011B",
    "twitter:image": "https://app.satnikpraha.cz/og_share.png",
    "twitter:card": "summary_large_image",
    "twitter:title": description,
    "twitter:description": "Pom\xE1h\xE1me Ukrajin\u011B s \u0160atn\xEDkem Praha",
    "og:url": "https://app.satnikpraha.cz/",
    "og:type": "website",
    "og:title": "\u0160atn\xEDk - Pomoc Ukrajin\u011B",
    "og:description": "\u0160atn\xEDk Praha - Pomoc Ukrajin\u011B",
    "og:image": "https://app.satnikpraha.cz/og_share.png"
  };
}
function getFromSupported(language3) {
  return ["ua", "cs"].includes(language3) ? language3 : "cs";
}
var loader = async ({ request }) => {
  var _a;
  let url = new URL(request.url);
  if (url.searchParams.has("lng")) {
    return getFromSupported(url.searchParams.get("lng"));
  }
  let cookie = Object.fromEntries(((_a = request.headers.get("Cookie")) == null ? void 0 : _a.split(";").map((cookie2) => cookie2.split("="))) ?? []);
  if (cookie.i18next) {
    return getFromSupported(cookie.i18next);
  }
  if (request.headers.has("accept-language")) {
    return getFromSupported(request.headers.get("accept-language"));
  }
  return "cs";
};
function App() {
  const locale = (0, import_remix3.useLoaderData)();
  const [order3, setOrder] = (0, import_react.useState)({
    delivery_type: "delivery",
    persons: []
  });
  const [translator, setTranslator] = (0, import_react.useState)({
    translate: translation(locale),
    language: locale
  });
  const setOrderItem = (key, value) => {
    const newOrder = Object.assign({}, order3);
    newOrder[key] = value;
    setOrder(newOrder);
  };
  const switchLanguage = (currentLanguage) => (e) => {
    const newLanguage = currentLanguage == "cs" ? "ua" : "cs";
    setTranslator({
      translate: translation(newLanguage),
      language: newLanguage
    });
  };
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null), /* @__PURE__ */ React.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-B82SVEWMJ2"
  }), /* @__PURE__ */ React.createElement("script", {
    async: true,
    src: "/ga.js"
  })), /* @__PURE__ */ React.createElement("body", {
    className: "bg-[#F8EBDB]"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Header, {
    translator,
    switchLanguage: switchLanguage(translator.language)
  }), /* @__PURE__ */ React.createElement("section", {
    className: "text-gray-600 body-font relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex justify-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-sm md:w-md lg:w-lg"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, {
    context: {
      translator,
      setOrderItem,
      order: order3,
      setOrder
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))))), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/home/vorcigernix/dev/satnik/app/routes/confirmation.tsx
var confirmation_exports = {};
__export(confirmation_exports, {
  default: () => Confirmation
});
init_react();
var import_remix4 = __toESM(require_remix());
function Confirmation() {
  const { translator, setOrderItem } = (0, import_remix4.useOutletContext)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "text-gray-600 body-font relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "flex rounded-2xl w-full h-72 p-2 ",
    src: "https://images.unsplash.com/photo-1485286162995-aa63d31c06cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "delivery"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-5xl  text-5xl font-bold title-font my-12 text-[#eb2f06] ml-1"
  }, "\xDAsp\u011B\u0161n\u011B jste si objednali oble\u010Den\xED"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto text-lg font-semibold text-[#eb2f06] ml-1 "
  }, "Dobrovoln\xEDc\xED d\u011Blaj\xED, co m\u016F\u017Eou, aby k v\xE1m objednan\xE9 oble\u010Den\xED co nejd\u0159\xEDve dorazilo."), /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto text-xl my-12 mb-6 bg-[#eb2f06] text-[#F8EBDB] py-6 px-4 ml-1"
  }, "Vy\u010Dkejte na e-mail s\xA0dal\u0161\xEDmi informacemi."), /* @__PURE__ */ React.createElement("span", {
    className: "inline-flex mt-8 justify-center space-x-8 md:space-x-12"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-[#eb2f06]",
    href: "http://www.facebook.com/share.php?u=https://app.satnikpraha.cz",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    className: "w-5 h-5 md:w-10 md:h-10",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
  }))), /* @__PURE__ */ React.createElement("a", {
    className: "ml-3 text-[#eb2f06]",
    href: "https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&quot%3B%20class=&quot%3Btwitter-share-button=&quot%3B%20data-show-count=&quot%3Bfalse=&quot=&url=https://app.satnikpraha.cz",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    className: "w-5 h-5 md:w-10 md:h-10",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
  }))), /* @__PURE__ */ React.createElement("a", {
    className: "ml-3 text-[#eb2f06]",
    href: "https://t.me/share/url?url=https://app.satnikpraha.cz&text='Satnik Praha - App for Ukraine'",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0",
    className: "w-5 h-5 md:w-10 md:h-10",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m 20.976681,3.6989569 c -0.272373,1.127e-4 -0.560741,0.096771 -0.560741,0.096771 0,-1e-7 -18.1994369,6.5412791 -19.2388313,7.2657631 -0.22424878,0.155533 -0.29954928,0.246259 -0.33670928,0.352617 -0.1805202,0.515773 0.38045508,0.743677 0.38045508,0.743677 l 4.6913953,1.527123 a 0.51417094,0.51417094 0 0 0 0.03844,-0.0027 l 2.200542,6.089932 c 0,0 0.19588,0.399897 0.436131,0.539531 0.15254,0.125393 0.467062,0.06333 1.110876,-0.580625 1.0105232,-1.010751 1.9809812,-1.847696 2.4656672,-2.254892 1.618765,1.117417 3.345295,2.340922 4.097515,2.987964 a 1.302246,1.302246 0 0 0 0.949149,0.367199 c 0.71103,-0.02675 0.909381,-0.807307 0.909381,-0.807307 0,0 3.317229,-13.3476284 3.428072,-15.1360141 0.01105,-0.1750744 0.02509,-0.2865139 0.02651,-0.4069677 A 1.4987843,1.4987843 0 0 0 21.53477,4.0674814 0.44305197,0.44305197 0 0 0 21.232527,3.7374001 c -0.07576,-0.028792 -0.165055,-0.038481 -0.255846,-0.038443 z"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1543499459-d1460946bdc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/newOrder.tsx
var newOrder_exports = {};
__export(newOrder_exports, {
  default: () => NewOrder
});
init_react();
var import_react3 = require("react");
var import_remix5 = __toESM(require_remix());

// app/components/PersonOnOrder.tsx
init_react();
function PersonOnOrder({ translator, details, editItem }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: !details.adult ? "kid.svg" : `${details.sex}.svg`,
    alt: "",
    className: "my-4 mx-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: " flex flex-col justify-center mx-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, details.fullname), details.requirements && details.requirements.length > 0 ? details.requirements.map((requirement, index) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: index,
      className: "py-2"
    }, requirement.description);
  }) : null, /* @__PURE__ */ React.createElement("button", {
    onClick: editItem,
    className: "font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
  }, translator.translate("edit"))));
}

// app/components/PersonToOrder.tsx
init_react();
var import_react2 = __toESM(require("react"));
function PersonToOrder({ translator, selectedGender, handleInputChange, currentPerson, discardPerson }) {
  var _a;
  const isKid = selectedGender == "kid";
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: `${selectedGender}.svg`,
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-2xl font-bold group-hover:text-[#0A9DBF]"
  }, translator.translate(selectedGender)), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: discardPerson,
    className: "font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full"
  }, translator.translate("remove")))), isKid && /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex mx-3 my-6 font-bold space-x-2 text-[#0A9DBF] items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "boy",
    name: "sex",
    value: "man",
    defaultChecked: currentPerson.sex == "man",
    onChange: handleInputChange
  }), /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "boy"
  }, translator.translate("boy")), /* @__PURE__ */ import_react2.default.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "girl",
    name: "sex",
    value: "woman",
    defaultChecked: currentPerson.sex == "woman",
    onChange: handleInputChange
  }), /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "girl"
  }, translator.translate("girl")))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-2 w-1/5"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("age")), /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "text",
    id: "age",
    name: "age",
    placeholder: "22",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: currentPerson.age,
    onChange: handleInputChange
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-2 w-4/5"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("name")), /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "text",
    id: "name",
    name: "fullname",
    placeholder: "Aa",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: currentPerson.fullname,
    onChange: handleInputChange
  })))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ import_react2.default.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font my-4 text-gray-900 ml-1"
  }, translator.translate("select_clothes")))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-2 w-full"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, "Jak\xE9 oble\u010Den\xED pot\u0159ebujete?"), /* @__PURE__ */ import_react2.default.createElement("textarea", {
    id: "requirements",
    name: "requirements",
    placeholder: "5 ks trika, 2 ks kalhoty",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: (_a = currentPerson.requirements[0]) == null ? void 0 : _a.description,
    onChange: handleInputChange
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("cloth_size")), /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "text",
    id: "clothing_size",
    name: "clothing_size",
    placeholder: "S",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: currentPerson.clothing_size,
    onChange: handleInputChange
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("shoes_size")), /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "text",
    id: "shoe_size",
    name: "shoe_size",
    placeholder: "44",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: currentPerson.shoe_size,
    onChange: handleInputChange
  }))))));
}

// app/components/GenderSelector.tsx
init_react();
function GenderSelector({ translator, selectGender }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: selectGender("woman"),
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "woman.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("woman")), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick"))), /* @__PURE__ */ React.createElement("button", {
    onClick: selectGender("man"),
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "man.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("man")), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick"))), /* @__PURE__ */ React.createElement("button", {
    onClick: selectGender("kid"),
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "kid.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("kid")), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick"))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/newOrder.tsx
function NewOrder() {
  const { translator, order: order3, setOrder } = (0, import_remix5.useOutletContext)();
  const [selectedGender, selectGender] = (0, import_react3.useState)();
  const [newPersonInfo, setNewPersonInfo] = (0, import_react3.useState)({ requirements: [] });
  const [editingPerson, setEditingPerson] = (0, import_react3.useState)();
  const handleInputChange = (e) => {
    if (e.target.name == "requirements") {
      if (!newPersonInfo.requirements)
        newPersonInfo.requirements = [];
      newPersonInfo.requirements[0] = { description: e.target.value };
    } else {
      newPersonInfo[e.target.name] = e.target.value;
    }
    setNewPersonInfo(newPersonInfo);
  };
  const savePerson = (details, id) => {
    if (id) {
      order3.persons[id] = details;
    } else {
      order3.persons.push(details);
    }
    setOrder(order3);
  };
  const pickGender = (gender3) => (e) => {
    e.preventDefault();
    selectGender(gender3);
    if (gender3 == "kid") {
      newPersonInfo.adult = false;
      newPersonInfo.sex = "man";
    } else {
      newPersonInfo.adult = true;
      newPersonInfo.sex = gender3;
    }
    setNewPersonInfo(newPersonInfo);
  };
  const navigate = (0, import_remix5.useNavigate)();
  const nextForm = () => {
    navigate("/summary", { replace: false });
  };
  const addNextPerson = (event) => {
    event.preventDefault();
    console.log(newPersonInfo, editingPerson);
    savePerson(newPersonInfo, editingPerson);
    cleanPersonForm();
  };
  const cleanPersonForm = () => {
    selectGender(void 0);
    setEditingPerson(void 0);
    setNewPersonInfo({ requirements: [] });
  };
  (0, import_react3.useEffect)(() => {
    if (editingPerson !== void 0) {
      selectGender(!order3.persons[editingPerson].adult ? "kid" : order3.persons[editingPerson].sex);
      setNewPersonInfo(order3.persons[editingPerson]);
      delete order3.persons[editingPerson];
      setOrder(order3);
    }
    console.log(editingPerson);
  }, [editingPerson]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center md:mb-12"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => navigate("/"),
    className: "items-center ml-1 mt-1 text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06] fill-[#0A9DBF] hover:fill-[#F8EBDB]"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "16",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m.293 8.293 4-4a1 1 0 1 1 1.414 1.414L3.415 8H15a1 1 0 1 1 0 2H3.415l2.294 2.294a1 1 0 1 1-1.414 1.414l-4-4a.997.997 0 0 1-.002-1.414Z"
  }))), /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font text-gray-900 ml-5"
  }, translator.translate("order")))), order3.persons && order3.persons.length ? order3.persons.map((item, key) => {
    return /* @__PURE__ */ React.createElement(PersonOnOrder, {
      key,
      details: item,
      editItem: () => setEditingPerson(key),
      translator
    });
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "text-[#0A9DBF] font-medium my-5"
  }, translator.translate("who_is_wearing")), !selectedGender ? /* @__PURE__ */ React.createElement(GenderSelector, {
    translator,
    selectGender: pickGender
  }) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PersonToOrder, {
    currentPerson: newPersonInfo,
    translator,
    selectedGender,
    handleInputChange,
    discardPerson: cleanPersonForm
  }), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 my-10 w-full flex flex-wrap gap-8 justify-center"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: addNextPerson,
    className: "items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
  }, translator.translate("add_person")), /* @__PURE__ */ React.createElement("button", {
    onClick: nextForm,
    className: "text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
  }, translator.translate("continue")))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/summary.tsx
var summary_exports = {};
__export(summary_exports, {
  action: () => action,
  default: () => Summary
});
init_react();
var import_react4 = require("react");
var import_remix6 = __toESM(require_remix());

// prisma/api/Order.ts
init_react();

// prisma/getDB.ts
init_react();
var import_client = require("@prisma/client");
var db;
async function getDB() {
  if (db) {
    return db;
  }
  db = new import_client.PrismaClient();
  await db.$connect();
  return db;
}

// prisma/helpers.ts
init_react();
var prepareOrderForPrismaInsert = function(order3) {
  order3.persons.forEach((person) => {
    person.requirements = { create: person.requirements };
  });
  order3.persons = { create: order3.persons };
  return order3;
};

// prisma/api/Order.ts
var import_ajv = __toESM(require("ajv"));
var ajv = new import_ajv.default();
var requirementSchema = {
  type: "object",
  properties: {
    description: { type: "string" }
  },
  required: ["description"],
  additionalProperties: false
};
var personSchema = {
  type: "object",
  properties: {
    sex: { enum: ["man", "woman"] },
    adult: { type: "boolean" },
    fullname: { type: "string" },
    age: { type: "string" },
    clothing_size: { type: "string" },
    shoe_size: { type: "string" },
    requirements: { type: "array", items: requirementSchema }
  },
  required: ["sex", "adult", "fullname", "age", "clothing_size", "shoe_size", "requirements"],
  additionalProperties: false
};
var orderSchema = {
  type: "object",
  properties: {
    fullname: { type: "string" },
    phone: { type: "string" },
    email: { type: "string" },
    delivery_type: { enum: ["delivery", "pickup"] },
    delivery_fullname: { type: "string" },
    delivery_street: { type: "string" },
    delivery_city: { type: "string" },
    delivery_zip: { type: "string" },
    delivery_phone: { type: "string" },
    delivery_time: {},
    persons: { type: "array", items: personSchema },
    state: { enum: ["open"] },
    lang: { enum: ["ua", "cs"] },
    created_at: {},
    updated_at: {}
  },
  required: [
    "fullname",
    "phone",
    "email",
    "delivery_type",
    "delivery_fullname",
    "delivery_street",
    "delivery_city",
    "delivery_zip",
    "delivery_phone",
    "persons",
    "state"
  ],
  additionalProperties: false
};
var validateOrder = ajv.compile(orderSchema);
var saveNewOrder = async function(order3) {
  console.log(order3);
  order3.state = "open";
  if (!validateOrder(order3)) {
    console.log(validateOrder.errors);
    throw new Error(JSON.stringify(validateOrder.errors));
  }
  order3 = prepareOrderForPrismaInsert(order3);
  return (await getOrderModel()).create({ data: order3 });
};
var getOrderByID = async function(id) {
  return await findUniqueOrder({ id });
};
var findUniqueOrder = async function(query) {
  return (await getOrderModel()).findUnique({
    where: query,
    include: getIncludes()
  });
};
function getIncludes() {
  return {
    persons: {
      include: {
        requirements: true
      }
    }
  };
}
var getOrderModel = async function() {
  return (await getDB()).order;
};

// app/mailer/html/order_confirm/send.ts
init_react();
var import_path = __toESM(require("path"));

// app/mailer/helpers/sendHTMLEmail.ts
init_react();
var import_nodemailer_express_handlebars = __toESM(require("nodemailer-express-handlebars"));
var import_fs = __toESM(require("fs"));
var import_nodemailer = __toESM(require("nodemailer"));
var fs = import_fs.default.promises;
async function getImagesAttachments(path2) {
  const files = await fs.readdir(path2);
  return files.filter((f) => ![".", ".."].includes(f)).map((f) => {
    return {
      filename: f,
      cid: f,
      path: [path2, f].join("/")
    };
  });
}
var transporter = import_nodemailer.default.createTransport({
  service: "gmail",
  auth: {
    user: "prahasatnik",
    pass: "KwAEer8triU4qgU"
  }
});
async function sendHTMLEmail_default(data, subject, lang, templatePath, attachmentsPath) {
  const handlebarOptions = {
    viewEngine: {
      partialsDir: [templatePath, lang].join("/"),
      defaultLayout: false,
      helpers: {
        inc: function(value, options) {
          return parseInt(value) + 1;
        }
      }
    },
    viewPath: [templatePath, lang].join("/")
  };
  console.log(handlebarOptions);
  transporter.use("compile", (0, import_nodemailer_express_handlebars.default)(handlebarOptions));
  const mailOptions = {
    from: "prahasatnik@gmail.com",
    to: data.email,
    subject,
    template: "index",
    attachments: await getImagesAttachments(attachmentsPath),
    context: { order: data }
  };
  const info = await transporter.sendMail(mailOptions);
  return info;
}

// app/mailer/helpers/normalizeOrder.ts
init_react();
function normalizeOrder_default(order3) {
  order3.persons.map((p) => {
    p.isMan = p.sex === "man";
    p.isWoman = p.sex === "woman";
    p.requirements.map((r) => {
      r.description.replace("\n", ", ");
      r.description.replace(/ +/g, " ");
    });
  });
  order3.isDeliveryDelivery = order3.delivery_type === "delivery";
  order3.isDeliveryPickup = order3.delivery_type === "pickup";
}

// app/mailer/html/order_confirm/send.ts
var translations = {
  subject: {
    cs: "Potvrzen\xED objednavky ze satniku",
    ua: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437 \u0448\u0430\u0444\u0438"
  }
};
var send = async function(order3) {
  order3 = JSON.parse(JSON.stringify(order3));
  normalizeOrder_default(order3);
  const lang = order3.lang === "cs" ? "cs" : "ua";
  return sendHTMLEmail_default(order3, translations.subject[lang], lang, import_path.default.join("./app/mailer/html/order_confirm"), import_path.default.join("./app/mailer/html/images"));
};

// route:/home/vorcigernix/dev/satnik/app/routes/summary.tsx
async function action({ request }) {
  const order3 = (await request.formData()).get("order");
  const { id } = await saveNewOrder(JSON.parse(order3));
  console.log(await send(await getOrderByID(id)));
  return (0, import_remix6.redirect)("/confirmation");
}
function Summary() {
  const [editingPerson, setEditingPerson] = (0, import_react4.useState)();
  const submit = (0, import_remix6.useSubmit)();
  const { translator, order: order3 } = (0, import_remix6.useOutletContext)();
  const fullOrder = Object.assign({}, { lang: translator.language, delivery_time: new Date() }, order3);
  const submitForm = (e) => {
    e.preventDefault();
    submit(e.currentTarget);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, order3.persons && order3.persons.length ? order3.persons.map((item, key) => {
    return /* @__PURE__ */ React.createElement(PersonOnOrder, {
      key,
      details: item,
      editItem: () => setEditingPerson(key),
      translator
    });
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "text-[#0A9DBF] font-medium my-5"
  }, "error"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-1/2 px-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold mt-4"
  }, translator.translate("orderer")), /* @__PURE__ */ React.createElement("span", null, "Olena Kyashenko"), /* @__PURE__ */ React.createElement("span", null, "+38 0503 20 20 46"), /* @__PURE__ */ React.createElement("span", null, "Olena.K@gmail.com"), /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold mt-4"
  }, translator.translate("delivery_address")), /* @__PURE__ */ React.createElement("span", null, "Jakub Hertl"), /* @__PURE__ */ React.createElement("span", null, "U Uranie 27, Praha 7"), /* @__PURE__ */ React.createElement("span", null, "17000"), /* @__PURE__ */ React.createElement("span", null, "+420 776 764 221")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-1/2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold mt-4"
  }, translator.translate("for_who_and_what")), order3.persons.map((person, index) => {
    var _a;
    return /* @__PURE__ */ React.createElement("div", {
      key: index
    }, /* @__PURE__ */ React.createElement("span", null, person.fullname), /* @__PURE__ */ React.createElement("span", null, (_a = person.requirements[0]) == null ? void 0 : _a.description));
  }))), /* @__PURE__ */ React.createElement("hr", {
    className: "w-full my-10 border border-[#957D5E] opacity-20"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 mx-2 w-full md:w-1/2"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post",
    onSubmit: submitForm
  }, /* @__PURE__ */ React.createElement("input", {
    id: "formData",
    type: "hidden",
    name: "order",
    value: JSON.stringify(fullOrder),
    readOnly: true
  }), /* @__PURE__ */ React.createElement("button", {
    className: "items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
  }, translator.translate("to_order")))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/components/ContactInfo.tsx
init_react();
function ContactInfo({ translator, handleChange, order: order3 }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1"
  }, translator.translate("contact"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap -m-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("name_and_surname")), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    id: "name",
    name: "fullname",
    placeholder: "Aa",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.fullname
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "phone",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("phone")), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "+380 111 111 111",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.phone
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm flex  text-[#957D5E]"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4 mx-1",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  })), translator.translate("phone_to_find_you"))), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "leading-7 grow font-semibold text-base text-gray-600"
  }, translator.translate("email")), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#957D5E] font-bold text-sm"
  }, translator.translate("optional"))), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "email",
    id: "email",
    name: "email",
    placeholder: "@",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.email
  })))));
}

// app/components/DeliveryInfo.tsx
init_react();
function DeliveryInfo({
  translator,
  order: order3,
  handleChange,
  nextForm
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto mt-14"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1"
  }, translator.translate("delivery_address"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap -m-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex mx-3 my-6 items-center font-bold space-x-2 text-[#0A9DBF]"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "radiodelivery",
    name: "delivery_type",
    value: "delivery",
    defaultChecked: order3.delivery_type == "delivery",
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "radiodelivery"
  }, translator.translate("deliver_to_adress")), /* @__PURE__ */ React.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "radiopickup",
    name: "delivery_type",
    value: "pickup",
    defaultChecked: order3.delivery_type == "pickup",
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "radiopickup"
  }, translator.translate("pickup"))), order3.delivery_type == "delivery" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("name_and_surname")), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    id: "name",
    name: "delivery_fullname",
    placeholder: "Aa",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.delivery_fullname
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm flex  text-[#957D5E]"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4 mr-2",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  })), translator.translate("picker_name"))), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "street",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("street_and_number")), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    id: "street",
    name: "delivery_street",
    placeholder: "Stra\u0161nick\xE1 12",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.delivery_street
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "city",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("city")), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    id: "city",
    name: "delivery_city",
    placeholder: "Praha",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.delivery_city
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-1/2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "city",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("zip")), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    id: "psc",
    name: "delivery_zip",
    placeholder: "14000",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.delivery_zip
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "phone2",
    className: "leading-7 grow font-semibold text-base text-gray-600"
  }, translator.translate("phone")), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#957D5E] font-bold text-sm"
  }, translator.translate("optional"))), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "tel",
    id: "phone2",
    name: "delivery_phone",
    placeholder: "+380 111 111 111",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.delivery_phone
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm flex  text-[#957D5E]"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4 mx-1",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  })), translator.translate("phone_if_other")))) : /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1 bg-[#0A9DBF] text-xl flex flex-col text-[#F8EBDB] font-semibold p-5 md:w-2/3 "
  }, /* @__PURE__ */ React.createElement("span", null, "Hala 13 v Pra\u017Esk\xE9 tr\u017Enici"), /* @__PURE__ */ React.createElement("span", null, "Bubensk\xE9 n\xE1b\u0159e\u017E\xED 306"), /* @__PURE__ */ React.createElement("span", null, "170 00 Praha 7"), /* @__PURE__ */ React.createElement("a", {
    className: "mt-5",
    href: "tel:+420737597070"
  }, "Mobil: 737 59 70 70"), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:info@satnikpraha.cz"
  }, "E-mail: info@satnikpraha.cz"), /* @__PURE__ */ React.createElement("a", {
    href: "https://goo.gl/maps/o6Z8qzkG6pnTRs7P8",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "w-44 text-base mt-10 text-[#F8EBDB] border-0 py-2 px-3 focus:outline-none outline  outline-[#F8EBDB] rounded-full  hover:text-[#eb2f06] hover:bg-[#F8EBDB]  hover:outline-[#F8EBDB] font-semibold"
  }, translator.translate("show_on_map"))))), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 my-10 mx-2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: nextForm,
    className: "inline-flex items-center w-full  text-[#0A9DBF] border-0 py-4 px-6 focus:outline-none outline  outline-[#0A9DBF] rounded-full text-xl hover:bg-[#eb2f06] hover:text-white hover:outline-[#eb2f06]"
  }, translator.translate("continue_to_cloth_selection"), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6 ml-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13 7l5 5m0 0l-5 5m5-5H6"
  }))))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/index.tsx
function action2({ request }) {
}
function Index() {
  const { translator, setOrderItem, order: order3 } = (0, import_remix7.useOutletContext)();
  const navigate = (0, import_remix7.useNavigate)();
  const handleFormInputChange = (event) => {
    console.log(event.target.name, event.target.value);
    setOrderItem(event.target.name, event.target.value);
  };
  const nextForm = (e) => {
    e.preventDefault();
    navigate("/newOrder", { replace: false });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(ContactInfo, {
    translator,
    order: order3,
    handleChange: handleFormInputChange
  }), /* @__PURE__ */ React.createElement(DeliveryInfo, {
    translator,
    handleChange: handleFormInputChange,
    order: order3,
    nextForm
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b5cb805e", "entry": { "module": "/build/entry.client-SGYCZBHY.js", "imports": ["/build/_shared/chunk-LUMZKUI3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-IDY5XY6M.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/confirmation": { "id": "routes/confirmation", "parentId": "root", "path": "confirmation", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/confirmation-G6CH35JL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-6M6JNIBM.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/newOrder": { "id": "routes/newOrder", "parentId": "root", "path": "newOrder", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/newOrder-4VUG4M3L.js", "imports": ["/build/_shared/chunk-3YW4RDWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/summary": { "id": "routes/summary", "parentId": "root", "path": "summary", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/summary-WJW6CNTG.js", "imports": ["/build/_shared/chunk-3YW4RDWN.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B5CB805E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/confirmation": {
    id: "routes/confirmation",
    parentId: "root",
    path: "confirmation",
    index: void 0,
    caseSensitive: void 0,
    module: confirmation_exports
  },
  "routes/newOrder": {
    id: "routes/newOrder",
    parentId: "root",
    path: "newOrder",
    index: void 0,
    caseSensitive: void 0,
    module: newOrder_exports
  },
  "routes/summary": {
    id: "routes/summary",
    parentId: "root",
    path: "summary",
    index: void 0,
    caseSensitive: void 0,
    module: summary_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
import_dotenv.default.config();
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use(import_express.default.static("public"));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development",
  getLoadContext: (context) => context.env
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xvY2FsZS90cmFuc2xhdGlvbi50cyIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9jb25maXJtYXRpb24udHN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9uZXdPcmRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uT25PcmRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uVG9PcmRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvR2VuZGVyU2VsZWN0b3IudHN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9zdW1tYXJ5LnRzeCIsICIuLi9wcmlzbWEvYXBpL09yZGVyLnRzIiwgIi4uL3ByaXNtYS9nZXREQi50cyIsICIuLi9wcmlzbWEvaGVscGVycy50cyIsICIuLi9hcHAvbWFpbGVyL2h0bWwvb3JkZXJfY29uZmlybS9zZW5kLnRzIiwgIi4uL2FwcC9tYWlsZXIvaGVscGVycy9zZW5kSFRNTEVtYWlsLnRzIiwgIi4uL2FwcC9tYWlsZXIvaGVscGVycy9ub3JtYWxpemVPcmRlci50cyIsICJyb3V0ZTovaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9EZWxpdmVyeUluZm8udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmRvdGVudi5jb25maWcoKVxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgZ2V0TG9hZENvbnRleHQ6IChjb250ZXh0KSA9PiBjb250ZXh0LmVudlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9jb25maXJtYXRpb24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9uZXdPcmRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm91dGVzL3N1bW1hcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2NvbmZpcm1hdGlvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29uZmlybWF0aW9uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbmZpcm1hdGlvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbmV3T3JkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld09yZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5ld09yZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zdW1tYXJ5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zdW1tYXJ5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInN1bW1hcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChyZXF1ZXN0LCByZXNwb25zZVN0YXR1c0NvZGUsIHJlc3BvbnNlSGVhZGVycywgcmVtaXhDb250ZXh0KSB7XG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+KVxuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKVxuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdH0pXG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHRyYW5zbGF0aW9uLCB7IFRyYW5zbGF0b3IgfSBmcm9tICcuL2xvY2FsZS90cmFuc2xhdGlvbidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPdXRsZXRDb250ZXh0IHtcblx0dHJhbnNsYXRvcjogVHJhbnNsYXRvclxuXHRzZXRPcmRlckl0ZW06IGFueVxuXHRvcmRlcjogT3JkZXJcblx0c3VibWl0T3JkZXI6IGFueVxuXHRzZXRPcmRlcjogKG9yZGVyOiBPcmRlcikgPT4gdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyIHtcblx0W2tleTogc3RyaW5nXTogYW55XG5cdGZ1bGxuYW1lOiBzdHJpbmdcblx0cGhvbmU6IHN0cmluZ1xuXHRlbWFpbDogc3RyaW5nXG5cdGRlbGl2ZXJ5X3R5cGU6ICdkZWxpdmVyeScgfCAncGlja3VwJ1xuXHRkZWxpdmVyeV9mdWxsbmFtZTogc3RyaW5nXG5cdGRlbGl2ZXJ5X3N0cmVldDogc3RyaW5nXG5cdGRlbGl2ZXJ5X2NpdHk6IHN0cmluZ1xuXHRkZWxpdmVyeV96aXA6IHN0cmluZ1xuXHRkZWxpdmVyeV9waG9uZTogc3RyaW5nXG5cdGRlbGl2ZXJ5X3RpbWU6IHt9XG5cdHBlcnNvbnM6IFBlcnNvbltdXG5cdHN0YXRlOiAnb3Blbidcblx0bGFuZzogJ3VhJyB8ICdjcydcblx0Y3JlYXRlZF9hdDoge31cblx0dXBkYXRlZF9hdDoge31cbn1cblxuZXhwb3J0IHR5cGUgUGVyc29uID0ge1xuXHRba2V5OiBzdHJpbmddOiBhbnlcblx0c2V4OiAnbWFuJyB8ICd3b21hbidcblx0YWR1bHQ6IGJvb2xlYW5cblx0ZnVsbG5hbWU6IHN0cmluZ1xuXHRhZ2U6IG51bWJlclxuXHRjbG90aGluZ19zaXplOiBzdHJpbmdcblx0c2hvZV9zaXplOiBzdHJpbmdcblx0cmVxdWlyZW1lbnRzOiBSZXF1aXJlbWVudFtdXG59XG5cbnR5cGUgUmVxdWlyZW1lbnQgPSB7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuXHRyZXR1cm4gW1xuXHRcdHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuXHRcdHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnIH0sXG5cdF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gYFx1MDE2MGF0blx1MDBFRGsgUHJhaGEgLSBQb21vYyBVa3JhamluXHUwMTFCYFxuXHRyZXR1cm4ge1xuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGtleXdvcmRzOiAndWtyYWluZSxoZWxwLHVrcmFqaW5hLHZcdTAwRTFsa2EnLFxuXHRcdG5hbWU6ICdcdTAxNjBhdG5cdTAwRURrIC0gUG9tb2MgVWtyYWppblx1MDExQicsXG5cdFx0J3R3aXR0ZXI6aW1hZ2UnOiAnaHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3ovb2dfc2hhcmUucG5nJyxcblx0XHQndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuXHRcdCd0d2l0dGVyOnRpdGxlJzogZGVzY3JpcHRpb24sXG5cdFx0J3R3aXR0ZXI6ZGVzY3JpcHRpb24nOiAnUG9tXHUwMEUxaFx1MDBFMW1lIFVrcmFqaW5cdTAxMUIgcyBcdTAxNjBhdG5cdTAwRURrZW0gUHJhaGEnLFxuXHRcdCdvZzp1cmwnOiAnaHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3ovJyxcblx0XHQnb2c6dHlwZSc6ICd3ZWJzaXRlJyxcblx0XHQnb2c6dGl0bGUnOiAnXHUwMTYwYXRuXHUwMEVEayAtIFBvbW9jIFVrcmFqaW5cdTAxMUInLFxuXHRcdCdvZzpkZXNjcmlwdGlvbic6ICdcdTAxNjBhdG5cdTAwRURrIFByYWhhIC0gUG9tb2MgVWtyYWppblx1MDExQicsXG5cdFx0J29nOmltYWdlJzogJ2h0dHBzOi8vYXBwLnNhdG5pa3ByYWhhLmN6L29nX3NoYXJlLnBuZycsXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbVN1cHBvcnRlZChsYW5ndWFnZTogc3RyaW5nKSB7XG5cdHJldHVybiBbJ3VhJywgJ2NzJ10uaW5jbHVkZXMobGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiAnY3MnXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IHsgcmVxdWVzdDogUmVxdWVzdCB9KSA9PiB7XG5cdGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuXHRpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ2xuZycpKSB7XG5cdFx0cmV0dXJuIGdldEZyb21TdXBwb3J0ZWQodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2xuZycpIGFzIHN0cmluZylcblx0fVxuXG5cdC8vIHRoZW4gd2UgdXNlIHRoZSBjb29raWUsIHVzaW5nIHRoaXMgY29va2llIHdlIGNhbiBzdG9yZSB0aGUgdXNlciBwcmVmZXJlbmNlIHdpdGggYSBmb3JtXG5cdGxldCBjb29raWUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG5cdFx0cmVxdWVzdC5oZWFkZXJzXG5cdFx0XHQuZ2V0KCdDb29raWUnKVxuXHRcdFx0Py5zcGxpdCgnOycpXG5cdFx0XHQubWFwKChjb29raWUpID0+IGNvb2tpZS5zcGxpdCgnPScpKSA/PyBbXSxcblx0KVxuXG5cdGlmIChjb29raWUuaTE4bmV4dCkge1xuXHRcdHJldHVybiBnZXRGcm9tU3VwcG9ydGVkKGNvb2tpZS5pMThuZXh0KVxuXHR9XG5cblx0Ly8gYW5kIHRoZW4gd2UgY2hlY2sgdGhlIEFjY2VwdC1MYW5ndWFnZSBoZWFkZXIgYW5kIHVzZSB0aGF0LCB0aGlzIHdpbGwgaGF2ZSB0aGUgdmFsdWVcblx0Ly8gb2YgdGhlIGxhbmd1YWdlIHRoZSB1c2VyIHVzZSBmb3IgdGhlaXIgT1Ncblx0aWYgKHJlcXVlc3QuaGVhZGVycy5oYXMoJ2FjY2VwdC1sYW5ndWFnZScpKSB7XG5cdFx0cmV0dXJuIGdldEZyb21TdXBwb3J0ZWQocmVxdWVzdC5oZWFkZXJzLmdldCgnYWNjZXB0LWxhbmd1YWdlJykgYXMgc3RyaW5nKVxuXHR9XG5cdHJldHVybiAnY3MnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0Y29uc3QgbG9jYWxlID0gdXNlTG9hZGVyRGF0YSgpXG5cdGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoe1xuXHRcdGRlbGl2ZXJ5X3R5cGU6ICdkZWxpdmVyeScsXG5cdFx0cGVyc29uczogW10sXG5cdH0gYXMgdW5rbm93biBhcyBPcmRlcilcblx0Ly8gY29uc3QgW2dlbmRlclNlbGVjdGVkLCBzZXRDdXJyZW50R2VuZGVyXSA9IHVzZVN0YXRlKCk7XG5cblx0Y29uc3QgW3RyYW5zbGF0b3IsIHNldFRyYW5zbGF0b3JdID0gdXNlU3RhdGU8VHJhbnNsYXRvcj4oe1xuXHRcdHRyYW5zbGF0ZTogdHJhbnNsYXRpb24obG9jYWxlKSxcblx0XHRsYW5ndWFnZTogbG9jYWxlLFxuXHR9KVxuXG5cdGNvbnN0IHNldE9yZGVySXRlbSA9IChrZXk6IGtleW9mIE9yZGVyLCB2YWx1ZTogYW55KSA9PiB7XG5cdFx0Y29uc3QgbmV3T3JkZXIgPSBPYmplY3QuYXNzaWduKHt9LCBvcmRlcikgYXMgT3JkZXJcblx0XHRuZXdPcmRlcltrZXldID0gdmFsdWVcblx0XHRzZXRPcmRlcihuZXdPcmRlcilcblx0fVxuXG5cdGNvbnN0IHN3aXRjaExhbmd1YWdlID1cblx0XHQoY3VycmVudExhbmd1YWdlOiBzdHJpbmcpOiBNb3VzZUV2ZW50SGFuZGxlciA9PlxuXHRcdFx0KGUpID0+IHtcblx0XHRcdFx0Y29uc3QgbmV3TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2UgPT0gJ2NzJyA/ICd1YScgOiAnY3MnXG5cdFx0XHRcdHNldFRyYW5zbGF0b3Ioe1xuXHRcdFx0XHRcdHRyYW5zbGF0ZTogdHJhbnNsYXRpb24obmV3TGFuZ3VhZ2UpLFxuXHRcdFx0XHRcdGxhbmd1YWdlOiBuZXdMYW5ndWFnZSxcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUI4MlNWRVdNSjJcIj48L3NjcmlwdD5cblx0XHRcdFx0PHNjcmlwdCBhc3luYyBzcmM9XCIvZ2EuanNcIj48L3NjcmlwdD5cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5IGNsYXNzTmFtZT1cImJnLVsjRjhFQkRCXVwiPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLCBsaW5lSGVpZ2h0OiAnMS40JyB9fT5cblx0XHRcdFx0XHQ8SGVhZGVyIHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9IHN3aXRjaExhbmd1YWdlPXtzd2l0Y2hMYW5ndWFnZSh0cmFuc2xhdG9yLmxhbmd1YWdlKX0gLz5cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBweS0xNCBtZDpweS0yNCBteC1hdXRvIGZsZXggc206ZmxleC1ub3dyYXAgZmxleC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgbWQ6dy0xLzIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206bXItMTAgZmxleCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1zbSBtZDp3LW1kIGxnOnctbGdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8T3V0bGV0XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQ9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T3JkZXJJdGVtLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmRlcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T3JkZXIsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsICBtdC04IG1kOm10LTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MjcxOTE4ODM5My1iYjcxY2E0NWRiYjk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImlsbHVzdHJhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0PExpdmVSZWxvYWQgLz5cblx0XHRcdDwvYm9keT5cblx0XHQ8L2h0bWw+XG5cdClcbn1cbiIsICJpbXBvcnQgY3MgZnJvbSAnLi90cmFuc2xhdGlvbnMvY3MuanNvbidcbmltcG9ydCB1YSBmcm9tICcuL3RyYW5zbGF0aW9ucy91YS5qc29uJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRpb24obG9jYWxlOiBzdHJpbmcpIHtcblx0Y29uc3QgdHJhbnNsYXRpb25Ub1VzZSA9IGxvY2FsZSA9PSAndWEnID8gdWEgOiAoY3MgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlcblx0cmV0dXJuIGZ1bmN0aW9uIHRyYW5zbGF0ZShzdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRyYW5zbGF0aW9uVG9Vc2Vbc3RyaW5nXSB8fCAnbWlzc2luZyB0cmFuc2xhdGlvbjogJyArIHN0cmluZ1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zbGF0b3IgPSB7XG5cdHRyYW5zbGF0ZTogKHN0cmluZzogc3RyaW5nKSA9PiBzdHJpbmdcblx0bGFuZ3VhZ2U6IHN0cmluZ1xufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBUcmFuc2xhdG9yIH0gZnJvbSAnfi9sb2NhbGUvdHJhbnNsYXRpb24nXG5cbnR5cGUgSGVhZGVyUGFyYW1zID0ge1xuXHR0cmFuc2xhdG9yOiBUcmFuc2xhdG9yXG5cdHN3aXRjaExhbmd1YWdlOiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgdHJhbnNsYXRvciwgc3dpdGNoTGFuZ3VhZ2UgfTogSGVhZGVyUGFyYW1zKSB7XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCBzdGlja3kgdG9wLTAgYmctWyNGOEVCREJdIHotMTAgcGItMlwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiZmxleCB0aXRsZS1mb250IGZvbnQtbWVkaXVtIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktOTAwIG1sLTUgbWQ6bWwtMFwiIHRvPVwiL1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwicmVkLnN2Z1wiIGNsYXNzTmFtZT1cInctMTYgaC0xNiBtZDp3LTMyIG1kOmgtMzJcIiBhbHQ9XCJcdTAxNjBhdG5cdTAwRURrIFByYWhhXCIgLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtbC0zIHRleHQteGwgaGlkZGVuXCI+XHUwMTYwYXRuXHUwMEVEazwvc3Bhbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm1sLWF1dG8gZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHRleHQtYmFzZSBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMCBoaWRkZW5cIiBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0Rmlyc3QgTGlua1xuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtzd2l0Y2hMYW5ndWFnZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQwICBqdXN0aWZ5LWNlbnRlciBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCAgYm9yZGVyLTAgcHktMiBweC01IGZvY3VzOm91dGxpbmUtWyNlYjJmMDZdIG91dGxpbmUgb3V0bGluZS1vZmZzZXQtMiBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgdGV4dC1iYXNlIG1yLTUgaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RyYW5zbGF0b3IubGFuZ3VhZ2UgPT0gJ2NzJyA/IChcblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjE5XCIgdmlld0JveD1cIjAgMCAyNSAxOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMEgyNVYxOUgwVjBaXCIgZmlsbD1cIiNGRkQ1MDBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMEgyNVY5LjVIMFYwWlwiIGZpbGw9XCIjMDA1QkJCXCIgLz5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIxOVwiIHZpZXdCb3g9XCIwIDAgMjUgMTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0wIDBIMjVWOS41SDBWMFpcIiBmaWxsPVwid2hpdGVcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTAgOS41SDI1VjE5SDBWOS41WlwiIGZpbGw9XCIjRDcxNDFBXCIgLz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNC4wNjI1IDkuNUwwIDBWMTlMMTQuMDYyNSA5LjVaXCIgZmlsbD1cIiMxMTQ1N0VcIiAvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtbC0yXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdsYW5ndWFnZScpfTwvc3Bhbj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgT3V0bGV0Q29udGV4dCB9IGZyb20gJ34vcm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlybWF0aW9uKCkge1xuXHRjb25zdCB7IHRyYW5zbGF0b3IsIHNldE9yZGVySXRlbSB9ID0gdXNlT3V0bGV0Q29udGV4dDxPdXRsZXRDb250ZXh0PigpXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTQgbWQ6cHktMjQgbXgtYXV0byBmbGV4IHNtOmZsZXgtbm93cmFwIGZsZXgtd3JhcFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMi8zIG1kOnctMS8yIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNtOm1yLTEwIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtMnhsIHctZnVsbCBoLTcyIHAtMiBcIlxuXHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NTI4NjE2Mjk5NS1hYTYzZDMxYzA2Y2I/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCJcblx0XHRcdFx0XHRcdFx0YWx0PVwiZGVsaXZlcnlcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtNXhsICB0ZXh0LTV4bCBmb250LWJvbGQgdGl0bGUtZm9udCBteS0xMiB0ZXh0LVsjZWIyZjA2XSBtbC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdTAwREFzcFx1MDExQlx1MDE2MW5cdTAxMUIganN0ZSBzaSBvYmplZG5hbGkgb2JsZVx1MDEwRGVuXHUwMEVEXG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWyNlYjJmMDZdIG1sLTEgXCI+XG5cdFx0XHRcdFx0XHRcdERvYnJvdm9sblx1MDBFRGNcdTAwRUQgZFx1MDExQmxhalx1MDBFRCwgY28gbVx1MDE2Rlx1MDE3RW91LCBhYnkgayB2XHUwMEUxbSBvYmplZG5hblx1MDBFOSBvYmxlXHUwMTBEZW5cdTAwRUQgY28gbmVqZFx1MDE1OVx1MDBFRHZlIGRvcmF6aWxvLlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHRleHQteGwgbXktMTIgbWItNiBiZy1bI2ViMmYwNl0gdGV4dC1bI0Y4RUJEQl0gcHktNiBweC00IG1sLTFcIj5cblx0XHRcdFx0XHRcdFx0VnlcdTAxMERrZWp0ZSBuYSBlLW1haWwgc1x1MDBBMGRhbFx1MDE2MVx1MDBFRG1pIGluZm9ybWFjZW1pLlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtdC04IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtOCBtZDpzcGFjZS14LTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZS5waHA/dT1odHRwczovL2FwcC5zYXRuaWtwcmFoYS5jelwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9XCIyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy0xMCBtZDpoLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTggMmgtM2E1IDUgMCAwMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwMTEtMWgzelwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1sLTMgdGV4dC1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD9yZWZfc3JjPXR3c3JjJTVFdGZ3JnF1b3QlM0IlMjBjbGFzcz0mcXVvdCUzQnR3aXR0ZXItc2hhcmUtYnV0dG9uPSZxdW90JTNCJTIwZGF0YS1zaG93LWNvdW50PSZxdW90JTNCZmFsc2U9JnF1b3Q9JnVybD1odHRwczovL2FwcC5zYXRuaWtwcmFoYS5jelwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9XCIyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy0xMCBtZDpoLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwMTMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwMDIzIDN6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWwtMyB0ZXh0LVsjZWIyZjA2XVwiXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdC5tZS9zaGFyZS91cmw/dXJsPWh0dHBzOi8vYXBwLnNhdG5pa3ByYWhhLmN6JnRleHQ9J1NhdG5payBQcmFoYSAtIEFwcCBmb3IgVWtyYWluZSdcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy01IGgtNSBtZDp3LTEwIG1kOmgtMTBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0gMjAuOTc2NjgxLDMuNjk4OTU2OSBjIC0wLjI3MjM3MywxLjEyN2UtNCAtMC41NjA3NDEsMC4wOTY3NzEgLTAuNTYwNzQxLDAuMDk2NzcxIDAsLTFlLTcgLTE4LjE5OTQzNjksNi41NDEyNzkxIC0xOS4yMzg4MzEzLDcuMjY1NzYzMSAtMC4yMjQyNDg3OCwwLjE1NTUzMyAtMC4yOTk1NDkyOCwwLjI0NjI1OSAtMC4zMzY3MDkyOCwwLjM1MjYxNyAtMC4xODA1MjAyLDAuNTE1NzczIDAuMzgwNDU1MDgsMC43NDM2NzcgMC4zODA0NTUwOCwwLjc0MzY3NyBsIDQuNjkxMzk1MywxLjUyNzEyMyBhIDAuNTE0MTcwOTQsMC41MTQxNzA5NCAwIDAgMCAwLjAzODQ0LC0wLjAwMjcgbCAyLjIwMDU0Miw2LjA4OTkzMiBjIDAsMCAwLjE5NTg4LDAuMzk5ODk3IDAuNDM2MTMxLDAuNTM5NTMxIDAuMTUyNTQsMC4xMjUzOTMgMC40NjcwNjIsMC4wNjMzMyAxLjExMDg3NiwtMC41ODA2MjUgMS4wMTA1MjMyLC0xLjAxMDc1MSAxLjk4MDk4MTIsLTEuODQ3Njk2IDIuNDY1NjY3MiwtMi4yNTQ4OTIgMS42MTg3NjUsMS4xMTc0MTcgMy4zNDUyOTUsMi4zNDA5MjIgNC4wOTc1MTUsMi45ODc5NjQgYSAxLjMwMjI0NiwxLjMwMjI0NiAwIDAgMCAwLjk0OTE0OSwwLjM2NzE5OSBjIDAuNzExMDMsLTAuMDI2NzUgMC45MDkzODEsLTAuODA3MzA3IDAuOTA5MzgxLC0wLjgwNzMwNyAwLDAgMy4zMTcyMjksLTEzLjM0NzYyODQgMy40MjgwNzIsLTE1LjEzNjAxNDEgMC4wMTEwNSwtMC4xNzUwNzQ0IDAuMDI1MDksLTAuMjg2NTEzOSAwLjAyNjUxLC0wLjQwNjk2NzcgQSAxLjQ5ODc4NDMsMS40OTg3ODQzIDAgMCAwIDIxLjUzNDc3LDQuMDY3NDgxNCAwLjQ0MzA1MTk3LDAuNDQzMDUxOTcgMCAwIDAgMjEuMjMyNTI3LDMuNzM3NDAwMSBjIC0wLjA3NTc2LC0wLjAyODc5MiAtMC4xNjUwNTUsLTAuMDM4NDgxIC0wLjI1NTg0NiwtMC4wMzg0NDMgelwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgbWQ6bWwtYXV0byB3LWZ1bGwgIG10LTggbWQ6bXQtMFwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQzNDk5NDU5LWQxNDYwOTQ2YmRjNj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1UbDhmR1JsYkdsMlpYSjVmR1Z1ZkRCOGZEQjhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcblx0XHRcdFx0XHRcdGFsdD1cImlsbHVzdHJhdGlvblwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBDaGFuZ2VFdmVudEhhbmRsZXIsIE1vdXNlRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IFBlcnNvbk9uT3JkZXIgZnJvbSAnfi9jb21wb25lbnRzL1BlcnNvbk9uT3JkZXInXG5pbXBvcnQgUGVyc29uVG9PcmRlciBmcm9tICd+L2NvbXBvbmVudHMvUGVyc29uVG9PcmRlcidcbmltcG9ydCBHZW5kZXJTZWxlY3RvciwgeyBHZW5kZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvR2VuZGVyU2VsZWN0b3InXG5pbXBvcnQgeyBPdXRsZXRDb250ZXh0LCBQZXJzb24gfSBmcm9tICd+L3Jvb3QnXG5cbi8qXG4tIHNob3cgYWxyZWFkeSBhZGRlZCBwZW9wbGVcbi0gaWYgbm8gcGVvcGxlIGFkZGVkLCBzaG93IGdlbmRlciBzZWxlY3QgdG8gYWRkIDEgcGVyc29uXG4tIGlmIGNsaWNrIG9uIGFkZCBuZXcgcGVyc29uLCB2YWxpZGF0ZSBpbnB1dHMgYW5kIGFkZCB0aGUgcGVyc29uIHRvIGFkZGVkIHBlb3BsZSBhbmQgc2hvdyBnZW5kZXIgc2VsZWN0IGFnYWluXG4tIGFmdGVyIGNsaWNrIG9uIGdlbmRlciBzZWxlY3QsIHNob3cgZW1wdHkgZm9ybVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3T3JkZXIoKSB7XG5cdGNvbnN0IHsgdHJhbnNsYXRvciwgb3JkZXIsIHNldE9yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0PE91dGxldENvbnRleHQ+KClcblx0Y29uc3QgW3NlbGVjdGVkR2VuZGVyLCBzZWxlY3RHZW5kZXJdID0gdXNlU3RhdGU8R2VuZGVyPigpXG5cdGNvbnN0IFtuZXdQZXJzb25JbmZvLCBzZXROZXdQZXJzb25JbmZvXSA9IHVzZVN0YXRlPFBlcnNvbj4oeyByZXF1aXJlbWVudHM6IFtdIH0gYXMgdW5rbm93biBhcyBQZXJzb24pXG5cdGNvbnN0IFtlZGl0aW5nUGVyc29uLCBzZXRFZGl0aW5nUGVyc29uXSA9IHVzZVN0YXRlPG51bWJlcj4oKVxuXG5cdGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5uYW1lID09ICdyZXF1aXJlbWVudHMnKSB7XG5cdFx0XHRpZiAoIW5ld1BlcnNvbkluZm8ucmVxdWlyZW1lbnRzKSBuZXdQZXJzb25JbmZvLnJlcXVpcmVtZW50cyA9IFtdXG5cdFx0XHRuZXdQZXJzb25JbmZvLnJlcXVpcmVtZW50c1swXSA9IHsgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3UGVyc29uSW5mb1tlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0fVxuXHRcdHNldE5ld1BlcnNvbkluZm8obmV3UGVyc29uSW5mbylcblx0fVxuXG5cdGNvbnN0IHNhdmVQZXJzb24gPSAoZGV0YWlsczogUGVyc29uLCBpZD86IG51bWJlcikgPT4ge1xuXHRcdGlmIChpZCkge1xuXHRcdFx0b3JkZXIucGVyc29uc1tpZF0gPSBkZXRhaWxzXG5cdFx0fSBlbHNlIHtcblx0XHRcdG9yZGVyLnBlcnNvbnMucHVzaChkZXRhaWxzKVxuXHRcdH1cblx0XHRzZXRPcmRlcihvcmRlcilcblx0fVxuXG5cdGNvbnN0IHBpY2tHZW5kZXIgPVxuXHRcdChnZW5kZXI6IEdlbmRlcik6IE1vdXNlRXZlbnRIYW5kbGVyID0+XG5cdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0c2VsZWN0R2VuZGVyKGdlbmRlcilcblx0XHRcdFx0Ly8gbmV3UGVyc29uSW5mb1tcImdlbmRlclwiXSA9IGdlbmRlcjtcblx0XHRcdFx0aWYgKGdlbmRlciA9PSAna2lkJykge1xuXHRcdFx0XHRcdG5ld1BlcnNvbkluZm8uYWR1bHQgPSBmYWxzZVxuXHRcdFx0XHRcdG5ld1BlcnNvbkluZm8uc2V4ID0gJ21hbidcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdQZXJzb25JbmZvLmFkdWx0ID0gdHJ1ZVxuXHRcdFx0XHRcdG5ld1BlcnNvbkluZm8uc2V4ID0gZ2VuZGVyXG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0TmV3UGVyc29uSW5mbyhuZXdQZXJzb25JbmZvKVxuXHRcdFx0fVxuXHRjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcblxuXHRjb25zdCBuZXh0Rm9ybSA9ICgpID0+IHtcblx0XHRuYXZpZ2F0ZSgnL3N1bW1hcnknLCB7IHJlcGxhY2U6IGZhbHNlIH0pXG5cdH1cblxuXHRjb25zdCBhZGROZXh0UGVyc29uOiBNb3VzZUV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zb2xlLmxvZyhuZXdQZXJzb25JbmZvLCBlZGl0aW5nUGVyc29uKVxuXHRcdHNhdmVQZXJzb24obmV3UGVyc29uSW5mbywgZWRpdGluZ1BlcnNvbilcblx0XHRjbGVhblBlcnNvbkZvcm0oKVxuXHR9XG5cblx0Y29uc3QgY2xlYW5QZXJzb25Gb3JtID0gKCkgPT4ge1xuXHRcdHNlbGVjdEdlbmRlcih1bmRlZmluZWQpXG5cdFx0c2V0RWRpdGluZ1BlcnNvbih1bmRlZmluZWQpXG5cdFx0c2V0TmV3UGVyc29uSW5mbyh7IHJlcXVpcmVtZW50czogW10gfSBhcyB1bmtub3duIGFzIFBlcnNvbilcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGVkaXRpbmdQZXJzb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c2VsZWN0R2VuZGVyKCFvcmRlci5wZXJzb25zW2VkaXRpbmdQZXJzb25dLmFkdWx0ID8gJ2tpZCcgOiBvcmRlci5wZXJzb25zW2VkaXRpbmdQZXJzb25dLnNleClcblx0XHRcdHNldE5ld1BlcnNvbkluZm8ob3JkZXIucGVyc29uc1tlZGl0aW5nUGVyc29uXSlcblx0XHRcdGRlbGV0ZSBvcmRlci5wZXJzb25zW2VkaXRpbmdQZXJzb25dXG5cdFx0XHRzZXRPcmRlcihvcmRlcilcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coZWRpdGluZ1BlcnNvbilcblx0fSwgW2VkaXRpbmdQZXJzb25dKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWItMTJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycpfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG1sLTEgbXQtMSB0ZXh0LVsjMEE5REJGXSBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIG91dGxpbmUtWyMwQTlEQkZdIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOmJnLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjRjhFQkRCXSBob3ZlcjpvdXRsaW5lLVsjZWIyZjA2XSBmaWxsLVsjMEE5REJGXSBob3ZlcjpmaWxsLVsjRjhFQkRCXVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMThcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtLjI5MyA4LjI5MyA0LTRhMSAxIDAgMSAxIDEuNDE0IDEuNDE0TDMuNDE1IDhIMTVhMSAxIDAgMSAxIDAgMkgzLjQxNWwyLjI5NCAyLjI5NGExIDEgMCAxIDEtMS40MTQgMS40MTRsLTQtNGEuOTk3Ljk5NyAwIDAgMS0uMDAyLTEuNDE0WlwiIC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgdGV4dC1ncmF5LTkwMCBtbC01XCI+XG5cdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ29yZGVyJyl9XG5cdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtvcmRlci5wZXJzb25zICYmIG9yZGVyLnBlcnNvbnMubGVuZ3RoID8gKFxuXHRcdFx0XHRvcmRlci5wZXJzb25zLm1hcCgoaXRlbSwga2V5KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxQZXJzb25Pbk9yZGVyIGtleT17a2V5fSBkZXRhaWxzPXtpdGVtfSBlZGl0SXRlbT17KCkgPT4gc2V0RWRpdGluZ1BlcnNvbihrZXkpfSB0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfSAvPlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1tZWRpdW0gbXktNVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnd2hvX2lzX3dlYXJpbmcnKX08L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHR7IXNlbGVjdGVkR2VuZGVyID8gKFxuXHRcdFx0XHQ8R2VuZGVyU2VsZWN0b3IgdHJhbnNsYXRvcj17dHJhbnNsYXRvcn0gc2VsZWN0R2VuZGVyPXtwaWNrR2VuZGVyfSAvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8UGVyc29uVG9PcmRlclxuXHRcdFx0XHRcdFx0Y3VycmVudFBlcnNvbj17bmV3UGVyc29uSW5mb31cblx0XHRcdFx0XHRcdHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9XG5cdFx0XHRcdFx0XHRzZWxlY3RlZEdlbmRlcj17c2VsZWN0ZWRHZW5kZXJ9XG5cdFx0XHRcdFx0XHRoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRkaXNjYXJkUGVyc29uPXtjbGVhblBlcnNvbkZvcm19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbXktMTAgdy1mdWxsIGZsZXggZmxleC13cmFwIGdhcC04IGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FkZE5leHRQZXJzb259XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSBvdXRsaW5lLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl1cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2FkZF9wZXJzb24nKX1cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtuZXh0Rm9ybX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI0Y4RUJEQl0gaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2NvbnRpbnVlJyl9XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zbGF0b3IgfSBmcm9tICd+L2xvY2FsZS90cmFuc2xhdGlvbidcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJ34vcm9vdCdcblxudHlwZSBQZXJzb25Pbk9yZGVyUGFyYW1zID0ge1xuXHR0cmFuc2xhdG9yOiBUcmFuc2xhdG9yXG5cdGRldGFpbHM6IFBlcnNvblxuXHRlZGl0SXRlbTogTW91c2VFdmVudEhhbmRsZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uT25PcmRlcih7IHRyYW5zbGF0b3IsIGRldGFpbHMsIGVkaXRJdGVtIH06IFBlcnNvbk9uT3JkZXJQYXJhbXMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC0yeGwgZ3JvdXAgYmctWyNlYjJmMDZdIHRleHQtWyNGOEVCREJdIHctZnVsbCBoLTcyIHAtMiBib3JkZXIgYm9yZGVyLVsjZWIyZjA2XVwiPlxuXHRcdFx0PGltZyBzcmM9eyFkZXRhaWxzLmFkdWx0ID8gJ2tpZC5zdmcnIDogYCR7ZGV0YWlscy5zZXh9LnN2Z2B9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm15LTQgbXgtMlwiIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG14LTRcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2RldGFpbHMuZnVsbG5hbWV9PC9zcGFuPlxuXHRcdFx0XHR7ZGV0YWlscy5yZXF1aXJlbWVudHMgJiYgZGV0YWlscy5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCA/IGRldGFpbHMucmVxdWlyZW1lbnRzLm1hcCgocmVxdWlyZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInB5LTJcIj5cblx0XHRcdFx0XHRcdFx0e3JlcXVpcmVtZW50LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSkgOiBudWxsfVxuXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtlZGl0SXRlbX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXSBtdC00IGJvcmRlci0wIHB5LTIgcHgtNSBvdXRsaW5lIG91dGxpbmUtWyNGOEVCREJdIHJvdW5kZWQtZnVsbFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2VkaXQnKX1cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHJhbnNsYXRvciB9IGZyb20gJ34vbG9jYWxlL3RyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnfi9yb290J1xuXG50eXBlIFBlcnNvblRvT3JkZXJQcm9wcyA9IHtcblx0dHJhbnNsYXRvcjogVHJhbnNsYXRvclxuXHRzZWxlY3RlZEdlbmRlcjogJ21hbicgfCAnd29tYW4nIHwgJ2tpZCdcblx0aGFuZGxlSW5wdXRDaGFuZ2U6IFJlYWN0LkNoYW5nZUV2ZW50SGFuZGxlclxuICBjdXJyZW50UGVyc29uOiBQZXJzb25cbiAgZGlzY2FyZFBlcnNvbjogTW91c2VFdmVudEhhbmRsZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uVG9PcmRlcih7IHRyYW5zbGF0b3IsIHNlbGVjdGVkR2VuZGVyLCBoYW5kbGVJbnB1dENoYW5nZSwgY3VycmVudFBlcnNvbiwgZGlzY2FyZFBlcnNvbiB9OiBQZXJzb25Ub09yZGVyUHJvcHMpIHtcblx0Y29uc3QgaXNLaWQgPSBzZWxlY3RlZEdlbmRlciA9PSAna2lkJ1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgZ3JvdXAgYmctWyMwQTlEQkZdIHRleHQtWyNGOEVCREJdIHctZnVsbCBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjMEE5REJGXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJnLVsjRjhFQkRCXSBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17YCR7c2VsZWN0ZWRHZW5kZXJ9LnN2Z2B9IGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1bIzBBOURCRl1cIj57dHJhbnNsYXRvci50cmFuc2xhdGUoc2VsZWN0ZWRHZW5kZXIpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2Rpc2NhcmRQZXJzb259IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1bIzBBOURCRl0gbXQtNCBib3JkZXItMCBweS0yIHB4LTUgb3V0bGluZSBvdXRsaW5lLVsjRjhFQkRCXSBncm91cC1ob3ZlcjpvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGxcIj5cblx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncmVtb3ZlJyl9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7aXNLaWQgJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMyBteS02IGZvbnQtYm9sZCBzcGFjZS14LTIgdGV4dC1bIzBBOURCRl0gaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjZW50LVsjMEE5REJGXVwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdGlkPVwiYm95XCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cInNleFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPVwibWFuXCJcbiAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2N1cnJlbnRQZXJzb24uc2V4ID09ICdtYW4nfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJib3lcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2JveScpfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjZW50LVsjMEE5REJGXVwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdGlkPVwiZ2lybFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzZXhcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT1cIndvbWFuXCJcbiAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2N1cnJlbnRQZXJzb24uc2V4ID09ICd3b21hbid9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdpcmxcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2dpcmwnKX08L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctMS81XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnYWdlJyl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJhZ2VcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiYWdlXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCIyMlwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3VycmVudFBlcnNvbi5hZ2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy00LzVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCduYW1lJyl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImZ1bGxuYW1lXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJBYVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3VycmVudFBlcnNvbi5mdWxsbmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG15LTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG5cdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3NlbGVjdF9jbG90aGVzJyl9XG5cdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdEpha1x1MDBFOSBvYmxlXHUwMTBEZW5cdTAwRUQgcG90XHUwMTU5ZWJ1amV0ZT9cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0aWQ9XCJyZXF1aXJlbWVudHNcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwicmVxdWlyZW1lbnRzXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCI1IGtzIHRyaWthLCAyIGtzIGthbGhvdHlcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2N1cnJlbnRQZXJzb24ucmVxdWlyZW1lbnRzWzBdPy5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTIvNVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2Nsb3RoX3NpemUnKX1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiY2xvdGhpbmdfc2l6ZVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsb3RoaW5nX3NpemVcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2N1cnJlbnRQZXJzb24uY2xvdGhpbmdfc2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy0yLzVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdzaG9lc19zaXplJyl9XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInNob2Vfc2l6ZVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInNob2Vfc2l6ZVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCI0NFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2N1cnJlbnRQZXJzb24uc2hvZV9zaXplfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zbGF0b3IgfSBmcm9tICd+L2xvY2FsZS90cmFuc2xhdGlvbidcblxuZXhwb3J0IHR5cGUgR2VuZGVyU2VsZWN0b3JQYXJhbXMgPSB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0c2VsZWN0R2VuZGVyOiAoZ2VuZGVyOiBHZW5kZXIpID0+IE1vdXNlRXZlbnRIYW5kbGVyXG59XG5cbmV4cG9ydCB0eXBlIEdlbmRlciA9ICdtYW4nIHwgJ3dvbWFuJyB8ICdraWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmRlclNlbGVjdG9yKHsgdHJhbnNsYXRvciwgc2VsZWN0R2VuZGVyIH06IEdlbmRlclNlbGVjdG9yUGFyYW1zKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtzZWxlY3RHZW5kZXIoJ3dvbWFuJyl9XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0PGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnd29tYW4nKX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtzZWxlY3RHZW5kZXIoJ21hbicpfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxpbWcgc3JjPVwibWFuLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdtYW4nKX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtzZWxlY3RHZW5kZXIoJ2tpZCcpfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxpbWcgc3JjPVwia2lkLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdraWQnKX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgRm9ybUV2ZW50SGFuZGxlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQsIHVzZU5hdmlnYXRlLCBMaW5rLCB1c2VTdWJtaXQsIHJlZGlyZWN0LCBGb3JtIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBPcmRlciwgT3V0bGV0Q29udGV4dCB9IGZyb20gJ34vcm9vdCdcbmltcG9ydCB7IHNhdmVOZXdPcmRlciwgZ2V0T3JkZXJCeUlEIH0gZnJvbSAnLi4vLi4vcHJpc21hL2FwaS9PcmRlcidcbmltcG9ydCB7IHNlbmQgfSBmcm9tICd+L21haWxlci9odG1sL29yZGVyX2NvbmZpcm0vc2VuZCdcbmltcG9ydCBQZXJzb25Pbk9yZGVyIGZyb20gJ34vY29tcG9uZW50cy9QZXJzb25Pbk9yZGVyJ1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfTogeyByZXF1ZXN0OiBSZXF1ZXN0IH0pIHtcblx0Y29uc3Qgb3JkZXIgPSAoYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpKS5nZXQoJ29yZGVyJylcblx0Y29uc3QgeyBpZCB9ID0gYXdhaXQgc2F2ZU5ld09yZGVyKEpTT04ucGFyc2Uob3JkZXIgYXMgc3RyaW5nKSBhcyBPcmRlcilcblx0Y29uc29sZS5sb2coYXdhaXQgc2VuZChhd2FpdCBnZXRPcmRlckJ5SUQoaWQpIGFzIGFueSBhcyBPcmRlcikpXG5cdHJldHVybiByZWRpcmVjdCgnL2NvbmZpcm1hdGlvbicpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bW1hcnkoKSB7XG5cdGNvbnN0IFtlZGl0aW5nUGVyc29uLCBzZXRFZGl0aW5nUGVyc29uXSA9IHVzZVN0YXRlPG51bWJlcj4oKVxuXHRjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKVxuXHRjb25zdCB7IHRyYW5zbGF0b3IsIG9yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0PE91dGxldENvbnRleHQ+KClcblx0Y29uc3QgZnVsbE9yZGVyID0gT2JqZWN0LmFzc2lnbih7fSwgeyBsYW5nOiB0cmFuc2xhdG9yLmxhbmd1YWdlLCBkZWxpdmVyeV90aW1lOiBuZXcgRGF0ZSgpIH0sIG9yZGVyKVxuXHRjb25zdCBzdWJtaXRGb3JtOiBGb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHN1Ym1pdChlLmN1cnJlbnRUYXJnZXQpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdHtvcmRlci5wZXJzb25zICYmIG9yZGVyLnBlcnNvbnMubGVuZ3RoID8gKFxuXHRcdFx0XHRvcmRlci5wZXJzb25zLm1hcCgoaXRlbSwga2V5KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxQZXJzb25Pbk9yZGVyIGtleT17a2V5fSBkZXRhaWxzPXtpdGVtfSBlZGl0SXRlbT17KCkgPT4gc2V0RWRpdGluZ1BlcnNvbihrZXkpfSB0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfSAvPlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1tZWRpdW0gbXktNVwiPmVycm9yPC9kaXY+XG5cdFx0XHQpfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvMiBweC0xXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtdC00XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdvcmRlcmVyJyl9PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuPk9sZW5hIEt5YXNoZW5rbzwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj4rMzggMDUwMyAyMCAyMCA0Njwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj5PbGVuYS5LQGdtYWlsLmNvbTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2RlbGl2ZXJ5X2FkZHJlc3MnKX08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4+SmFrdWIgSGVydGw8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4+VSBVcmFuaWUgMjcsIFByYWhhIDc8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4+MTcwMDA8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4+KzQyMCA3NzYgNzY0IDIyMTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvMlwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnZm9yX3dob19hbmRfd2hhdCcpfTwvc3Bhbj5cblx0XHRcdFx0XHR7b3JkZXIucGVyc29ucy5tYXAoKHBlcnNvbiwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3BlcnNvbi5mdWxsbmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3BlcnNvbi5yZXF1aXJlbWVudHNbMF0/LmRlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktMTAgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gb3BhY2l0eS0yMFwiIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbXgtMiB3LWZ1bGwgbWQ6dy0xLzJcIj5cblx0XHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cblx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJmb3JtRGF0YVwiIHR5cGU9eydoaWRkZW4nfSBuYW1lPVwib3JkZXJcIiB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoZnVsbE9yZGVyKX0gcmVhZE9ubHk+PC9pbnB1dD5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSBvdXRsaW5lLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl1cIj5cblx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgndG9fb3JkZXInKX1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBnZXREQiB9IGZyb20gJ34vLi4vcHJpc21hL2dldERCJ1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICd+L3Jvb3QnXG5pbXBvcnQgeyBwcmVwYXJlT3JkZXJGb3JQcmlzbWFJbnNlcnQgfSBmcm9tICd+Ly4uL3ByaXNtYS9oZWxwZXJzJ1xuaW1wb3J0IEFqdiBmcm9tICdhanYnXG4vLyBjb25zdCB7IGdldERCIH0gPSByZXF1aXJlKCcuLi9nZXREQicpXG5jb25zdCBhanYgPSBuZXcgQWp2KClcblxuY29uc3QgcmVxdWlyZW1lbnRTY2hlbWEgPSB7XG5cdHR5cGU6ICdvYmplY3QnLFxuXHRwcm9wZXJ0aWVzOiB7XG5cdFx0ZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycgfSxcblx0fSxcblx0cmVxdWlyZWQ6IFsnZGVzY3JpcHRpb24nXSxcblx0YWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxufVxuY29uc3QgcGVyc29uU2NoZW1hID0ge1xuXHR0eXBlOiAnb2JqZWN0Jyxcblx0cHJvcGVydGllczoge1xuXHRcdHNleDogeyBlbnVtOiBbJ21hbicsICd3b21hbiddIH0sXG5cdFx0YWR1bHQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG5cdFx0ZnVsbG5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRhZ2U6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRjbG90aGluZ19zaXplOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0c2hvZV9zaXplOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0cmVxdWlyZW1lbnRzOiB7IHR5cGU6ICdhcnJheScsIGl0ZW1zOiByZXF1aXJlbWVudFNjaGVtYSB9LFxuXHR9LFxuXHRyZXF1aXJlZDogWydzZXgnLCAnYWR1bHQnLCAnZnVsbG5hbWUnLCAnYWdlJywgJ2Nsb3RoaW5nX3NpemUnLCAnc2hvZV9zaXplJywgJ3JlcXVpcmVtZW50cyddLFxuXHRhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG59XG5jb25zdCBvcmRlclNjaGVtYSA9IHtcblx0dHlwZTogJ29iamVjdCcsXG5cdHByb3BlcnRpZXM6IHtcblx0XHRmdWxsbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdHBob25lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0ZW1haWw6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRkZWxpdmVyeV90eXBlOiB7IGVudW06IFsnZGVsaXZlcnknLCAncGlja3VwJ10gfSxcblx0XHRkZWxpdmVyeV9mdWxsbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3N0cmVldDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X2NpdHk6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRkZWxpdmVyeV96aXA6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRkZWxpdmVyeV9waG9uZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3RpbWU6IHt9LFxuXHRcdHBlcnNvbnM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHBlcnNvblNjaGVtYSB9LFxuXHRcdHN0YXRlOiB7IGVudW06IFsnb3BlbiddIH0sXG5cdFx0bGFuZzogeyBlbnVtOiBbJ3VhJywgJ2NzJ10gfSxcblx0XHRjcmVhdGVkX2F0OiB7fSxcblx0XHR1cGRhdGVkX2F0OiB7fSxcblx0fSxcblx0cmVxdWlyZWQ6IFtcblx0XHQnZnVsbG5hbWUnLFxuXHRcdCdwaG9uZScsXG5cdFx0J2VtYWlsJyxcblx0XHQnZGVsaXZlcnlfdHlwZScsXG5cdFx0J2RlbGl2ZXJ5X2Z1bGxuYW1lJyxcblx0XHQnZGVsaXZlcnlfc3RyZWV0Jyxcblx0XHQnZGVsaXZlcnlfY2l0eScsXG5cdFx0J2RlbGl2ZXJ5X3ppcCcsXG5cdFx0J2RlbGl2ZXJ5X3Bob25lJyxcblx0XHQncGVyc29ucycsXG5cdFx0J3N0YXRlJyxcblx0XSxcblx0YWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxufVxuXG5jb25zdCB2YWxpZGF0ZU9yZGVyID0gYWp2LmNvbXBpbGUob3JkZXJTY2hlbWEpXG5cbmNvbnN0IHNhdmVOZXdPcmRlciA9IGFzeW5jIGZ1bmN0aW9uIChvcmRlcjogT3JkZXIpIHtcblx0Y29uc29sZS5sb2cob3JkZXIpXG5cdG9yZGVyLnN0YXRlID0gJ29wZW4nXG5cblx0aWYgKCF2YWxpZGF0ZU9yZGVyKG9yZGVyKSkge1xuXHRcdGNvbnNvbGUubG9nKHZhbGlkYXRlT3JkZXIuZXJyb3JzKVxuXHRcdHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZU9yZGVyLmVycm9ycykpXG5cdH1cblxuXHRvcmRlciA9IHByZXBhcmVPcmRlckZvclByaXNtYUluc2VydChvcmRlcilcblx0cmV0dXJuIChhd2FpdCBnZXRPcmRlck1vZGVsKCkpLmNyZWF0ZSh7IGRhdGE6IG9yZGVyIGFzIGFueSB9KVxufVxuY29uc3QgZ2V0T3JkZXJCeUlEID0gYXN5bmMgZnVuY3Rpb24gKGlkOiBudW1iZXIpIHtcblx0cmV0dXJuIGF3YWl0IGZpbmRVbmlxdWVPcmRlcih7IGlkIH0pXG59XG5cbi8qKlxuICogZm9yIHF1ZXJ5IHJlYWQgaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtY2xpZW50L2NydWQjcmVhZFxuICogQHBhcmFtIHF1ZXJ5XG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAqL1xuY29uc3QgZmluZFVuaXF1ZU9yZGVyID0gYXN5bmMgZnVuY3Rpb24gKHF1ZXJ5OiBhbnkpIHtcblx0cmV0dXJuIChhd2FpdCBnZXRPcmRlck1vZGVsKCkpLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiBxdWVyeSxcblx0XHRpbmNsdWRlOiBnZXRJbmNsdWRlcygpLFxuXHR9KVxufVxuXG4vKipcbiAqIGZvciBxdWVyeSByZWFkIGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2NvbXBvbmVudHMvcHJpc21hLWNsaWVudC9jcnVkI3JlYWRcbiAqIEBwYXJhbSBxdWVyeVxuICogQHJldHVybnMge1Byb21pc2U8Kj59XG4gKi9cbmNvbnN0IGZpbmRGaXJzdCA9IGFzeW5jIGZ1bmN0aW9uIChxdWVyeTogYW55KSB7XG5cdHJldHVybiAoYXdhaXQgZ2V0T3JkZXJNb2RlbCgpKS5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiBxdWVyeSxcblx0XHRpbmNsdWRlOiBnZXRJbmNsdWRlcygpLFxuXHR9KVxufVxuXG5mdW5jdGlvbiBnZXRJbmNsdWRlcygpIHtcblx0cmV0dXJuIHtcblx0XHRwZXJzb25zOiB7XG5cdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdHJlcXVpcmVtZW50czogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fVxufVxuXG4vKipcbiAqIGZvciBtb2RlbCB1c2FnZSByZWFkIGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2NvbXBvbmVudHMvcHJpc21hLWNsaWVudC9jcnVkI3JlYWRcbiAqL1xuY29uc3QgZ2V0T3JkZXJNb2RlbCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIChhd2FpdCBnZXREQigpKS5vcmRlclxufVxuXG5leHBvcnQgeyBnZXRPcmRlck1vZGVsLCBzYXZlTmV3T3JkZXIsIGZpbmRVbmlxdWVPcmRlciwgZmluZEZpcnN0LCBnZXRPcmRlckJ5SUQgfVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0REIoKSB7XG5cdGlmIChkYikge1xuXHRcdHJldHVybiBkYlxuXHR9XG5cdGRiID0gbmV3IFByaXNtYUNsaWVudCgpXG5cdGF3YWl0IGRiLiRjb25uZWN0KClcblx0cmV0dXJuIGRiXG59XG4iLCAiaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwifi9yb290XCJcblxuZXhwb3J0IGNvbnN0IHByZXBhcmVPcmRlckZvclByaXNtYUluc2VydCA9IGZ1bmN0aW9uIChvcmRlcjogT3JkZXIpIHtcblx0b3JkZXIucGVyc29ucy5mb3JFYWNoKChwZXJzb24pID0+IHtcblx0XHRwZXJzb24ucmVxdWlyZW1lbnRzID0geyBjcmVhdGU6IHBlcnNvbi5yZXF1aXJlbWVudHMgfSBhcyBhbnlcblx0fSlcblx0b3JkZXIucGVyc29ucyA9IHsgY3JlYXRlOiBvcmRlci5wZXJzb25zIH0gYXMgYW55XG5cdHJldHVybiBvcmRlclxufVxuXG5cbiIsICJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICd+L3Jvb3QnXG5pbXBvcnQgc2VuZEhUTUxFbWFpbCBmcm9tICcuLi8uLi9oZWxwZXJzL3NlbmRIVE1MRW1haWwnXG5pbXBvcnQgbm9ybWFsaXplT3JkZXIgZnJvbSAnLi4vLi4vaGVscGVycy9ub3JtYWxpemVPcmRlcidcblxuY29uc3QgdHJhbnNsYXRpb25zID0ge1xuXHRzdWJqZWN0OiB7XG5cdFx0Y3M6ICdQb3R2cnplblx1MDBFRCBvYmplZG5hdmt5IHplIHNhdG5pa3UnLFxuXHRcdHVhOiAnXHUwNDFGXHUwNDU2XHUwNDM0XHUwNDQyXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDM0XHUwNDM2XHUwNDM1XHUwNDNEXHUwNDNEXHUwNDRGIFx1MDQzN1x1MDQzMFx1MDQzQ1x1MDQzRVx1MDQzMlx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzRFx1MDQ0RiBcdTA0MzcgXHUwNDQ4XHUwNDMwXHUwNDQ0XHUwNDM4Jyxcblx0fSxcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmQgPSBhc3luYyBmdW5jdGlvbiAob3JkZXI6IE9yZGVyKSB7XG5cdG9yZGVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcmRlcikpXG5cdG5vcm1hbGl6ZU9yZGVyKG9yZGVyKVxuXHRjb25zdCBsYW5nID0gb3JkZXIubGFuZyA9PT0gJ2NzJyA/ICdjcycgOiAndWEnXG5cblx0cmV0dXJuIHNlbmRIVE1MRW1haWwoXG5cdFx0b3JkZXIsXG5cdFx0dHJhbnNsYXRpb25zLnN1YmplY3RbbGFuZ10sXG5cdFx0bGFuZyxcblx0XHRwYXRoLmpvaW4oJy4vYXBwL21haWxlci9odG1sL29yZGVyX2NvbmZpcm0nKSxcblx0XHRwYXRoLmpvaW4oJy4vYXBwL21haWxlci9odG1sL2ltYWdlcycpLFxuXHQpXG59XG5cbiIsICJpbXBvcnQgaGJzLCB7IE5vZGVtYWlsZXJFeHByZXNzSGFuZGxlYmFyc09wdGlvbnMgfSBmcm9tICdub2RlbWFpbGVyLWV4cHJlc3MtaGFuZGxlYmFycydcbmltcG9ydCBmc25hIGZyb20gJ2ZzJ1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcidcbmNvbnN0IGZzID0gZnNuYS5wcm9taXNlc1xuXG5hc3luYyBmdW5jdGlvbiBnZXRJbWFnZXNBdHRhY2htZW50cyhwYXRoOiBzdHJpbmcpIHtcblx0Y29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHBhdGgpXG5cdHJldHVybiBmaWxlc1xuXHRcdC5maWx0ZXIoKGYpID0+ICFbJy4nLCAnLi4nXS5pbmNsdWRlcyhmKSlcblx0XHQubWFwKChmKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWxlbmFtZTogZixcblx0XHRcdFx0Y2lkOiBmLFxuXHRcdFx0XHRwYXRoOiBbcGF0aCwgZl0uam9pbignLycpLFxuXHRcdFx0fVxuXHRcdH0pXG59XG5cbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuXHQvLyBzZXR0aW5nIHVwIGdtYWlsIHNlbmRlciBpcyBiZXN0IGFnYWluc3QgYW50aXNwYW0gZmlsdGVyc1xuXHQvLyB0dXRvcmlhbCBmb3Igc2V0dGluZyB1cCBnbWFpbCBhY2NvdW50IGFsbG93YW5jZTpcblx0Ly8gZm9yIGJldHRlciBzZWN1cml0eSB3aXRoIE9BdXRoMiB3ZSBuZWVkIHJlZGlyZWN0IHBhZ2UgYXQgb3VyIGFwcFxuXHQvLyBodHRwczovL3d3dy5nZWVrc2ZvcmdlZWtzLm9yZy9ob3ctdG8tc2VuZC1lbWFpbC11c2luZy1ub2RlLWpzL1xuXG5cdHNlcnZpY2U6ICdnbWFpbCcsXG5cdGF1dGg6IHtcblx0XHR1c2VyOiAncHJhaGFzYXRuaWsnLFxuXHRcdHBhc3M6ICdLd0FFZXI4dHJpVTRxZ1UnLFxuXHR9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKGRhdGE6YW55LCBzdWJqZWN0OnN0cmluZywgbGFuZzpzdHJpbmcsIHRlbXBsYXRlUGF0aDpzdHJpbmcsIGF0dGFjaG1lbnRzUGF0aDpzdHJpbmcpIHtcblx0Y29uc3QgaGFuZGxlYmFyT3B0aW9uczogTm9kZW1haWxlckV4cHJlc3NIYW5kbGViYXJzT3B0aW9ucyA9IHtcblx0XHR2aWV3RW5naW5lOiB7XG5cdFx0XHRwYXJ0aWFsc0RpcjogW3RlbXBsYXRlUGF0aCwgbGFuZ10uam9pbignLycpLFxuXHRcdFx0ZGVmYXVsdExheW91dDogZmFsc2UsXG5cdFx0XHRoZWxwZXJzOiB7XG5cdFx0XHRcdGluYzogZnVuY3Rpb24gKHZhbHVlOmFueSwgb3B0aW9uczphbnkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQodmFsdWUpICsgMVxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHZpZXdQYXRoOiBbdGVtcGxhdGVQYXRoLCBsYW5nXS5qb2luKCcvJyksXG5cdH1cblx0Y29uc29sZS5sb2coaGFuZGxlYmFyT3B0aW9ucylcblxuXHR0cmFuc3BvcnRlci51c2UoJ2NvbXBpbGUnLCBoYnMoaGFuZGxlYmFyT3B0aW9ucykpXG5cdGNvbnN0IG1haWxPcHRpb25zID0ge1xuXHRcdGZyb206ICdwcmFoYXNhdG5pa0BnbWFpbC5jb20nLFxuXHRcdHRvOiBkYXRhLmVtYWlsLFxuXHRcdHN1YmplY3Q6IHN1YmplY3QsXG5cdFx0dGVtcGxhdGU6ICdpbmRleCcsXG5cdFx0YXR0YWNobWVudHM6IGF3YWl0IGdldEltYWdlc0F0dGFjaG1lbnRzKGF0dGFjaG1lbnRzUGF0aCksXG5cdFx0Y29udGV4dDogeyBvcmRlcjogZGF0YSB9LFxuXHR9XG5cblx0Y29uc3QgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuXHRyZXR1cm4gaW5mb1xufVxuIiwgImltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCJ+L3Jvb3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3JkZXI6IGFueSkge1xuXHRvcmRlci5wZXJzb25zLm1hcCgocDogUGVyc29uKSA9PiB7XG5cdFx0cC5pc01hbiA9IHAuc2V4ID09PSAnbWFuJ1xuXHRcdHAuaXNXb21hbiA9IHAuc2V4ID09PSAnd29tYW4nXG5cdFx0cC5yZXF1aXJlbWVudHMubWFwKChyKSA9PiB7XG5cdFx0XHRyLmRlc2NyaXB0aW9uLnJlcGxhY2UoJ1xcbicsICcsICcpXG5cdFx0XHRyLmRlc2NyaXB0aW9uLnJlcGxhY2UoLyArL2csICcgJylcblx0XHR9KVxuXHR9KVxuXHRvcmRlci5pc0RlbGl2ZXJ5RGVsaXZlcnkgPSBvcmRlci5kZWxpdmVyeV90eXBlID09PSAnZGVsaXZlcnknXG5cdG9yZGVyLmlzRGVsaXZlcnlQaWNrdXAgPSBvcmRlci5kZWxpdmVyeV90eXBlID09PSAncGlja3VwJ1xufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyLCBDaGFuZ2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgQ29udGFjdEluZm8gZnJvbSAnfi9jb21wb25lbnRzL0NvbnRhY3RJbmZvJ1xuaW1wb3J0IERlbGl2ZXJ5SW5mbyBmcm9tICd+L2NvbXBvbmVudHMvRGVsaXZlcnlJbmZvJ1xuaW1wb3J0IHsgT3V0bGV0Q29udGV4dCB9IGZyb20gJ34vcm9vdCdcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbiAoe3JlcXVlc3R9OiB7cmVxdWVzdDogUmVxdWVzdH0pIHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdGNvbnN0IHsgdHJhbnNsYXRvciwgc2V0T3JkZXJJdGVtLCBvcmRlciB9ID0gdXNlT3V0bGV0Q29udGV4dDxPdXRsZXRDb250ZXh0PigpXG5cdGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuXG5cdGNvbnN0IGhhbmRsZUZvcm1JbnB1dENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGV2ZW50KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUsIGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHRzZXRPcmRlckl0ZW0oZXZlbnQudGFyZ2V0Lm5hbWUsIGV2ZW50LnRhcmdldC52YWx1ZSlcblx0fVxuXG5cdGNvbnN0IG5leHRGb3JtOiBNb3VzZUV2ZW50SGFuZGxlciA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0bmF2aWdhdGUoJy9uZXdPcmRlcicsIHsgcmVwbGFjZTogZmFsc2UgfSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHQ8Q29udGFjdEluZm8gdHJhbnNsYXRvcj17dHJhbnNsYXRvcn0gb3JkZXI9e29yZGVyfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZX0gLz5cblx0XHRcdDxEZWxpdmVyeUluZm9cblx0XHRcdFx0dHJhbnNsYXRvcj17dHJhbnNsYXRvcn1cblx0XHRcdFx0aGFuZGxlQ2hhbmdlPXtoYW5kbGVGb3JtSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdG9yZGVyPXtvcmRlcn1cblx0XHRcdFx0bmV4dEZvcm09e25leHRGb3JtfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IFRyYW5zbGF0b3IgfSBmcm9tICd+L2xvY2FsZS90cmFuc2xhdGlvbidcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnfi9yb290J1xuXG50eXBlIENvbnRhY3RJbmZvUGFyYW1zID0ge1xuXHR0cmFuc2xhdG9yOiBUcmFuc2xhdG9yXG5cdGhhbmRsZUNoYW5nZTogUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyXG5cdG9yZGVyOiBPcmRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0SW5mbyh7IHRyYW5zbGF0b3IsIGhhbmRsZUNoYW5nZSwgb3JkZXIgfTogQ29udGFjdEluZm9QYXJhbXMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG5cdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdjb250YWN0Jyl9XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCduYW1lX2FuZF9zdXJuYW1lJyl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImZ1bGxuYW1lXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJBYVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17b3JkZXIuZnVsbG5hbWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3Bob25lJyl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZWxcIlxuXHRcdFx0XHRcdFx0XHRpZD1cInBob25lXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cInBob25lXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCIrMzgwIDExMSAxMTEgMTExXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5waG9uZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZsZXggIHRleHQtWyM5NTdENUVdXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTQgdy00IG14LTFcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdGZpbGxSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdFx0ZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTctNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTkgOWExIDEgMCAwMDAgMnYzYTEgMSAwIDAwMSAxaDFhMSAxIDAgMTAwLTJ2LTNhMSAxIDAgMDAtMS0xSDl6XCJcblx0XHRcdFx0XHRcdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3Bob25lX3RvX2ZpbmRfeW91Jyl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZ3JvdyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdlbWFpbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTU3RDVFXSBmb250LWJvbGQgdGV4dC1zbVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnb3B0aW9uYWwnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJAXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5lbWFpbH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHJhbnNsYXRvciB9IGZyb20gJ34vbG9jYWxlL3RyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICd+L3Jvb3QnXG5cbnR5cGUgRGVsaXZlcnlJbmZvUGFyYW1zID0ge1xuXHR0cmFuc2xhdG9yOiBUcmFuc2xhdG9yXG5cdG9yZGVyOiBPcmRlclxuXHRoYW5kbGVDaGFuZ2U6IFJlYWN0LkNoYW5nZUV2ZW50SGFuZGxlclxuXHRuZXh0Rm9ybTogTW91c2VFdmVudEhhbmRsZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsaXZlcnlJbmZvKHtcblx0dHJhbnNsYXRvcixcblx0b3JkZXIsXG5cdGhhbmRsZUNoYW5nZSxcblx0bmV4dEZvcm0sXG59OiBEZWxpdmVyeUluZm9QYXJhbXMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIG10LTE0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG5cdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdkZWxpdmVyeV9hZGRyZXNzJyl9XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMyBteS02IGl0ZW1zLWNlbnRlciBmb250LWJvbGQgc3BhY2UteC0yIHRleHQtWyMwQTlEQkZdXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhY2NlbnQtWyMwQTlEQkZdXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRpZD1cInJhZGlvZGVsaXZlcnlcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImRlbGl2ZXJ5X3R5cGVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9XCJkZWxpdmVyeVwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZD17b3JkZXIuZGVsaXZlcnlfdHlwZSA9PSAnZGVsaXZlcnknfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicmFkaW9kZWxpdmVyeVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnZGVsaXZlcl90b19hZHJlc3MnKX08L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjZW50LVsjMEE5REJGXVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0aWQ9XCJyYWRpb3BpY2t1cFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZGVsaXZlcnlfdHlwZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT1cInBpY2t1cFwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZD17b3JkZXIuZGVsaXZlcnlfdHlwZSA9PSAncGlja3VwJ31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJhZGlvcGlja3VwXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdwaWNrdXAnKX08L2xhYmVsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e29yZGVyLmRlbGl2ZXJ5X3R5cGUgPT0gJ2RlbGl2ZXJ5JyA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnbmFtZV9hbmRfc3VybmFtZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZWxpdmVyeV9mdWxsbmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkFhXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLmRlbGl2ZXJ5X2Z1bGxuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZmxleCAgdGV4dC1bIzk1N0Q1RV1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGxSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03LTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek05IDlhMSAxIDAgMDAwIDJ2M2ExIDEgMCAwMDEgMWgxYTEgMSAwIDEwMC0ydi0zYTEgMSAwIDAwLTEtMUg5elwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGlja2VyX25hbWUnKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwic3RyZWV0XCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnc3RyZWV0X2FuZF9udW1iZXInKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwic3RyZWV0XCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZWxpdmVyeV9zdHJlZXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTdHJhXHUwMTYxbmlja1x1MDBFMSAxMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV9zdHJlZXR9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2NpdHknKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiY2l0eVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVsaXZlcnlfY2l0eVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlByYWhhXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLmRlbGl2ZXJ5X2NpdHl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctMS8yXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjaXR5XCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnemlwJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBzY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVsaXZlcnlfemlwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiMTQwMDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17b3JkZXIuZGVsaXZlcnlfemlwfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGhvbmUyXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGdyb3cgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3Bob25lJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzk1N0Q1RV0gZm9udC1ib2xkIHRleHQtc21cIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ29wdGlvbmFsJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJwaG9uZTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRlbGl2ZXJ5X3Bob25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiKzM4MCAxMTEgMTExIDExMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV9waG9uZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZsZXggIHRleHQtWyM5NTdENUVdXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTQgdy00IG14LTFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNy00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNOSA5YTEgMSAwIDAwMCAydjNhMSAxIDAgMDAxIDFoMWExIDEgMCAxMDAtMnYtM2ExIDEgMCAwMC0xLTFIOXpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3Bob25lX2lmX290aGVyJyl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMSBiZy1bIzBBOURCRl0gdGV4dC14bCBmbGV4IGZsZXgtY29sIHRleHQtWyNGOEVCREJdIGZvbnQtc2VtaWJvbGQgcC01IG1kOnctMi8zIFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5IYWxhIDEzIHYgUHJhXHUwMTdFc2tcdTAwRTkgdHJcdTAxN0VuaWNpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5CdWJlbnNrXHUwMEU5IG5cdTAwRTFiXHUwMTU5ZVx1MDE3RVx1MDBFRCAzMDY8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjE3MCAwMCBQcmFoYSA3PC9zcGFuPlxuXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm10LTVcIiBocmVmPVwidGVsOis0MjA3Mzc1OTcwNzBcIj5cblx0XHRcdFx0XHRcdFx0XHRNb2JpbDogNzM3IDU5IDcwIDcwXG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIm1haWx0bzppbmZvQHNhdG5pa3ByYWhhLmN6XCI+RS1tYWlsOiBpbmZvQHNhdG5pa3ByYWhhLmN6PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9vNlo4cXprRzZwblRSczdQOFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInctNDQgdGV4dC1iYXNlIG10LTEwIHRleHQtWyNGOEVCREJdIGJvcmRlci0wIHB5LTIgcHgtMyBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgb3V0bGluZS1bI0Y4RUJEQl0gcm91bmRlZC1mdWxsICBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl0gIGhvdmVyOm91dGxpbmUtWyNGOEVCREJdIGZvbnQtc2VtaWJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnc2hvd19vbl9tYXAnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIG15LTEwIG14LTJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtuZXh0Rm9ybX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgIHRleHQtWyMwQTlEQkZdIGJvcmRlci0wIHB5LTQgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgb3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsIHRleHQteGwgaG92ZXI6YmctWyNlYjJmMDZdIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY29udGludWVfdG9fY2xvdGhfc2VsZWN0aW9uJyl9XG5cdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTYgdy02IG1sLTJcIlxuXHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17Mn1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTMgN2w1IDVtMCAwbC01IDVtNS01SDZcIiAvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidiNWNiODA1ZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtU0dZQ1pCSFkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxVTVpLVUkzLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1JRFk1WFk2TS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29uZmlybWF0aW9uJzp7J2lkJzoncm91dGVzL2NvbmZpcm1hdGlvbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb25maXJtYXRpb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29uZmlybWF0aW9uLUc2Q0gzNUpMLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtNk02Sk5JQk0uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25ld09yZGVyJzp7J2lkJzoncm91dGVzL25ld09yZGVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J25ld09yZGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25ld09yZGVyLTRWVUc0TTNMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWVc0UkRXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc3VtbWFyeSc6eydpZCc6J3JvdXRlcy9zdW1tYXJ5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N1bW1hcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3VtbWFyeS1XSlc2Q05URy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1lXNFJEV04uanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUI1Q0I4MDVFLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFHMUMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3RPbEM7QUFBQSxxQkFBb0I7QUFDcEIseUJBQXdCO0FBQ3hCLG9CQUFtQjtBQUNuQixzQkFBcUM7QUFDckMsb0JBQW1COzs7QUNKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBRWIsdUJBQXVCLFNBQVMsb0JBQW9CLGlCQUFpQixjQUFjO0FBQ2pHLFFBQU0sU0FBUyxrQ0FBZSxvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFFL0Usa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDL0MsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ1ZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMkY7QUFFM0YsbUJBQXVEOzs7QUNGdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWUscUJBQXFCLFFBQWdCO0FBQ25ELFFBQU0sbUJBQW1CLFVBQVUsT0FBTyxhQUFNO0FBQ2hELFNBQU8sbUJBQW1CLFFBQXdCO0FBQ2pELFdBQU8saUJBQWlCLFdBQVcsMEJBQTBCO0FBQUE7QUFBQTs7O0FDTC9EO0FBQ0Esb0JBQXFCO0FBUU4sZ0JBQWdCLEVBQUUsWUFBWSxrQkFBZ0M7QUFDNUUsU0FDQyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDakIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFzRSxJQUFHO0FBQUEsS0FDeEYsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQVUsV0FBVTtBQUFBLElBQTRCLEtBQUk7QUFBQSxNQUM3RCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBc0Isb0JBRXZDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxJQUFrQyxNQUFLO0FBQUEsS0FBSSxnQkFJekQsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUztBQUFBLElBQ1QsV0FBVTtBQUFBLEtBRVQsV0FBVyxZQUFZLE9BQ3ZCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUFLLFFBQU87QUFBQSxJQUFLLFNBQVE7QUFBQSxJQUFZLE1BQUs7QUFBQSxJQUFPLE9BQU07QUFBQSxLQUNqRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxVQUFTO0FBQUEsSUFBVSxVQUFTO0FBQUEsSUFBVSxHQUFFO0FBQUEsSUFBa0IsTUFBSztBQUFBLE1BQ3JFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFVBQVM7QUFBQSxJQUFVLFVBQVM7QUFBQSxJQUFVLEdBQUU7QUFBQSxJQUFtQixNQUFLO0FBQUEsUUFHdkUsb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQUssUUFBTztBQUFBLElBQUssU0FBUTtBQUFBLElBQVksTUFBSztBQUFBLElBQU8sT0FBTTtBQUFBLEtBQ2pFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFtQixNQUFLO0FBQUEsTUFDaEMsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQXNCLE1BQUs7QUFBQSxNQUNuQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBbUMsTUFBSztBQUFBLE9BR2xELG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUF1QixXQUFXLFVBQVU7QUFBQTs7Ozs7O0FGYTFELGlCQUFpQjtBQUN2QixTQUFPO0FBQUEsSUFDTixFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUEsSUFDM0IsRUFBRSxLQUFLLFFBQVEsTUFBTTtBQUFBO0FBQUE7QUFJaEIsZ0JBQWdCO0FBQ3RCLFFBQU0sY0FBYztBQUNwQixTQUFPO0FBQUEsSUFDTjtBQUFBLElBQ0EsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04saUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUEsSUFDakIsdUJBQXVCO0FBQUEsSUFDdkIsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBQ1osa0JBQWtCO0FBQUEsSUFDbEIsWUFBWTtBQUFBO0FBQUE7QUFJZCwwQkFBMEIsV0FBa0I7QUFDM0MsU0FBTyxDQUFDLE1BQU0sTUFBTSxTQUFTLGFBQVksWUFBVztBQUFBO0FBRzlDLElBQU0sU0FBUyxPQUFPLEVBQUUsY0FBb0M7QUFoRm5FO0FBaUZDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLElBQUksYUFBYSxJQUFJLFFBQVE7QUFDaEMsV0FBTyxpQkFBaUIsSUFBSSxhQUFhLElBQUk7QUFBQTtBQUk5QyxNQUFJLFNBQVMsT0FBTyxZQUNuQixlQUFRLFFBQ04sSUFBSSxjQUROLG1CQUVHLE1BQU0sS0FDUCxJQUFJLENBQUMsWUFBVyxRQUFPLE1BQU0sVUFBUztBQUd6QyxNQUFJLE9BQU8sU0FBUztBQUNuQixXQUFPLGlCQUFpQixPQUFPO0FBQUE7QUFLaEMsTUFBSSxRQUFRLFFBQVEsSUFBSSxvQkFBb0I7QUFDM0MsV0FBTyxpQkFBaUIsUUFBUSxRQUFRLElBQUk7QUFBQTtBQUU3QyxTQUFPO0FBQUE7QUFHTyxlQUFlO0FBQzdCLFFBQU0sU0FBUztBQUNmLFFBQU0sQ0FBQyxRQUFPLFlBQVksMkJBQVM7QUFBQSxJQUNsQyxlQUFlO0FBQUEsSUFDZixTQUFTO0FBQUE7QUFJVixRQUFNLENBQUMsWUFBWSxpQkFBaUIsMkJBQXFCO0FBQUEsSUFDeEQsV0FBVyxZQUFZO0FBQUEsSUFDdkIsVUFBVTtBQUFBO0FBR1gsUUFBTSxlQUFlLENBQUMsS0FBa0IsVUFBZTtBQUN0RCxVQUFNLFdBQVcsT0FBTyxPQUFPLElBQUk7QUFDbkMsYUFBUyxPQUFPO0FBQ2hCLGFBQVM7QUFBQTtBQUdWLFFBQU0saUJBQ0wsQ0FBQyxvQkFDQSxDQUFDLE1BQU07QUFDTixVQUFNLGNBQWMsbUJBQW1CLE9BQU8sT0FBTztBQUNyRCxrQkFBYztBQUFBLE1BQ2IsV0FBVyxZQUFZO0FBQUEsTUFDdkIsVUFBVTtBQUFBO0FBQUE7QUFJZCxTQUNDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNWLG9DQUFDLFFBQUQsTUFDQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxPQUNBLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQUs7QUFBQSxJQUFDLEtBQUk7QUFBQSxNQUNsQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFLO0FBQUEsSUFBQyxLQUFJO0FBQUEsT0FFbkIsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Ysb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTyxFQUFFLFlBQVkseUJBQXlCLFlBQVk7QUFBQSxLQUM5RCxvQ0FBQyxRQUFEO0FBQUEsSUFBUTtBQUFBLElBQXdCLGdCQUFnQixlQUFlLFdBQVc7QUFBQSxNQUMxRSxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDbEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Ysb0NBQUMsc0JBQUQ7QUFBQSxJQUVDLFNBQVM7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxRQUtILG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUNDLEtBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxJQUNWLEtBQUk7QUFBQSxVQU1ULG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQywwQkFBRDtBQUFBOzs7QUcvS0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUFvRDtBQUdyQyx3QkFBd0I7QUFDdEMsUUFBTSxFQUFFLFlBQVksaUJBQWlCO0FBQ3JDLFNBQ0Msb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2xCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLEtBQUk7QUFBQSxJQUNKLEtBQUk7QUFBQSxNQUVMLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF1RSxtRUFLdkYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQTRELG9JQUczRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBK0UsOERBRzlGLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNmLG9DQUFDLEtBQUQ7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxLQUVKLG9DQUFDLE9BQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsSUFDZixhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsS0FFUixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsUUFHVixvQ0FBQyxLQUFEO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxLQUFJO0FBQUEsS0FFSixvQ0FBQyxPQUFEO0FBQUEsSUFDQyxNQUFLO0FBQUEsSUFDTCxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLEtBRVIsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLFFBR1Ysb0NBQUMsS0FBRDtBQUFBLElBQ0MsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLEtBRUosb0NBQUMsT0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUVSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxXQU1iLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUNDLEtBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxJQUNWLEtBQUk7QUFBQTtBQUFBOzs7QUN6RlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUEyRTtBQUMzRSxvQkFBOEM7OztBQ0Q5QztBQVVlLHVCQUF1QixFQUFFLFlBQVksU0FBUyxZQUFpQztBQUM3RixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUssQ0FBQyxRQUFRLFFBQVEsWUFBWSxHQUFHLFFBQVE7QUFBQSxJQUFXLEtBQUk7QUFBQSxJQUFHLFdBQVU7QUFBQSxNQUM5RSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBc0IsUUFBUSxXQUM3QyxRQUFRLGdCQUFnQixRQUFRLGFBQWEsU0FBUyxJQUFJLFFBQVEsYUFBYSxJQUFJLENBQUMsYUFBYSxVQUFVO0FBQzNHLFdBQ0Msb0NBQUMsUUFBRDtBQUFBLE1BQU0sS0FBSztBQUFBLE1BQU8sV0FBVTtBQUFBLE9BQzFCLFlBQVk7QUFBQSxPQUdYLE1BRUwsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUztBQUFBLElBQ1QsV0FBVTtBQUFBLEtBRVQsV0FBVyxVQUFVO0FBQUE7OztBQzVCM0I7QUFBQSxvQkFBeUM7QUFZMUIsdUJBQXVCLEVBQUUsWUFBWSxnQkFBZ0IsbUJBQW1CLGVBQWUsaUJBQXFDO0FBWjNJO0FBYUMsUUFBTSxRQUFRLGtCQUFrQjtBQUNoQyxTQUNDLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUssR0FBRztBQUFBLElBQXNCLEtBQUk7QUFBQSxJQUFNLFdBQVU7QUFBQSxNQUN2RCxvREFBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBaUQsV0FBVyxVQUFVLGtCQUN0RixvREFBQyxVQUFEO0FBQUEsSUFBUSxTQUFTO0FBQUEsSUFBZSxXQUFVO0FBQUEsS0FDeEMsV0FBVyxVQUFVLGNBSXhCLFNBQ0Esb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsU0FBRDtBQUFBLElBQ0MsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ0MsZ0JBQWdCLGNBQWMsT0FBTztBQUFBLElBQzVDLFVBQVU7QUFBQSxNQUVYLG9EQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxLQUFPLFdBQVcsVUFBVSxTQUMzQyxvREFBQyxTQUFEO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDQyxnQkFBZ0IsY0FBYyxPQUFPO0FBQUEsSUFDNUMsVUFBVTtBQUFBLE1BRVgsb0RBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQVEsV0FBVyxVQUFVLFlBSS9DLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUM5QixXQUFXLFVBQVUsU0FFdkIsb0RBQUMsU0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ0gsY0FBYyxjQUFjO0FBQUEsSUFDbkMsVUFBVTtBQUFBLFFBSWIsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzlCLFdBQVcsVUFBVSxVQUV2QixvREFBQyxTQUFEO0FBQUEsSUFDQyxNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDSCxjQUFjLGNBQWM7QUFBQSxJQUNuQyxVQUFVO0FBQUEsU0FLZCxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvREFBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixXQUFXLFVBQVUsc0JBSXpCLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUFrRCwrQ0FHbEYsb0RBQUMsWUFBRDtBQUFBLElBQ0MsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ0gsY0FBYyxvQkFBYyxhQUFhLE9BQTNCLG1CQUErQjtBQUFBLElBQ3BELFVBQVU7QUFBQSxRQUliLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUM5QixXQUFXLFVBQVUsZ0JBRXZCLG9EQUFDLFNBQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNGLGNBQWMsY0FBYztBQUFBLElBQ3BDLFVBQVU7QUFBQSxRQUliLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUM5QixXQUFXLFVBQVUsZ0JBRXZCLG9EQUFDLFNBQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNGLGNBQWMsY0FBYztBQUFBLElBQzVCLFVBQVU7QUFBQTtBQUFBOzs7QUN6STFCO0FBVWUsd0JBQXdCLEVBQUUsWUFBWSxnQkFBc0M7QUFDMUYsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxVQUFEO0FBQUEsSUFDQyxTQUFTLGFBQWE7QUFBQSxJQUN0QixXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBWSxLQUFJO0FBQUEsSUFBTSxXQUFVO0FBQUEsTUFDekMsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXNCLFdBQVcsVUFBVSxXQUMzRCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBcUMsV0FBVyxVQUFVLFdBRTNFLG9DQUFDLFVBQUQ7QUFBQSxJQUNDLFNBQVMsYUFBYTtBQUFBLElBQ3RCLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUFVLEtBQUk7QUFBQSxJQUFNLFdBQVU7QUFBQSxNQUN2QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBc0IsV0FBVyxVQUFVLFNBQzNELG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFxQyxXQUFXLFVBQVUsV0FFM0Usb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUyxhQUFhO0FBQUEsSUFDdEIsV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQVUsS0FBSTtBQUFBLElBQU0sV0FBVTtBQUFBLE1BQ3ZDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFzQixXQUFXLFVBQVUsU0FDM0Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXFDLFdBQVcsVUFBVTtBQUFBOzs7QUhyQi9ELG9CQUFvQjtBQUNsQyxRQUFNLEVBQUUsWUFBWSxlQUFPLGFBQWE7QUFDeEMsUUFBTSxDQUFDLGdCQUFnQixnQkFBZ0I7QUFDdkMsUUFBTSxDQUFDLGVBQWUsb0JBQW9CLDRCQUFpQixFQUFFLGNBQWM7QUFDM0UsUUFBTSxDQUFDLGVBQWUsb0JBQW9CO0FBRTFDLFFBQU0sb0JBQTBELENBQUMsTUFBTTtBQUN0RSxRQUFJLEVBQUUsT0FBTyxRQUFRLGdCQUFnQjtBQUNwQyxVQUFJLENBQUMsY0FBYztBQUFjLHNCQUFjLGVBQWU7QUFDOUQsb0JBQWMsYUFBYSxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU87QUFBQSxXQUNsRDtBQUNOLG9CQUFjLEVBQUUsT0FBTyxRQUFRLEVBQUUsT0FBTztBQUFBO0FBRXpDLHFCQUFpQjtBQUFBO0FBR2xCLFFBQU0sYUFBYSxDQUFDLFNBQWlCLE9BQWdCO0FBQ3BELFFBQUksSUFBSTtBQUNQLGFBQU0sUUFBUSxNQUFNO0FBQUEsV0FDZDtBQUNOLGFBQU0sUUFBUSxLQUFLO0FBQUE7QUFFcEIsYUFBUztBQUFBO0FBR1YsUUFBTSxhQUNMLENBQUMsWUFDQSxDQUFDLE1BQU07QUFDTixNQUFFO0FBQ0YsaUJBQWE7QUFFYixRQUFJLFdBQVUsT0FBTztBQUNwQixvQkFBYyxRQUFRO0FBQ3RCLG9CQUFjLE1BQU07QUFBQSxXQUNkO0FBQ04sb0JBQWMsUUFBUTtBQUN0QixvQkFBYyxNQUFNO0FBQUE7QUFFckIscUJBQWlCO0FBQUE7QUFFcEIsUUFBTSxXQUFXO0FBRWpCLFFBQU0sV0FBVyxNQUFNO0FBQ3RCLGFBQVMsWUFBWSxFQUFFLFNBQVM7QUFBQTtBQUdqQyxRQUFNLGdCQUFtQyxDQUFDLFVBQVU7QUFDbkQsVUFBTTtBQUNOLFlBQVEsSUFBSSxlQUFlO0FBQzNCLGVBQVcsZUFBZTtBQUMxQjtBQUFBO0FBR0QsUUFBTSxrQkFBa0IsTUFBTTtBQUM3QixpQkFBYTtBQUNiLHFCQUFpQjtBQUNqQixxQkFBaUIsRUFBRSxjQUFjO0FBQUE7QUFHbEMsK0JBQVUsTUFBTTtBQUNmLFFBQUksa0JBQWtCLFFBQVc7QUFDaEMsbUJBQWEsQ0FBQyxPQUFNLFFBQVEsZUFBZSxRQUFRLFFBQVEsT0FBTSxRQUFRLGVBQWU7QUFDeEYsdUJBQWlCLE9BQU0sUUFBUTtBQUMvQixhQUFPLE9BQU0sUUFBUTtBQUNyQixlQUFTO0FBQUE7QUFFVixZQUFRLElBQUk7QUFBQSxLQUNWLENBQUM7QUFFSixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFVBQUQ7QUFBQSxJQUNDLFNBQVMsTUFBTSxTQUFTO0FBQUEsSUFDeEIsV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQUssUUFBTztBQUFBLElBQUssT0FBTTtBQUFBLEtBQ2pDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxRQUdWLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLFdBQVcsVUFBVSxhQUl4QixPQUFNLFdBQVcsT0FBTSxRQUFRLFNBQy9CLE9BQU0sUUFBUSxJQUFJLENBQUMsTUFBTSxRQUFRO0FBQ2hDLFdBQ0Msb0NBQUMsZUFBRDtBQUFBLE1BQWU7QUFBQSxNQUFVLFNBQVM7QUFBQSxNQUFNLFVBQVUsTUFBTSxpQkFBaUI7QUFBQSxNQUFNO0FBQUE7QUFBQSxPQUlqRixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBbUMsV0FBVyxVQUFVLG9CQUV2RSxDQUFDLGlCQUNELG9DQUFDLGdCQUFEO0FBQUEsSUFBZ0I7QUFBQSxJQUF3QixjQUFjO0FBQUEsT0FFdEQsMERBQ0Msb0NBQUMsZUFBRDtBQUFBLElBQ0MsZUFBZTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BRWhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFVBQUQ7QUFBQSxJQUNDLFNBQVM7QUFBQSxJQUNULFdBQVU7QUFBQSxLQUVULFdBQVcsVUFBVSxnQkFFdkIsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUztBQUFBLElBQ1QsV0FBVTtBQUFBLEtBRVQsV0FBVyxVQUFVO0FBQUE7OztBSW5JN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTJDO0FBQzNDLG9CQUErRTs7O0FDRC9FOzs7QUNBQTtBQUFBLG9CQUE2QjtBQUU3QixJQUFJO0FBRUosdUJBQThCO0FBQzdCLE1BQUksSUFBSTtBQUNQLFdBQU87QUFBQTtBQUVSLE9BQUssSUFBSTtBQUNULFFBQU0sR0FBRztBQUNULFNBQU87QUFBQTs7O0FDVlI7QUFFTyxJQUFNLDhCQUE4QixTQUFVLFFBQWM7QUFDbEUsU0FBTSxRQUFRLFFBQVEsQ0FBQyxXQUFXO0FBQ2pDLFdBQU8sZUFBZSxFQUFFLFFBQVEsT0FBTztBQUFBO0FBRXhDLFNBQU0sVUFBVSxFQUFFLFFBQVEsT0FBTTtBQUNoQyxTQUFPO0FBQUE7OztBRkpSLGlCQUFnQjtBQUVoQixJQUFNLE1BQU0sSUFBSTtBQUVoQixJQUFNLG9CQUFvQjtBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxJQUNYLGFBQWEsRUFBRSxNQUFNO0FBQUE7QUFBQSxFQUV0QixVQUFVLENBQUM7QUFBQSxFQUNYLHNCQUFzQjtBQUFBO0FBRXZCLElBQU0sZUFBZTtBQUFBLEVBQ3BCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxJQUNYLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTztBQUFBLElBQ3JCLE9BQU8sRUFBRSxNQUFNO0FBQUEsSUFDZixVQUFVLEVBQUUsTUFBTTtBQUFBLElBQ2xCLEtBQUssRUFBRSxNQUFNO0FBQUEsSUFDYixlQUFlLEVBQUUsTUFBTTtBQUFBLElBQ3ZCLFdBQVcsRUFBRSxNQUFNO0FBQUEsSUFDbkIsY0FBYyxFQUFFLE1BQU0sU0FBUyxPQUFPO0FBQUE7QUFBQSxFQUV2QyxVQUFVLENBQUMsT0FBTyxTQUFTLFlBQVksT0FBTyxpQkFBaUIsYUFBYTtBQUFBLEVBQzVFLHNCQUFzQjtBQUFBO0FBRXZCLElBQU0sY0FBYztBQUFBLEVBQ25CLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxJQUNYLFVBQVUsRUFBRSxNQUFNO0FBQUEsSUFDbEIsT0FBTyxFQUFFLE1BQU07QUFBQSxJQUNmLE9BQU8sRUFBRSxNQUFNO0FBQUEsSUFDZixlQUFlLEVBQUUsTUFBTSxDQUFDLFlBQVk7QUFBQSxJQUNwQyxtQkFBbUIsRUFBRSxNQUFNO0FBQUEsSUFDM0IsaUJBQWlCLEVBQUUsTUFBTTtBQUFBLElBQ3pCLGVBQWUsRUFBRSxNQUFNO0FBQUEsSUFDdkIsY0FBYyxFQUFFLE1BQU07QUFBQSxJQUN0QixnQkFBZ0IsRUFBRSxNQUFNO0FBQUEsSUFDeEIsZUFBZTtBQUFBLElBQ2YsU0FBUyxFQUFFLE1BQU0sU0FBUyxPQUFPO0FBQUEsSUFDakMsT0FBTyxFQUFFLE1BQU0sQ0FBQztBQUFBLElBQ2hCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtBQUFBLElBQ3JCLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQTtBQUFBLEVBRWIsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFBQSxFQUVELHNCQUFzQjtBQUFBO0FBR3ZCLElBQU0sZ0JBQWdCLElBQUksUUFBUTtBQUVsQyxJQUFNLGVBQWUsZUFBZ0IsUUFBYztBQUNsRCxVQUFRLElBQUk7QUFDWixTQUFNLFFBQVE7QUFFZCxNQUFJLENBQUMsY0FBYyxTQUFRO0FBQzFCLFlBQVEsSUFBSSxjQUFjO0FBQzFCLFVBQU0sSUFBSSxNQUFNLEtBQUssVUFBVSxjQUFjO0FBQUE7QUFHOUMsV0FBUSw0QkFBNEI7QUFDcEMsU0FBUSxPQUFNLGlCQUFpQixPQUFPLEVBQUUsTUFBTTtBQUFBO0FBRS9DLElBQU0sZUFBZSxlQUFnQixJQUFZO0FBQ2hELFNBQU8sTUFBTSxnQkFBZ0IsRUFBRTtBQUFBO0FBUWhDLElBQU0sa0JBQWtCLGVBQWdCLE9BQVk7QUFDbkQsU0FBUSxPQUFNLGlCQUFpQixXQUFXO0FBQUEsSUFDekMsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBO0FBQUE7QUFnQlgsdUJBQXVCO0FBQ3RCLFNBQU87QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNsQixJQUFNLGdCQUFnQixpQkFBa0I7QUFDdkMsU0FBUSxPQUFNLFNBQVM7QUFBQTs7O0FHeEh4QjtBQUFBLGtCQUFpQjs7O0FDQWpCO0FBQUEsMkNBQXdEO0FBQ3hELGdCQUFpQjtBQUNqQix3QkFBdUI7QUFDdkIsSUFBTSxLQUFLLGtCQUFLO0FBRWhCLG9DQUFvQyxPQUFjO0FBQ2pELFFBQU0sUUFBUSxNQUFNLEdBQUcsUUFBUTtBQUMvQixTQUFPLE1BQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxTQUFTLElBQ3BDLElBQUksQ0FBQyxNQUFNO0FBQ1gsV0FBTztBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsTUFBTSxDQUFDLE9BQU0sR0FBRyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBS3pCLElBQU0sY0FBYywwQkFBVyxnQkFBZ0I7QUFBQSxFQU05QyxTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUlSLHFDQUErQixNQUFVLFNBQWdCLE1BQWEsY0FBcUIsaUJBQXdCO0FBQ2xILFFBQU0sbUJBQXVEO0FBQUEsSUFDNUQsWUFBWTtBQUFBLE1BQ1gsYUFBYSxDQUFDLGNBQWMsTUFBTSxLQUFLO0FBQUEsTUFDdkMsZUFBZTtBQUFBLE1BQ2YsU0FBUztBQUFBLFFBQ1IsS0FBSyxTQUFVLE9BQVcsU0FBYTtBQUN0QyxpQkFBTyxTQUFTLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUk1QixVQUFVLENBQUMsY0FBYyxNQUFNLEtBQUs7QUFBQTtBQUVyQyxVQUFRLElBQUk7QUFFWixjQUFZLElBQUksV0FBVyxrREFBSTtBQUMvQixRQUFNLGNBQWM7QUFBQSxJQUNuQixNQUFNO0FBQUEsSUFDTixJQUFJLEtBQUs7QUFBQSxJQUNUO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVixhQUFhLE1BQU0scUJBQXFCO0FBQUEsSUFDeEMsU0FBUyxFQUFFLE9BQU87QUFBQTtBQUduQixRQUFNLE9BQU8sTUFBTSxZQUFZLFNBQVM7QUFDeEMsU0FBTztBQUFBOzs7QUN6RFI7QUFFZSxnQ0FBVSxRQUFZO0FBQ3BDLFNBQU0sUUFBUSxJQUFJLENBQUMsTUFBYztBQUNoQyxNQUFFLFFBQVEsRUFBRSxRQUFRO0FBQ3BCLE1BQUUsVUFBVSxFQUFFLFFBQVE7QUFDdEIsTUFBRSxhQUFhLElBQUksQ0FBQyxNQUFNO0FBQ3pCLFFBQUUsWUFBWSxRQUFRLE1BQU07QUFDNUIsUUFBRSxZQUFZLFFBQVEsT0FBTztBQUFBO0FBQUE7QUFHL0IsU0FBTSxxQkFBcUIsT0FBTSxrQkFBa0I7QUFDbkQsU0FBTSxtQkFBbUIsT0FBTSxrQkFBa0I7QUFBQTs7O0FGUGxELElBQU0sZUFBZTtBQUFBLEVBQ3BCLFNBQVM7QUFBQSxJQUNSLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQTtBQUFBO0FBSUMsSUFBTSxPQUFPLGVBQWdCLFFBQWM7QUFDakQsV0FBUSxLQUFLLE1BQU0sS0FBSyxVQUFVO0FBQ2xDLHlCQUFlO0FBQ2YsUUFBTSxPQUFPLE9BQU0sU0FBUyxPQUFPLE9BQU87QUFFMUMsU0FBTyxzQkFDTixRQUNBLGFBQWEsUUFBUSxPQUNyQixNQUNBLG9CQUFLLEtBQUssb0NBQ1Ysb0JBQUssS0FBSztBQUFBOzs7QUpiWixzQkFBNkIsRUFBRSxXQUFpQztBQUMvRCxRQUFNLFNBQVMsT0FBTSxRQUFRLFlBQVksSUFBSTtBQUM3QyxRQUFNLEVBQUUsT0FBTyxNQUFNLGFBQWEsS0FBSyxNQUFNO0FBQzdDLFVBQVEsSUFBSSxNQUFNLEtBQUssTUFBTSxhQUFhO0FBQzFDLFNBQU8sNEJBQVM7QUFBQTtBQUdGLG1CQUFtQjtBQUNqQyxRQUFNLENBQUMsZUFBZSxvQkFBb0I7QUFDMUMsUUFBTSxTQUFTO0FBQ2YsUUFBTSxFQUFFLFlBQVksa0JBQVU7QUFDOUIsUUFBTSxZQUFZLE9BQU8sT0FBTyxJQUFJLEVBQUUsTUFBTSxXQUFXLFVBQVUsZUFBZSxJQUFJLFVBQVU7QUFDOUYsUUFBTSxhQUFnRCxDQUFDLE1BQU07QUFDNUQsTUFBRTtBQUNGLFdBQU8sRUFBRTtBQUFBO0FBRVYsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixPQUFNLFdBQVcsT0FBTSxRQUFRLFNBQy9CLE9BQU0sUUFBUSxJQUFJLENBQUMsTUFBTSxRQUFRO0FBQ2hDLFdBQ0Msb0NBQUMsZUFBRDtBQUFBLE1BQWU7QUFBQSxNQUFVLFNBQVM7QUFBQSxNQUFNLFVBQVUsTUFBTSxpQkFBaUI7QUFBQSxNQUFNO0FBQUE7QUFBQSxPQUlqRixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0MsVUFFbEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXNCLFdBQVcsVUFBVSxhQUMzRCxvQ0FBQyxRQUFELE1BQU0sb0JBQ04sb0NBQUMsUUFBRCxNQUFNLHNCQUNOLG9DQUFDLFFBQUQsTUFBTSxzQkFDTixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBc0IsV0FBVyxVQUFVLHNCQUMzRCxvQ0FBQyxRQUFELE1BQU0sZ0JBQ04sb0NBQUMsUUFBRCxNQUFNLHlCQUNOLG9DQUFDLFFBQUQsTUFBTSxVQUNOLG9DQUFDLFFBQUQsTUFBTSxzQkFFUCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBc0IsV0FBVyxVQUFVLHNCQUMxRCxPQUFNLFFBQVEsSUFBSSxDQUFDLFFBQVEsVUFBVTtBQWxEM0M7QUFtRE0sV0FDQyxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxLQUFLO0FBQUEsT0FDVCxvQ0FBQyxRQUFELE1BQU8sT0FBTyxXQUNkLG9DQUFDLFFBQUQsTUFBTyxhQUFPLGFBQWEsT0FBcEIsbUJBQXdCO0FBQUEsUUFPcEMsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLFVBQVU7QUFBQSxLQUM3QixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxJQUFHO0FBQUEsSUFBVyxNQUFNO0FBQUEsSUFBVSxNQUFLO0FBQUEsSUFBUSxPQUFPLEtBQUssVUFBVTtBQUFBLElBQVksVUFBUTtBQUFBLE1BQzVGLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixXQUFXLFVBQVU7QUFBQTs7O0FPbEU1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBOEM7OztBQ0Q5QztBQVNlLHFCQUFxQixFQUFFLFlBQVksY0FBYyxpQkFBNEI7QUFDM0YsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixXQUFXLFVBQVUsY0FHeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzlCLFdBQVcsVUFBVSxzQkFFdkIsb0NBQUMsU0FBRDtBQUFBLElBQ0MsVUFBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsY0FBYyxPQUFNO0FBQUEsUUFJdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQy9CLFdBQVcsVUFBVSxXQUV2QixvQ0FBQyxTQUFEO0FBQUEsSUFDQyxVQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixjQUFjLE9BQU07QUFBQSxPQUd0QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBNkIsV0FBVTtBQUFBLElBQWUsU0FBUTtBQUFBLElBQVksTUFBSztBQUFBLEtBQ3pGLG9DQUFDLFFBQUQ7QUFBQSxJQUNDLFVBQVM7QUFBQSxJQUNULEdBQUU7QUFBQSxJQUNGLFVBQVM7QUFBQSxPQUdWLFdBQVcsVUFBVSx3QkFHeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQy9CLFdBQVcsVUFBVSxXQUV2QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBb0MsV0FBVyxVQUFVLGVBRTFFLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLFVBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGNBQWMsT0FBTTtBQUFBO0FBQUE7OztBQzNFM0I7QUFXZSxzQkFBc0I7QUFBQSxFQUNwQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ3NCO0FBQ3RCLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osV0FBVyxVQUFVLHVCQUd4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixnQkFBZ0IsT0FBTSxpQkFBaUI7QUFBQSxJQUN2QyxVQUFVO0FBQUEsTUFFWCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBaUIsV0FBVyxVQUFVLHVCQUNyRCxvQ0FBQyxTQUFEO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixnQkFBZ0IsT0FBTSxpQkFBaUI7QUFBQSxJQUN2QyxVQUFVO0FBQUEsTUFFWCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBZSxXQUFXLFVBQVUsYUFFbkQsT0FBTSxpQkFBaUIsYUFDdkIsMERBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzlCLFdBQVcsVUFBVSxzQkFFdkIsb0NBQUMsU0FBRDtBQUFBLElBQ0MsVUFBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsY0FBYyxPQUFNO0FBQUEsT0FHdEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQ0MsT0FBTTtBQUFBLElBQ04sV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLEtBRUwsb0NBQUMsUUFBRDtBQUFBLElBQ0MsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLE9BR1YsV0FBVyxVQUFVLGtCQUd4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDaEMsV0FBVyxVQUFVLHVCQUV2QixvQ0FBQyxTQUFEO0FBQUEsSUFDQyxVQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixjQUFjLE9BQU07QUFBQSxRQUl2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDOUIsV0FBVyxVQUFVLFVBRXZCLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLFVBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGNBQWMsT0FBTTtBQUFBLFFBSXZCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUM5QixXQUFXLFVBQVUsU0FFdkIsb0NBQUMsU0FBRDtBQUFBLElBQ0MsVUFBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsY0FBYyxPQUFNO0FBQUEsUUFJdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2hDLFdBQVcsVUFBVSxXQUV2QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBb0MsV0FBVyxVQUFVLGVBRTFFLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLFVBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGNBQWMsT0FBTTtBQUFBLE9BR3RCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUNDLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxLQUVMLG9DQUFDLFFBQUQ7QUFBQSxJQUNDLFVBQVM7QUFBQSxJQUNULEdBQUU7QUFBQSxJQUNGLFVBQVM7QUFBQSxPQUdWLFdBQVcsVUFBVSx1QkFLekIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsUUFBRCxNQUFNLDJDQUNOLG9DQUFDLFFBQUQsTUFBTSw0Q0FDTixvQ0FBQyxRQUFELE1BQU0sbUJBRU4sb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLElBQU8sTUFBSztBQUFBLEtBQW9CLHdCQUc3QyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBNkIsZ0NBQ3JDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxJQUF3QyxRQUFPO0FBQUEsSUFBUyxLQUFJO0FBQUEsS0FDbkUsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLFdBQVcsVUFBVSxvQkFNM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUztBQUFBLElBQ1QsV0FBVTtBQUFBLEtBRVQsV0FBVyxVQUFVLGdDQUN0QixvQ0FBQyxPQUFEO0FBQUEsSUFDQyxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixRQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsS0FFYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxlQUFjO0FBQUEsSUFBUSxnQkFBZTtBQUFBLElBQVEsR0FBRTtBQUFBO0FBQUE7OztBRjlMckQsaUJBQWlCLEVBQUMsV0FBOEI7QUFBQTtBQUd4QyxpQkFBaUI7QUFDL0IsUUFBTSxFQUFFLFlBQVksY0FBYyxrQkFBVTtBQUM1QyxRQUFNLFdBQVc7QUFFakIsUUFBTSx3QkFBOEQsQ0FBQyxVQUFVO0FBQzlFLFlBQVEsSUFBSSxNQUFNLE9BQU8sTUFBTSxNQUFNLE9BQU87QUFDNUMsaUJBQWEsTUFBTSxPQUFPLE1BQU0sTUFBTSxPQUFPO0FBQUE7QUFHOUMsUUFBTSxXQUE4QixDQUFDLE1BQU07QUFDMUMsTUFBRTtBQUNGLGFBQVMsYUFBYSxFQUFFLFNBQVM7QUFBQTtBQUdsQyxTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLGFBQUQ7QUFBQSxJQUFhO0FBQUEsSUFBd0IsT0FBTztBQUFBLElBQU8sY0FBYztBQUFBLE1BQ2pFLG9DQUFDLGNBQUQ7QUFBQSxJQUNDO0FBQUEsSUFDQSxjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUDtBQUFBO0FBQUE7OztBRzlCSjtBQUFBLElBQU8sMEJBQVEsRUFBQyxXQUFVLFlBQVcsU0FBUSxFQUFDLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sdUJBQXNCLEVBQUMsTUFBSyx1QkFBc0IsWUFBVyxRQUFPLFFBQU8sZ0JBQWUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMENBQXlDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLFFBQVUsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxtQkFBa0IsRUFBQyxNQUFLLG1CQUFrQixZQUFXLFFBQU8sUUFBTyxZQUFXLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHNDQUFxQyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sa0JBQWlCLEVBQUMsTUFBSyxrQkFBaUIsWUFBVyxRQUFPLFFBQU8sV0FBVSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxxQ0FBb0MsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBcEJRMS9DLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix1QkFBdUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1CQUFtQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEekNkLHNCQUFPO0FBRVAsSUFBTSxNQUFNO0FBRVosSUFBSSxJQUFJO0FBR1IsSUFBSSxRQUFRO0FBR1osSUFBSSxJQUNGLFVBQ0EsdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxXQUFXLE1BQU0sUUFBUTtBQUs1RCxJQUFJLElBQUksdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxRQUFRO0FBQ2pELElBQUksSUFBSSx1QkFBUSxPQUFPO0FBRXZCLElBQUksSUFBSSwyQkFBTztBQUVmLElBQUksSUFDRixLQUNBLDBDQUFxQjtBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLGdCQUFnQixDQUFDLFlBQVksUUFBUTtBQUFBO0FBSXpDLElBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUVqQyxJQUFJLE9BQU8sTUFBTSxNQUFNO0FBQ3JCLFVBQVEsSUFBSSxvQ0FBb0M7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
