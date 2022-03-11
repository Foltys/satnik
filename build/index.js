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

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/root.jsx
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

// app/locale/translation.js
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

// app/locale/translation.js
function translation(locale) {
  const translationToUse = locale == "ua" ? ua_default : cs_default;
  return function translate(string) {
    return translationToUse[string] || "missing translation: " + string;
  };
}

// app/styles/app.css
var app_default = "/build/_assets/app-I4XDOWN4.css";

// app/components/Header.jsx
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

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/root.jsx
function links() {
  return [
    { rel: "stylesheet", href: app_default },
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
  const [order3, setOrder] = (0, import_react.useState)({ delivery: "delivery", persons: [] });
  const [translator, setTranslator] = (0, import_react.useState)({
    translate: translation(locale),
    language: locale
  });
  const setOrderItem = (key, value) => {
    const newOrder = order3;
    newOrder[key] = value;
    setOrder(newOrder);
  };
  const submitOrder = () => {
    console.log({ order: order3 });
  };
  const switchLanguage = (currentLanguage) => (e) => {
    const newLanguage = currentLanguage == "cs" ? "ua" : "cs";
    setTranslator({
      translate: translation(newLanguage),
      language: newLanguage
    });
  };
  const addPersonToOrder = (details, id) => {
    if (id) {
      order3.persons[id] = details;
    } else {
      order3.persons.push(details);
    }
  };
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
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
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, {
    context: {
      translator,
      setOrderItem,
      order: order3,
      submitOrder,
      addPersonToOrder
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))))), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/confirmation.jsx
var confirmation_exports = {};
__export(confirmation_exports, {
  default: () => Confirmation
});
init_react();
var import_react2 = require("react");
var import_remix4 = __toESM(require_remix());
function Confirmation() {
  const { translator, setOrderItem } = (0, import_remix4.useOutletContext)();
  const submitForm = (e) => {
    e.preventDefault();
  };
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

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/genderselect.jsx
var genderselect_exports = {};
__export(genderselect_exports, {
  default: () => GenderSelect
});
init_react();
var import_react3 = require("react");
var import_remix5 = __toESM(require_remix());
function GenderSelect() {
  const { translator, setOrderItem } = (0, import_remix5.useOutletContext)();
  const navigate = (0, import_remix5.useNavigate)();
  const nextForm = (e) => {
    e.preventDefault();
    navigate("/orderone", { replace: false });
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "text-gray-600 body-font relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1"
  }, translator.translate("order"))), /* @__PURE__ */ React.createElement("div", {
    className: "text-[#0A9DBF] font-medium my-5"
  }, translator.translate("who_is_wearing"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: nextForm,
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
    onClick: nextForm,
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
    onClick: nextForm,
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "kid.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("kid")), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick")))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))));
}

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/addperson.jsx
var addperson_exports = {};
__export(addperson_exports, {
  default: () => AddPerson
});
init_react();
var import_react4 = require("react");
var import_remix6 = __toESM(require_remix());
function AddPerson() {
  const { translator, setOrderItem } = (0, import_remix6.useOutletContext)();
  const navigate = (0, import_remix6.useNavigate)();
  const nextForm = (e) => {
    e.preventDefault();
    navigate("/orderone", { replace: false });
  };
  const editItem = (e) => {
    e.preventDefault();
    navigate("/orderone", { replace: false });
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "text-gray-600 body-font relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1"
  }, translator.translate("order")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "woman.svg",
    alt: "man",
    className: "my-4 mx-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: " flex flex-col justify-center mx-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, "Olena Kyashenko"), /* @__PURE__ */ React.createElement("span", {
    className: "py-2"
  }, translator.translate("cloth_example")), /* @__PURE__ */ React.createElement("button", {
    onClick: editItem,
    className: "font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
  }, translator.translate("edit")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 mt-12 text-gray-900 ml-1"
  }, translator.translate("add_person")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: nextForm,
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
    onClick: nextForm,
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
    onClick: nextForm,
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "kid.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("kid")), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick")))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))));
}

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/newOrder.jsx
var newOrder_exports = {};
__export(newOrder_exports, {
  default: () => NewOrder
});
init_react();
var import_react5 = require("react");
var import_remix7 = __toESM(require_remix());

// app/components/PersonOnOrder.jsx
init_react();
function PersonOnOrder({ translator, details, editItem }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "woman.svg",
    alt: "man",
    className: "my-4 mx-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: " flex flex-col justify-center mx-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, details.fullname), /* @__PURE__ */ React.createElement("span", {
    className: "py-2"
  }, details.description), /* @__PURE__ */ React.createElement("button", {
    onClick: editItem,
    className: "font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
  }, translator.translate("edit"))));
}

// app/components/PersonToOrder.jsx
init_react();
function PersonToOrder({
  translator,
  selectedGender,
  handleInputChange
}) {
  const isKid = selectedGender == "kid";
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `${selectedGender}.svg`,
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold group-hover:text-[#0A9DBF]"
  }, translator.translate(selectedGender)), /* @__PURE__ */ React.createElement("button", {
    className: "font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full"
  }, translator.translate("remove")))), isKid && /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex mx-3 my-6 font-bold space-x-2 text-[#0A9DBF] items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "girl",
    name: "kidgenderselector",
    value: "man",
    onChange: handleInputChange("sex")
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "boy"
  }, translator.translate("boy")), /* @__PURE__ */ React.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "girl",
    name: "kidgenderselector",
    value: "woman",
    onChange: handleInputChange("sex")
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "girl"
  }, translator.translate("girl")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-1/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("age")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "age",
    name: "age",
    placeholder: "22",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("age")
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-4/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("name")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Aa",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("fullname")
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font my-4 text-gray-900 ml-1"
  }, translator.translate("select_clothes")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, "Jak\xE9 oble\u010Den\xED pot\u0159ebujete?"), /* @__PURE__ */ React.createElement("textarea", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "5 ks trika, 2 ks kalhoty",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("description")
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("cloth_size")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "S",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("clothing_size")
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("shoes_size")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "44",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("shoe_size")
  }))))));
}

