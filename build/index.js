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
var tailwind_default = "/build/_assets/tailwind-ZCC7EPSQ.css";

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
    className: "max-w-sm md:max-w-md lg:max-w-lg"
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
    className: "py-2 my-10 mx-2 w-full md:w-1/2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: addNextPerson,
    className: "items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
  }, translator.translate("add_person"))), /* @__PURE__ */ React.createElement("hr", {
    className: "w-full my-4 border border-[#957D5E] opacity-20"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 my-10 mx-2 w-full md:w-1/2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: nextForm,
    className: "items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
  }, translator.translate("continue")))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/summary.tsx
var summary_exports = {};
__export(summary_exports, {
  action: () => action,
  default: () => Summary
});
init_react();
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
  const submit = (0, import_remix6.useSubmit)();
  const { translator, order: order3 } = (0, import_remix6.useOutletContext)();
  const fullOrder = Object.assign({}, { lang: translator.language, delivery_time: new Date() }, order3);
  const submitForm = (e) => {
    e.preventDefault();
    submit(e.currentTarget);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
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
var assets_manifest_default = { "version": "1843191b", "entry": { "module": "/build/entry.client-SGYCZBHY.js", "imports": ["/build/_shared/chunk-LUMZKUI3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DUHKBHWW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/confirmation": { "id": "routes/confirmation", "parentId": "root", "path": "confirmation", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/confirmation-G6CH35JL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-6M6JNIBM.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/newOrder": { "id": "routes/newOrder", "parentId": "root", "path": "newOrder", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/newOrder-Q4ZQLN3X.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/summary": { "id": "routes/summary", "parentId": "root", "path": "summary", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/summary-C2TP4RUC.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1843191B.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xvY2FsZS90cmFuc2xhdGlvbi50cyIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9jb25maXJtYXRpb24udHN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9uZXdPcmRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uT25PcmRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uVG9PcmRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvR2VuZGVyU2VsZWN0b3IudHN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9zdW1tYXJ5LnRzeCIsICIuLi9wcmlzbWEvYXBpL09yZGVyLnRzIiwgIi4uL3ByaXNtYS9nZXREQi50cyIsICIuLi9wcmlzbWEvaGVscGVycy50cyIsICIuLi9hcHAvbWFpbGVyL2h0bWwvb3JkZXJfY29uZmlybS9zZW5kLnRzIiwgIi4uL2FwcC9tYWlsZXIvaGVscGVycy9zZW5kSFRNTEVtYWlsLnRzIiwgIi4uL2FwcC9tYWlsZXIvaGVscGVycy9ub3JtYWxpemVPcmRlci50cyIsICJyb3V0ZTovaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9EZWxpdmVyeUluZm8udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmRvdGVudi5jb25maWcoKVxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgZ2V0TG9hZENvbnRleHQ6IChjb250ZXh0KSA9PiBjb250ZXh0LmVudlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9jb25maXJtYXRpb24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9uZXdPcmRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm91dGVzL3N1bW1hcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2NvbmZpcm1hdGlvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29uZmlybWF0aW9uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbmZpcm1hdGlvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbmV3T3JkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld09yZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5ld09yZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zdW1tYXJ5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zdW1tYXJ5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInN1bW1hcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChyZXF1ZXN0LCByZXNwb25zZVN0YXR1c0NvZGUsIHJlc3BvbnNlSGVhZGVycywgcmVtaXhDb250ZXh0KSB7XG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+KVxuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKVxuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdH0pXG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHRyYW5zbGF0aW9uLCB7IFRyYW5zbGF0b3IgfSBmcm9tICcuL2xvY2FsZS90cmFuc2xhdGlvbidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPdXRsZXRDb250ZXh0IHtcblx0dHJhbnNsYXRvcjogVHJhbnNsYXRvclxuXHRzZXRPcmRlckl0ZW06IGFueVxuXHRvcmRlcjogT3JkZXJcblx0c3VibWl0T3JkZXI6IGFueVxuXHRzZXRPcmRlcjogKG9yZGVyOiBPcmRlcikgPT4gdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyIHtcblx0W2tleTogc3RyaW5nXTogYW55XG5cdGZ1bGxuYW1lOiBzdHJpbmdcblx0cGhvbmU6IHN0cmluZ1xuXHRlbWFpbDogc3RyaW5nXG5cdGRlbGl2ZXJ5X3R5cGU6ICdkZWxpdmVyeScgfCAncGlja3VwJ1xuXHRkZWxpdmVyeV9mdWxsbmFtZTogc3RyaW5nXG5cdGRlbGl2ZXJ5X3N0cmVldDogc3RyaW5nXG5cdGRlbGl2ZXJ5X2NpdHk6IHN0cmluZ1xuXHRkZWxpdmVyeV96aXA6IHN0cmluZ1xuXHRkZWxpdmVyeV9waG9uZTogc3RyaW5nXG5cdGRlbGl2ZXJ5X3RpbWU6IHt9XG5cdHBlcnNvbnM6IFBlcnNvbltdXG5cdHN0YXRlOiAnb3Blbidcblx0bGFuZzogJ3VhJyB8ICdjcydcblx0Y3JlYXRlZF9hdDoge31cblx0dXBkYXRlZF9hdDoge31cbn1cblxuZXhwb3J0IHR5cGUgUGVyc29uID0ge1xuXHRba2V5OiBzdHJpbmddOiBhbnlcblx0c2V4OiAnbWFuJyB8ICd3b21hbidcblx0YWR1bHQ6IGJvb2xlYW5cblx0ZnVsbG5hbWU6IHN0cmluZ1xuXHRhZ2U6IG51bWJlclxuXHRjbG90aGluZ19zaXplOiBzdHJpbmdcblx0c2hvZV9zaXplOiBzdHJpbmdcblx0cmVxdWlyZW1lbnRzOiBSZXF1aXJlbWVudFtdXG59XG5cbnR5cGUgUmVxdWlyZW1lbnQgPSB7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuXHRyZXR1cm4gW1xuXHRcdHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuXHRcdHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnIH0sXG5cdF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gYFx1MDE2MGF0blx1MDBFRGsgUHJhaGEgLSBQb21vYyBVa3JhamluXHUwMTFCYFxuXHRyZXR1cm4ge1xuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGtleXdvcmRzOiAndWtyYWluZSxoZWxwLHVrcmFqaW5hLHZcdTAwRTFsa2EnLFxuXHRcdG5hbWU6ICdcdTAxNjBhdG5cdTAwRURrIC0gUG9tb2MgVWtyYWppblx1MDExQicsXG5cdFx0J3R3aXR0ZXI6aW1hZ2UnOiAnaHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3ovb2dfc2hhcmUucG5nJyxcblx0XHQndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuXHRcdCd0d2l0dGVyOnRpdGxlJzogZGVzY3JpcHRpb24sXG5cdFx0J3R3aXR0ZXI6ZGVzY3JpcHRpb24nOiAnUG9tXHUwMEUxaFx1MDBFMW1lIFVrcmFqaW5cdTAxMUIgcyBcdTAxNjBhdG5cdTAwRURrZW0gUHJhaGEnLFxuXHRcdCdvZzp1cmwnOiAnaHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3ovJyxcblx0XHQnb2c6dHlwZSc6ICd3ZWJzaXRlJyxcblx0XHQnb2c6dGl0bGUnOiAnXHUwMTYwYXRuXHUwMEVEayAtIFBvbW9jIFVrcmFqaW5cdTAxMUInLFxuXHRcdCdvZzpkZXNjcmlwdGlvbic6ICdcdTAxNjBhdG5cdTAwRURrIFByYWhhIC0gUG9tb2MgVWtyYWppblx1MDExQicsXG5cdFx0J29nOmltYWdlJzogJ2h0dHBzOi8vYXBwLnNhdG5pa3ByYWhhLmN6L29nX3NoYXJlLnBuZycsXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbVN1cHBvcnRlZChsYW5ndWFnZTogc3RyaW5nKSB7XG5cdHJldHVybiBbJ3VhJywgJ2NzJ10uaW5jbHVkZXMobGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiAnY3MnXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IHsgcmVxdWVzdDogUmVxdWVzdCB9KSA9PiB7XG5cdGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuXHRpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ2xuZycpKSB7XG5cdFx0cmV0dXJuIGdldEZyb21TdXBwb3J0ZWQodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2xuZycpIGFzIHN0cmluZylcblx0fVxuXG5cdC8vIHRoZW4gd2UgdXNlIHRoZSBjb29raWUsIHVzaW5nIHRoaXMgY29va2llIHdlIGNhbiBzdG9yZSB0aGUgdXNlciBwcmVmZXJlbmNlIHdpdGggYSBmb3JtXG5cdGxldCBjb29raWUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG5cdFx0cmVxdWVzdC5oZWFkZXJzXG5cdFx0XHQuZ2V0KCdDb29raWUnKVxuXHRcdFx0Py5zcGxpdCgnOycpXG5cdFx0XHQubWFwKChjb29raWUpID0+IGNvb2tpZS5zcGxpdCgnPScpKSA/PyBbXSxcblx0KVxuXG5cdGlmIChjb29raWUuaTE4bmV4dCkge1xuXHRcdHJldHVybiBnZXRGcm9tU3VwcG9ydGVkKGNvb2tpZS5pMThuZXh0KVxuXHR9XG5cblx0Ly8gYW5kIHRoZW4gd2UgY2hlY2sgdGhlIEFjY2VwdC1MYW5ndWFnZSBoZWFkZXIgYW5kIHVzZSB0aGF0LCB0aGlzIHdpbGwgaGF2ZSB0aGUgdmFsdWVcblx0Ly8gb2YgdGhlIGxhbmd1YWdlIHRoZSB1c2VyIHVzZSBmb3IgdGhlaXIgT1Ncblx0aWYgKHJlcXVlc3QuaGVhZGVycy5oYXMoJ2FjY2VwdC1sYW5ndWFnZScpKSB7XG5cdFx0cmV0dXJuIGdldEZyb21TdXBwb3J0ZWQocmVxdWVzdC5oZWFkZXJzLmdldCgnYWNjZXB0LWxhbmd1YWdlJykgYXMgc3RyaW5nKVxuXHR9XG5cdHJldHVybiAnY3MnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0Y29uc3QgbG9jYWxlID0gdXNlTG9hZGVyRGF0YSgpXG5cdGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoe1xuXHRcdGRlbGl2ZXJ5X3R5cGU6ICdkZWxpdmVyeScsXG5cdFx0cGVyc29uczogW10sXG5cdH0gYXMgdW5rbm93biBhcyBPcmRlcilcblx0Ly8gY29uc3QgW2dlbmRlclNlbGVjdGVkLCBzZXRDdXJyZW50R2VuZGVyXSA9IHVzZVN0YXRlKCk7XG5cblx0Y29uc3QgW3RyYW5zbGF0b3IsIHNldFRyYW5zbGF0b3JdID0gdXNlU3RhdGU8VHJhbnNsYXRvcj4oe1xuXHRcdHRyYW5zbGF0ZTogdHJhbnNsYXRpb24obG9jYWxlKSxcblx0XHRsYW5ndWFnZTogbG9jYWxlLFxuXHR9KVxuXG5cdGNvbnN0IHNldE9yZGVySXRlbSA9IChrZXk6IGtleW9mIE9yZGVyLCB2YWx1ZTogYW55KSA9PiB7XG5cdFx0Y29uc3QgbmV3T3JkZXIgPSBPYmplY3QuYXNzaWduKHt9LCBvcmRlcikgYXMgT3JkZXJcblx0XHRuZXdPcmRlcltrZXldID0gdmFsdWVcblx0XHRzZXRPcmRlcihuZXdPcmRlcilcblx0fVxuXG5cdGNvbnN0IHN3aXRjaExhbmd1YWdlID1cblx0XHQoY3VycmVudExhbmd1YWdlOiBzdHJpbmcpOiBNb3VzZUV2ZW50SGFuZGxlciA9PlxuXHRcdFx0KGUpID0+IHtcblx0XHRcdFx0Y29uc3QgbmV3TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2UgPT0gJ2NzJyA/ICd1YScgOiAnY3MnXG5cdFx0XHRcdHNldFRyYW5zbGF0b3Ioe1xuXHRcdFx0XHRcdHRyYW5zbGF0ZTogdHJhbnNsYXRpb24obmV3TGFuZ3VhZ2UpLFxuXHRcdFx0XHRcdGxhbmd1YWdlOiBuZXdMYW5ndWFnZSxcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUI4MlNWRVdNSjJcIj48L3NjcmlwdD5cblx0XHRcdFx0PHNjcmlwdCBhc3luYyBzcmM9XCIvZ2EuanNcIj48L3NjcmlwdD5cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5IGNsYXNzTmFtZT1cImJnLVsjRjhFQkRCXVwiPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLCBsaW5lSGVpZ2h0OiAnMS40JyB9fT5cblx0XHRcdFx0XHQ8SGVhZGVyIHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9IHN3aXRjaExhbmd1YWdlPXtzd2l0Y2hMYW5ndWFnZSh0cmFuc2xhdG9yLmxhbmd1YWdlKX0gLz5cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBweS0xNCBtZDpweS0yNCBteC1hdXRvIGZsZXggc206ZmxleC1ub3dyYXAgZmxleC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgbWQ6dy0xLzIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206bXItMTAgZmxleCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gbWQ6bWF4LXctbWQgbGc6bWF4LXctbGdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8T3V0bGV0XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQ9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T3JkZXJJdGVtLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmRlcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T3JkZXIsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsICBtdC04IG1kOm10LTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MjcxOTE4ODM5My1iYjcxY2E0NWRiYjk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImlsbHVzdHJhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0PExpdmVSZWxvYWQgLz5cblx0XHRcdDwvYm9keT5cblx0XHQ8L2h0bWw+XG5cdClcbn1cbiIsICJpbXBvcnQgY3MgZnJvbSAnLi90cmFuc2xhdGlvbnMvY3MuanNvbidcbmltcG9ydCB1YSBmcm9tICcuL3RyYW5zbGF0aW9ucy91YS5qc29uJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRpb24obG9jYWxlOiBzdHJpbmcpIHtcblx0Y29uc3QgdHJhbnNsYXRpb25Ub1VzZSA9IGxvY2FsZSA9PSAndWEnID8gdWEgOiAoY3MgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlcblx0cmV0dXJuIGZ1bmN0aW9uIHRyYW5zbGF0ZShzdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRyYW5zbGF0aW9uVG9Vc2Vbc3RyaW5nXSB8fCAnbWlzc2luZyB0cmFuc2xhdGlvbjogJyArIHN0cmluZ1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zbGF0b3IgPSB7XG5cdHRyYW5zbGF0ZTogKHN0cmluZzogc3RyaW5nKSA9PiBzdHJpbmdcblx0bGFuZ3VhZ2U6IHN0cmluZ1xufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBUcmFuc2xhdG9yIH0gZnJvbSAnfi9sb2NhbGUvdHJhbnNsYXRpb24nXG5cbnR5cGUgSGVhZGVyUGFyYW1zID0ge1xuXHR0cmFuc2xhdG9yOiBUcmFuc2xhdG9yXG5cdHN3aXRjaExhbmd1YWdlOiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgdHJhbnNsYXRvciwgc3dpdGNoTGFuZ3VhZ2UgfTogSGVhZGVyUGFyYW1zKSB7XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCBzdGlja3kgdG9wLTAgYmctWyNGOEVCREJdIHotMTAgcGItMlwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiZmxleCB0aXRsZS1mb250IGZvbnQtbWVkaXVtIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktOTAwIG1sLTUgbWQ6bWwtMFwiIHRvPVwiL1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwicmVkLnN2Z1wiIGNsYXNzTmFtZT1cInctMTYgaC0xNiBtZDp3LTMyIG1kOmgtMzJcIiBhbHQ9XCJcdTAxNjBhdG5cdTAwRURrIFByYWhhXCIgLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtbC0zIHRleHQteGwgaGlkZGVuXCI+XHUwMTYwYXRuXHUwMEVEazwvc3Bhbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm1sLWF1dG8gZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHRleHQtYmFzZSBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMCBoaWRkZW5cIiBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0Rmlyc3QgTGlua1xuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtzd2l0Y2hMYW5ndWFnZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQwICBqdXN0aWZ5LWNlbnRlciBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCAgYm9yZGVyLTAgcHktMiBweC01IGZvY3VzOm91dGxpbmUtWyNlYjJmMDZdIG91dGxpbmUgb3V0bGluZS1vZmZzZXQtMiBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgdGV4dC1iYXNlIG1yLTUgaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RyYW5zbGF0b3IubGFuZ3VhZ2UgPT0gJ2NzJyA/IChcblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjE5XCIgdmlld0JveD1cIjAgMCAyNSAxOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMEgyNVYxOUgwVjBaXCIgZmlsbD1cIiNGRkQ1MDBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMEgyNVY5LjVIMFYwWlwiIGZpbGw9XCIjMDA1QkJCXCIgLz5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIxOVwiIHZpZXdCb3g9XCIwIDAgMjUgMTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0wIDBIMjVWOS41SDBWMFpcIiBmaWxsPVwid2hpdGVcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTAgOS41SDI1VjE5SDBWOS41WlwiIGZpbGw9XCIjRDcxNDFBXCIgLz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNC4wNjI1IDkuNUwwIDBWMTlMMTQuMDYyNSA5LjVaXCIgZmlsbD1cIiMxMTQ1N0VcIiAvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtbC0yXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdsYW5ndWFnZScpfTwvc3Bhbj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgT3V0bGV0Q29udGV4dCB9IGZyb20gJ34vcm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlybWF0aW9uKCkge1xuXHRjb25zdCB7IHRyYW5zbGF0b3IsIHNldE9yZGVySXRlbSB9ID0gdXNlT3V0bGV0Q29udGV4dDxPdXRsZXRDb250ZXh0PigpXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTQgbWQ6cHktMjQgbXgtYXV0byBmbGV4IHNtOmZsZXgtbm93cmFwIGZsZXgtd3JhcFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMi8zIG1kOnctMS8yIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNtOm1yLTEwIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtMnhsIHctZnVsbCBoLTcyIHAtMiBcIlxuXHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NTI4NjE2Mjk5NS1hYTYzZDMxYzA2Y2I/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCJcblx0XHRcdFx0XHRcdFx0YWx0PVwiZGVsaXZlcnlcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtNXhsICB0ZXh0LTV4bCBmb250LWJvbGQgdGl0bGUtZm9udCBteS0xMiB0ZXh0LVsjZWIyZjA2XSBtbC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdTAwREFzcFx1MDExQlx1MDE2MW5cdTAxMUIganN0ZSBzaSBvYmplZG5hbGkgb2JsZVx1MDEwRGVuXHUwMEVEXG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWyNlYjJmMDZdIG1sLTEgXCI+XG5cdFx0XHRcdFx0XHRcdERvYnJvdm9sblx1MDBFRGNcdTAwRUQgZFx1MDExQmxhalx1MDBFRCwgY28gbVx1MDE2Rlx1MDE3RW91LCBhYnkgayB2XHUwMEUxbSBvYmplZG5hblx1MDBFOSBvYmxlXHUwMTBEZW5cdTAwRUQgY28gbmVqZFx1MDE1OVx1MDBFRHZlIGRvcmF6aWxvLlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHRleHQteGwgbXktMTIgbWItNiBiZy1bI2ViMmYwNl0gdGV4dC1bI0Y4RUJEQl0gcHktNiBweC00IG1sLTFcIj5cblx0XHRcdFx0XHRcdFx0VnlcdTAxMERrZWp0ZSBuYSBlLW1haWwgc1x1MDBBMGRhbFx1MDE2MVx1MDBFRG1pIGluZm9ybWFjZW1pLlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtdC04IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtOCBtZDpzcGFjZS14LTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZS5waHA/dT1odHRwczovL2FwcC5zYXRuaWtwcmFoYS5jelwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9XCIyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy0xMCBtZDpoLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTggMmgtM2E1IDUgMCAwMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwMTEtMWgzelwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1sLTMgdGV4dC1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD9yZWZfc3JjPXR3c3JjJTVFdGZ3JnF1b3QlM0IlMjBjbGFzcz0mcXVvdCUzQnR3aXR0ZXItc2hhcmUtYnV0dG9uPSZxdW90JTNCJTIwZGF0YS1zaG93LWNvdW50PSZxdW90JTNCZmFsc2U9JnF1b3Q9JnVybD1odHRwczovL2FwcC5zYXRuaWtwcmFoYS5jelwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9XCIyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy0xMCBtZDpoLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwMTMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwMDIzIDN6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWwtMyB0ZXh0LVsjZWIyZjA2XVwiXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdC5tZS9zaGFyZS91cmw/dXJsPWh0dHBzOi8vYXBwLnNhdG5pa3ByYWhhLmN6JnRleHQ9J1NhdG5payBQcmFoYSAtIEFwcCBmb3IgVWtyYWluZSdcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy01IGgtNSBtZDp3LTEwIG1kOmgtMTBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0gMjAuOTc2NjgxLDMuNjk4OTU2OSBjIC0wLjI3MjM3MywxLjEyN2UtNCAtMC41NjA3NDEsMC4wOTY3NzEgLTAuNTYwNzQxLDAuMDk2NzcxIDAsLTFlLTcgLTE4LjE5OTQzNjksNi41NDEyNzkxIC0xOS4yMzg4MzEzLDcuMjY1NzYzMSAtMC4yMjQyNDg3OCwwLjE1NTUzMyAtMC4yOTk1NDkyOCwwLjI0NjI1OSAtMC4zMzY3MDkyOCwwLjM1MjYxNyAtMC4xODA1MjAyLDAuNTE1NzczIDAuMzgwNDU1MDgsMC43NDM2NzcgMC4zODA0NTUwOCwwLjc0MzY3NyBsIDQuNjkxMzk1MywxLjUyNzEyMyBhIDAuNTE0MTcwOTQsMC41MTQxNzA5NCAwIDAgMCAwLjAzODQ0LC0wLjAwMjcgbCAyLjIwMDU0Miw2LjA4OTkzMiBjIDAsMCAwLjE5NTg4LDAuMzk5ODk3IDAuNDM2MTMxLDAuNTM5NTMxIDAuMTUyNTQsMC4xMjUzOTMgMC40NjcwNjIsMC4wNjMzMyAxLjExMDg3NiwtMC41ODA2MjUgMS4wMTA1MjMyLC0xLjAxMDc1MSAxLjk4MDk4MTIsLTEuODQ3Njk2IDIuNDY1NjY3MiwtMi4yNTQ4OTIgMS42MTg3NjUsMS4xMTc0MTcgMy4zNDUyOTUsMi4zNDA5MjIgNC4wOTc1MTUsMi45ODc5NjQgYSAxLjMwMjI0NiwxLjMwMjI0NiAwIDAgMCAwLjk0OTE0OSwwLjM2NzE5OSBjIDAuNzExMDMsLTAuMDI2NzUgMC45MDkzODEsLTAuODA3MzA3IDAuOTA5MzgxLC0wLjgwNzMwNyAwLDAgMy4zMTcyMjksLTEzLjM0NzYyODQgMy40MjgwNzIsLTE1LjEzNjAxNDEgMC4wMTEwNSwtMC4xNzUwNzQ0IDAuMDI1MDksLTAuMjg2NTEzOSAwLjAyNjUxLC0wLjQwNjk2NzcgQSAxLjQ5ODc4NDMsMS40OTg3ODQzIDAgMCAwIDIxLjUzNDc3LDQuMDY3NDgxNCAwLjQ0MzA1MTk3LDAuNDQzMDUxOTcgMCAwIDAgMjEuMjMyNTI3LDMuNzM3NDAwMSBjIC0wLjA3NTc2LC0wLjAyODc5MiAtMC4xNjUwNTUsLTAuMDM4NDgxIC0wLjI1NTg0NiwtMC4wMzg0NDMgelwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgbWQ6bWwtYXV0byB3LWZ1bGwgIG10LTggbWQ6bXQtMFwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQzNDk5NDU5LWQxNDYwOTQ2YmRjNj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1UbDhmR1JsYkdsMlpYSjVmR1Z1ZkRCOGZEQjhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcblx0XHRcdFx0XHRcdGFsdD1cImlsbHVzdHJhdGlvblwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBDaGFuZ2VFdmVudEhhbmRsZXIsIE1vdXNlRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IFBlcnNvbk9uT3JkZXIgZnJvbSAnfi9jb21wb25lbnRzL1BlcnNvbk9uT3JkZXInXG5pbXBvcnQgUGVyc29uVG9PcmRlciBmcm9tICd+L2NvbXBvbmVudHMvUGVyc29uVG9PcmRlcidcbmltcG9ydCBHZW5kZXJTZWxlY3RvciwgeyBHZW5kZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvR2VuZGVyU2VsZWN0b3InXG5pbXBvcnQgeyBPdXRsZXRDb250ZXh0LCBQZXJzb24gfSBmcm9tICd+L3Jvb3QnXG5cbi8qXG4tIHNob3cgYWxyZWFkeSBhZGRlZCBwZW9wbGVcbi0gaWYgbm8gcGVvcGxlIGFkZGVkLCBzaG93IGdlbmRlciBzZWxlY3QgdG8gYWRkIDEgcGVyc29uXG4tIGlmIGNsaWNrIG9uIGFkZCBuZXcgcGVyc29uLCB2YWxpZGF0ZSBpbnB1dHMgYW5kIGFkZCB0aGUgcGVyc29uIHRvIGFkZGVkIHBlb3BsZSBhbmQgc2hvdyBnZW5kZXIgc2VsZWN0IGFnYWluXG4tIGFmdGVyIGNsaWNrIG9uIGdlbmRlciBzZWxlY3QsIHNob3cgZW1wdHkgZm9ybVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3T3JkZXIoKSB7XG5cdGNvbnN0IHsgdHJhbnNsYXRvciwgb3JkZXIsIHNldE9yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0PE91dGxldENvbnRleHQ+KClcblx0Y29uc3QgW3NlbGVjdGVkR2VuZGVyLCBzZWxlY3RHZW5kZXJdID0gdXNlU3RhdGU8R2VuZGVyPigpXG5cdGNvbnN0IFtuZXdQZXJzb25JbmZvLCBzZXROZXdQZXJzb25JbmZvXSA9IHVzZVN0YXRlPFBlcnNvbj4oeyByZXF1aXJlbWVudHM6IFtdIH0gYXMgdW5rbm93biBhcyBQZXJzb24pXG5cdGNvbnN0IFtlZGl0aW5nUGVyc29uLCBzZXRFZGl0aW5nUGVyc29uXSA9IHVzZVN0YXRlPG51bWJlcj4oKVxuXG5cdGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5uYW1lID09ICdyZXF1aXJlbWVudHMnKSB7XG5cdFx0XHRpZiAoIW5ld1BlcnNvbkluZm8ucmVxdWlyZW1lbnRzKSBuZXdQZXJzb25JbmZvLnJlcXVpcmVtZW50cyA9IFtdXG5cdFx0XHRuZXdQZXJzb25JbmZvLnJlcXVpcmVtZW50c1swXSA9IHsgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3UGVyc29uSW5mb1tlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0fVxuXHRcdHNldE5ld1BlcnNvbkluZm8obmV3UGVyc29uSW5mbylcblx0fVxuXG5cdGNvbnN0IHNhdmVQZXJzb24gPSAoZGV0YWlsczogUGVyc29uLCBpZD86IG51bWJlcikgPT4ge1xuXHRcdGlmIChpZCkge1xuXHRcdFx0b3JkZXIucGVyc29uc1tpZF0gPSBkZXRhaWxzXG5cdFx0fSBlbHNlIHtcblx0XHRcdG9yZGVyLnBlcnNvbnMucHVzaChkZXRhaWxzKVxuXHRcdH1cblx0XHRzZXRPcmRlcihvcmRlcilcblx0fVxuXG5cdGNvbnN0IHBpY2tHZW5kZXIgPVxuXHRcdChnZW5kZXI6IEdlbmRlcik6IE1vdXNlRXZlbnRIYW5kbGVyID0+XG5cdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0c2VsZWN0R2VuZGVyKGdlbmRlcilcblx0XHRcdFx0Ly8gbmV3UGVyc29uSW5mb1tcImdlbmRlclwiXSA9IGdlbmRlcjtcblx0XHRcdFx0aWYgKGdlbmRlciA9PSAna2lkJykge1xuXHRcdFx0XHRcdG5ld1BlcnNvbkluZm8uYWR1bHQgPSBmYWxzZVxuXHRcdFx0XHRcdG5ld1BlcnNvbkluZm8uc2V4ID0gJ21hbidcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdQZXJzb25JbmZvLmFkdWx0ID0gdHJ1ZVxuXHRcdFx0XHRcdG5ld1BlcnNvbkluZm8uc2V4ID0gZ2VuZGVyXG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0TmV3UGVyc29uSW5mbyhuZXdQZXJzb25JbmZvKVxuXHRcdFx0fVxuXHRjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcblxuXHRjb25zdCBuZXh0Rm9ybSA9ICgpID0+IHtcblx0XHRuYXZpZ2F0ZSgnL3N1bW1hcnknLCB7IHJlcGxhY2U6IGZhbHNlIH0pXG5cdH1cblxuXHRjb25zdCBhZGROZXh0UGVyc29uOiBNb3VzZUV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zb2xlLmxvZyhuZXdQZXJzb25JbmZvLCBlZGl0aW5nUGVyc29uKVxuXHRcdHNhdmVQZXJzb24obmV3UGVyc29uSW5mbywgZWRpdGluZ1BlcnNvbilcblx0XHRjbGVhblBlcnNvbkZvcm0oKVxuXHR9XG5cblx0Y29uc3QgY2xlYW5QZXJzb25Gb3JtID0gKCkgPT4ge1xuXHRcdHNlbGVjdEdlbmRlcih1bmRlZmluZWQpXG5cdFx0c2V0RWRpdGluZ1BlcnNvbih1bmRlZmluZWQpXG5cdFx0c2V0TmV3UGVyc29uSW5mbyh7IHJlcXVpcmVtZW50czogW10gfSBhcyB1bmtub3duIGFzIFBlcnNvbilcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGVkaXRpbmdQZXJzb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c2VsZWN0R2VuZGVyKCFvcmRlci5wZXJzb25zW2VkaXRpbmdQZXJzb25dLmFkdWx0ID8gJ2tpZCcgOiBvcmRlci5wZXJzb25zW2VkaXRpbmdQZXJzb25dLnNleClcblx0XHRcdHNldE5ld1BlcnNvbkluZm8ob3JkZXIucGVyc29uc1tlZGl0aW5nUGVyc29uXSlcblx0XHRcdGRlbGV0ZSBvcmRlci5wZXJzb25zW2VkaXRpbmdQZXJzb25dXG5cdFx0XHRzZXRPcmRlcihvcmRlcilcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coZWRpdGluZ1BlcnNvbilcblx0fSwgW2VkaXRpbmdQZXJzb25dKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWItMTJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycpfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG1sLTEgbXQtMSB0ZXh0LVsjMEE5REJGXSBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIG91dGxpbmUtWyMwQTlEQkZdIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOmJnLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjRjhFQkRCXSBob3ZlcjpvdXRsaW5lLVsjZWIyZjA2XSBmaWxsLVsjMEE5REJGXSBob3ZlcjpmaWxsLVsjRjhFQkRCXVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMThcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtLjI5MyA4LjI5MyA0LTRhMSAxIDAgMSAxIDEuNDE0IDEuNDE0TDMuNDE1IDhIMTVhMSAxIDAgMSAxIDAgMkgzLjQxNWwyLjI5NCAyLjI5NGExIDEgMCAxIDEtMS40MTQgMS40MTRsLTQtNGEuOTk3Ljk5NyAwIDAgMS0uMDAyLTEuNDE0WlwiIC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgdGV4dC1ncmF5LTkwMCBtbC01XCI+XG5cdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ29yZGVyJyl9XG5cdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtvcmRlci5wZXJzb25zICYmIG9yZGVyLnBlcnNvbnMubGVuZ3RoID8gKFxuXHRcdFx0XHRvcmRlci5wZXJzb25zLm1hcCgoaXRlbSwga2V5KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxQZXJzb25Pbk9yZGVyIGtleT17a2V5fSBkZXRhaWxzPXtpdGVtfSBlZGl0SXRlbT17KCkgPT4gc2V0RWRpdGluZ1BlcnNvbihrZXkpfSB0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfSAvPlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1tZWRpdW0gbXktNVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnd2hvX2lzX3dlYXJpbmcnKX08L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHR7IXNlbGVjdGVkR2VuZGVyID8gKFxuXHRcdFx0XHQ8R2VuZGVyU2VsZWN0b3IgdHJhbnNsYXRvcj17dHJhbnNsYXRvcn0gc2VsZWN0R2VuZGVyPXtwaWNrR2VuZGVyfSAvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8UGVyc29uVG9PcmRlclxuXHRcdFx0XHRcdFx0Y3VycmVudFBlcnNvbj17bmV3UGVyc29uSW5mb31cblx0XHRcdFx0XHRcdHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9XG5cdFx0XHRcdFx0XHRzZWxlY3RlZEdlbmRlcj17c2VsZWN0ZWRHZW5kZXJ9XG5cdFx0XHRcdFx0XHRoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRkaXNjYXJkUGVyc29uPXtjbGVhblBlcnNvbkZvcm19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbXktMTAgbXgtMiB3LWZ1bGwgbWQ6dy0xLzJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17YWRkTmV4dFBlcnNvbn1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGJvcmRlci0wIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgcm91bmRlZC1mdWxsICBmb250LXNlbWlib2xkIHRleHQtbGcgYmctWyNlYjJmMDZdIHRleHQtWyNGOEVCREJdIG91dGxpbmUtWyNlYjJmMDZdIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnYWRkX3BlcnNvbicpfVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cInctZnVsbCBteS00IGJvcmRlciBib3JkZXItWyM5NTdENUVdIG9wYWNpdHktMjBcIiAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiBteS0xMCBteC0yIHctZnVsbCBtZDp3LTEvMlwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtuZXh0Rm9ybX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyICB0ZXh0LVsjMEE5REJGXSBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIG91dGxpbmUtWyMwQTlEQkZdIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOmJnLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjRjhFQkRCXSBob3ZlcjpvdXRsaW5lLVsjZWIyZjA2XVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY29udGludWUnKX1cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2xhdG9yIH0gZnJvbSAnfi9sb2NhbGUvdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tICd+L3Jvb3QnXG5cbnR5cGUgUGVyc29uT25PcmRlclBhcmFtcyA9IHtcblx0dHJhbnNsYXRvcjogVHJhbnNsYXRvclxuXHRkZXRhaWxzOiBQZXJzb25cblx0ZWRpdEl0ZW06IE1vdXNlRXZlbnRIYW5kbGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbk9uT3JkZXIoeyB0cmFuc2xhdG9yLCBkZXRhaWxzLCBlZGl0SXRlbSB9OiBQZXJzb25Pbk9yZGVyUGFyYW1zKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtMnhsIGdyb3VwIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSB3LWZ1bGwgaC03MiBwLTIgYm9yZGVyIGJvcmRlci1bI2ViMmYwNl1cIj5cblx0XHRcdDxpbWcgc3JjPXshZGV0YWlscy5hZHVsdCA/ICdraWQuc3ZnJyA6IGAke2RldGFpbHMuc2V4fS5zdmdgfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJteS00IG14LTJcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBteC00XCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntkZXRhaWxzLmZ1bGxuYW1lfTwvc3Bhbj5cblx0XHRcdFx0e2RldGFpbHMucmVxdWlyZW1lbnRzICYmIGRldGFpbHMucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDAgPyBkZXRhaWxzLnJlcXVpcmVtZW50cy5tYXAoKHJlcXVpcmVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJweS0yXCI+XG5cdFx0XHRcdFx0XHRcdHtyZXF1aXJlbWVudC5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pIDogbnVsbH1cblxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17ZWRpdEl0ZW19XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl0gbXQtNCBib3JkZXItMCBweS0yIHB4LTUgb3V0bGluZSBvdXRsaW5lLVsjRjhFQkRCXSByb3VuZGVkLWZ1bGxcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdlZGl0Jyl9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zbGF0b3IgfSBmcm9tICd+L2xvY2FsZS90cmFuc2xhdGlvbidcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJ34vcm9vdCdcblxudHlwZSBQZXJzb25Ub09yZGVyUHJvcHMgPSB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0c2VsZWN0ZWRHZW5kZXI6ICdtYW4nIHwgJ3dvbWFuJyB8ICdraWQnXG5cdGhhbmRsZUlucHV0Q2hhbmdlOiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXJcbiAgY3VycmVudFBlcnNvbjogUGVyc29uXG4gIGRpc2NhcmRQZXJzb246IE1vdXNlRXZlbnRIYW5kbGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvblRvT3JkZXIoeyB0cmFuc2xhdG9yLCBzZWxlY3RlZEdlbmRlciwgaGFuZGxlSW5wdXRDaGFuZ2UsIGN1cnJlbnRQZXJzb24sIGRpc2NhcmRQZXJzb24gfTogUGVyc29uVG9PcmRlclByb3BzKSB7XG5cdGNvbnN0IGlzS2lkID0gc2VsZWN0ZWRHZW5kZXIgPT0gJ2tpZCdcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLVsjMEE5REJGXSB0ZXh0LVsjRjhFQkRCXSB3LWZ1bGwgaC04MCBwLTIgYm9yZGVyIGJvcmRlci1bIzBBOURCRl0gZmxleCBmbGV4LWNvbCBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2Ake3NlbGVjdGVkR2VuZGVyfS5zdmdgfSBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGdyb3VwLWhvdmVyOnRleHQtWyMwQTlEQkZdXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKHNlbGVjdGVkR2VuZGVyKX08L3NwYW4+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtkaXNjYXJkUGVyc29ufSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGdyb3VwLWhvdmVyOnRleHQtWyMwQTlEQkZdIG10LTQgYm9yZGVyLTAgcHktMiBweC01IG91dGxpbmUgb3V0bGluZS1bI0Y4RUJEQl0gZ3JvdXAtaG92ZXI6b3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3JlbW92ZScpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2lzS2lkICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTMgbXktNiBmb250LWJvbGQgc3BhY2UteC0yIHRleHQtWyMwQTlEQkZdIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0XHRpZD1cImJveVwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzZXhcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT1cIm1hblwiXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtjdXJyZW50UGVyc29uLnNleCA9PSAnbWFuJ31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYm95XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdib3knKX08L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0XHRpZD1cImdpcmxcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwic2V4XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJ3b21hblwiXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtjdXJyZW50UGVyc29uLnNleCA9PSAnd29tYW4nfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnaXJsXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdnaXJsJyl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTEvNVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2FnZScpfVxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwiYWdlXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImFnZVwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiMjJcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2N1cnJlbnRQZXJzb24uYWdlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctNC81XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnbmFtZScpfVxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJmdWxsbmFtZVwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQWFcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2N1cnJlbnRQZXJzb24uZnVsbG5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LWJvbGQgdGl0bGUtZm9udCBteS00IHRleHQtZ3JheS05MDAgbWwtMVwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdzZWxlY3RfY2xvdGhlcycpfVxuXHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRKYWtcdTAwRTkgb2JsZVx1MDEwRGVuXHUwMEVEIHBvdFx1MDE1OWVidWpldGU/XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRcdGlkPVwicmVxdWlyZW1lbnRzXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cInJlcXVpcmVtZW50c1wiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiNSBrcyB0cmlrYSwgMiBrcyBrYWxob3R5XCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50UGVyc29uLnJlcXVpcmVtZW50c1swXT8uZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy0yLzVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdjbG90aF9zaXplJyl9XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cImNsb3RoaW5nX3NpemVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbG90aGluZ19zaXplXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50UGVyc29uLmNsb3RoaW5nX3NpemV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctMi81XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnc2hvZXNfc2l6ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJzaG9lX3NpemVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJzaG9lX3NpemVcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiNDRcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50UGVyc29uLnNob2Vfc2l6ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2xhdG9yIH0gZnJvbSAnfi9sb2NhbGUvdHJhbnNsYXRpb24nXG5cbmV4cG9ydCB0eXBlIEdlbmRlclNlbGVjdG9yUGFyYW1zID0ge1xuXHR0cmFuc2xhdG9yOiBUcmFuc2xhdG9yXG5cdHNlbGVjdEdlbmRlcjogKGdlbmRlcjogR2VuZGVyKSA9PiBNb3VzZUV2ZW50SGFuZGxlclxufVxuXG5leHBvcnQgdHlwZSBHZW5kZXIgPSAnbWFuJyB8ICd3b21hbicgfCAna2lkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5kZXJTZWxlY3Rvcih7IHRyYW5zbGF0b3IsIHNlbGVjdEdlbmRlciB9OiBHZW5kZXJTZWxlY3RvclBhcmFtcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17c2VsZWN0R2VuZGVyKCd3b21hbicpfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxpbWcgc3JjPVwid29tYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3dvbWFuJyl9PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3BpY2snKX08L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17c2VsZWN0R2VuZGVyKCdtYW4nKX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC0yeGwgZ3JvdXAgYmctd2hpdGUgdy0xLzMgaC04MCBwLTIgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZmxleCBmbGV4LWNvbCBob3Zlcjpib3JkZXItWyMwQTlEQkZdIGhvdmVyOmJnLVsjRjhFQkRCXSBpdGVtcy1jZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8aW1nIHNyYz1cIm1hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnbWFuJyl9PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3BpY2snKX08L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17c2VsZWN0R2VuZGVyKCdraWQnKX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC0yeGwgZ3JvdXAgYmctd2hpdGUgdy0xLzMgaC04MCBwLTIgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZmxleCBmbGV4LWNvbCBob3Zlcjpib3JkZXItWyMwQTlEQkZdIGhvdmVyOmJnLVsjRjhFQkRCXSBpdGVtcy1jZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8aW1nIHNyYz1cImtpZC5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgna2lkJyl9PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3BpY2snKX08L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQsIHVzZU5hdmlnYXRlLCBMaW5rLCB1c2VTdWJtaXQsIHJlZGlyZWN0LCBGb3JtIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBPcmRlciwgT3V0bGV0Q29udGV4dCB9IGZyb20gJ34vcm9vdCdcbmltcG9ydCB7IHNhdmVOZXdPcmRlciwgZ2V0T3JkZXJCeUlEIH0gZnJvbSAnLi4vLi4vcHJpc21hL2FwaS9PcmRlcidcbmltcG9ydCB7IHNlbmQgfSBmcm9tICd+L21haWxlci9odG1sL29yZGVyX2NvbmZpcm0vc2VuZCdcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9OiB7IHJlcXVlc3Q6IFJlcXVlc3QgfSkge1xuXHRjb25zdCBvcmRlciA9IChhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCkpLmdldCgnb3JkZXInKVxuXHRjb25zdCB7IGlkIH0gPSBhd2FpdCBzYXZlTmV3T3JkZXIoSlNPTi5wYXJzZShvcmRlciBhcyBzdHJpbmcpIGFzIE9yZGVyKVxuXHRjb25zb2xlLmxvZyhhd2FpdCBzZW5kKGF3YWl0IGdldE9yZGVyQnlJRChpZCkgYXMgT3JkZXIpKVxuXHRyZXR1cm4gcmVkaXJlY3QoJy9jb25maXJtYXRpb24nKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdW1tYXJ5KCkge1xuXHRjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKVxuXHRjb25zdCB7IHRyYW5zbGF0b3IsIG9yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0PE91dGxldENvbnRleHQ+KClcblx0Y29uc3QgZnVsbE9yZGVyID0gT2JqZWN0LmFzc2lnbih7fSwge2xhbmc6IHRyYW5zbGF0b3IubGFuZ3VhZ2UsIGRlbGl2ZXJ5X3RpbWU6IG5ldyBEYXRlKCl9LCBvcmRlcilcblx0Y29uc3Qgc3VibWl0Rm9ybTogRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRzdWJtaXQoZS5jdXJyZW50VGFyZ2V0KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMS8yIHB4LTFcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ29yZGVyZXInKX08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4+T2xlbmEgS3lhc2hlbmtvPC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuPiszOCAwNTAzIDIwIDIwIDQ2PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuPk9sZW5hLktAZ21haWwuY29tPC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnZGVsaXZlcnlfYWRkcmVzcycpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj5KYWt1YiBIZXJ0bDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj5VIFVyYW5pZSAyNywgUHJhaGEgNzwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj4xNzAwMDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj4rNDIwIDc3NiA3NjQgMjIxPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMS8yXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtdC00XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdmb3Jfd2hvX2FuZF93aGF0Jyl9PC9zcGFuPlxuXHRcdFx0XHRcdHtvcmRlci5wZXJzb25zLm1hcCgocGVyc29uLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57cGVyc29uLmZ1bGxuYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57cGVyc29uLnJlcXVpcmVtZW50c1swXT8uZGVzY3JpcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctZnVsbCBteS0xMCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBvcGFjaXR5LTIwXCIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiBteC0yIHctZnVsbCBtZDp3LTEvMlwiPlxuXHRcdFx0XHQ8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImZvcm1EYXRhXCIgdHlwZT17J2hpZGRlbid9IG5hbWU9XCJvcmRlclwiIHZhbHVlPXtKU09OLnN0cmluZ2lmeShmdWxsT3JkZXIpfSByZWFkT25seT48L2lucHV0PlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGJvcmRlci0wIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgcm91bmRlZC1mdWxsICBmb250LXNlbWlib2xkIHRleHQtbGcgYmctWyNlYjJmMDZdIHRleHQtWyNGOEVCREJdIG91dGxpbmUtWyNlYjJmMDZdIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXVwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCd0b19vcmRlcicpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IGdldERCIH0gZnJvbSAnfi8uLi9wcmlzbWEvZ2V0REInXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ34vcm9vdCdcbmltcG9ydCB7IHByZXBhcmVPcmRlckZvclByaXNtYUluc2VydCB9IGZyb20gJ34vLi4vcHJpc21hL2hlbHBlcnMnXG5pbXBvcnQgQWp2IGZyb20gJ2Fqdidcbi8vIGNvbnN0IHsgZ2V0REIgfSA9IHJlcXVpcmUoJy4uL2dldERCJylcbmNvbnN0IGFqdiA9IG5ldyBBanYoKVxuXG5jb25zdCByZXF1aXJlbWVudFNjaGVtYSA9IHtcblx0dHlwZTogJ29iamVjdCcsXG5cdHByb3BlcnRpZXM6IHtcblx0XHRkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHR9LFxuXHRyZXF1aXJlZDogWydkZXNjcmlwdGlvbiddLFxuXHRhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG59XG5jb25zdCBwZXJzb25TY2hlbWEgPSB7XG5cdHR5cGU6ICdvYmplY3QnLFxuXHRwcm9wZXJ0aWVzOiB7XG5cdFx0c2V4OiB7IGVudW06IFsnbWFuJywgJ3dvbWFuJ10gfSxcblx0XHRhZHVsdDogeyB0eXBlOiAnYm9vbGVhbicgfSxcblx0XHRmdWxsbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGFnZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGNsb3RoaW5nX3NpemU6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRzaG9lX3NpemU6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRyZXF1aXJlbWVudHM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHJlcXVpcmVtZW50U2NoZW1hIH0sXG5cdH0sXG5cdHJlcXVpcmVkOiBbJ3NleCcsICdhZHVsdCcsICdmdWxsbmFtZScsICdhZ2UnLCAnY2xvdGhpbmdfc2l6ZScsICdzaG9lX3NpemUnLCAncmVxdWlyZW1lbnRzJ10sXG5cdGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn1cbmNvbnN0IG9yZGVyU2NoZW1hID0ge1xuXHR0eXBlOiAnb2JqZWN0Jyxcblx0cHJvcGVydGllczoge1xuXHRcdGZ1bGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0cGhvbmU6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRlbWFpbDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3R5cGU6IHsgZW51bTogWydkZWxpdmVyeScsICdwaWNrdXAnXSB9LFxuXHRcdGRlbGl2ZXJ5X2Z1bGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0ZGVsaXZlcnlfc3RyZWV0OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0ZGVsaXZlcnlfY2l0eTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3ppcDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3Bob25lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0ZGVsaXZlcnlfdGltZToge30sXG5cdFx0cGVyc29uczogeyB0eXBlOiAnYXJyYXknLCBpdGVtczogcGVyc29uU2NoZW1hIH0sXG5cdFx0c3RhdGU6IHsgZW51bTogWydvcGVuJ10gfSxcblx0XHRsYW5nOiB7IGVudW06IFsndWEnLCAnY3MnXSB9LFxuXHRcdGNyZWF0ZWRfYXQ6IHt9LFxuXHRcdHVwZGF0ZWRfYXQ6IHt9LFxuXHR9LFxuXHRyZXF1aXJlZDogW1xuXHRcdCdmdWxsbmFtZScsXG5cdFx0J3Bob25lJyxcblx0XHQnZW1haWwnLFxuXHRcdCdkZWxpdmVyeV90eXBlJyxcblx0XHQnZGVsaXZlcnlfZnVsbG5hbWUnLFxuXHRcdCdkZWxpdmVyeV9zdHJlZXQnLFxuXHRcdCdkZWxpdmVyeV9jaXR5Jyxcblx0XHQnZGVsaXZlcnlfemlwJyxcblx0XHQnZGVsaXZlcnlfcGhvbmUnLFxuXHRcdCdwZXJzb25zJyxcblx0XHQnc3RhdGUnLFxuXHRdLFxuXHRhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG59XG5cbmNvbnN0IHZhbGlkYXRlT3JkZXIgPSBhanYuY29tcGlsZShvcmRlclNjaGVtYSlcblxuY29uc3Qgc2F2ZU5ld09yZGVyID0gYXN5bmMgZnVuY3Rpb24gKG9yZGVyOiBPcmRlcikge1xuXHRjb25zb2xlLmxvZyhvcmRlcilcblx0b3JkZXIuc3RhdGUgPSAnb3BlbidcblxuXHRpZiAoIXZhbGlkYXRlT3JkZXIob3JkZXIpKSB7XG5cdFx0Y29uc29sZS5sb2codmFsaWRhdGVPcmRlci5lcnJvcnMpXG5cdFx0dGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHZhbGlkYXRlT3JkZXIuZXJyb3JzKSlcblx0fVxuXG5cdG9yZGVyID0gcHJlcGFyZU9yZGVyRm9yUHJpc21hSW5zZXJ0KG9yZGVyKVxuXHRyZXR1cm4gKGF3YWl0IGdldE9yZGVyTW9kZWwoKSkuY3JlYXRlKHsgZGF0YTogb3JkZXIgYXMgYW55IH0pXG59XG5jb25zdCBnZXRPcmRlckJ5SUQgPSBhc3luYyBmdW5jdGlvbiAoaWQ6IG51bWJlcikge1xuXHRyZXR1cm4gYXdhaXQgZmluZFVuaXF1ZU9yZGVyKHsgaWQgfSlcbn1cblxuLyoqXG4gKiBmb3IgcXVlcnkgcmVhZCBodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9jb25jZXB0cy9jb21wb25lbnRzL3ByaXNtYS1jbGllbnQvY3J1ZCNyZWFkXG4gKiBAcGFyYW0gcXVlcnlcbiAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuICovXG5jb25zdCBmaW5kVW5pcXVlT3JkZXIgPSBhc3luYyBmdW5jdGlvbiAocXVlcnk6IGFueSkge1xuXHRyZXR1cm4gKGF3YWl0IGdldE9yZGVyTW9kZWwoKSkuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHF1ZXJ5LFxuXHRcdGluY2x1ZGU6IGdldEluY2x1ZGVzKCksXG5cdH0pXG59XG5cbi8qKlxuICogZm9yIHF1ZXJ5IHJlYWQgaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtY2xpZW50L2NydWQjcmVhZFxuICogQHBhcmFtIHF1ZXJ5XG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAqL1xuY29uc3QgZmluZEZpcnN0ID0gYXN5bmMgZnVuY3Rpb24gKHF1ZXJ5OiBhbnkpIHtcblx0cmV0dXJuIChhd2FpdCBnZXRPcmRlck1vZGVsKCkpLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHF1ZXJ5LFxuXHRcdGluY2x1ZGU6IGdldEluY2x1ZGVzKCksXG5cdH0pXG59XG5cbmZ1bmN0aW9uIGdldEluY2x1ZGVzKCkge1xuXHRyZXR1cm4ge1xuXHRcdHBlcnNvbnM6IHtcblx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0cmVxdWlyZW1lbnRzOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9XG59XG5cbi8qKlxuICogZm9yIG1vZGVsIHVzYWdlIHJlYWQgaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtY2xpZW50L2NydWQjcmVhZFxuICovXG5jb25zdCBnZXRPcmRlck1vZGVsID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gKGF3YWl0IGdldERCKCkpLm9yZGVyXG59XG5cbmV4cG9ydCB7IGdldE9yZGVyTW9kZWwsIHNhdmVOZXdPcmRlciwgZmluZFVuaXF1ZU9yZGVyLCBmaW5kRmlyc3QsIGdldE9yZGVyQnlJRCB9XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmxldCBkYjogUHJpc21hQ2xpZW50XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREQigpIHtcblx0aWYgKGRiKSB7XG5cdFx0cmV0dXJuIGRiXG5cdH1cblx0ZGIgPSBuZXcgUHJpc21hQ2xpZW50KClcblx0YXdhaXQgZGIuJGNvbm5lY3QoKVxuXHRyZXR1cm4gZGJcbn1cbiIsICJpbXBvcnQgeyBPcmRlciB9IGZyb20gXCJ+L3Jvb3RcIlxuXG5leHBvcnQgY29uc3QgcHJlcGFyZU9yZGVyRm9yUHJpc21hSW5zZXJ0ID0gZnVuY3Rpb24gKG9yZGVyOiBPcmRlcikge1xuXHRvcmRlci5wZXJzb25zLmZvckVhY2goKHBlcnNvbikgPT4ge1xuXHRcdHBlcnNvbi5yZXF1aXJlbWVudHMgPSB7IGNyZWF0ZTogcGVyc29uLnJlcXVpcmVtZW50cyB9IGFzIGFueVxuXHR9KVxuXHRvcmRlci5wZXJzb25zID0geyBjcmVhdGU6IG9yZGVyLnBlcnNvbnMgfSBhcyBhbnlcblx0cmV0dXJuIG9yZGVyXG59XG5cblxuIiwgImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ34vcm9vdCdcbmltcG9ydCBzZW5kSFRNTEVtYWlsIGZyb20gJy4uLy4uL2hlbHBlcnMvc2VuZEhUTUxFbWFpbCdcbmltcG9ydCBub3JtYWxpemVPcmRlciBmcm9tICcuLi8uLi9oZWxwZXJzL25vcm1hbGl6ZU9yZGVyJ1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG5cdHN1YmplY3Q6IHtcblx0XHRjczogJ1BvdHZyemVuXHUwMEVEIG9iamVkbmF2a3kgemUgc2F0bmlrdScsXG5cdFx0dWE6ICdcdTA0MUZcdTA0NTZcdTA0MzRcdTA0NDJcdTA0MzJcdTA0MzVcdTA0NDBcdTA0MzRcdTA0MzZcdTA0MzVcdTA0M0RcdTA0M0RcdTA0NEYgXHUwNDM3XHUwNDMwXHUwNDNDXHUwNDNFXHUwNDMyXHUwNDNCXHUwNDM1XHUwNDNEXHUwNDNEXHUwNDRGIFx1MDQzNyBcdTA0NDhcdTA0MzBcdTA0NDRcdTA0MzgnLFxuXHR9LFxufVxuXG5leHBvcnQgY29uc3Qgc2VuZCA9IGFzeW5jIGZ1bmN0aW9uIChvcmRlcjogT3JkZXIpIHtcblx0b3JkZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yZGVyKSlcblx0bm9ybWFsaXplT3JkZXIob3JkZXIpXG5cdGNvbnN0IGxhbmcgPSBvcmRlci5sYW5nID09PSAnY3MnID8gJ2NzJyA6ICd1YSdcblxuXHRyZXR1cm4gc2VuZEhUTUxFbWFpbChcblx0XHRvcmRlcixcblx0XHR0cmFuc2xhdGlvbnMuc3ViamVjdFtsYW5nXSxcblx0XHRsYW5nLFxuXHRcdHBhdGguam9pbignLi9hcHAvbWFpbGVyL2h0bWwvb3JkZXJfY29uZmlybScpLFxuXHRcdHBhdGguam9pbignLi9hcHAvbWFpbGVyL2h0bWwvaW1hZ2VzJyksXG5cdClcbn1cblxuIiwgImltcG9ydCBoYnMsIHsgTm9kZW1haWxlckV4cHJlc3NIYW5kbGViYXJzT3B0aW9ucyB9IGZyb20gJ25vZGVtYWlsZXItZXhwcmVzcy1oYW5kbGViYXJzJ1xuaW1wb3J0IGZzbmEgZnJvbSAnZnMnXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJ1xuY29uc3QgZnMgPSBmc25hLnByb21pc2VzXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEltYWdlc0F0dGFjaG1lbnRzKHBhdGg6IHN0cmluZykge1xuXHRjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIocGF0aClcblx0cmV0dXJuIGZpbGVzXG5cdFx0LmZpbHRlcigoZikgPT4gIVsnLicsICcuLiddLmluY2x1ZGVzKGYpKVxuXHRcdC5tYXAoKGYpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZpbGVuYW1lOiBmLFxuXHRcdFx0XHRjaWQ6IGYsXG5cdFx0XHRcdHBhdGg6IFtwYXRoLCBmXS5qb2luKCcvJyksXG5cdFx0XHR9XG5cdFx0fSlcbn1cblxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG5cdC8vIHNldHRpbmcgdXAgZ21haWwgc2VuZGVyIGlzIGJlc3QgYWdhaW5zdCBhbnRpc3BhbSBmaWx0ZXJzXG5cdC8vIHR1dG9yaWFsIGZvciBzZXR0aW5nIHVwIGdtYWlsIGFjY291bnQgYWxsb3dhbmNlOlxuXHQvLyBmb3IgYmV0dGVyIHNlY3VyaXR5IHdpdGggT0F1dGgyIHdlIG5lZWQgcmVkaXJlY3QgcGFnZSBhdCBvdXIgYXBwXG5cdC8vIGh0dHBzOi8vd3d3LmdlZWtzZm9yZ2Vla3Mub3JnL2hvdy10by1zZW5kLWVtYWlsLXVzaW5nLW5vZGUtanMvXG5cblx0c2VydmljZTogJ2dtYWlsJyxcblx0YXV0aDoge1xuXHRcdHVzZXI6ICdwcmFoYXNhdG5paycsXG5cdFx0cGFzczogJ0t3QUVlcjh0cmlVNHFnVScsXG5cdH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoZGF0YTphbnksIHN1YmplY3Q6c3RyaW5nLCBsYW5nOnN0cmluZywgdGVtcGxhdGVQYXRoOnN0cmluZywgYXR0YWNobWVudHNQYXRoOnN0cmluZykge1xuXHRjb25zdCBoYW5kbGViYXJPcHRpb25zOiBOb2RlbWFpbGVyRXhwcmVzc0hhbmRsZWJhcnNPcHRpb25zID0ge1xuXHRcdHZpZXdFbmdpbmU6IHtcblx0XHRcdHBhcnRpYWxzRGlyOiBbdGVtcGxhdGVQYXRoLCBsYW5nXS5qb2luKCcvJyksXG5cdFx0XHRkZWZhdWx0TGF5b3V0OiBmYWxzZSxcblx0XHRcdGhlbHBlcnM6IHtcblx0XHRcdFx0aW5jOiBmdW5jdGlvbiAodmFsdWU6YW55LCBvcHRpb25zOmFueSkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCh2YWx1ZSkgKyAxXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0dmlld1BhdGg6IFt0ZW1wbGF0ZVBhdGgsIGxhbmddLmpvaW4oJy8nKSxcblx0fVxuXHRjb25zb2xlLmxvZyhoYW5kbGViYXJPcHRpb25zKVxuXG5cdHRyYW5zcG9ydGVyLnVzZSgnY29tcGlsZScsIGhicyhoYW5kbGViYXJPcHRpb25zKSlcblx0Y29uc3QgbWFpbE9wdGlvbnMgPSB7XG5cdFx0ZnJvbTogJ3ByYWhhc2F0bmlrQGdtYWlsLmNvbScsXG5cdFx0dG86IGRhdGEuZW1haWwsXG5cdFx0c3ViamVjdDogc3ViamVjdCxcblx0XHR0ZW1wbGF0ZTogJ2luZGV4Jyxcblx0XHRhdHRhY2htZW50czogYXdhaXQgZ2V0SW1hZ2VzQXR0YWNobWVudHMoYXR0YWNobWVudHNQYXRoKSxcblx0XHRjb250ZXh0OiB7IG9yZGVyOiBkYXRhIH0sXG5cdH1cblxuXHRjb25zdCBpbmZvID0gYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpXG5cdHJldHVybiBpbmZvXG59XG4iLCAiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIn4vcm9vdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcmRlcjogYW55KSB7XG5cdG9yZGVyLnBlcnNvbnMubWFwKChwOiBQZXJzb24pID0+IHtcblx0XHRwLmlzTWFuID0gcC5zZXggPT09ICdtYW4nXG5cdFx0cC5pc1dvbWFuID0gcC5zZXggPT09ICd3b21hbidcblx0XHRwLnJlcXVpcmVtZW50cy5tYXAoKHIpID0+IHtcblx0XHRcdHIuZGVzY3JpcHRpb24ucmVwbGFjZSgnXFxuJywgJywgJylcblx0XHRcdHIuZGVzY3JpcHRpb24ucmVwbGFjZSgvICsvZywgJyAnKVxuXHRcdH0pXG5cdH0pXG5cdG9yZGVyLmlzRGVsaXZlcnlEZWxpdmVyeSA9IG9yZGVyLmRlbGl2ZXJ5X3R5cGUgPT09ICdkZWxpdmVyeSdcblx0b3JkZXIuaXNEZWxpdmVyeVBpY2t1cCA9IG9yZGVyLmRlbGl2ZXJ5X3R5cGUgPT09ICdwaWNrdXAnXG59XG4iLCAiaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIENoYW5nZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZW1peCdcbmltcG9ydCBDb250YWN0SW5mbyBmcm9tICd+L2NvbXBvbmVudHMvQ29udGFjdEluZm8nXG5pbXBvcnQgRGVsaXZlcnlJbmZvIGZyb20gJ34vY29tcG9uZW50cy9EZWxpdmVyeUluZm8nXG5pbXBvcnQgeyBPdXRsZXRDb250ZXh0IH0gZnJvbSAnfi9yb290J1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uICh7cmVxdWVzdH06IHtyZXF1ZXN0OiBSZXF1ZXN0fSkge1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0Y29uc3QgeyB0cmFuc2xhdG9yLCBzZXRPcmRlckl0ZW0sIG9yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0PE91dGxldENvbnRleHQ+KClcblx0Y29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG5cblx0Y29uc3QgaGFuZGxlRm9ybUlucHV0Q2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZXZlbnQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSwgZXZlbnQudGFyZ2V0LnZhbHVlKVxuXHRcdHNldE9yZGVySXRlbShldmVudC50YXJnZXQubmFtZSwgZXZlbnQudGFyZ2V0LnZhbHVlKVxuXHR9XG5cblx0Y29uc3QgbmV4dEZvcm06IE1vdXNlRXZlbnRIYW5kbGVyID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRuYXZpZ2F0ZSgnL25ld09yZGVyJywgeyByZXBsYWNlOiBmYWxzZSB9KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdDxDb250YWN0SW5mbyB0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfSBvcmRlcj17b3JkZXJ9IGhhbmRsZUNoYW5nZT17aGFuZGxlRm9ybUlucHV0Q2hhbmdlfSAvPlxuXHRcdFx0PERlbGl2ZXJ5SW5mb1xuXHRcdFx0XHR0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfVxuXHRcdFx0XHRoYW5kbGVDaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZX1cblx0XHRcdFx0b3JkZXI9e29yZGVyfVxuXHRcdFx0XHRuZXh0Rm9ybT17bmV4dEZvcm19XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgVHJhbnNsYXRvciB9IGZyb20gJ34vbG9jYWxlL3RyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICd+L3Jvb3QnXG5cbnR5cGUgQ29udGFjdEluZm9QYXJhbXMgPSB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0aGFuZGxlQ2hhbmdlOiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXJcblx0b3JkZXI6IE9yZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RJbmZvKHsgdHJhbnNsYXRvciwgaGFuZGxlQ2hhbmdlLCBvcmRlciB9OiBDb250YWN0SW5mb1BhcmFtcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cblx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2NvbnRhY3QnKX1cblx0XHRcdFx0PC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ25hbWVfYW5kX3N1cm5hbWUnKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiZnVsbG5hbWVcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkFhXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5mdWxsbmFtZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGhvbmUnKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInRlbFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwicGhvbmVcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwicGhvbmVcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIiszODAgMTExIDExMSAxMTFcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLnBob25lfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZmxleCAgdGV4dC1bIzk1N0Q1RV1cIj5cblx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNy00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNOSA5YTEgMSAwIDAwMCAydjNhMSAxIDAgMDAxIDFoMWExIDEgMCAxMDAtMnYtM2ExIDEgMCAwMC0xLTFIOXpcIlxuXHRcdFx0XHRcdFx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGhvbmVfdG9fZmluZF95b3UnKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBncm93IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2VtYWlsJyl9XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM5NTdENUVdIGZvbnQtYm9sZCB0ZXh0LXNtXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdvcHRpb25hbCcpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkBcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLmVtYWlsfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2xhdG9yIH0gZnJvbSAnfi9sb2NhbGUvdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ34vcm9vdCdcblxudHlwZSBEZWxpdmVyeUluZm9QYXJhbXMgPSB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0b3JkZXI6IE9yZGVyXG5cdGhhbmRsZUNoYW5nZTogUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyXG5cdG5leHRGb3JtOiBNb3VzZUV2ZW50SGFuZGxlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxpdmVyeUluZm8oe1xuXHR0cmFuc2xhdG9yLFxuXHRvcmRlcixcblx0aGFuZGxlQ2hhbmdlLFxuXHRuZXh0Rm9ybSxcbn06IERlbGl2ZXJ5SW5mb1BhcmFtcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbXQtMTRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cblx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2RlbGl2ZXJ5X2FkZHJlc3MnKX1cblx0XHRcdFx0PC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC0zIG15LTYgaXRlbXMtY2VudGVyIGZvbnQtYm9sZCBzcGFjZS14LTIgdGV4dC1bIzBBOURCRl1cIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIlxuXHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcblx0XHRcdFx0XHRcdGlkPVwicmFkaW9kZWxpdmVyeVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZGVsaXZlcnlfdHlwZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT1cImRlbGl2ZXJ5XCJcblx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPXtvcmRlci5kZWxpdmVyeV90eXBlID09ICdkZWxpdmVyeSd9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJyYWRpb2RlbGl2ZXJ5XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdkZWxpdmVyX3RvX2FkcmVzcycpfTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhY2NlbnQtWyMwQTlEQkZdXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRpZD1cInJhZGlvcGlja3VwXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJkZWxpdmVyeV90eXBlXCJcblx0XHRcdFx0XHRcdHZhbHVlPVwicGlja3VwXCJcblx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPXtvcmRlci5kZWxpdmVyeV90eXBlID09ICdwaWNrdXAnfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicmFkaW9waWNrdXBcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3BpY2t1cCcpfTwvbGFiZWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7b3JkZXIuZGVsaXZlcnlfdHlwZSA9PSAnZGVsaXZlcnknID8gKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCduYW1lX2FuZF9zdXJuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRlbGl2ZXJ5X2Z1bGxuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17b3JkZXIuZGVsaXZlcnlfZnVsbG5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmbGV4ICB0ZXh0LVsjOTU3RDVFXVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTctNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTkgOWExIDEgMCAwMDAgMnYzYTEgMSAwIDAwMSAxaDFhMSAxIDAgMTAwLTJ2LTNhMSAxIDAgMDAtMS0xSDl6XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xpcFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdwaWNrZXJfbmFtZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJzdHJlZXRcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdzdHJlZXRfYW5kX251bWJlcicpfVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJzdHJlZXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRlbGl2ZXJ5X3N0cmVldFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlN0cmFcdTAxNjFuaWNrXHUwMEUxIDEyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLmRlbGl2ZXJ5X3N0cmVldH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjaXR5XCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY2l0eScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJjaXR5XCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZWxpdmVyeV9jaXR5XCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUHJhaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17b3JkZXIuZGVsaXZlcnlfY2l0eX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy0xLzJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImNpdHlcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCd6aXAnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicHNjXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZWxpdmVyeV96aXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCIxNDAwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV96aXB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwaG9uZTJcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZ3JvdyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGhvbmUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTU3RDVFXSBmb250LWJvbGQgdGV4dC1zbVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnb3B0aW9uYWwnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRlbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBob25lMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVsaXZlcnlfcGhvbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCIrMzgwIDExMSAxMTEgMTExXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLmRlbGl2ZXJ5X3Bob25lfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZmxleCAgdGV4dC1bIzk1N0Q1RV1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGxSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03LTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek05IDlhMSAxIDAgMDAwIDJ2M2ExIDEgMCAwMDEgMWgxYTEgMSAwIDEwMC0ydi0zYTEgMSAwIDAwLTEtMUg5elwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGhvbmVfaWZfb3RoZXInKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xIGJnLVsjMEE5REJGXSB0ZXh0LXhsIGZsZXggZmxleC1jb2wgdGV4dC1bI0Y4RUJEQl0gZm9udC1zZW1pYm9sZCBwLTUgbWQ6dy0yLzMgXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkhhbGEgMTMgdiBQcmFcdTAxN0Vza1x1MDBFOSB0clx1MDE3RW5pY2k8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkJ1YmVuc2tcdTAwRTkgblx1MDBFMWJcdTAxNTllXHUwMTdFXHUwMEVEIDMwNjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+MTcwIDAwIFByYWhhIDc8L3NwYW4+XG5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibXQtNVwiIGhyZWY9XCJ0ZWw6KzQyMDczNzU5NzA3MFwiPlxuXHRcdFx0XHRcdFx0XHRcdE1vYmlsOiA3MzcgNTkgNzAgNzBcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwibWFpbHRvOmluZm9Ac2F0bmlrcHJhaGEuY3pcIj5FLW1haWw6IGluZm9Ac2F0bmlrcHJhaGEuY3o8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL282WjhxemtHNnBuVFJzN1A4XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidy00NCB0ZXh0LWJhc2UgbXQtMTAgdGV4dC1bI0Y4RUJEQl0gYm9yZGVyLTAgcHktMiBweC0zIGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjRjhFQkRCXSByb3VuZGVkLWZ1bGwgIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXSAgaG92ZXI6b3V0bGluZS1bI0Y4RUJEQl0gZm9udC1zZW1pYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdzaG93X29uX21hcCcpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgbXktMTAgbXgtMlwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e25leHRGb3JtfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHctZnVsbCAgdGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktNCBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgdGV4dC14bCBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpvdXRsaW5lLVsjZWIyZjA2XVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdjb250aW51ZV90b19jbG90aF9zZWxlY3Rpb24nKX1cblx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImgtNiB3LTYgbWwtMlwiXG5cdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNFwiXG5cdFx0XHRcdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPXsyfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMyA3bDUgNW0wIDBsLTUgNW01LTVINlwiIC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzE4NDMxOTFiJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1TR1lDWkJIWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTFVNWktVSTMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LURVSEtCSFdXLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb25maXJtYXRpb24nOnsnaWQnOidyb3V0ZXMvY29uZmlybWF0aW9uJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvbmZpcm1hdGlvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb25maXJtYXRpb24tRzZDSDM1SkwuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC02TTZKTklCTS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbmV3T3JkZXInOnsnaWQnOidyb3V0ZXMvbmV3T3JkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbmV3T3JkZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbmV3T3JkZXItUTRaUUxOM1guanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdW1tYXJ5Jzp7J2lkJzoncm91dGVzL3N1bW1hcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc3VtbWFyeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdW1tYXJ5LUMyVFA0UlVDLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMTg0MzE5MUIuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDdE9sQztBQUFBLHFCQUFvQjtBQUNwQix5QkFBd0I7QUFDeEIsb0JBQW1CO0FBQ25CLHNCQUFxQztBQUNyQyxvQkFBbUI7OztBQ0puQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFFYix1QkFBdUIsU0FBUyxvQkFBb0IsaUJBQWlCLGNBQWM7QUFDakcsUUFBTSxTQUFTLGtDQUFlLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUUvRSxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUMvQyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDVlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUEyRjtBQUUzRixtQkFBdUQ7OztBQ0Z2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxxQkFBcUIsUUFBZ0I7QUFDbkQsUUFBTSxtQkFBbUIsVUFBVSxPQUFPLGFBQU07QUFDaEQsU0FBTyxtQkFBbUIsUUFBd0I7QUFDakQsV0FBTyxpQkFBaUIsV0FBVywwQkFBMEI7QUFBQTtBQUFBOzs7QUNML0Q7QUFDQSxvQkFBcUI7QUFRTixnQkFBZ0IsRUFBRSxZQUFZLGtCQUFnQztBQUM1RSxTQUNDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNqQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQXNFLElBQUc7QUFBQSxLQUN4RixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBVSxXQUFVO0FBQUEsSUFBNEIsS0FBSTtBQUFBLE1BQzdELG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFzQixvQkFFdkMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLElBQWtDLE1BQUs7QUFBQSxLQUFJLGdCQUl6RCxvQ0FBQyxVQUFEO0FBQUEsSUFDQyxTQUFTO0FBQUEsSUFDVCxXQUFVO0FBQUEsS0FFVCxXQUFXLFlBQVksT0FDdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQUssUUFBTztBQUFBLElBQUssU0FBUTtBQUFBLElBQVksTUFBSztBQUFBLElBQU8sT0FBTTtBQUFBLEtBQ2pFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFVBQVM7QUFBQSxJQUFVLFVBQVM7QUFBQSxJQUFVLEdBQUU7QUFBQSxJQUFrQixNQUFLO0FBQUEsTUFDckUsb0NBQUMsUUFBRDtBQUFBLElBQU0sVUFBUztBQUFBLElBQVUsVUFBUztBQUFBLElBQVUsR0FBRTtBQUFBLElBQW1CLE1BQUs7QUFBQSxRQUd2RSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBSyxTQUFRO0FBQUEsSUFBWSxNQUFLO0FBQUEsSUFBTyxPQUFNO0FBQUEsS0FDakUsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW1CLE1BQUs7QUFBQSxNQUNoQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBc0IsTUFBSztBQUFBLE1BQ25DLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFtQyxNQUFLO0FBQUEsT0FHbEQsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXVCLFdBQVcsVUFBVTtBQUFBOzs7Ozs7QUZhMUQsaUJBQWlCO0FBQ3ZCLFNBQU87QUFBQSxJQUNOLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQSxJQUMzQixFQUFFLEtBQUssUUFBUSxNQUFNO0FBQUE7QUFBQTtBQUloQixnQkFBZ0I7QUFDdEIsUUFBTSxjQUFjO0FBQ3BCLFNBQU87QUFBQSxJQUNOO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixpQkFBaUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQSxJQUN2QixVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxZQUFZO0FBQUEsSUFDWixrQkFBa0I7QUFBQSxJQUNsQixZQUFZO0FBQUE7QUFBQTtBQUlkLDBCQUEwQixXQUFrQjtBQUMzQyxTQUFPLENBQUMsTUFBTSxNQUFNLFNBQVMsYUFBWSxZQUFXO0FBQUE7QUFHOUMsSUFBTSxTQUFTLE9BQU8sRUFBRSxjQUFvQztBQWhGbkU7QUFpRkMsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLE1BQUksSUFBSSxhQUFhLElBQUksUUFBUTtBQUNoQyxXQUFPLGlCQUFpQixJQUFJLGFBQWEsSUFBSTtBQUFBO0FBSTlDLE1BQUksU0FBUyxPQUFPLFlBQ25CLGVBQVEsUUFDTixJQUFJLGNBRE4sbUJBRUcsTUFBTSxLQUNQLElBQUksQ0FBQyxZQUFXLFFBQU8sTUFBTSxVQUFTO0FBR3pDLE1BQUksT0FBTyxTQUFTO0FBQ25CLFdBQU8saUJBQWlCLE9BQU87QUFBQTtBQUtoQyxNQUFJLFFBQVEsUUFBUSxJQUFJLG9CQUFvQjtBQUMzQyxXQUFPLGlCQUFpQixRQUFRLFFBQVEsSUFBSTtBQUFBO0FBRTdDLFNBQU87QUFBQTtBQUdPLGVBQWU7QUFDN0IsUUFBTSxTQUFTO0FBQ2YsUUFBTSxDQUFDLFFBQU8sWUFBWSwyQkFBUztBQUFBLElBQ2xDLGVBQWU7QUFBQSxJQUNmLFNBQVM7QUFBQTtBQUlWLFFBQU0sQ0FBQyxZQUFZLGlCQUFpQiwyQkFBcUI7QUFBQSxJQUN4RCxXQUFXLFlBQVk7QUFBQSxJQUN2QixVQUFVO0FBQUE7QUFHWCxRQUFNLGVBQWUsQ0FBQyxLQUFrQixVQUFlO0FBQ3RELFVBQU0sV0FBVyxPQUFPLE9BQU8sSUFBSTtBQUNuQyxhQUFTLE9BQU87QUFDaEIsYUFBUztBQUFBO0FBR1YsUUFBTSxpQkFDTCxDQUFDLG9CQUNBLENBQUMsTUFBTTtBQUNOLFVBQU0sY0FBYyxtQkFBbUIsT0FBTyxPQUFPO0FBQ3JELGtCQUFjO0FBQUEsTUFDYixXQUFXLFlBQVk7QUFBQSxNQUN2QixVQUFVO0FBQUE7QUFBQTtBQUlkLFNBQ0Msb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Ysb0NBQUMsUUFBRCxNQUNDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM5QixvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELE9BQ0Esb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBSztBQUFBLElBQUMsS0FBSTtBQUFBLE1BQ2xCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQUs7QUFBQSxJQUFDLEtBQUk7QUFBQSxPQUVuQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLEVBQUUsWUFBWSx5QkFBeUIsWUFBWTtBQUFBLEtBQzlELG9DQUFDLFFBQUQ7QUFBQSxJQUFRO0FBQUEsSUFBd0IsZ0JBQWdCLGVBQWUsV0FBVztBQUFBLE1BQzFFLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUNsQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxzQkFBRDtBQUFBLElBRUMsU0FBUztBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLFFBS0gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQ0MsS0FBSTtBQUFBLElBQ0osV0FBVTtBQUFBLElBQ1YsS0FBSTtBQUFBLFVBTVQsb0NBQUMsaUNBQUQsT0FDQSxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLDBCQUFEO0FBQUE7OztBRy9LSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esb0JBQW9EO0FBR3JDLHdCQUF3QjtBQUN0QyxRQUFNLEVBQUUsWUFBWSxpQkFBaUI7QUFDckMsU0FDQyxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDbEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQ0MsV0FBVTtBQUFBLElBQ1YsS0FBSTtBQUFBLElBQ0osS0FBSTtBQUFBLE1BRUwsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXVFLG1FQUt2RixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBNEQsb0lBRzNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUErRSw4REFHOUYsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Ysb0NBQUMsS0FBRDtBQUFBLElBQ0MsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLEtBRUosb0NBQUMsT0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUVSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxRQUdWLG9DQUFDLEtBQUQ7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxLQUVKLG9DQUFDLE9BQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsSUFDZixhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsS0FFUixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsUUFHVixvQ0FBQyxLQUFEO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxLQUFJO0FBQUEsS0FFSixvQ0FBQyxPQUFEO0FBQUEsSUFDQyxNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLEtBRVIsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLFdBTWIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQ0MsS0FBSTtBQUFBLElBQ0osV0FBVTtBQUFBLElBQ1YsS0FBSTtBQUFBO0FBQUE7OztBQ3pGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTJFO0FBQzNFLG9CQUE4Qzs7O0FDRDlDO0FBVWUsdUJBQXVCLEVBQUUsWUFBWSxTQUFTLFlBQWlDO0FBQzdGLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSyxDQUFDLFFBQVEsUUFBUSxZQUFZLEdBQUcsUUFBUTtBQUFBLElBQVcsS0FBSTtBQUFBLElBQUcsV0FBVTtBQUFBLE1BQzlFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFzQixRQUFRLFdBQzdDLFFBQVEsZ0JBQWdCLFFBQVEsYUFBYSxTQUFTLElBQUksUUFBUSxhQUFhLElBQUksQ0FBQyxhQUFhLFVBQVU7QUFDM0csV0FDQyxvQ0FBQyxRQUFEO0FBQUEsTUFBTSxLQUFLO0FBQUEsTUFBTyxXQUFVO0FBQUEsT0FDMUIsWUFBWTtBQUFBLE9BR1gsTUFFTCxvQ0FBQyxVQUFEO0FBQUEsSUFDQyxTQUFTO0FBQUEsSUFDVCxXQUFVO0FBQUEsS0FFVCxXQUFXLFVBQVU7QUFBQTs7O0FDNUIzQjtBQUFBLG9CQUF5QztBQVkxQix1QkFBdUIsRUFBRSxZQUFZLGdCQUFnQixtQkFBbUIsZUFBZSxpQkFBcUM7QUFaM0k7QUFhQyxRQUFNLFFBQVEsa0JBQWtCO0FBQ2hDLFNBQ0Msb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssS0FBSyxHQUFHO0FBQUEsSUFBc0IsS0FBSTtBQUFBLElBQU0sV0FBVTtBQUFBLE1BQ3ZELG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFpRCxXQUFXLFVBQVUsa0JBQ3RGLG9EQUFDLFVBQUQ7QUFBQSxJQUFRLFNBQVM7QUFBQSxJQUFlLFdBQVU7QUFBQSxLQUN4QyxXQUFXLFVBQVUsY0FJeEIsU0FDQSxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvREFBQyxTQUFEO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDQyxnQkFBZ0IsY0FBYyxPQUFPO0FBQUEsSUFDNUMsVUFBVTtBQUFBLE1BRVgsb0RBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQU8sV0FBVyxVQUFVLFNBQzNDLG9EQUFDLFNBQUQ7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNDLGdCQUFnQixjQUFjLE9BQU87QUFBQSxJQUM1QyxVQUFVO0FBQUEsTUFFWCxvREFBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBUSxXQUFXLFVBQVUsWUFJL0Msb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzlCLFdBQVcsVUFBVSxTQUV2QixvREFBQyxTQUFEO0FBQUEsSUFDQyxNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDSCxjQUFjLGNBQWM7QUFBQSxJQUNuQyxVQUFVO0FBQUEsUUFJYixvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvREFBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDOUIsV0FBVyxVQUFVLFVBRXZCLG9EQUFDLFNBQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNILGNBQWMsY0FBYztBQUFBLElBQ25DLFVBQVU7QUFBQSxTQUtkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9EQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLFdBQVcsVUFBVSxzQkFJekIsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQWtELCtDQUdsRixvREFBQyxZQUFEO0FBQUEsSUFDQyxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDSCxjQUFjLG9CQUFjLGFBQWEsT0FBM0IsbUJBQStCO0FBQUEsSUFDcEQsVUFBVTtBQUFBLFFBSWIsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzlCLFdBQVcsVUFBVSxnQkFFdkIsb0RBQUMsU0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ0YsY0FBYyxjQUFjO0FBQUEsSUFDcEMsVUFBVTtBQUFBLFFBSWIsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0RBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzlCLFdBQVcsVUFBVSxnQkFFdkIsb0RBQUMsU0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ0YsY0FBYyxjQUFjO0FBQUEsSUFDNUIsVUFBVTtBQUFBO0FBQUE7OztBQ3pJMUI7QUFVZSx3QkFBd0IsRUFBRSxZQUFZLGdCQUFzQztBQUMxRixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFVBQUQ7QUFBQSxJQUNDLFNBQVMsYUFBYTtBQUFBLElBQ3RCLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUFZLEtBQUk7QUFBQSxJQUFNLFdBQVU7QUFBQSxNQUN6QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBc0IsV0FBVyxVQUFVLFdBQzNELG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFxQyxXQUFXLFVBQVUsV0FFM0Usb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUyxhQUFhO0FBQUEsSUFDdEIsV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQVUsS0FBSTtBQUFBLElBQU0sV0FBVTtBQUFBLE1BQ3ZDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFzQixXQUFXLFVBQVUsU0FDM0Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXFDLFdBQVcsVUFBVSxXQUUzRSxvQ0FBQyxVQUFEO0FBQUEsSUFDQyxTQUFTLGFBQWE7QUFBQSxJQUN0QixXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBVSxLQUFJO0FBQUEsSUFBTSxXQUFVO0FBQUEsTUFDdkMsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXNCLFdBQVcsVUFBVSxTQUMzRCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBcUMsV0FBVyxVQUFVO0FBQUE7OztBSHJCL0Qsb0JBQW9CO0FBQ2xDLFFBQU0sRUFBRSxZQUFZLGVBQU8sYUFBYTtBQUN4QyxRQUFNLENBQUMsZ0JBQWdCLGdCQUFnQjtBQUN2QyxRQUFNLENBQUMsZUFBZSxvQkFBb0IsNEJBQWlCLEVBQUUsY0FBYztBQUMzRSxRQUFNLENBQUMsZUFBZSxvQkFBb0I7QUFFMUMsUUFBTSxvQkFBMEQsQ0FBQyxNQUFNO0FBQ3RFLFFBQUksRUFBRSxPQUFPLFFBQVEsZ0JBQWdCO0FBQ3BDLFVBQUksQ0FBQyxjQUFjO0FBQWMsc0JBQWMsZUFBZTtBQUM5RCxvQkFBYyxhQUFhLEtBQUssRUFBRSxhQUFhLEVBQUUsT0FBTztBQUFBLFdBQ2xEO0FBQ04sb0JBQWMsRUFBRSxPQUFPLFFBQVEsRUFBRSxPQUFPO0FBQUE7QUFFekMscUJBQWlCO0FBQUE7QUFHbEIsUUFBTSxhQUFhLENBQUMsU0FBaUIsT0FBZ0I7QUFDcEQsUUFBSSxJQUFJO0FBQ1AsYUFBTSxRQUFRLE1BQU07QUFBQSxXQUNkO0FBQ04sYUFBTSxRQUFRLEtBQUs7QUFBQTtBQUVwQixhQUFTO0FBQUE7QUFHVixRQUFNLGFBQ0wsQ0FBQyxZQUNBLENBQUMsTUFBTTtBQUNOLE1BQUU7QUFDRixpQkFBYTtBQUViLFFBQUksV0FBVSxPQUFPO0FBQ3BCLG9CQUFjLFFBQVE7QUFDdEIsb0JBQWMsTUFBTTtBQUFBLFdBQ2Q7QUFDTixvQkFBYyxRQUFRO0FBQ3RCLG9CQUFjLE1BQU07QUFBQTtBQUVyQixxQkFBaUI7QUFBQTtBQUVwQixRQUFNLFdBQVc7QUFFakIsUUFBTSxXQUFXLE1BQU07QUFDdEIsYUFBUyxZQUFZLEVBQUUsU0FBUztBQUFBO0FBR2pDLFFBQU0sZ0JBQW1DLENBQUMsVUFBVTtBQUNuRCxVQUFNO0FBQ04sWUFBUSxJQUFJLGVBQWU7QUFDM0IsZUFBVyxlQUFlO0FBQzFCO0FBQUE7QUFHRCxRQUFNLGtCQUFrQixNQUFNO0FBQzdCLGlCQUFhO0FBQ2IscUJBQWlCO0FBQ2pCLHFCQUFpQixFQUFFLGNBQWM7QUFBQTtBQUdsQywrQkFBVSxNQUFNO0FBQ2YsUUFBSSxrQkFBa0IsUUFBVztBQUNoQyxtQkFBYSxDQUFDLE9BQU0sUUFBUSxlQUFlLFFBQVEsUUFBUSxPQUFNLFFBQVEsZUFBZTtBQUN4Rix1QkFBaUIsT0FBTSxRQUFRO0FBQy9CLGFBQU8sT0FBTSxRQUFRO0FBQ3JCLGVBQVM7QUFBQTtBQUVWLFlBQVEsSUFBSTtBQUFBLEtBQ1YsQ0FBQztBQUVKLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUyxNQUFNLFNBQVM7QUFBQSxJQUN4QixXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBSyxPQUFNO0FBQUEsS0FDakMsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLFFBR1Ysb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osV0FBVyxVQUFVLGFBSXhCLE9BQU0sV0FBVyxPQUFNLFFBQVEsU0FDL0IsT0FBTSxRQUFRLElBQUksQ0FBQyxNQUFNLFFBQVE7QUFDaEMsV0FDQyxvQ0FBQyxlQUFEO0FBQUEsTUFBZTtBQUFBLE1BQVUsU0FBUztBQUFBLE1BQU0sVUFBVSxNQUFNLGlCQUFpQjtBQUFBLE1BQU07QUFBQTtBQUFBLE9BSWpGLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFtQyxXQUFXLFVBQVUsb0JBRXZFLENBQUMsaUJBQ0Qsb0NBQUMsZ0JBQUQ7QUFBQSxJQUFnQjtBQUFBLElBQXdCLGNBQWM7QUFBQSxPQUV0RCwwREFDQyxvQ0FBQyxlQUFEO0FBQUEsSUFDQyxlQUFlO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFFaEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUztBQUFBLElBQ1QsV0FBVTtBQUFBLEtBRVQsV0FBVyxVQUFVLGlCQUd4QixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxVQUFEO0FBQUEsSUFDQyxTQUFTO0FBQUEsSUFDVCxXQUFVO0FBQUEsS0FFVCxXQUFXLFVBQVU7QUFBQTs7O0FJdEk3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBK0U7OztBQ0QvRTs7O0FDQUE7QUFBQSxvQkFBNkI7QUFFN0IsSUFBSTtBQUVKLHVCQUE4QjtBQUM3QixNQUFJLElBQUk7QUFDUCxXQUFPO0FBQUE7QUFFUixPQUFLLElBQUk7QUFDVCxRQUFNLEdBQUc7QUFDVCxTQUFPO0FBQUE7OztBQ1ZSO0FBRU8sSUFBTSw4QkFBOEIsU0FBVSxRQUFjO0FBQ2xFLFNBQU0sUUFBUSxRQUFRLENBQUMsV0FBVztBQUNqQyxXQUFPLGVBQWUsRUFBRSxRQUFRLE9BQU87QUFBQTtBQUV4QyxTQUFNLFVBQVUsRUFBRSxRQUFRLE9BQU07QUFDaEMsU0FBTztBQUFBOzs7QUZKUixpQkFBZ0I7QUFFaEIsSUFBTSxNQUFNLElBQUk7QUFFaEIsSUFBTSxvQkFBb0I7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsSUFDWCxhQUFhLEVBQUUsTUFBTTtBQUFBO0FBQUEsRUFFdEIsVUFBVSxDQUFDO0FBQUEsRUFDWCxzQkFBc0I7QUFBQTtBQUV2QixJQUFNLGVBQWU7QUFBQSxFQUNwQixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsSUFDWCxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU87QUFBQSxJQUNyQixPQUFPLEVBQUUsTUFBTTtBQUFBLElBQ2YsVUFBVSxFQUFFLE1BQU07QUFBQSxJQUNsQixLQUFLLEVBQUUsTUFBTTtBQUFBLElBQ2IsZUFBZSxFQUFFLE1BQU07QUFBQSxJQUN2QixXQUFXLEVBQUUsTUFBTTtBQUFBLElBQ25CLGNBQWMsRUFBRSxNQUFNLFNBQVMsT0FBTztBQUFBO0FBQUEsRUFFdkMsVUFBVSxDQUFDLE9BQU8sU0FBUyxZQUFZLE9BQU8saUJBQWlCLGFBQWE7QUFBQSxFQUM1RSxzQkFBc0I7QUFBQTtBQUV2QixJQUFNLGNBQWM7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsSUFDWCxVQUFVLEVBQUUsTUFBTTtBQUFBLElBQ2xCLE9BQU8sRUFBRSxNQUFNO0FBQUEsSUFDZixPQUFPLEVBQUUsTUFBTTtBQUFBLElBQ2YsZUFBZSxFQUFFLE1BQU0sQ0FBQyxZQUFZO0FBQUEsSUFDcEMsbUJBQW1CLEVBQUUsTUFBTTtBQUFBLElBQzNCLGlCQUFpQixFQUFFLE1BQU07QUFBQSxJQUN6QixlQUFlLEVBQUUsTUFBTTtBQUFBLElBQ3ZCLGNBQWMsRUFBRSxNQUFNO0FBQUEsSUFDdEIsZ0JBQWdCLEVBQUUsTUFBTTtBQUFBLElBQ3hCLGVBQWU7QUFBQSxJQUNmLFNBQVMsRUFBRSxNQUFNLFNBQVMsT0FBTztBQUFBLElBQ2pDLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFBQSxJQUNoQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07QUFBQSxJQUNyQixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUE7QUFBQSxFQUViLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBQUEsRUFFRCxzQkFBc0I7QUFBQTtBQUd2QixJQUFNLGdCQUFnQixJQUFJLFFBQVE7QUFFbEMsSUFBTSxlQUFlLGVBQWdCLFFBQWM7QUFDbEQsVUFBUSxJQUFJO0FBQ1osU0FBTSxRQUFRO0FBRWQsTUFBSSxDQUFDLGNBQWMsU0FBUTtBQUMxQixZQUFRLElBQUksY0FBYztBQUMxQixVQUFNLElBQUksTUFBTSxLQUFLLFVBQVUsY0FBYztBQUFBO0FBRzlDLFdBQVEsNEJBQTRCO0FBQ3BDLFNBQVEsT0FBTSxpQkFBaUIsT0FBTyxFQUFFLE1BQU07QUFBQTtBQUUvQyxJQUFNLGVBQWUsZUFBZ0IsSUFBWTtBQUNoRCxTQUFPLE1BQU0sZ0JBQWdCLEVBQUU7QUFBQTtBQVFoQyxJQUFNLGtCQUFrQixlQUFnQixPQUFZO0FBQ25ELFNBQVEsT0FBTSxpQkFBaUIsV0FBVztBQUFBLElBQ3pDLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQTtBQUFBO0FBZ0JYLHVCQUF1QjtBQUN0QixTQUFPO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTbEIsSUFBTSxnQkFBZ0IsaUJBQWtCO0FBQ3ZDLFNBQVEsT0FBTSxTQUFTO0FBQUE7OztBR3hIeEI7QUFBQSxrQkFBaUI7OztBQ0FqQjtBQUFBLDJDQUF3RDtBQUN4RCxnQkFBaUI7QUFDakIsd0JBQXVCO0FBQ3ZCLElBQU0sS0FBSyxrQkFBSztBQUVoQixvQ0FBb0MsT0FBYztBQUNqRCxRQUFNLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDL0IsU0FBTyxNQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLE1BQU0sU0FBUyxJQUNwQyxJQUFJLENBQUMsTUFBTTtBQUNYLFdBQU87QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLE1BQU0sQ0FBQyxPQUFNLEdBQUcsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUt6QixJQUFNLGNBQWMsMEJBQVcsZ0JBQWdCO0FBQUEsRUFNOUMsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUE7QUFJUixxQ0FBK0IsTUFBVSxTQUFnQixNQUFhLGNBQXFCLGlCQUF3QjtBQUNsSCxRQUFNLG1CQUF1RDtBQUFBLElBQzVELFlBQVk7QUFBQSxNQUNYLGFBQWEsQ0FBQyxjQUFjLE1BQU0sS0FBSztBQUFBLE1BQ3ZDLGVBQWU7QUFBQSxNQUNmLFNBQVM7QUFBQSxRQUNSLEtBQUssU0FBVSxPQUFXLFNBQWE7QUFDdEMsaUJBQU8sU0FBUyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJNUIsVUFBVSxDQUFDLGNBQWMsTUFBTSxLQUFLO0FBQUE7QUFFckMsVUFBUSxJQUFJO0FBRVosY0FBWSxJQUFJLFdBQVcsa0RBQUk7QUFDL0IsUUFBTSxjQUFjO0FBQUEsSUFDbkIsTUFBTTtBQUFBLElBQ04sSUFBSSxLQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0EsVUFBVTtBQUFBLElBQ1YsYUFBYSxNQUFNLHFCQUFxQjtBQUFBLElBQ3hDLFNBQVMsRUFBRSxPQUFPO0FBQUE7QUFHbkIsUUFBTSxPQUFPLE1BQU0sWUFBWSxTQUFTO0FBQ3hDLFNBQU87QUFBQTs7O0FDekRSO0FBRWUsZ0NBQVUsUUFBWTtBQUNwQyxTQUFNLFFBQVEsSUFBSSxDQUFDLE1BQWM7QUFDaEMsTUFBRSxRQUFRLEVBQUUsUUFBUTtBQUNwQixNQUFFLFVBQVUsRUFBRSxRQUFRO0FBQ3RCLE1BQUUsYUFBYSxJQUFJLENBQUMsTUFBTTtBQUN6QixRQUFFLFlBQVksUUFBUSxNQUFNO0FBQzVCLFFBQUUsWUFBWSxRQUFRLE9BQU87QUFBQTtBQUFBO0FBRy9CLFNBQU0scUJBQXFCLE9BQU0sa0JBQWtCO0FBQ25ELFNBQU0sbUJBQW1CLE9BQU0sa0JBQWtCO0FBQUE7OztBRlBsRCxJQUFNLGVBQWU7QUFBQSxFQUNwQixTQUFTO0FBQUEsSUFDUixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUE7QUFBQTtBQUlDLElBQU0sT0FBTyxlQUFnQixRQUFjO0FBQ2pELFdBQVEsS0FBSyxNQUFNLEtBQUssVUFBVTtBQUNsQyx5QkFBZTtBQUNmLFFBQU0sT0FBTyxPQUFNLFNBQVMsT0FBTyxPQUFPO0FBRTFDLFNBQU8sc0JBQ04sUUFDQSxhQUFhLFFBQVEsT0FDckIsTUFDQSxvQkFBSyxLQUFLLG9DQUNWLG9CQUFLLEtBQUs7QUFBQTs7O0FKZlosc0JBQTZCLEVBQUUsV0FBaUM7QUFDL0QsUUFBTSxTQUFTLE9BQU0sUUFBUSxZQUFZLElBQUk7QUFDN0MsUUFBTSxFQUFFLE9BQU8sTUFBTSxhQUFhLEtBQUssTUFBTTtBQUM3QyxVQUFRLElBQUksTUFBTSxLQUFLLE1BQU0sYUFBYTtBQUMxQyxTQUFPLDRCQUFTO0FBQUE7QUFHRixtQkFBbUI7QUFDakMsUUFBTSxTQUFTO0FBQ2YsUUFBTSxFQUFFLFlBQVksa0JBQVU7QUFDOUIsUUFBTSxZQUFZLE9BQU8sT0FBTyxJQUFJLEVBQUMsTUFBTSxXQUFXLFVBQVUsZUFBZSxJQUFJLFVBQVM7QUFDNUYsUUFBTSxhQUFnRCxDQUFDLE1BQU07QUFDNUQsTUFBRTtBQUNGLFdBQU8sRUFBRTtBQUFBO0FBRVYsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBc0IsV0FBVyxVQUFVLGFBQzNELG9DQUFDLFFBQUQsTUFBTSxvQkFDTixvQ0FBQyxRQUFELE1BQU0sc0JBQ04sb0NBQUMsUUFBRCxNQUFNLHNCQUNOLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFzQixXQUFXLFVBQVUsc0JBQzNELG9DQUFDLFFBQUQsTUFBTSxnQkFDTixvQ0FBQyxRQUFELE1BQU0seUJBQ04sb0NBQUMsUUFBRCxNQUFNLFVBQ04sb0NBQUMsUUFBRCxNQUFNLHNCQUVQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFzQixXQUFXLFVBQVUsc0JBQzFELE9BQU0sUUFBUSxJQUFJLENBQUMsUUFBUSxVQUFVO0FBdEMzQztBQXVDTSxXQUNDLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLEtBQUs7QUFBQSxPQUNULG9DQUFDLFFBQUQsTUFBTyxPQUFPLFdBQ2Qsb0NBQUMsUUFBRCxNQUFPLGFBQU8sYUFBYSxPQUFwQixtQkFBd0I7QUFBQSxRQU9wQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sVUFBVTtBQUFBLEtBQzdCLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLElBQUc7QUFBQSxJQUFXLE1BQU07QUFBQSxJQUFVLE1BQUs7QUFBQSxJQUFRLE9BQU8sS0FBSyxVQUFVO0FBQUEsSUFBWSxVQUFRO0FBQUEsTUFDNUYsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLFdBQVcsVUFBVTtBQUFBOzs7QU90RDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUE4Qzs7O0FDRDlDO0FBU2UscUJBQXFCLEVBQUUsWUFBWSxjQUFjLGlCQUE0QjtBQUMzRixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLFdBQVcsVUFBVSxjQUd4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDOUIsV0FBVyxVQUFVLHNCQUV2QixvQ0FBQyxTQUFEO0FBQUEsSUFDQyxVQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixjQUFjLE9BQU07QUFBQSxRQUl2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDL0IsV0FBVyxVQUFVLFdBRXZCLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLFVBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGNBQWMsT0FBTTtBQUFBLE9BR3RCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixXQUFVO0FBQUEsSUFBZSxTQUFRO0FBQUEsSUFBWSxNQUFLO0FBQUEsS0FDekYsb0NBQUMsUUFBRDtBQUFBLElBQ0MsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLE9BR1YsV0FBVyxVQUFVLHdCQUd4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDL0IsV0FBVyxVQUFVLFdBRXZCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFvQyxXQUFXLFVBQVUsZUFFMUUsb0NBQUMsU0FBRDtBQUFBLElBQ0MsVUFBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsY0FBYyxPQUFNO0FBQUE7QUFBQTs7O0FDM0UzQjtBQVdlLHNCQUFzQjtBQUFBLEVBQ3BDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDc0I7QUFDdEIsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixXQUFXLFVBQVUsdUJBR3hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLGdCQUFnQixPQUFNLGlCQUFpQjtBQUFBLElBQ3ZDLFVBQVU7QUFBQSxNQUVYLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxLQUFpQixXQUFXLFVBQVUsdUJBQ3JELG9DQUFDLFNBQUQ7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLGdCQUFnQixPQUFNLGlCQUFpQjtBQUFBLElBQ3ZDLFVBQVU7QUFBQSxNQUVYLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxLQUFlLFdBQVcsVUFBVSxhQUVuRCxPQUFNLGlCQUFpQixhQUN2QiwwREFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDOUIsV0FBVyxVQUFVLHNCQUV2QixvQ0FBQyxTQUFEO0FBQUEsSUFDQyxVQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixjQUFjLE9BQU07QUFBQSxPQUd0QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFDQyxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsS0FFTCxvQ0FBQyxRQUFEO0FBQUEsSUFDQyxVQUFTO0FBQUEsSUFDVCxHQUFFO0FBQUEsSUFDRixVQUFTO0FBQUEsT0FHVixXQUFXLFVBQVUsa0JBR3hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUNoQyxXQUFXLFVBQVUsdUJBRXZCLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLFVBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGNBQWMsT0FBTTtBQUFBLFFBSXZCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUM5QixXQUFXLFVBQVUsVUFFdkIsb0NBQUMsU0FBRDtBQUFBLElBQ0MsVUFBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsY0FBYyxPQUFNO0FBQUEsUUFJdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzlCLFdBQVcsVUFBVSxTQUV2QixvQ0FBQyxTQUFEO0FBQUEsSUFDQyxVQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixjQUFjLE9BQU07QUFBQSxRQUl2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDaEMsV0FBVyxVQUFVLFdBRXZCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFvQyxXQUFXLFVBQVUsZUFFMUUsb0NBQUMsU0FBRDtBQUFBLElBQ0MsVUFBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsY0FBYyxPQUFNO0FBQUEsT0FHdEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQ0MsT0FBTTtBQUFBLElBQ04sV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLEtBRUwsb0NBQUMsUUFBRDtBQUFBLElBQ0MsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLE9BR1YsV0FBVyxVQUFVLHVCQUt6QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxRQUFELE1BQU0sMkNBQ04sb0NBQUMsUUFBRCxNQUFNLDRDQUNOLG9DQUFDLFFBQUQsTUFBTSxtQkFFTixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsSUFBTyxNQUFLO0FBQUEsS0FBb0Isd0JBRzdDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUE2QixnQ0FDckMsb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLElBQXdDLFFBQU87QUFBQSxJQUFTLEtBQUk7QUFBQSxLQUNuRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsV0FBVyxVQUFVLG9CQU0zQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxVQUFEO0FBQUEsSUFDQyxTQUFTO0FBQUEsSUFDVCxXQUFVO0FBQUEsS0FFVCxXQUFXLFVBQVUsZ0NBQ3RCLG9DQUFDLE9BQUQ7QUFBQSxJQUNDLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLFFBQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxLQUViLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLGVBQWM7QUFBQSxJQUFRLGdCQUFlO0FBQUEsSUFBUSxHQUFFO0FBQUE7QUFBQTs7O0FGOUxyRCxpQkFBaUIsRUFBQyxXQUE4QjtBQUFBO0FBR3hDLGlCQUFpQjtBQUMvQixRQUFNLEVBQUUsWUFBWSxjQUFjLGtCQUFVO0FBQzVDLFFBQU0sV0FBVztBQUVqQixRQUFNLHdCQUE4RCxDQUFDLFVBQVU7QUFDOUUsWUFBUSxJQUFJLE1BQU0sT0FBTyxNQUFNLE1BQU0sT0FBTztBQUM1QyxpQkFBYSxNQUFNLE9BQU8sTUFBTSxNQUFNLE9BQU87QUFBQTtBQUc5QyxRQUFNLFdBQThCLENBQUMsTUFBTTtBQUMxQyxNQUFFO0FBQ0YsYUFBUyxhQUFhLEVBQUUsU0FBUztBQUFBO0FBR2xDLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsYUFBRDtBQUFBLElBQWE7QUFBQSxJQUF3QixPQUFPO0FBQUEsSUFBTyxjQUFjO0FBQUEsTUFDakUsb0NBQUMsY0FBRDtBQUFBLElBQ0M7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxJQUNQO0FBQUE7QUFBQTs7O0FHOUJKO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLHVDQUFxQyxVQUFTLEVBQUMsUUFBTyxFQUFDLE1BQUssUUFBTyxZQUFXLFFBQVUsUUFBTyxJQUFHLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJCQUEwQixXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx1QkFBc0IsRUFBQyxNQUFLLHVCQUFzQixZQUFXLFFBQU8sUUFBTyxnQkFBZSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywwQ0FBeUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsUUFBVSxhQUFZLE1BQUssYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG1CQUFrQixFQUFDLE1BQUssbUJBQWtCLFlBQVcsUUFBTyxRQUFPLFlBQVcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsc0NBQXFDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGtCQUFpQixFQUFDLE1BQUssa0JBQWlCLFlBQVcsUUFBTyxRQUFPLFdBQVUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMscUNBQW9DLFdBQVUsUUFBVSxhQUFZLE1BQUssYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBcEJRcDhDLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix1QkFBdUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1CQUFtQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEekNkLHNCQUFPO0FBRVAsSUFBTSxNQUFNO0FBRVosSUFBSSxJQUFJO0FBR1IsSUFBSSxRQUFRO0FBR1osSUFBSSxJQUNGLFVBQ0EsdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxXQUFXLE1BQU0sUUFBUTtBQUs1RCxJQUFJLElBQUksdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxRQUFRO0FBQ2pELElBQUksSUFBSSx1QkFBUSxPQUFPO0FBRXZCLElBQUksSUFBSSwyQkFBTztBQUVmLElBQUksSUFDRixLQUNBLDBDQUFxQjtBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLGdCQUFnQixDQUFDLFlBQVksUUFBUTtBQUFBO0FBSXpDLElBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUVqQyxJQUFJLE9BQU8sTUFBTSxNQUFNO0FBQ3JCLFVBQVEsSUFBSSxvQ0FBb0M7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