// app/components/GenderSelector.jsx
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

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/newOrder.jsx
function NewOrder() {
  const { translator, order: order3, addPersonToOrder } = (0, import_remix7.useOutletContext)();
  const [selectedGender, selectGender] = (0, import_react5.useState)();
  const [newPersonInfo, setNewPersonInfo] = (0, import_react5.useState)({});
  const [editingPerson, setEditingPerson] = (0, import_react5.useState)(null);
  const handleInputChange = (fieldName) => (e) => {
    console.log(fieldName);
    newPersonInfo[fieldName] = e.target.value;
    setNewPersonInfo(newPersonInfo);
  };
  const navigate = (0, import_remix7.useNavigate)();
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
  const nextForm = () => {
    console.log(order3);
  };
  const addNextPerson = (event) => {
    event.preventDefault();
    addPersonToOrder(newPersonInfo, editingPerson);
    cleanPersonForm();
  };
  const cleanPersonForm = () => {
    selectGender(null);
    setEditingPerson(null);
    setNewPersonInfo({});
  };
  (0, import_react5.useEffect)(() => {
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
  }) : /* @__PURE__ */ React.createElement(PersonToOrder, {
    translator,
    selectedGender,
    handleInputChange
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
  }, translator.translate("continue"))));
}

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/orderone.jsx
var orderone_exports = {};
__export(orderone_exports, {
  default: () => OrderOne
});
init_react();
var import_react6 = require("react");
var import_remix8 = __toESM(require_remix());
function OrderOne() {
  const { translator, setOrderItem } = (0, import_remix8.useOutletContext)();
  const navigate = (0, import_remix8.useNavigate)();
  const nextForm = (e) => {
    e.preventDefault();
    navigate("/summary", { replace: false });
  };
  const adult = true;
  return /* @__PURE__ */ React.createElement("section", {
    className: "text-gray-600 body-font relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1"
  }, translator.translate("order")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "woman.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold group-hover:text-[#0A9DBF]"
  }, translator.translate("woman")), /* @__PURE__ */ React.createElement("button", {
    className: "font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full"
  }, "Odebrat"))), !adult && /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex mx-3 my-6 font-bold space-x-2 text-[#0A9DBF] items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "girl",
    name: "kidgenderselector",
    value: "boy"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "boy"
  }, translator.translate("boy")), /* @__PURE__ */ React.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "girl",
    name: "kidgenderselector",
    value: "girl"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "girl"
  }, translator.translate("girl")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-1/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("age")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "22",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-4/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("name")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Aa",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font my-4 text-gray-900 ml-1"
  }, translator.translate("select_clothes")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, "Jak\xE9 oble\u010Den\xED pot\u0159ebujete?"), /* @__PURE__ */ React.createElement("textarea", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "5 ks trika, 2 ks kalhoty",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("cloth_size")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "S",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("shoes_size")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "44",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 my-10 mx-2 w-full md:w-1/2"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/addperson"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
  }, translator.translate("add_person")))), /* @__PURE__ */ React.createElement("hr", {
    className: "w-full my-4 border border-[#957D5E] opacity-20"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 my-10 mx-2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: nextForm,
    className: "items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
  }, translator.translate("continue"))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))));
}

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/summary.jsx
var summary_exports = {};
__export(summary_exports, {
  default: () => Summary
});
init_react();
var import_remix9 = __toESM(require_remix());
function Summary() {
  const { translator, order: order3 } = (0, import_remix9.useOutletContext)();
  const navigate = (0, import_remix9.useNavigate)();
  const submitForm = (e) => {
    e.preventDefault();
    console.log(order3);
    navigate("/confirmation", { replace: false });
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "text-gray-600 body-font relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1"
  }, translator.translate("order")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "woman.svg",
    alt: "man",
    className: "my-4 mx-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: " flex flex-col justify-center mx-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold"
  }, "Olena Kyashenko"), /* @__PURE__ */ React.createElement("span", {
    className: "py-2"
  }, translator.translate("cloth_example")), /* @__PURE__ */ React.createElement("button", {
    className: "font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
  }, translator.translate("edit")))), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 my-10 mx-2 w-full md:w-1/2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
  }, translator.translate("add_person"))), /* @__PURE__ */ React.createElement("hr", {
    className: "w-full my-4 border border-[#957D5E] opacity-20"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 mt-12 text-gray-900 ml-1"
  }, translator.translate("order_check")))), /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/?edit",
    className: "text-[#0A9DBF] font-semibold ml-1 underline"
  }, translator.translate("edit_contact")), /* @__PURE__ */ React.createElement("div", {
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
  }, translator.translate("for_who_and_what")), /* @__PURE__ */ React.createElement("span", null, "Olena Kyiaskho"), /* @__PURE__ */ React.createElement("span", null, translator.translate("cloth_example")))), /* @__PURE__ */ React.createElement("hr", {
    className: "w-full my-10 border border-[#957D5E] opacity-20"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "py-2 mx-2 w-full md:w-1/2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: submitForm,
    className: "items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
  }, translator.translate("to_order"))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))));
}

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react7 = require("react");
var import_remix10 = __toESM(require_remix());

// app/components/ContactInfo.jsx
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
    onChange: handleChange("fullname"),
    type: "text",
    id: "name",
    name: "name",
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
    onChange: handleChange("phone"),
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
    onChange: handleChange("email"),
    type: "email",
    id: "email",
    name: "email",
    placeholder: "@",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    defaultValue: order3.email
  })))));
}

// app/components/DeliveryInfo.jsx
init_react();
function DeliveryInfo({
  translator,
  order: order3,
  handleDelivery,
  handleChange,
  delivery,
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
    name: "radioselector",
    value: "radiodelivery",
    checked: delivery == true,
    onChange: handleDelivery
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "radiodelivery"
  }, translator.translate("deliver_to_adress")), /* @__PURE__ */ React.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "radiopickup",
    name: "radioselector",
    value: "radiopickup",
    checked: delivery == false,
    onChange: handleDelivery
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "radiopickup"
  }, translator.translate("pickup"))), delivery == true ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("name_and_surname")), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange("delivery_fullname"),
    type: "text",
    id: "name",
    name: "name",
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
    onChange: handleChange("delivery_street"),
    type: "text",
    id: "street",
    name: "street",
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
    onChange: handleChange("delivery_city"),
    type: "text",
    id: "city",
    name: "city",
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
    onChange: handleChange("delivery_zip"),
    type: "text",
    id: "psc",
    name: "psc",
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
    onChange: handleChange("delivery_phone"),
    type: "tel",
    id: "phone2",
    name: "phone2",
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

// route:/Users/jakub.folejtar/Documents/GIT/satnik-pages/app/routes/index.jsx
function Index() {
  const { translator, setOrderItem, order: order3 } = (0, import_remix10.useOutletContext)();
  const navigate = (0, import_remix10.useNavigate)();
  const [delivery, setDelivery] = (0, import_react7.useState)(order3.delivery == "delivery");
  const handleDelivery = (e) => {
    setDelivery(!delivery);
  };
  const handleChange = (identificator) => {
    return (event) => {
      setOrderItem([identificator], event.target.value);
    };
  };
  const nextForm = (e) => {
    e.preventDefault();
    navigate("/newOrder", { replace: false });
  };
  (0, import_react7.useEffect)(() => {
    setOrderItem("delivery_type", delivery ? "delivery" : "pickup");
  }, [delivery, setOrderItem]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(ContactInfo, {
    translator,
    order: order3,
    handleChange
  }), /* @__PURE__ */ React.createElement(DeliveryInfo, {
    translator,
    handleDelivery,
    handleChange,
    order: order3,
    delivery,
    nextForm
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "4746716c", "entry": { "module": "/build/entry.client-PWSYO22Y.js", "imports": ["/build/_shared/chunk-QXSTHAEL.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-U6V3HG2W.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/addperson": { "id": "routes/addperson", "parentId": "root", "path": "addperson", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/addperson-YZE2PUZC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/confirmation": { "id": "routes/confirmation", "parentId": "root", "path": "confirmation", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/confirmation-WILVHCRZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/genderselect": { "id": "routes/genderselect", "parentId": "root", "path": "genderselect", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/genderselect-MPBEIORE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-M5UXUYKS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/newOrder": { "id": "routes/newOrder", "parentId": "root", "path": "newOrder", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/newOrder-VBWE5SJV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/orderone": { "id": "routes/orderone", "parentId": "root", "path": "orderone", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/orderone-XUQ2LGF7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/summary": { "id": "routes/summary", "parentId": "root", "path": "summary", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/summary-6YH2GZBJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-4746716C.js" };

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
  "routes/genderselect": {
    id: "routes/genderselect",
    parentId: "root",
    path: "genderselect",
    index: void 0,
    caseSensitive: void 0,
    module: genderselect_exports
  },
  "routes/addperson": {
    id: "routes/addperson",
    parentId: "root",
    path: "addperson",
    index: void 0,
    caseSensitive: void 0,
    module: addperson_exports
  },
  "routes/newOrder": {
    id: "routes/newOrder",
    parentId: "root",
    path: "newOrder",
    index: void 0,
    caseSensitive: void 0,
    module: newOrder_exports
  },
  "routes/orderone": {
    id: "routes/orderone",
    parentId: "root",
    path: "orderone",
    index: void 0,
    caseSensitive: void 0,
    module: orderone_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb290LmpzeCIsICIuLi9hcHAvbG9jYWxlL3RyYW5zbGF0aW9uLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci5qc3giLCAicm91dGU6L1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb3V0ZXMvY29uZmlybWF0aW9uLmpzeCIsICJyb3V0ZTovVXNlcnMvamFrdWIuZm9sZWp0YXIvRG9jdW1lbnRzL0dJVC9zYXRuaWstcGFnZXMvYXBwL3JvdXRlcy9nZW5kZXJzZWxlY3QuanN4IiwgInJvdXRlOi9Vc2Vycy9qYWt1Yi5mb2xlanRhci9Eb2N1bWVudHMvR0lUL3NhdG5pay1wYWdlcy9hcHAvcm91dGVzL2FkZHBlcnNvbi5qc3giLCAicm91dGU6L1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb3V0ZXMvbmV3T3JkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvbk9uT3JkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvblRvT3JkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0dlbmRlclNlbGVjdG9yLmpzeCIsICJyb3V0ZTovVXNlcnMvamFrdWIuZm9sZWp0YXIvRG9jdW1lbnRzL0dJVC9zYXRuaWstcGFnZXMvYXBwL3JvdXRlcy9vcmRlcm9uZS5qc3giLCAicm91dGU6L1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb3V0ZXMvc3VtbWFyeS5qc3giLCAicm91dGU6L1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRhY3RJbmZvLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9EZWxpdmVyeUluZm8uanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmRvdGVudi5jb25maWcoKVxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgZ2V0TG9hZENvbnRleHQ6IChjb250ZXh0KSA9PiBjb250ZXh0LmVudlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvamFrdWIuZm9sZWp0YXIvRG9jdW1lbnRzL0dJVC9zYXRuaWstcGFnZXMvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvamFrdWIuZm9sZWp0YXIvRG9jdW1lbnRzL0dJVC9zYXRuaWstcGFnZXMvYXBwL3JvdXRlcy9jb25maXJtYXRpb24uanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9qYWt1Yi5mb2xlanRhci9Eb2N1bWVudHMvR0lUL3NhdG5pay1wYWdlcy9hcHAvcm91dGVzL2dlbmRlcnNlbGVjdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb3V0ZXMvYWRkcGVyc29uLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvamFrdWIuZm9sZWp0YXIvRG9jdW1lbnRzL0dJVC9zYXRuaWstcGFnZXMvYXBwL3JvdXRlcy9uZXdPcmRlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2pha3ViLmZvbGVqdGFyL0RvY3VtZW50cy9HSVQvc2F0bmlrLXBhZ2VzL2FwcC9yb3V0ZXMvb3JkZXJvbmUuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9qYWt1Yi5mb2xlanRhci9Eb2N1bWVudHMvR0lUL3NhdG5pay1wYWdlcy9hcHAvcm91dGVzL3N1bW1hcnkuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9qYWt1Yi5mb2xlanRhci9Eb2N1bWVudHMvR0lUL3NhdG5pay1wYWdlcy9hcHAvcm91dGVzL2luZGV4LmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY29uZmlybWF0aW9uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb25maXJtYXRpb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29uZmlybWF0aW9uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9nZW5kZXJzZWxlY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2dlbmRlcnNlbGVjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJnZW5kZXJzZWxlY3RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FkZHBlcnNvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRkcGVyc29uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkZHBlcnNvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbmV3T3JkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld09yZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5ld09yZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9vcmRlcm9uZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvb3JkZXJvbmVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwib3JkZXJvbmVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3N1bW1hcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N1bW1hcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3VtbWFyeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB0cmFuc2xhdGlvbiBmcm9tIFwiLi9sb2NhbGUvdHJhbnNsYXRpb25cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcbiAgICB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2ljb25zL2Zhdmljb24tMzJ4MzIucG5nXCIgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYFx1MDE2MGF0blx1MDBFRGsgUHJhaGEgLSBQb21vYyBVa3JhamluXHUwMTFCYDtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICBrZXl3b3JkczogXCJ1a3JhaW5lLGhlbHAsdWtyYWppbmEsdlx1MDBFMWxrYVwiLFxuICAgIG5hbWU6IFwiXHUwMTYwYXRuXHUwMEVEayAtIFBvbW9jIFVrcmFqaW5cdTAxMUJcIixcbiAgICBcInR3aXR0ZXI6aW1hZ2VcIjogXCJodHRwczovL2FwcC5zYXRuaWtwcmFoYS5jei9vZ19zaGFyZS5wbmdcIixcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6dGl0bGVcIjogZGVzY3JpcHRpb24sXG4gICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IFwiUG9tXHUwMEUxaFx1MDBFMW1lIFVrcmFqaW5cdTAxMUIgcyBcdTAxNjBhdG5cdTAwRURrZW0gUHJhaGFcIixcbiAgICBcIm9nOnVybFwiOiBcImh0dHBzOi8vYXBwLnNhdG5pa3ByYWhhLmN6L1wiLFxuICAgIFwib2c6dHlwZVwiOiBcIndlYnNpdGVcIixcbiAgICBcIm9nOnRpdGxlXCI6IFwiXHUwMTYwYXRuXHUwMEVEayAtIFBvbW9jIFVrcmFqaW5cdTAxMUJcIixcbiAgICBcIm9nOmRlc2NyaXB0aW9uXCI6IFwiXHUwMTYwYXRuXHUwMEVEayBQcmFoYSAtIFBvbW9jIFVrcmFqaW5cdTAxMUJcIixcbiAgICBcIm9nOmltYWdlXCI6IFwiaHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3ovb2dfc2hhcmUucG5nXCIsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEZyb21TdXBwb3J0ZWQobGFuZ3VhZ2UpIHtcbiAgcmV0dXJuIFtcInVhXCIsIFwiY3NcIl0uaW5jbHVkZXMobGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiBcImNzXCI7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoXCJsbmdcIikpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVN1cHBvcnRlZCh1cmwuc2VhcmNoUGFyYW1zLmdldChcImxuZ1wiKSk7XG4gIH1cblxuICAvLyB0aGVuIHdlIHVzZSB0aGUgY29va2llLCB1c2luZyB0aGlzIGNvb2tpZSB3ZSBjYW4gc3RvcmUgdGhlIHVzZXIgcHJlZmVyZW5jZSB3aXRoIGEgZm9ybVxuICBsZXQgY29va2llID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICAgLmdldChcIkNvb2tpZVwiKVxuICAgICAgPy5zcGxpdChcIjtcIilcbiAgICAgIC5tYXAoKGNvb2tpZSkgPT4gY29va2llLnNwbGl0KFwiPVwiKSkgPz8gW11cbiAgKTtcblxuICBpZiAoY29va2llLmkxOG5leHQpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVN1cHBvcnRlZChjb29raWUuaTE4bmV4dCk7XG4gIH1cblxuICAvLyBhbmQgdGhlbiB3ZSBjaGVjayB0aGUgQWNjZXB0LUxhbmd1YWdlIGhlYWRlciBhbmQgdXNlIHRoYXQsIHRoaXMgd2lsbCBoYXZlIHRoZSB2YWx1ZVxuICAvLyBvZiB0aGUgbGFuZ3VhZ2UgdGhlIHVzZXIgdXNlIGZvciB0aGVpciBPU1xuICBpZiAocmVxdWVzdC5oZWFkZXJzLmhhcyhcImFjY2VwdC1sYW5ndWFnZVwiKSkge1xuICAgIHJldHVybiBnZXRGcm9tU3VwcG9ydGVkKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJhY2NlcHQtbGFuZ3VhZ2VcIikpO1xuICB9XG4gIHJldHVybiBcImNzXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGxvY2FsZSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSh7IGRlbGl2ZXJ5OiBcImRlbGl2ZXJ5XCIsIHBlcnNvbnM6IFtdIH0pO1xuICAvLyBjb25zdCBbZ2VuZGVyU2VsZWN0ZWQsIHNldEN1cnJlbnRHZW5kZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbdHJhbnNsYXRvciwgc2V0VHJhbnNsYXRvcl0gPSB1c2VTdGF0ZSh7XG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGlvbihsb2NhbGUpLFxuICAgIGxhbmd1YWdlOiBsb2NhbGUsXG4gIH0pO1xuICBjb25zdCBzZXRPcmRlckl0ZW0gPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld09yZGVyID0gb3JkZXI7XG4gICAgbmV3T3JkZXJba2V5XSA9IHZhbHVlO1xuICAgIHNldE9yZGVyKG5ld09yZGVyKTtcbiAgfTtcbiAgY29uc3Qgc3VibWl0T3JkZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coeyBvcmRlciB9KTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hMYW5ndWFnZSA9IChjdXJyZW50TGFuZ3VhZ2UpID0+IChlKSA9PiB7XG4gICAgY29uc3QgbmV3TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2UgPT0gXCJjc1wiID8gXCJ1YVwiIDogXCJjc1wiO1xuICAgIHNldFRyYW5zbGF0b3Ioe1xuICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGlvbihuZXdMYW5ndWFnZSksXG4gICAgICBsYW5ndWFnZTogbmV3TGFuZ3VhZ2UsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkUGVyc29uVG9PcmRlciA9IChkZXRhaWxzLCBpZCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgb3JkZXIucGVyc29uc1tpZF0gPSBkZXRhaWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlci5wZXJzb25zLnB1c2goZGV0YWlscyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImJnLVsjRjhFQkRCXVwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgdHJhbnNsYXRvcj17dHJhbnNsYXRvcn1cbiAgICAgICAgICAgIHN3aXRjaExhbmd1YWdlPXtzd2l0Y2hMYW5ndWFnZSh0cmFuc2xhdG9yLmxhbmd1YWdlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTE0IG1kOnB5LTI0IG14LWF1dG8gZmxleCBzbTpmbGV4LW5vd3JhcCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvMyBtZDp3LTEvMiByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzbTptci0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8T3V0bGV0XG4gICAgICAgICAgICAgICAgICBjb250ZXh0PXt7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0b3IsXG4gICAgICAgICAgICAgICAgICAgIHNldE9yZGVySXRlbSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIsXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdE9yZGVyLFxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRDdXJyZW50R2VuZGVyLFxuICAgICAgICAgICAgICAgICAgICAvLyBnZW5kZXJTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgYWRkUGVyc29uVG9PcmRlcixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgbWQ6bWwtYXV0byB3LWZ1bGwgIG10LTggbWQ6bXQtMFwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgyNzE5MTg4MzkzLWJiNzFjYTQ1ZGJiOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiaWxsdXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgY3MgZnJvbSBcIi4vdHJhbnNsYXRpb25zL2NzLmpzb25cIjtcbmltcG9ydCB1YSBmcm9tIFwiLi90cmFuc2xhdGlvbnMvdWEuanNvblwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRpb24obG9jYWxlKSB7XG4gIGNvbnN0IHRyYW5zbGF0aW9uVG9Vc2UgPSBsb2NhbGUgPT0gXCJ1YVwiID8gdWEgOiBjcztcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyYW5zbGF0ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRpb25Ub1VzZVtzdHJpbmddIHx8IFwibWlzc2luZyB0cmFuc2xhdGlvbjogXCIgKyBzdHJpbmc7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe3RyYW5zbGF0b3IsIHN3aXRjaExhbmd1YWdlfSkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgc3RpY2t5IHRvcC0wIGJnLVsjRjhFQkRCXSB6LTEwIHBiLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LXdyYXAgZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0aXRsZS1mb250IGZvbnQtbWVkaXVtIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktOTAwIG1sLTUgbWQ6bWwtMFwiXG4gICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cInJlZC5zdmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG1kOnctMzIgbWQ6aC0zMlwiXG4gICAgICAgICAgICBhbHQ9XCJcdTAxNjBhdG5cdTAwRURrIFByYWhhXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTMgdGV4dC14bCBoaWRkZW5cIj5cdTAxNjBhdG5cdTAwRURrPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWwtYXV0byBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwIGhpZGRlblwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICBGaXJzdCBMaW5rXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaExhbmd1YWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgIGp1c3RpZnktY2VudGVyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkICBib3JkZXItMCBweS0yIHB4LTUgZm9jdXM6b3V0bGluZS1bI2ViMmYwNl0gb3V0bGluZSBvdXRsaW5lLW9mZnNldC0yIG91dGxpbmUtWyMwQTlEQkZdIHJvdW5kZWQtZnVsbCB0ZXh0LWJhc2UgbXItNSBob3ZlcjpvdXRsaW5lLVsjZWIyZjA2XVwiXG4gICAgICAgID5cbiAgICAgICAgICB7dHJhbnNsYXRvci5sYW5ndWFnZSA9PSBcImNzXCIgPyAoXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMTlcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTAgMEgyNVYxOUgwVjBaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRDUwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMCAwSDI1VjkuNUgwVjBaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzAwNUJCQlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTlcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDE5XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBIMjVWOS41SDBWMFpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgOS41SDI1VjE5SDBWOS41WlwiIGZpbGw9XCIjRDcxNDFBXCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC4wNjI1IDkuNUwwIDBWMTlMMTQuMDYyNSA5LjVaXCIgZmlsbD1cIiMxMTQ1N0VcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtbC0yXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJsYW5ndWFnZVwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQsIHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1hdGlvbigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0b3IsIHNldE9yZGVySXRlbSB9ID0gdXNlT3V0bGV0Q29udGV4dCgpO1xuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgIFxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCByZWxhdGl2ZVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBweS0xNCBtZDpweS0yNCBteC1hdXRvIGZsZXggc206ZmxleC1ub3dyYXAgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgbWQ6dy0xLzIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206bXItMTAgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC0yeGwgdy1mdWxsIGgtNzIgcC0yIFwiIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg1Mjg2MTYyOTk1LWFhNjNkMzFjMDZjYj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODBcIiBhbHQ9XCJkZWxpdmVyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTV4bCAgdGV4dC01eGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbXktMTIgdGV4dC1bI2ViMmYwNl0gbWwtMVwiPlx1MDBEQXNwXHUwMTFCXHUwMTYxblx1MDExQiBqc3RlIHNpIG9iamVkbmFsaSBvYmxlXHUwMTBEZW5cdTAwRUQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LVsjZWIyZjA2XSBtbC0xIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2Jyb3ZvbG5cdTAwRURjXHUwMEVEIGRcdTAxMUJsYWpcdTAwRUQsIGNvIG1cdTAxNkZcdTAxN0VvdSwgYWJ5IGsgdlx1MDBFMW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWRuYW5cdTAwRTkgb2JsZVx1MDEwRGVuXHUwMEVEIGNvIG5lamRcdTAxNTlcdTAwRUR2ZSBkb3Jhemlsby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHRleHQteGwgbXktMTIgbWItNiBiZy1bI2ViMmYwNl0gdGV4dC1bI0Y4RUJEQl0gcHktNiBweC00IG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVnlcdTAxMERrZWp0ZSBuYSBlLW1haWwgc1x1MDBBMGRhbFx1MDE2MVx1MDBFRG1pIGluZm9ybWFjZW1pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG10LTgganVzdGlmeS1jZW50ZXIgc3BhY2UteC04IG1kOnNwYWNlLXgtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1bI2ViMmYwNl1cIiBocmVmPVwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwP3U9aHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3pcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgY2xhc3NOYW1lPVwidy01IGgtNSBtZDp3LTEwIG1kOmgtMTBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOCAyaC0zYTUgNSAwIDAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAxMS0xaDN6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWwtMyB0ZXh0LVsjZWIyZjA2XVwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD9yZWZfc3JjPXR3c3JjJTVFdGZ3JnF1b3QlM0IlMjBjbGFzcz0mcXVvdCUzQnR3aXR0ZXItc2hhcmUtYnV0dG9uPSZxdW90JTNCJTIwZGF0YS1zaG93LWNvdW50PSZxdW90JTNCZmFsc2U9JnF1b3Q9JnVybD1odHRwczovL2FwcC5zYXRuaWtwcmFoYS5jelwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctMTAgbWQ6aC0xMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzIDNhMTAuOSAxMC45IDAgMDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMDEzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAwLS4wOC0uODNBNy43MiA3LjcyIDAgMDAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1sLTMgdGV4dC1bI2ViMmYwNl1cIiBocmVmPVwiaHR0cHM6Ly90Lm1lL3NoYXJlL3VybD91cmw9aHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3omdGV4dD0nU2F0bmlrIFByYWhhIC0gQXBwIGZvciBVa3JhaW5lJ1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjBcIiBjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctMTAgbWQ6aC0xMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAyMC45NzY2ODEsMy42OTg5NTY5IGMgLTAuMjcyMzczLDEuMTI3ZS00IC0wLjU2MDc0MSwwLjA5Njc3MSAtMC41NjA3NDEsMC4wOTY3NzEgMCwtMWUtNyAtMTguMTk5NDM2OSw2LjU0MTI3OTEgLTE5LjIzODgzMTMsNy4yNjU3NjMxIC0wLjIyNDI0ODc4LDAuMTU1NTMzIC0wLjI5OTU0OTI4LDAuMjQ2MjU5IC0wLjMzNjcwOTI4LDAuMzUyNjE3IC0wLjE4MDUyMDIsMC41MTU3NzMgMC4zODA0NTUwOCwwLjc0MzY3NyAwLjM4MDQ1NTA4LDAuNzQzNjc3IGwgNC42OTEzOTUzLDEuNTI3MTIzIGEgMC41MTQxNzA5NCwwLjUxNDE3MDk0IDAgMCAwIDAuMDM4NDQsLTAuMDAyNyBsIDIuMjAwNTQyLDYuMDg5OTMyIGMgMCwwIDAuMTk1ODgsMC4zOTk4OTcgMC40MzYxMzEsMC41Mzk1MzEgMC4xNTI1NCwwLjEyNTM5MyAwLjQ2NzA2MiwwLjA2MzMzIDEuMTEwODc2LC0wLjU4MDYyNSAxLjAxMDUyMzIsLTEuMDEwNzUxIDEuOTgwOTgxMiwtMS44NDc2OTYgMi40NjU2NjcyLC0yLjI1NDg5MiAxLjYxODc2NSwxLjExNzQxNyAzLjM0NTI5NSwyLjM0MDkyMiA0LjA5NzUxNSwyLjk4Nzk2NCBhIDEuMzAyMjQ2LDEuMzAyMjQ2IDAgMCAwIDAuOTQ5MTQ5LDAuMzY3MTk5IGMgMC43MTEwMywtMC4wMjY3NSAwLjkwOTM4MSwtMC44MDczMDcgMC45MDkzODEsLTAuODA3MzA3IDAsMCAzLjMxNzIyOSwtMTMuMzQ3NjI4NCAzLjQyODA3MiwtMTUuMTM2MDE0MSAwLjAxMTA1LC0wLjE3NTA3NDQgMC4wMjUwOSwtMC4yODY1MTM5IDAuMDI2NTEsLTAuNDA2OTY3NyBBIDEuNDk4Nzg0MywxLjQ5ODc4NDMgMCAwIDAgMjEuNTM0NzcsNC4wNjc0ODE0IDAuNDQzMDUxOTcsMC40NDMwNTE5NyAwIDAgMCAyMS4yMzI1MjcsMy43Mzc0MDAxIGMgLTAuMDc1NzYsLTAuMDI4NzkyIC0wLjE2NTA1NSwtMC4wMzg0ODEgLTAuMjU1ODQ2LC0wLjAzODQ0MyB6XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMyBtZDp3LTEvMiBoaWRkZW4gbWQ6ZmxleCBmbGV4LWNvbCBtZDptbC1hdXRvIHctZnVsbCAgbXQtOCBtZDptdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDM0OTk0NTktZDE0NjA5NDZiZGM2P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVRsOGZHUmxiR2wyWlhKNWZHVnVmREI4ZkRCOGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbGx1c3RyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCwgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZGVyU2VsZWN0KCkge1xuXG4gICAgY29uc3QgeyB0cmFuc2xhdG9yLCBzZXRPcmRlckl0ZW0gfSA9IHVzZU91dGxldENvbnRleHQoKTtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgbmV4dEZvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vICAgIHNldE9yZGVySXRlbShcIm5cdTAxMUJjb1wiKTtcbiAgICAgICAgbmF2aWdhdGUoXCIvb3JkZXJvbmVcIiwgeyByZXBsYWNlOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIFxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCByZWxhdGl2ZVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBweS0xNCBtZDpweS0yNCBteC1hdXRvIGZsZXggc206ZmxleC1ub3dyYXAgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgbWQ6dy0xLzIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206bXItMTAgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKFwib3JkZXJcIil9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1tZWRpdW0gbXktNVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIndob19pc193ZWFyaW5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoXCJ3b21hblwiKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoXCJwaWNrXCIpfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0Rm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIm1hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoXCJtYW5cIil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCBtdC00XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKFwicGlja1wiKX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJraWQuc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKFwia2lkXCIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcInBpY2tcIil9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsICBtdC04IG1kOm10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MjcxOTE4ODM5My1iYjcxY2E0NWRiYjk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWxsdXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn0iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQsIHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFBlcnNvbigpIHtcbiAgY29uc3QgeyB0cmFuc2xhdG9yLCBzZXRPcmRlckl0ZW0gfSA9IHVzZU91dGxldENvbnRleHQoKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBuZXh0Rm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgIHNldE9yZGVySXRlbShcIm5cdTAxMUJjb1wiKTtcbiAgICBuYXZpZ2F0ZShcIi9vcmRlcm9uZVwiLCB7IHJlcGxhY2U6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRJdGVtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9uZXZpbSwgbW9ja1xuICAgIG5hdmlnYXRlKFwiL29yZGVyb25lXCIsIHsgcmVwbGFjZTogZmFsc2UgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTQgbWQ6cHktMjQgbXgtYXV0byBmbGV4IHNtOmZsZXgtbm93cmFwIGZsZXgtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMi8zIG1kOnctMS8yIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNtOm1yLTEwIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIm9yZGVyXCIpfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC0yeGwgZ3JvdXAgYmctWyNlYjJmMDZdIHRleHQtWyNGOEVCREJdIHctZnVsbCBoLTcyIHAtMiBib3JkZXIgYm9yZGVyLVsjZWIyZjA2XVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIndvbWFuLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgbXgtMlwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXgtNFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPk9sZW5hIEt5YXNoZW5rbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0yXCI+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJjbG90aF9leGFtcGxlXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlZGl0SXRlbX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1bI2ViMmYwNl0gaG92ZXI6YmctWyNGOEVCREJdIG10LTQgYm9yZGVyLTAgcHktMiBweC01IG91dGxpbmUgb3V0bGluZS1bI0Y4RUJEQl0gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJlZGl0XCIpfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCBtdC0xMiB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImFkZF9wZXJzb25cIil9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRGb3JtfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwid29tYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwid29tYW5cIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwicGlja1wiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17bmV4dEZvcm19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgZ3JvdXAgYmctd2hpdGUgdy0xLzMgaC04MCBwLTIgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZmxleCBmbGV4LWNvbCBob3Zlcjpib3JkZXItWyMwQTlEQkZdIGhvdmVyOmJnLVsjRjhFQkRCXSBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJtYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwibWFuXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcInBpY2tcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRGb3JtfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwia2lkLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImtpZFwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJwaWNrXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgbWQ6bWwtYXV0byB3LWZ1bGwgIG10LTggbWQ6bXQtMFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgyNzE5MTg4MzkzLWJiNzFjYTQ1ZGJiOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgYWx0PVwiaWxsdXN0cmF0aW9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFBlcnNvbk9uT3JkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9QZXJzb25Pbk9yZGVyXCI7XG5pbXBvcnQgUGVyc29uVG9PcmRlciBmcm9tIFwifi9jb21wb25lbnRzL1BlcnNvblRvT3JkZXJcIjtcbmltcG9ydCBHZW5kZXJTZWxlY3RvciBmcm9tIFwifi9jb21wb25lbnRzL0dlbmRlclNlbGVjdG9yXCI7XG5cblxuXG4vKlxuLSBzaG93IGFscmVhZHkgYWRkZWQgcGVvcGxlXG4tIGlmIG5vIHBlb3BsZSBhZGRlZCwgc2hvdyBnZW5kZXIgc2VsZWN0IHRvIGFkZCAxIHBlcnNvblxuLSBpZiBjbGljayBvbiBhZGQgbmV3IHBlcnNvbiwgdmFsaWRhdGUgaW5wdXRzIGFuZCBhZGQgdGhlIHBlcnNvbiB0byBhZGRlZCBwZW9wbGUgYW5kIHNob3cgZ2VuZGVyIHNlbGVjdCBhZ2FpblxuLSBhZnRlciBjbGljayBvbiBnZW5kZXIgc2VsZWN0LCBzaG93IGVtcHR5IGZvcm1cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld09yZGVyKCkge1xuICBjb25zdCB7IHRyYW5zbGF0b3IsIG9yZGVyLCBhZGRQZXJzb25Ub09yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0KCk7XG4gIGNvbnN0IFtzZWxlY3RlZEdlbmRlciwgc2VsZWN0R2VuZGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuZXdQZXJzb25JbmZvLCBzZXROZXdQZXJzb25JbmZvXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2VkaXRpbmdQZXJzb24sIHNldEVkaXRpbmdQZXJzb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZmllbGROYW1lKSA9PiAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpZWxkTmFtZSk7XG4gICAgbmV3UGVyc29uSW5mb1tmaWVsZE5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0TmV3UGVyc29uSW5mbyhuZXdQZXJzb25JbmZvKTtcbiAgfTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHBpY2tHZW5kZXIgPSAoZ2VuZGVyKSA9PiAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWxlY3RHZW5kZXIoZ2VuZGVyKTtcbiAgICAvLyBuZXdQZXJzb25JbmZvW1wiZ2VuZGVyXCJdID0gZ2VuZGVyO1xuICAgIGlmIChnZW5kZXIgPT0gXCJraWRcIikge1xuICAgICAgbmV3UGVyc29uSW5mby5hZHVsdCA9IGZhbHNlO1xuICAgICAgbmV3UGVyc29uSW5mby5zZXggPSBcIm1hblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdQZXJzb25JbmZvLmFkdWx0ID0gdHJ1ZTtcbiAgICAgIG5ld1BlcnNvbkluZm8uc2V4ID0gZ2VuZGVyO1xuICAgIH1cbiAgICBzZXROZXdQZXJzb25JbmZvKG5ld1BlcnNvbkluZm8pO1xuICB9O1xuXG4gIGNvbnN0IG5leHRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG9yZGVyKTtcbiAgfTtcblxuICBjb25zdCBhZGROZXh0UGVyc29uID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBpZiAoIXZhbGlkYXRlUGVyc29uKG5ld1BlcnNvbkluZm8pKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh2YWxpZGF0ZVBlcnNvbi5lcnJvcnMpO1xuICAgIC8vIH1cbiAgICBhZGRQZXJzb25Ub09yZGVyKG5ld1BlcnNvbkluZm8sIGVkaXRpbmdQZXJzb24pO1xuICAgIGNsZWFuUGVyc29uRm9ybSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFuUGVyc29uRm9ybSA9ICgpID0+IHtcbiAgICBzZWxlY3RHZW5kZXIobnVsbCk7XG4gICAgc2V0RWRpdGluZ1BlcnNvbihudWxsKTtcbiAgICBzZXROZXdQZXJzb25JbmZvKHt9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVkaXRpbmdQZXJzb24pO1xuICB9LCBbZWRpdGluZ1BlcnNvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWItMTJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG1sLTEgbXQtMSB0ZXh0LVsjMEE5REJGXSBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIG91dGxpbmUtWyMwQTlEQkZdIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOmJnLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjRjhFQkRCXSBob3ZlcjpvdXRsaW5lLVsjZWIyZjA2XSBmaWxsLVsjMEE5REJGXSBob3ZlcjpmaWxsLVsjRjhFQkRCXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMThcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0uMjkzIDguMjkzIDQtNGExIDEgMCAxIDEgMS40MTQgMS40MTRMMy40MTUgOEgxNWExIDEgMCAxIDEgMCAySDMuNDE1bDIuMjk0IDIuMjk0YTEgMSAwIDEgMS0xLjQxNCAxLjQxNGwtNC00YS45OTcuOTk3IDAgMCAxLS4wMDItMS40MTRaXCIgLz48L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgdGV4dC1ncmF5LTkwMCBtbC01XCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJvcmRlclwiKX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge29yZGVyLnBlcnNvbnMgJiYgb3JkZXIucGVyc29ucy5sZW5ndGggPyAoXG4gICAgICAgIG9yZGVyLnBlcnNvbnMubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBlcnNvbk9uT3JkZXJcbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIGRldGFpbHM9e2l0ZW19XG4gICAgICAgICAgICAgIGVkaXRJdGVtPXsoKSA9PiBzZXRFZGl0aW5nUGVyc29uKGtleSl9XG4gICAgICAgICAgICAgIHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtbWVkaXVtIG15LTVcIj5cbiAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJ3aG9faXNfd2VhcmluZ1wiKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgeyFzZWxlY3RlZEdlbmRlciA/IChcbiAgICAgICAgPEdlbmRlclNlbGVjdG9yIHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9IHNlbGVjdEdlbmRlcj17cGlja0dlbmRlcn0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQZXJzb25Ub09yZGVyXG4gICAgICAgICAgdHJhbnNsYXRvcj17dHJhbnNsYXRvcn1cbiAgICAgICAgICBzZWxlY3RlZEdlbmRlcj17c2VsZWN0ZWRHZW5kZXJ9XG4gICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBteS0xMCBteC0yIHctZnVsbCBtZDp3LTEvMlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17YWRkTmV4dFBlcnNvbn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBiZy1bI2ViMmYwNl0gdGV4dC1bI0Y4RUJEQl0gb3V0bGluZS1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI2ViMmYwNl0gaG92ZXI6YmctWyNGOEVCREJdXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImFkZF9wZXJzb25cIil9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8aHIgY2xhc3NOYW1lPVwidy1mdWxsIG15LTQgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gb3BhY2l0eS0yMFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbXktMTAgbXgtMiB3LWZ1bGwgbWQ6dy0xLzJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e25leHRGb3JtfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciAgdGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI0Y4RUJEQl0gaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuICAgICAgICA+XG4gICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwiY29udGludWVcIil9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uT25PcmRlcih7IHRyYW5zbGF0b3IsIGRldGFpbHMsIGVkaXRJdGVtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC0yeGwgZ3JvdXAgYmctWyNlYjJmMDZdIHRleHQtWyNGOEVCREJdIHctZnVsbCBoLTcyIHAtMiBib3JkZXIgYm9yZGVyLVsjZWIyZjA2XVwiPlxuICAgICAgPGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IG14LTJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBteC00XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntkZXRhaWxzLmZ1bGxuYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMlwiPntkZXRhaWxzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2VkaXRJdGVtfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1bI2ViMmYwNl0gaG92ZXI6YmctWyNGOEVCREJdIG10LTQgYm9yZGVyLTAgcHktMiBweC01IG91dGxpbmUgb3V0bGluZS1bI0Y4RUJEQl0gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImVkaXRcIil9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uVG9PcmRlcih7XG4gIHRyYW5zbGF0b3IsXG4gIHNlbGVjdGVkR2VuZGVyLFxuICBoYW5kbGVJbnB1dENoYW5nZSxcbn0pIHtcblxuICBjb25zdCBpc0tpZCA9IHNlbGVjdGVkR2VuZGVyID09IFwia2lkXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy1bIzBBOURCRl0gdGV4dC1bI0Y4RUJEQl0gdy1mdWxsIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyMwQTlEQkZdIGZsZXggZmxleC1jb2wgaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtzZWxlY3RlZEdlbmRlcn0uc3ZnYH0gYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LVsjMEE5REJGXVwiPlxuICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKHNlbGVjdGVkR2VuZGVyKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGdyb3VwLWhvdmVyOnRleHQtWyMwQTlEQkZdIG10LTQgYm9yZGVyLTAgcHktMiBweC01IG91dGxpbmUgb3V0bGluZS1bI0Y4RUJEQl0gZ3JvdXAtaG92ZXI6b3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJyZW1vdmVcIil9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNLaWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMyBteS02IGZvbnQtYm9sZCBzcGFjZS14LTIgdGV4dC1bIzBBOURCRl0gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjZW50LVsjMEE5REJGXVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIGlkPVwiZ2lybFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJraWRnZW5kZXJzZWxlY3RvclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwibWFuXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlKCdzZXgnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJveVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImJveVwiKX08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIlxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBpZD1cImdpcmxcIlxuICAgICAgICAgICAgICBuYW1lPVwia2lkZ2VuZGVyc2VsZWN0b3JcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIndvbWFuXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlKCdzZXgnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdpcmxcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoXCJnaXJsXCIpfTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy0xLzVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJhZ2VcIil9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyMlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZSgnYWdlJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHctNC81XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwibmFtZVwiKX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWFcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UoJ2Z1bGxuYW1lJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbXktNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcInNlbGVjdF9jbG90aGVzXCIpfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEpha1x1MDBFOSBvYmxlXHUwMTBEZW5cdTAwRUQgcG90XHUwMTU5ZWJ1amV0ZT9cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNSBrcyB0cmlrYSwgMiBrcyBrYWxob3R5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlKCdkZXNjcmlwdGlvbicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTIvNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImNsb3RoX3NpemVcIil9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlKCdjbG90aGluZ19zaXplJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy0yLzVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJzaG9lc19zaXplXCIpfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI0NFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UoJ3Nob2Vfc2l6ZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZGVyU2VsZWN0b3IoeyB0cmFuc2xhdG9yLCBzZWxlY3RHZW5kZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17c2VsZWN0R2VuZGVyKFwid29tYW5cIil9XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIndvbWFuXCIpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPlxuICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcInBpY2tcIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtzZWxlY3RHZW5kZXIoXCJtYW5cIil9XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9XCJtYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJtYW5cIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCBtdC00XCI+XG4gICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwicGlja1wiKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3NlbGVjdEdlbmRlcihcImtpZFwiKX1cbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgZ3JvdXAgYmctd2hpdGUgdy0xLzMgaC04MCBwLTIgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZmxleCBmbGV4LWNvbCBob3Zlcjpib3JkZXItWyMwQTlEQkZdIGhvdmVyOmJnLVsjRjhFQkRCXSBpdGVtcy1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz1cImtpZC5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImtpZFwiKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj5cbiAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJwaWNrXCIpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCwgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJPbmUoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdG9yLCBzZXRPcmRlckl0ZW0gfSA9IHVzZU91dGxldENvbnRleHQoKTtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgbmV4dEZvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vICAgIHNldE9yZGVySXRlbShcIm5cdTAxMUJjb1wiKTtcbiAgICAgICAgbmF2aWdhdGUoXCIvc3VtbWFyeVwiLCB7IHJlcGxhY2U6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgY29uc3QgYWR1bHQgPSB0cnVlOyAvL2plIHBvdFx1MDE1OWViYSBuYXN0YXZpdCBqZXN0bGkgamUgdG8gZFx1MDBFRHRcdTAxMUIgbmVibyBkb3NwXHUwMTFCbFx1MDBGRFxuICAgIHJldHVybiAoXG4gICAgICAgXG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250IHJlbGF0aXZlXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTE0IG1kOnB5LTI0IG14LWF1dG8gZmxleCBzbTpmbGV4LW5vd3JhcCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvMyBtZDp3LTEvMiByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzbTptci0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoXCJvcmRlclwiKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy1bIzBBOURCRl0gdGV4dC1bI0Y4RUJEQl0gdy1mdWxsIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyMwQTlEQkZdIGZsZXggZmxleC1jb2wgaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1bIzBBOURCRl1cIj57dHJhbnNsYXRvci50cmFuc2xhdGUoXCJ3b21hblwiKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1bIzBBOURCRl0gbXQtNCBib3JkZXItMCBweS0yIHB4LTUgb3V0bGluZSBvdXRsaW5lLVsjRjhFQkRCXSBncm91cC1ob3ZlcjpvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGxcIj5PZGVicmF0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshYWR1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC0zIG15LTYgZm9udC1ib2xkIHNwYWNlLXgtMiB0ZXh0LVsjMEE5REJGXSBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjZW50LVsjMEE5REJGXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZ2lybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJraWRnZW5kZXJzZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYm95XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYm95XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKFwiYm95XCIpfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdpcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwia2lkZ2VuZGVyc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImdpcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnaXJsXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKFwiZ2lybFwiKX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTEvNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJhZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHctNC81XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG15LTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKFwic2VsZWN0X2Nsb3RoZXNcIil9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmFrXHUwMEU5IG9ibGVcdTAxMERlblx1MDBFRCBwb3RcdTAxNTllYnVqZXRlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjUga3MgdHJpa2EsIDIga3Mga2FsaG90eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy0yLzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwiY2xvdGhfc2l6ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTIvNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJzaG9lc19zaXplXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjQ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIG15LTEwIG14LTIgdy1mdWxsIG1kOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkZHBlcnNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSBvdXRsaW5lLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImFkZF9wZXJzb25cIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktNCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBvcGFjaXR5LTIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbXktMTAgbXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0Rm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciAgdGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI0Y4RUJEQl0gaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJjb250aW51ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgbWQ6bWwtYXV0byB3LWZ1bGwgIG10LTggbWQ6bXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgyNzE5MTg4MzkzLWJiNzFjYTQ1ZGJiOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbGx1c3RyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSIsICJpbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdW1tYXJ5KCkge1xuICBjb25zdCB7IHRyYW5zbGF0b3IsIG9yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0KCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKG9yZGVyKTtcbiAgICAvLyAgICBvZGVzbGF0IGRhdGEgbmEgc2VydmVyXG4gICAgLy8gICAgcG9rdWQgc2UgdG8gcG9kYXJpbG8sIHpvYnJheml0IC9jb25maXJtYXRpb25cblxuICAgIG5hdmlnYXRlKFwiL2NvbmZpcm1hdGlvblwiLCB7IHJlcGxhY2U6IGZhbHNlIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250IHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTE0IG1kOnB5LTI0IG14LWF1dG8gZmxleCBzbTpmbGV4LW5vd3JhcCBmbGV4LXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvMyBtZDp3LTEvMiByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzbTptci0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJvcmRlclwiKX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtMnhsIGdyb3VwIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSB3LWZ1bGwgaC03MiBwLTIgYm9yZGVyIGJvcmRlci1bI2ViMmYwNl1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IG14LTJcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG14LTRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5PbGVuYSBLeWFzaGVua288L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwiY2xvdGhfZXhhbXBsZVwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXSBtdC00IGJvcmRlci0wIHB5LTIgcHgtNSBvdXRsaW5lIG91dGxpbmUtWyNGOEVCREJdIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwiZWRpdFwiKX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBteS0xMCBteC0yIHctZnVsbCBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciAgdGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI0Y4RUJEQl0gaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIj5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJhZGRfcGVyc29uXCIpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInctZnVsbCBteS00IGJvcmRlciBib3JkZXItWyM5NTdENUVdIG9wYWNpdHktMjBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCBtdC0xMiB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIm9yZGVyX2NoZWNrXCIpfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi8/ZWRpdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbWwtMSB1bmRlcmxpbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJlZGl0X2NvbnRhY3RcIil9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMS8yIHB4LTFcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIm9yZGVyZXJcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPk9sZW5hIEt5YXNoZW5rbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4rMzggMDUwMyAyMCAyMCA0Njwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5PbGVuYS5LQGdtYWlsLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImRlbGl2ZXJ5X2FkZHJlc3NcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPkpha3ViIEhlcnRsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlUgVXJhbmllIDI3LCBQcmFoYSA3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjE3MDAwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPis0MjAgNzc2IDc2NCAyMjE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0xLzJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImZvcl93aG9fYW5kX3doYXRcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPk9sZW5hIEt5aWFza2hvPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImNsb3RoX2V4YW1wbGVcIil9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy1mdWxsIG15LTEwIGJvcmRlciBib3JkZXItWyM5NTdENUVdIG9wYWNpdHktMjBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIG14LTIgdy1mdWxsIG1kOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRGb3JtfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSBvdXRsaW5lLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwidG9fb3JkZXJcIil9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsICBtdC04IG1kOm10LTBcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MjcxOTE4ODM5My1iYjcxY2E0NWRiYjk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgIGFsdD1cImlsbHVzdHJhdGlvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCwgdXNlTmF2aWdhdGUsIHVzZVN1Ym1pdCwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IENvbnRhY3RJbmZvIGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGFjdEluZm9cIjtcbmltcG9ydCBEZWxpdmVyeUluZm8gZnJvbSBcIn4vY29tcG9uZW50cy9EZWxpdmVyeUluZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgdHJhbnNsYXRvciwgc2V0T3JkZXJJdGVtLCBvcmRlciB9ID0gdXNlT3V0bGV0Q29udGV4dCgpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IFtkZWxpdmVyeSwgc2V0RGVsaXZlcnldID0gdXNlU3RhdGUob3JkZXIuZGVsaXZlcnkgPT0gXCJkZWxpdmVyeVwiKTtcblxuICBjb25zdCBoYW5kbGVEZWxpdmVyeSA9IChlKSA9PiB7XG4gICAgc2V0RGVsaXZlcnkoIWRlbGl2ZXJ5KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaWRlbnRpZmljYXRvcikgPT4ge1xuICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgIHNldE9yZGVySXRlbShbaWRlbnRpZmljYXRvcl0sIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBuZXh0Rm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5hdmlnYXRlKFwiL25ld09yZGVyXCIsIHsgcmVwbGFjZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcmRlckl0ZW0oXCJkZWxpdmVyeV90eXBlXCIsIGRlbGl2ZXJ5ID8gXCJkZWxpdmVyeVwiIDogXCJwaWNrdXBcIik7XG4gIH0sIFtkZWxpdmVyeSwgc2V0T3JkZXJJdGVtXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxDb250YWN0SW5mb1xuICAgICAgICB0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfVxuICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxEZWxpdmVyeUluZm9cbiAgICAgICAgdHJhbnNsYXRvcj17dHJhbnNsYXRvcn1cbiAgICAgICAgaGFuZGxlRGVsaXZlcnk9e2hhbmRsZURlbGl2ZXJ5fVxuICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICBkZWxpdmVyeT17ZGVsaXZlcnl9XG4gICAgICAgIG5leHRGb3JtPXtuZXh0Rm9ybX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdEluZm8oeyB0cmFuc2xhdG9yLCBoYW5kbGVDaGFuZ2UsIG9yZGVyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG4gICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwiY29udGFjdFwiKX1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIm5hbWVfYW5kX3N1cm5hbWVcIil9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJmdWxsbmFtZVwiKX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWFcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29yZGVyLmZ1bGxuYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInBob25lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJwaG9uZVwiKX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcInBob25lXCIpfVxuICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzM4MCAxMTEgMTExIDExMVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3JkZXIucGhvbmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmbGV4ICB0ZXh0LVsjOTU3RDVFXVwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTctNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTkgOWExIDEgMCAwMDAgMnYzYTEgMSAwIDAwMSAxaDFhMSAxIDAgMTAwLTJ2LTNhMSAxIDAgMDAtMS0xSDl6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJwaG9uZV90b19maW5kX3lvdVwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZ3JvdyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImVtYWlsXCIpfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTU3RDVFXSBmb250LWJvbGQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIm9wdGlvbmFsXCIpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwiZW1haWxcIil9XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29yZGVyLmVtYWlsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxpdmVyeUluZm8oe1xuICB0cmFuc2xhdG9yLFxuICBvcmRlcixcbiAgaGFuZGxlRGVsaXZlcnksXG4gIGhhbmRsZUNoYW5nZSxcbiAgZGVsaXZlcnksXG4gIG5leHRGb3JtXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBtdC0xNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImRlbGl2ZXJ5X2FkZHJlc3NcIil9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC0zIG15LTYgaXRlbXMtY2VudGVyIGZvbnQtYm9sZCBzcGFjZS14LTIgdGV4dC1bIzBBOURCRl1cIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NlbnQtWyMwQTlEQkZdXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgaWQ9XCJyYWRpb2RlbGl2ZXJ5XCJcbiAgICAgICAgICAgICAgbmFtZT1cInJhZGlvc2VsZWN0b3JcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInJhZGlvZGVsaXZlcnlcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtkZWxpdmVyeSA9PSB0cnVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVsaXZlcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpb2RlbGl2ZXJ5XCI+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImRlbGl2ZXJfdG9fYWRyZXNzXCIpfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NlbnQtWyMwQTlEQkZdXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgaWQ9XCJyYWRpb3BpY2t1cFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyYWRpb3NlbGVjdG9yXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJyYWRpb3BpY2t1cFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2RlbGl2ZXJ5ID09IGZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVsaXZlcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpb3BpY2t1cFwiPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJwaWNrdXBcIil9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkZWxpdmVyeSA9PSB0cnVlID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwibmFtZV9hbmRfc3VybmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcImRlbGl2ZXJ5X2Z1bGxuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBYVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3JkZXIuZGVsaXZlcnlfZnVsbG5hbWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmbGV4ICB0ZXh0LVsjOTU3RDVFXVwiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTctNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTkgOWExIDEgMCAwMDAgMnYzYTEgMSAwIDAwMSAxaDFhMSAxIDAgMTAwLTJ2LTNhMSAxIDAgMDAtMS0xSDl6XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJwaWNrZXJfbmFtZVwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN0cmVldFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwic3RyZWV0X2FuZF9udW1iZXJcIil9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJkZWxpdmVyeV9zdHJlZXRcIil9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdHJlZXRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdHJhXHUwMTYxbmlja1x1MDBFMSAxMlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3JkZXIuZGVsaXZlcnlfc3RyZWV0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNpdHlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcImNpdHlcIil9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJkZWxpdmVyeV9jaXR5XCIpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmFoYVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3JkZXIuZGVsaXZlcnlfY2l0eX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNpdHlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcInppcFwiKX1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcImRlbGl2ZXJ5X3ppcFwiKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBzY1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwc2NcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjE0MDAwXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV96aXB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGhvbmUyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZ3JvdyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcInBob25lXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTU3RDVFXSBmb250LWJvbGQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIm9wdGlvbmFsXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwiZGVsaXZlcnlfcGhvbmVcIil9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lMlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZTJcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiszODAgMTExIDExMSAxMTFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29yZGVyLmRlbGl2ZXJ5X3Bob25lfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZmxleCAgdGV4dC1bIzk1N0Q1RV1cIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03LTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek05IDlhMSAxIDAgMDAwIDJ2M2ExIDEgMCAwMDEgMWgxYTEgMSAwIDEwMC0ydi0zYTEgMSAwIDAwLTEtMUg5elwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0b3IudHJhbnNsYXRlKFwicGhvbmVfaWZfb3RoZXJcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMSBiZy1bIzBBOURCRl0gdGV4dC14bCBmbGV4IGZsZXgtY29sIHRleHQtWyNGOEVCREJdIGZvbnQtc2VtaWJvbGQgcC01IG1kOnctMi8zIFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkhhbGEgMTMgdiBQcmFcdTAxN0Vza1x1MDBFOSB0clx1MDE3RW5pY2k8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+QnViZW5za1x1MDBFOSBuXHUwMEUxYlx1MDE1OWVcdTAxN0VcdTAwRUQgMzA2PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjE3MCAwMCBQcmFoYSA3PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtNVwiIGhyZWY9XCJ0ZWw6KzQyMDczNzU5NzA3MFwiPlxuICAgICAgICAgICAgICAgICAgTW9iaWw6IDczNyA1OSA3MCA3MFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmluZm9Ac2F0bmlrcHJhaGEuY3pcIj5cbiAgICAgICAgICAgICAgICAgIEUtbWFpbDogaW5mb0BzYXRuaWtwcmFoYS5jelxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvbzZaOHF6a0c2cG5UUnM3UDhcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy00NCB0ZXh0LWJhc2UgbXQtMTAgdGV4dC1bI0Y4RUJEQl0gYm9yZGVyLTAgcHktMiBweC0zIGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjRjhFQkRCXSByb3VuZGVkLWZ1bGwgIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXSAgaG92ZXI6b3V0bGluZS1bI0Y4RUJEQl0gZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJzaG93X29uX21hcFwiKX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIG15LTEwIG14LTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17bmV4dEZvcm19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgIHRleHQtWyMwQTlEQkZdIGJvcmRlci0wIHB5LTQgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgb3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsIHRleHQteGwgaG92ZXI6YmctWyNlYjJmMDZdIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRvci50cmFuc2xhdGUoXCJjb250aW51ZV90b19jbG90aF9zZWxlY3Rpb25cIil9XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IG1sLTJcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgN2w1IDVtMCAwbC01IDVtNS01SDZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNDc0NjcxNmMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVBXU1lPMjJZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RWFNUSEFFTC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtVTZWM0hHMlcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FkZHBlcnNvbic6eydpZCc6J3JvdXRlcy9hZGRwZXJzb24nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRkcGVyc29uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkZHBlcnNvbi1ZWkUyUFVaQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbmZpcm1hdGlvbic6eydpZCc6J3JvdXRlcy9jb25maXJtYXRpb24nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29uZmlybWF0aW9uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvbmZpcm1hdGlvbi1XSUxWSENSWi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2dlbmRlcnNlbGVjdCc6eydpZCc6J3JvdXRlcy9nZW5kZXJzZWxlY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZ2VuZGVyc2VsZWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2dlbmRlcnNlbGVjdC1NUEJFSU9SRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LU01VVhVWUtTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbmV3T3JkZXInOnsnaWQnOidyb3V0ZXMvbmV3T3JkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbmV3T3JkZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbmV3T3JkZXItVkJXRTVTSlYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9vcmRlcm9uZSc6eydpZCc6J3JvdXRlcy9vcmRlcm9uZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidvcmRlcm9uZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9vcmRlcm9uZS1YVVEyTEdGNy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3N1bW1hcnknOnsnaWQnOidyb3V0ZXMvc3VtbWFyeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzdW1tYXJ5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3N1bW1hcnktNllIMkdaQkouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNDc0NjcxNkMuanMnfTsi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
