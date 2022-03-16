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

// prisma/helpers.js
var require_helpers = __commonJS({
  "prisma/helpers.js"(exports, module2) {
    init_react();
    var prepareOrderForPrismaInsert2 = function(order3) {
      order3.persons.map((person) => {
        person.requirements = { create: person.requirements };
      });
      order3.persons = { create: order3.persons };
      return order3;
    };
    module2.exports = { prepareOrderForPrismaInsert: prepareOrderForPrismaInsert2 };
  }
});

// prisma/getDB.js
var require_getDB = __commonJS({
  "prisma/getDB.js"(exports) {
    init_react();
    var { PrismaClient } = require("@prisma/client");
    var db;
    exports.getDB = function() {
      if (db) {
        return db;
      }
      db = new PrismaClient();
      db.$connect();
      return db;
    };
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
var tailwind_default = "/build/_assets/tailwind-SFGYIVDC.css";

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
    delivery: "delivery",
    persons: []
  });
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

// route:/home/vorcigernix/dev/satnik/app/routes/genderselect.tsx
var genderselect_exports = {};
__export(genderselect_exports, {
  default: () => GenderSelect
});
init_react();
var import_react2 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
function GenderSelect() {
  const { translator, setOrderItem } = (0, import_remix5.useOutletContext)();
  const navigate = (0, import_remix5.useNavigate)();
  const nextForm = (e) => {
    e.preventDefault();
    navigate("/orderone", { replace: false });
  };
  return /* @__PURE__ */ import_react2.default.createElement("section", {
    className: "text-gray-600 body-font relative"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ import_react2.default.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1"
  }, translator.translate("order"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "text-[#0A9DBF] font-medium my-5"
  }, translator.translate("who_is_wearing"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: nextForm,
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "woman.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("woman")), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick"))), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: nextForm,
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "man.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("man")), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick"))), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: nextForm,
    className: "rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "kid.svg",
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-2xl font-bold"
  }, translator.translate("kid")), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-[#0A9DBF] font-semibold mt-4"
  }, translator.translate("pick")))))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/addperson.tsx
var addperson_exports = {};
__export(addperson_exports, {
  default: () => AddPerson
});
init_react();
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

// route:/home/vorcigernix/dev/satnik/app/routes/newOrder.tsx
var newOrder_exports = {};
__export(newOrder_exports, {
  default: () => NewOrder
});
init_react();
var import_react4 = require("react");
var import_remix7 = __toESM(require_remix());

// app/components/PersonOnOrder.tsx
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
  }, details.fullname), details.requirements.map((requirement, index) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: index,
      className: "py-2"
    }, requirement);
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: editItem,
    className: "font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
  }, translator.translate("edit"))));
}

// app/components/PersonToOrder.tsx
init_react();
var import_react3 = __toESM(require("react"));
function PersonToOrder({ translator, selectedGender, handleInputChange }) {
  const isKid = selectedGender == "kid";
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    src: `${selectedGender}.svg`,
    alt: "man",
    className: "my-4 "
  }), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "text-2xl font-bold group-hover:text-[#0A9DBF]"
  }, translator.translate(selectedGender)), /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full"
  }, translator.translate("remove")))), isKid && /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex mx-3 my-6 font-bold space-x-2 text-[#0A9DBF] items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "girl",
    name: "kidgenderselector",
    value: "man",
    onChange: handleInputChange("sex")
  }), /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "boy"
  }, translator.translate("boy")), /* @__PURE__ */ import_react3.default.createElement("input", {
    className: "accent-[#0A9DBF]",
    type: "radio",
    id: "girl",
    name: "kidgenderselector",
    value: "woman",
    onChange: handleInputChange("sex")
  }), /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "girl"
  }, translator.translate("girl")))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-2 w-1/5"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("age")), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    id: "age",
    name: "age",
    placeholder: "22",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("age")
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-2 w-4/5"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("name")), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Aa",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("fullname")
  })))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "w-full mx-auto"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col md:mb-12"
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    className: "sm:text-3xl text-2xl font-bold title-font my-4 text-gray-900 ml-1"
  }, translator.translate("select_clothes")))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-2 w-full"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, "Jak\xE9 oble\u010Den\xED pot\u0159ebujete?"), /* @__PURE__ */ import_react3.default.createElement("textarea", {
    id: "name",
    name: "name",
    placeholder: "5 ks trika, 2 ks kalhoty",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("requirements")
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("cloth_size")), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "S",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("clothing_size")
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-2 w-2/5"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative my-2 mx-1"
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "name",
    className: "leading-7 font-semibold text-base text-gray-600"
  }, translator.translate("shoes_size")), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "44",
    className: "w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out",
    onChange: handleInputChange("shoe_size")
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
  const { translator, order: order3, addPersonToOrder } = (0, import_remix7.useOutletContext)();
  const [selectedGender, selectGender] = (0, import_react4.useState)();
  const [newPersonInfo, setNewPersonInfo] = (0, import_react4.useState)({});
  const [editingPerson, setEditingPerson] = (0, import_react4.useState)();
  const handleInputChange = (fieldName) => (e) => {
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
    navigate("/summary", { replace: true });
  };
  const addNextPerson = (event) => {
    event.preventDefault();
    addPersonToOrder(newPersonInfo, editingPerson);
    cleanPersonForm();
  };
  const cleanPersonForm = () => {
    selectGender(void 0);
    setEditingPerson(void 0);
    setNewPersonInfo({});
  };
  (0, import_react4.useEffect)(() => {
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

// route:/home/vorcigernix/dev/satnik/app/routes/orderone.tsx
var orderone_exports = {};
__export(orderone_exports, {
  default: () => OrderOne
});
init_react();
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

// route:/home/vorcigernix/dev/satnik/app/routes/summary.tsx
var summary_exports = {};
__export(summary_exports, {
  action: () => action,
  default: () => Summary
});
init_react();
var import_remix9 = __toESM(require_remix());

// prisma/api/Order.ts
init_react();
var Ajv = require("ajv");
var { prepareOrderForPrismaInsert } = require_helpers();
var { getDB } = require_getDB();
var ajv = new Ajv();
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
    age: { type: "integer" },
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
    "state",
    "created_at",
    "updated_at"
  ],
  additionalProperties: false
};
var validateOrder = ajv.compile(orderSchema);
var saveNewOrder = async function(order3) {
  order3.state = "open";
  if (!validateOrder(order3)) {
    console.log(validateOrder.errors);
    throw new Error(JSON.stringify(validateOrder.errors));
  }
  order3 = prepareOrderForPrismaInsert(order3);
  return await getOrderModel().create({ data: order3 });
};
var getOrderModel = function() {
  return getDB().order;
};

// route:/home/vorcigernix/dev/satnik/app/routes/summary.tsx
var orderMock = {
  fullname: "Olena Shevchenko",
  phone: "777777777",
  email: "michal.palma@gmail.com",
  delivery_type: "pickup",
  delivery_fullname: "This is just TESTING Order / Toto je pouze TESTOVACI objednavka",
  delivery_street: "Jecna 22",
  delivery_city: "Praha",
  delivery_zip: "12000",
  delivery_phone: "777111111",
  delivery_time: new Date("2022-03-01"),
  persons: [
    {
      sex: "woman",
      adult: true,
      fullname: "Anna Koroljenko",
      age: 30,
      clothing_size: "m",
      shoe_size: "41",
      requirements: [
        {
          description: "cerna bunda"
        },
        {
          description: "modre boty"
        }
      ]
    },
    {
      sex: "man",
      adult: false,
      fullname: "Pavel Koroljenko",
      age: 10,
      clothing_size: "s",
      shoe_size: "30",
      requirements: [
        {
          description: "nejake kalhoty"
        }
      ]
    }
  ],
  state: "open",
  lang: "cs",
  created_at: new Date(),
  updated_at: new Date()
};
async function action({ request }) {
  const order3 = (await request.formData()).get("order");
  console.log(await saveNewOrder(JSON.parse(order3)));
  return (0, import_remix9.redirect)("/summary");
}
function Summary() {
  const submit = (0, import_remix9.useSubmit)();
  const { translator, order: order3 } = (0, import_remix9.useOutletContext)();
  const navigate = (0, import_remix9.useNavigate)();
  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitting");
    console.log(e);
    submit(e.currentTarget);
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
  }, /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "post",
    onSubmit: submitForm
  }, /* @__PURE__ */ React.createElement("input", {
    id: "formData",
    type: "hidden",
    name: "order",
    value: JSON.stringify(orderMock),
    readOnly: true
  }), /* @__PURE__ */ React.createElement("button", {
    className: "items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
  }, translator.translate("to_order")))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    className: "rounded-lg w-full object-cover object-center",
    alt: "illustration"
  }))));
}

// route:/home/vorcigernix/dev/satnik/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react5 = require("react");
var import_remix10 = __toESM(require_remix());

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

// app/components/DeliveryInfo.tsx
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

// route:/home/vorcigernix/dev/satnik/app/routes/index.tsx
function Index() {
  const { translator, setOrderItem, order: order3 } = (0, import_remix10.useOutletContext)();
  const navigate = (0, import_remix10.useNavigate)();
  const [delivery, setDelivery] = (0, import_react5.useState)(order3.delivery_type == "delivery");
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
  (0, import_react5.useEffect)(() => {
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
var assets_manifest_default = { "version": "194452c6", "entry": { "module": "/build/entry.client-SGYCZBHY.js", "imports": ["/build/_shared/chunk-LUMZKUI3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-34YOPZJT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/addperson": { "id": "routes/addperson", "parentId": "root", "path": "addperson", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/addperson-DTADCM3O.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/confirmation": { "id": "routes/confirmation", "parentId": "root", "path": "confirmation", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/confirmation-G6CH35JL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/genderselect": { "id": "routes/genderselect", "parentId": "root", "path": "genderselect", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/genderselect-ASUO6RCN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-V4C3GOD3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/newOrder": { "id": "routes/newOrder", "parentId": "root", "path": "newOrder", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/newOrder-SOHKRRUK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/orderone": { "id": "routes/orderone", "parentId": "root", "path": "orderone", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/orderone-ARAHAW2H.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/summary": { "id": "routes/summary", "parentId": "root", "path": "summary", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/summary-WMYNMVBT.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-194452C6.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9wcmlzbWEvaGVscGVycy5qcyIsICIuLi9wcmlzbWEvZ2V0REIuanMiLCAiLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9sb2NhbGUvdHJhbnNsYXRpb24udHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICJyb3V0ZTovaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvY29uZmlybWF0aW9uLnRzeCIsICJyb3V0ZTovaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvZ2VuZGVyc2VsZWN0LnRzeCIsICJyb3V0ZTovaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvYWRkcGVyc29uLnRzeCIsICJyb3V0ZTovaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvbmV3T3JkZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvbk9uT3JkZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvblRvT3JkZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0dlbmRlclNlbGVjdG9yLnRzeCIsICJyb3V0ZTovaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvb3JkZXJvbmUudHN4IiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9zdW1tYXJ5LnRzeCIsICIuLi9wcmlzbWEvYXBpL09yZGVyLnRzIiwgInJvdXRlOi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGFjdEluZm8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0RlbGl2ZXJ5SW5mby50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiY29uc3QgcHJlcGFyZU9yZGVyRm9yUHJpc21hSW5zZXJ0ID0gZnVuY3Rpb24gKG9yZGVyKSB7XG5cdG9yZGVyLnBlcnNvbnMubWFwKChwZXJzb24pID0+IHtcblx0XHRwZXJzb24ucmVxdWlyZW1lbnRzID0geyBjcmVhdGU6IHBlcnNvbi5yZXF1aXJlbWVudHMgfVxuXHR9KVxuXHRvcmRlci5wZXJzb25zID0geyBjcmVhdGU6IG9yZGVyLnBlcnNvbnMgfVxuXHRyZXR1cm4gb3JkZXJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHByZXBhcmVPcmRlckZvclByaXNtYUluc2VydCB9XG4iLCAiY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoJ0BwcmlzbWEvY2xpZW50JylcblxubGV0IGRiXG5cbmV4cG9ydHMuZ2V0REIgPSBmdW5jdGlvbiAoKSB7XG5cdGlmIChkYikge1xuXHRcdHJldHVybiBkYlxuXHR9XG5cdGRiID0gbmV3IFByaXNtYUNsaWVudCgpXG5cdGRiLiRjb25uZWN0KClcblx0cmV0dXJuIGRiXG59XG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuZG90ZW52LmNvbmZpZygpXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgICBnZXRMb2FkQ29udGV4dDogKGNvbnRleHQpID0+IGNvbnRleHQuZW52XG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm91dGVzL2NvbmZpcm1hdGlvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm91dGVzL2dlbmRlcnNlbGVjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm91dGVzL2FkZHBlcnNvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvdm9yY2lnZXJuaXgvZGV2L3NhdG5pay9hcHAvcm91dGVzL25ld09yZGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvb3JkZXJvbmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9ob21lL3ZvcmNpZ2Vybml4L2Rldi9zYXRuaWsvYXBwL3JvdXRlcy9zdW1tYXJ5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS92b3JjaWdlcm5peC9kZXYvc2F0bmlrL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jb25maXJtYXRpb25cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvbmZpcm1hdGlvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb25maXJtYXRpb25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2dlbmRlcnNlbGVjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZ2VuZGVyc2VsZWN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImdlbmRlcnNlbGVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRkcGVyc29uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZGRwZXJzb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRkcGVyc29uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9uZXdPcmRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbmV3T3JkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3T3JkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL29yZGVyb25lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9vcmRlcm9uZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJvcmRlcm9uZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc3VtbWFyeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3VtbWFyeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdW1tYXJ5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QocmVxdWVzdCwgcmVzcG9uc2VTdGF0dXNDb2RlLCByZXNwb25zZUhlYWRlcnMsIHJlbWl4Q29udGV4dCkge1xuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyg8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPilcblxuXHRyZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJylcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuXHR9KVxufVxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0cmFuc2xhdGlvbiwgeyBUcmFuc2xhdG9yIH0gZnJvbSAnLi9sb2NhbGUvdHJhbnNsYXRpb24nXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0bGV0Q29udGV4dCB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0c2V0T3JkZXJJdGVtOiBhbnlcblx0b3JkZXI6IE9yZGVyXG5cdHN1Ym1pdE9yZGVyOiBhbnlcblx0YWRkUGVyc29uVG9PcmRlcjogYW55XG59XG5cbmV4cG9ydCB0eXBlIE9yZGVyID0ge1xuXHRmdWxsbmFtZTogc3RyaW5nXG5cdHBob25lOiBzdHJpbmdcblx0ZW1haWw6IHN0cmluZ1xuXHRkZWxpdmVyeV90eXBlOiAnZGVsaXZlcnknIHwgJ3BpY2t1cCdcblx0ZGVsaXZlcnlfZnVsbG5hbWU6IHN0cmluZ1xuXHRkZWxpdmVyeV9zdHJlZXQ6IHN0cmluZ1xuXHRkZWxpdmVyeV9jaXR5OiBzdHJpbmdcblx0ZGVsaXZlcnlfemlwOiBzdHJpbmdcblx0ZGVsaXZlcnlfcGhvbmU6IHN0cmluZ1xuXHRkZWxpdmVyeV90aW1lOiB7fVxuXHRwZXJzb25zOiBQZXJzb25bXVxuXHRzdGF0ZTogJ29wZW4nXG5cdGxhbmc6ICd1YScgfCAnY3MnXG5cdGNyZWF0ZWRfYXQ6IHt9XG5cdHVwZGF0ZWRfYXQ6IHt9XG59XG5cbmV4cG9ydCB0eXBlIFBlcnNvbiA9IHtcblx0c2V4OiAnbWFuJyB8ICd3b21hbidcblx0YWR1bHQ6IGJvb2xlYW5cblx0ZnVsbG5hbWU6IHN0cmluZ1xuXHRhZ2U6IG51bWJlclxuXHRjbG90aGluZ19zaXplOiBzdHJpbmdcblx0c2hvZV9zaXplOiBzdHJpbmdcblx0cmVxdWlyZW1lbnRzOiBSZXF1aXJlbWVudFtdXG59XG5cbnR5cGUgUmVxdWlyZW1lbnQgPSB7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuXHRyZXR1cm4gW1xuXHRcdHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuXHRcdHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnIH0sXG5cdF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gYFx1MDE2MGF0blx1MDBFRGsgUHJhaGEgLSBQb21vYyBVa3JhamluXHUwMTFCYFxuXHRyZXR1cm4ge1xuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGtleXdvcmRzOiAndWtyYWluZSxoZWxwLHVrcmFqaW5hLHZcdTAwRTFsa2EnLFxuXHRcdG5hbWU6ICdcdTAxNjBhdG5cdTAwRURrIC0gUG9tb2MgVWtyYWppblx1MDExQicsXG5cdFx0J3R3aXR0ZXI6aW1hZ2UnOiAnaHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3ovb2dfc2hhcmUucG5nJyxcblx0XHQndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuXHRcdCd0d2l0dGVyOnRpdGxlJzogZGVzY3JpcHRpb24sXG5cdFx0J3R3aXR0ZXI6ZGVzY3JpcHRpb24nOiAnUG9tXHUwMEUxaFx1MDBFMW1lIFVrcmFqaW5cdTAxMUIgcyBcdTAxNjBhdG5cdTAwRURrZW0gUHJhaGEnLFxuXHRcdCdvZzp1cmwnOiAnaHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3ovJyxcblx0XHQnb2c6dHlwZSc6ICd3ZWJzaXRlJyxcblx0XHQnb2c6dGl0bGUnOiAnXHUwMTYwYXRuXHUwMEVEayAtIFBvbW9jIFVrcmFqaW5cdTAxMUInLFxuXHRcdCdvZzpkZXNjcmlwdGlvbic6ICdcdTAxNjBhdG5cdTAwRURrIFByYWhhIC0gUG9tb2MgVWtyYWppblx1MDExQicsXG5cdFx0J29nOmltYWdlJzogJ2h0dHBzOi8vYXBwLnNhdG5pa3ByYWhhLmN6L29nX3NoYXJlLnBuZycsXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbVN1cHBvcnRlZChsYW5ndWFnZTogc3RyaW5nKSB7XG5cdHJldHVybiBbJ3VhJywgJ2NzJ10uaW5jbHVkZXMobGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiAnY3MnXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IHsgcmVxdWVzdDogUmVxdWVzdCB9KSA9PiB7XG5cdGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuXHRpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ2xuZycpKSB7XG5cdFx0cmV0dXJuIGdldEZyb21TdXBwb3J0ZWQodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2xuZycpIGFzIHN0cmluZylcblx0fVxuXG5cdC8vIHRoZW4gd2UgdXNlIHRoZSBjb29raWUsIHVzaW5nIHRoaXMgY29va2llIHdlIGNhbiBzdG9yZSB0aGUgdXNlciBwcmVmZXJlbmNlIHdpdGggYSBmb3JtXG5cdGxldCBjb29raWUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG5cdFx0cmVxdWVzdC5oZWFkZXJzXG5cdFx0XHQuZ2V0KCdDb29raWUnKVxuXHRcdFx0Py5zcGxpdCgnOycpXG5cdFx0XHQubWFwKChjb29raWUpID0+IGNvb2tpZS5zcGxpdCgnPScpKSA/PyBbXSxcblx0KVxuXG5cdGlmIChjb29raWUuaTE4bmV4dCkge1xuXHRcdHJldHVybiBnZXRGcm9tU3VwcG9ydGVkKGNvb2tpZS5pMThuZXh0KVxuXHR9XG5cblx0Ly8gYW5kIHRoZW4gd2UgY2hlY2sgdGhlIEFjY2VwdC1MYW5ndWFnZSBoZWFkZXIgYW5kIHVzZSB0aGF0LCB0aGlzIHdpbGwgaGF2ZSB0aGUgdmFsdWVcblx0Ly8gb2YgdGhlIGxhbmd1YWdlIHRoZSB1c2VyIHVzZSBmb3IgdGhlaXIgT1Ncblx0aWYgKHJlcXVlc3QuaGVhZGVycy5oYXMoJ2FjY2VwdC1sYW5ndWFnZScpKSB7XG5cdFx0cmV0dXJuIGdldEZyb21TdXBwb3J0ZWQocmVxdWVzdC5oZWFkZXJzLmdldCgnYWNjZXB0LWxhbmd1YWdlJykgYXMgc3RyaW5nKVxuXHR9XG5cdHJldHVybiAnY3MnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0Y29uc3QgbG9jYWxlID0gdXNlTG9hZGVyRGF0YSgpXG5cdGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoe1xuXHRcdGRlbGl2ZXJ5OiAnZGVsaXZlcnknLFxuXHRcdHBlcnNvbnM6IFtdLFxuXHR9IGFzIGFueSlcblx0Ly8gY29uc3QgW2dlbmRlclNlbGVjdGVkLCBzZXRDdXJyZW50R2VuZGVyXSA9IHVzZVN0YXRlKCk7XG5cblx0Y29uc3QgW3RyYW5zbGF0b3IsIHNldFRyYW5zbGF0b3JdID0gdXNlU3RhdGU8VHJhbnNsYXRvcj4oe1xuXHRcdHRyYW5zbGF0ZTogdHJhbnNsYXRpb24obG9jYWxlKSxcblx0XHRsYW5ndWFnZTogbG9jYWxlLFxuXHR9KVxuXG5cdGNvbnN0IHNldE9yZGVySXRlbSA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuXHRcdGNvbnN0IG5ld09yZGVyID0gb3JkZXIgYXMgYW55XG5cdFx0bmV3T3JkZXJba2V5XSA9IHZhbHVlXG5cdFx0c2V0T3JkZXIobmV3T3JkZXIpXG5cdH1cblx0Y29uc3Qgc3VibWl0T3JkZXIgPSAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coeyBvcmRlciB9KVxuXHR9XG5cblx0Y29uc3Qgc3dpdGNoTGFuZ3VhZ2UgPVxuXHRcdChjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZyk6IE1vdXNlRXZlbnRIYW5kbGVyID0+XG5cdFx0KGUpID0+IHtcblx0XHRcdGNvbnN0IG5ld0xhbmd1YWdlID0gY3VycmVudExhbmd1YWdlID09ICdjcycgPyAndWEnIDogJ2NzJ1xuXHRcdFx0c2V0VHJhbnNsYXRvcih7XG5cdFx0XHRcdHRyYW5zbGF0ZTogdHJhbnNsYXRpb24obmV3TGFuZ3VhZ2UpLFxuXHRcdFx0XHRsYW5ndWFnZTogbmV3TGFuZ3VhZ2UsXG5cdFx0XHR9KVxuXHRcdH1cblxuXHR0eXBlIFBlcnNvbkRldGFpbHMgPSB7fVxuXHRjb25zdCBhZGRQZXJzb25Ub09yZGVyID0gKGRldGFpbHM6IFBlcnNvbkRldGFpbHMsIGlkPzogbnVtYmVyKSA9PiB7XG5cdFx0aWYgKGlkKSB7XG5cdFx0XHRvcmRlci5wZXJzb25zW2lkXSA9IGRldGFpbHNcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3JkZXIucGVyc29ucy5wdXNoKGRldGFpbHMpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0XHQ8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1CODJTVkVXTUoyXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdDxzY3JpcHQgYXN5bmMgc3JjPVwiL2dhLmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHQ8L2hlYWQ+XG5cdFx0XHQ8Ym9keSBjbGFzc05hbWU9XCJiZy1bI0Y4RUJEQl1cIj5cblx0XHRcdFx0PGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJywgbGluZUhlaWdodDogJzEuNCcgfX0+XG5cdFx0XHRcdFx0PEhlYWRlciB0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfSBzd2l0Y2hMYW5ndWFnZT17c3dpdGNoTGFuZ3VhZ2UodHJhbnNsYXRvci5sYW5ndWFnZSl9IC8+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTQgbWQ6cHktMjQgbXgtYXV0byBmbGV4IHNtOmZsZXgtbm93cmFwIGZsZXgtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMi8zIG1kOnctMS8yIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNtOm1yLTEwIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxPdXRsZXRcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQ9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T3JkZXJJdGVtLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmRlcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VibWl0T3JkZXIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHNldEN1cnJlbnRHZW5kZXIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGdlbmRlclNlbGVjdGVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhZGRQZXJzb25Ub09yZGVyLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMyBtZDp3LTEvMiBoaWRkZW4gbWQ6ZmxleCBmbGV4LWNvbCBtZDptbC1hdXRvIHctZnVsbCAgbXQtOCBtZDptdC0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODI3MTkxODgzOTMtYmI3MWNhNDVkYmI5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJpbGx1c3RyYXRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdDxMaXZlUmVsb2FkIC8+XG5cdFx0XHQ8L2JvZHk+XG5cdFx0PC9odG1sPlxuXHQpXG59XG4iLCAiaW1wb3J0IGNzIGZyb20gJy4vdHJhbnNsYXRpb25zL2NzLmpzb24nXG5pbXBvcnQgdWEgZnJvbSAnLi90cmFuc2xhdGlvbnMvdWEuanNvbidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zbGF0aW9uKGxvY2FsZTogc3RyaW5nKSB7XG5cdGNvbnN0IHRyYW5zbGF0aW9uVG9Vc2UgPSBsb2NhbGUgPT0gJ3VhJyA/IHVhIDogKGNzIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pXG5cdHJldHVybiBmdW5jdGlvbiB0cmFuc2xhdGUoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0cmFuc2xhdGlvblRvVXNlW3N0cmluZ10gfHwgJ21pc3NpbmcgdHJhbnNsYXRpb246ICcgKyBzdHJpbmdcblx0fVxufVxuXG5leHBvcnQgdHlwZSBUcmFuc2xhdG9yID0ge1xuXHR0cmFuc2xhdGU6IChzdHJpbmc6IHN0cmluZykgPT4gc3RyaW5nXG5cdGxhbmd1YWdlOiBzdHJpbmdcbn1cbiIsICJpbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgVHJhbnNsYXRvciB9IGZyb20gJ34vbG9jYWxlL3RyYW5zbGF0aW9uJ1xuXG50eXBlIEhlYWRlclBhcmFtcyA9IHtcblx0dHJhbnNsYXRvcjogVHJhbnNsYXRvclxuXHRzd2l0Y2hMYW5ndWFnZTogTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHRyYW5zbGF0b3IsIHN3aXRjaExhbmd1YWdlIH06IEhlYWRlclBhcmFtcykge1xuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgc3RpY2t5IHRvcC0wIGJnLVsjRjhFQkRCXSB6LTEwIHBiLTJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LXdyYXAgZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImZsZXggdGl0bGUtZm9udCBmb250LW1lZGl1bSBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTkwMCBtbC01IG1kOm1sLTBcIiB0bz1cIi9cIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cInJlZC5zdmdcIiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgbWQ6dy0zMiBtZDpoLTMyXCIgYWx0PVwiXHUwMTYwYXRuXHUwMEVEayBQcmFoYVwiIC8+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXhsIGhpZGRlblwiPlx1MDE2MGF0blx1MDBFRGs8L3NwYW4+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJtbC1hdXRvIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UganVzdGlmeS1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDAgaGlkZGVuXCIgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdEZpcnN0IExpbmtcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17c3dpdGNoTGFuZ3VhZ2V9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy00MCAganVzdGlmeS1jZW50ZXIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgIGJvcmRlci0wIHB5LTIgcHgtNSBmb2N1czpvdXRsaW5lLVsjZWIyZjA2XSBvdXRsaW5lIG91dGxpbmUtb2Zmc2V0LTIgb3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsIHRleHQtYmFzZSBtci01IGhvdmVyOm91dGxpbmUtWyNlYjJmMDZdXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt0cmFuc2xhdG9yLmxhbmd1YWdlID09ICdjcycgPyAoXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIxOVwiIHZpZXdCb3g9XCIwIDAgMjUgMTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDBIMjVWMTlIMFYwWlwiIGZpbGw9XCIjRkZENTAwXCIgLz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDBIMjVWOS41SDBWMFpcIiBmaWxsPVwiIzAwNUJCQlwiIC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMTlcIiB2aWV3Qm94PVwiMCAwIDI1IDE5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMCAwSDI1VjkuNUgwVjBaXCIgZmlsbD1cIndoaXRlXCIgLz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0wIDkuNUgyNVYxOUgwVjkuNVpcIiBmaWxsPVwiI0Q3MTQxQVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTQuMDYyNSA5LjVMMCAwVjE5TDE0LjA2MjUgOS41WlwiIGZpbGw9XCIjMTE0NTdFXCIgLz5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggbWwtMlwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnbGFuZ3VhZ2UnKX08L3NwYW4+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCwgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE91dGxldENvbnRleHQgfSBmcm9tICd+L3Jvb3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1hdGlvbigpIHtcblx0Y29uc3QgeyB0cmFuc2xhdG9yLCBzZXRPcmRlckl0ZW0gfSA9IHVzZU91dGxldENvbnRleHQ8T3V0bGV0Q29udGV4dD4oKVxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250IHJlbGF0aXZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTE0IG1kOnB5LTI0IG14LWF1dG8gZmxleCBzbTpmbGV4LW5vd3JhcCBmbGV4LXdyYXBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvMyBtZDp3LTEvMiByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzbTptci0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgcmVsYXRpdmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLTJ4bCB3LWZ1bGwgaC03MiBwLTIgXCJcblx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODUyODYxNjI5OTUtYWE2M2QzMWMwNmNiP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiXG5cdFx0XHRcdFx0XHRcdGFsdD1cImRlbGl2ZXJ5XCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTV4bCAgdGV4dC01eGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbXktMTIgdGV4dC1bI2ViMmYwNl0gbWwtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHUwMERBc3BcdTAxMUJcdTAxNjFuXHUwMTFCIGpzdGUgc2kgb2JqZWRuYWxpIG9ibGVcdTAxMERlblx1MDBFRFxuXHRcdFx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LVsjZWIyZjA2XSBtbC0xIFwiPlxuXHRcdFx0XHRcdFx0XHREb2Jyb3ZvbG5cdTAwRURjXHUwMEVEIGRcdTAxMUJsYWpcdTAwRUQsIGNvIG1cdTAxNkZcdTAxN0VvdSwgYWJ5IGsgdlx1MDBFMW0gb2JqZWRuYW5cdTAwRTkgb2JsZVx1MDEwRGVuXHUwMEVEIGNvIG5lamRcdTAxNTlcdTAwRUR2ZSBkb3Jhemlsby5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byB0ZXh0LXhsIG15LTEyIG1iLTYgYmctWyNlYjJmMDZdIHRleHQtWyNGOEVCREJdIHB5LTYgcHgtNCBtbC0xXCI+XG5cdFx0XHRcdFx0XHRcdFZ5XHUwMTBEa2VqdGUgbmEgZS1tYWlsIHNcdTAwQTBkYWxcdTAxNjFcdTAwRURtaSBpbmZvcm1hY2VtaS5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbXQtOCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTggbWQ6c3BhY2UteC0xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtWyNlYjJmMDZdXCJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwP3U9aHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3pcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctMTAgbWQ6aC0xMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE4IDJoLTNhNSA1IDAgMDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMDExLTFoM3pcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtbC0zIHRleHQtWyNlYjJmMDZdXCJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/cmVmX3NyYz10d3NyYyU1RXRmdyZxdW90JTNCJTIwY2xhc3M9JnF1b3QlM0J0d2l0dGVyLXNoYXJlLWJ1dHRvbj0mcXVvdCUzQiUyMGRhdGEtc2hvdy1jb3VudD0mcXVvdCUzQmZhbHNlPSZxdW90PSZ1cmw9aHR0cHM6Ly9hcHAuc2F0bmlrcHJhaGEuY3pcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctMTAgbWQ6aC0xMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTIzIDNhMTAuOSAxMC45IDAgMDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMDEzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAwLS4wOC0uODNBNy43MiA3LjcyIDAgMDAyMyAzelwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1sLTMgdGV4dC1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3QubWUvc2hhcmUvdXJsP3VybD1odHRwczovL2FwcC5zYXRuaWtwcmFoYS5jeiZ0ZXh0PSdTYXRuaWsgUHJhaGEgLSBBcHAgZm9yIFVrcmFpbmUnXCJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy0xMCBtZDpoLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtIDIwLjk3NjY4MSwzLjY5ODk1NjkgYyAtMC4yNzIzNzMsMS4xMjdlLTQgLTAuNTYwNzQxLDAuMDk2NzcxIC0wLjU2MDc0MSwwLjA5Njc3MSAwLC0xZS03IC0xOC4xOTk0MzY5LDYuNTQxMjc5MSAtMTkuMjM4ODMxMyw3LjI2NTc2MzEgLTAuMjI0MjQ4NzgsMC4xNTU1MzMgLTAuMjk5NTQ5MjgsMC4yNDYyNTkgLTAuMzM2NzA5MjgsMC4zNTI2MTcgLTAuMTgwNTIwMiwwLjUxNTc3MyAwLjM4MDQ1NTA4LDAuNzQzNjc3IDAuMzgwNDU1MDgsMC43NDM2NzcgbCA0LjY5MTM5NTMsMS41MjcxMjMgYSAwLjUxNDE3MDk0LDAuNTE0MTcwOTQgMCAwIDAgMC4wMzg0NCwtMC4wMDI3IGwgMi4yMDA1NDIsNi4wODk5MzIgYyAwLDAgMC4xOTU4OCwwLjM5OTg5NyAwLjQzNjEzMSwwLjUzOTUzMSAwLjE1MjU0LDAuMTI1MzkzIDAuNDY3MDYyLDAuMDYzMzMgMS4xMTA4NzYsLTAuNTgwNjI1IDEuMDEwNTIzMiwtMS4wMTA3NTEgMS45ODA5ODEyLC0xLjg0NzY5NiAyLjQ2NTY2NzIsLTIuMjU0ODkyIDEuNjE4NzY1LDEuMTE3NDE3IDMuMzQ1Mjk1LDIuMzQwOTIyIDQuMDk3NTE1LDIuOTg3OTY0IGEgMS4zMDIyNDYsMS4zMDIyNDYgMCAwIDAgMC45NDkxNDksMC4zNjcxOTkgYyAwLjcxMTAzLC0wLjAyNjc1IDAuOTA5MzgxLC0wLjgwNzMwNyAwLjkwOTM4MSwtMC44MDczMDcgMCwwIDMuMzE3MjI5LC0xMy4zNDc2Mjg0IDMuNDI4MDcyLC0xNS4xMzYwMTQxIDAuMDExMDUsLTAuMTc1MDc0NCAwLjAyNTA5LC0wLjI4NjUxMzkgMC4wMjY1MSwtMC40MDY5Njc3IEEgMS40OTg3ODQzLDEuNDk4Nzg0MyAwIDAgMCAyMS41MzQ3Nyw0LjA2NzQ4MTQgMC40NDMwNTE5NywwLjQ0MzA1MTk3IDAgMCAwIDIxLjIzMjUyNywzLjczNzQwMDEgYyAtMC4wNzU3NiwtMC4wMjg3OTIgLTAuMTY1MDU1LC0wLjAzODQ4MSAtMC4yNTU4NDYsLTAuMDM4NDQzIHpcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsICBtdC04IG1kOm10LTBcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MzQ5OTQ1OS1kMTQ2MDk0NmJkYzY/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNVGw4ZkdSbGJHbDJaWEo1ZkdWdWZEQjhmREI4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJpbGx1c3RyYXRpb25cIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgT3V0bGV0Q29udGV4dCB9IGZyb20gJ34vcm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZGVyU2VsZWN0KCkge1xuXHRjb25zdCB7IHRyYW5zbGF0b3IsIHNldE9yZGVySXRlbSB9ID0gdXNlT3V0bGV0Q29udGV4dDxPdXRsZXRDb250ZXh0PigpXG5cdGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuXHRjb25zdCBuZXh0Rm9ybTogUmVhY3QuTW91c2VFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdC8vICAgIHNldE9yZGVySXRlbShcIm5cdTAxMUJjb1wiKTtcblx0XHRuYXZpZ2F0ZSgnL29yZGVyb25lJywgeyByZXBsYWNlOiBmYWxzZSB9KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTQgbWQ6cHktMjQgbXgtYXV0byBmbGV4IHNtOmZsZXgtbm93cmFwIGZsZXgtd3JhcFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMi8zIG1kOnctMS8yIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNtOm1yLTEwIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnb3JkZXInKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LW1lZGl1bSBteS01XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCd3aG9faXNfd2VhcmluZycpfTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtuZXh0Rm9ybX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIndvbWFuLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3dvbWFuJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtuZXh0Rm9ybX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIm1hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdtYW4nKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCBtdC00XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdwaWNrJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e25leHRGb3JtfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwia2lkLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2tpZCcpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3BpY2snKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsICBtdC04IG1kOm10LTBcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MjcxOTE4ODM5My1iYjcxY2E0NWRiYjk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcblx0XHRcdFx0XHRcdGFsdD1cImlsbHVzdHJhdGlvblwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE91dGxldENvbnRleHQgfSBmcm9tICd+L3Jvb3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFBlcnNvbigpIHtcblx0Y29uc3QgeyB0cmFuc2xhdG9yLCBzZXRPcmRlckl0ZW0gfSA9IHVzZU91dGxldENvbnRleHQ8T3V0bGV0Q29udGV4dD4oKVxuXHRjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcblx0Y29uc3QgbmV4dEZvcm0gPSAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZCB9KSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Ly8gICAgc2V0T3JkZXJJdGVtKFwiblx1MDExQmNvXCIpO1xuXHRcdG5hdmlnYXRlKCcvb3JkZXJvbmUnLCB7IHJlcGxhY2U6IGZhbHNlIH0pXG5cdH1cblxuXHRjb25zdCBlZGl0SXRlbSA9IChlOiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkIH0pID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHQvL25ldmltLCBtb2NrXG5cdFx0bmF2aWdhdGUoJy9vcmRlcm9uZScsIHsgcmVwbGFjZTogZmFsc2UgfSlcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250IHJlbGF0aXZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTE0IG1kOnB5LTI0IG14LWF1dG8gZmxleCBzbTpmbGV4LW5vd3JhcCBmbGV4LXdyYXBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvMyBtZDp3LTEvMiByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzbTptci0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgcmVsYXRpdmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ29yZGVyJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLTJ4bCBncm91cCBiZy1bI2ViMmYwNl0gdGV4dC1bI0Y4RUJEQl0gdy1mdWxsIGgtNzIgcC0yIGJvcmRlciBib3JkZXItWyNlYjJmMDZdXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwid29tYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBteC0yXCIgLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBteC00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+T2xlbmEgS3lhc2hlbmtvPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInB5LTJcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2Nsb3RoX2V4YW1wbGUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZWRpdEl0ZW19XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXSBtdC00IGJvcmRlci0wIHB5LTIgcHgtNSBvdXRsaW5lIG91dGxpbmUtWyNGOEVCREJdIHJvdW5kZWQtZnVsbFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdlZGl0Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LWJvbGQgdGl0bGUtZm9udCBtYi00IG10LTEyIHRleHQtZ3JheS05MDAgbWwtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdhZGRfcGVyc29uJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e25leHRGb3JtfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwid29tYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnd29tYW4nKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCBtdC00XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdwaWNrJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e25leHRGb3JtfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwibWFuLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ21hbicpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEE5REJGXSBmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3BpY2snKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17bmV4dEZvcm19XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC0yeGwgZ3JvdXAgYmctd2hpdGUgdy0xLzMgaC04MCBwLTIgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZmxleCBmbGV4LWNvbCBob3Zlcjpib3JkZXItWyMwQTlEQkZdIGhvdmVyOmJnLVsjRjhFQkRCXSBpdGVtcy1jZW50ZXJcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJraWQuc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgna2lkJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgbWQ6bWwtYXV0byB3LWZ1bGwgIG10LTggbWQ6bXQtMFwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgyNzE5MTg4MzkzLWJiNzFjYTQ1ZGJiOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC1sZyB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuXHRcdFx0XHRcdFx0YWx0PVwiaWxsdXN0cmF0aW9uXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuIiwgImltcG9ydCB7IENoYW5nZUV2ZW50SGFuZGxlciwgTW91c2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgUGVyc29uT25PcmRlciBmcm9tICd+L2NvbXBvbmVudHMvUGVyc29uT25PcmRlcidcbmltcG9ydCBQZXJzb25Ub09yZGVyIGZyb20gJ34vY29tcG9uZW50cy9QZXJzb25Ub09yZGVyJ1xuaW1wb3J0IEdlbmRlclNlbGVjdG9yLCB7IEdlbmRlciB9IGZyb20gJ34vY29tcG9uZW50cy9HZW5kZXJTZWxlY3RvcidcbmltcG9ydCB7IE91dGxldENvbnRleHQsIFBlcnNvbiB9IGZyb20gJ34vcm9vdCdcblxuLypcbi0gc2hvdyBhbHJlYWR5IGFkZGVkIHBlb3BsZVxuLSBpZiBubyBwZW9wbGUgYWRkZWQsIHNob3cgZ2VuZGVyIHNlbGVjdCB0byBhZGQgMSBwZXJzb25cbi0gaWYgY2xpY2sgb24gYWRkIG5ldyBwZXJzb24sIHZhbGlkYXRlIGlucHV0cyBhbmQgYWRkIHRoZSBwZXJzb24gdG8gYWRkZWQgcGVvcGxlIGFuZCBzaG93IGdlbmRlciBzZWxlY3QgYWdhaW5cbi0gYWZ0ZXIgY2xpY2sgb24gZ2VuZGVyIHNlbGVjdCwgc2hvdyBlbXB0eSBmb3JtXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdPcmRlcigpIHtcblx0Y29uc3QgeyB0cmFuc2xhdG9yLCBvcmRlciwgYWRkUGVyc29uVG9PcmRlciB9ID0gdXNlT3V0bGV0Q29udGV4dDxPdXRsZXRDb250ZXh0PigpXG5cdGNvbnN0IFtzZWxlY3RlZEdlbmRlciwgc2VsZWN0R2VuZGVyXSA9IHVzZVN0YXRlPEdlbmRlcj4oKVxuXHRjb25zdCBbbmV3UGVyc29uSW5mbywgc2V0TmV3UGVyc29uSW5mb10gPSB1c2VTdGF0ZTxhbnk+KHt9KVxuXHRjb25zdCBbZWRpdGluZ1BlcnNvbiwgc2V0RWRpdGluZ1BlcnNvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KClcblxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9XG5cdFx0KGZpZWxkTmFtZToga2V5b2YgUGVyc29uKTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0+XG5cdFx0KGUpID0+IHtcblx0XHRcdG5ld1BlcnNvbkluZm9bZmllbGROYW1lXSA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHRzZXROZXdQZXJzb25JbmZvKG5ld1BlcnNvbkluZm8pXG5cdFx0fVxuXG5cdGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuXHRjb25zdCBwaWNrR2VuZGVyID1cblx0XHQoZ2VuZGVyOiBHZW5kZXIpOiBNb3VzZUV2ZW50SGFuZGxlciA9PlxuXHRcdChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHNlbGVjdEdlbmRlcihnZW5kZXIpXG5cdFx0XHQvLyBuZXdQZXJzb25JbmZvW1wiZ2VuZGVyXCJdID0gZ2VuZGVyO1xuXHRcdFx0aWYgKGdlbmRlciA9PSAna2lkJykge1xuXHRcdFx0XHRuZXdQZXJzb25JbmZvLmFkdWx0ID0gZmFsc2Vcblx0XHRcdFx0bmV3UGVyc29uSW5mby5zZXggPSAnbWFuJ1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3UGVyc29uSW5mby5hZHVsdCA9IHRydWVcblx0XHRcdFx0bmV3UGVyc29uSW5mby5zZXggPSBnZW5kZXJcblx0XHRcdH1cblx0XHRcdHNldE5ld1BlcnNvbkluZm8obmV3UGVyc29uSW5mbylcblx0XHR9XG5cblx0Y29uc3QgbmV4dEZvcm0gPSAoKSA9PiB7XG5cdFx0bmF2aWdhdGUoJy9zdW1tYXJ5JywgeyByZXBsYWNlOiB0cnVlIH0pXG5cdH1cblxuXHRjb25zdCBhZGROZXh0UGVyc29uOiBNb3VzZUV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHQvLyBpZiAoIXZhbGlkYXRlUGVyc29uKG5ld1BlcnNvbkluZm8pKSB7XG5cdFx0Ly8gICBjb25zb2xlLmxvZyh2YWxpZGF0ZVBlcnNvbi5lcnJvcnMpO1xuXHRcdC8vIH1cblx0XHRhZGRQZXJzb25Ub09yZGVyKG5ld1BlcnNvbkluZm8sIGVkaXRpbmdQZXJzb24pXG5cdFx0Y2xlYW5QZXJzb25Gb3JtKClcblx0fVxuXG5cdGNvbnN0IGNsZWFuUGVyc29uRm9ybSA9ICgpID0+IHtcblx0XHRzZWxlY3RHZW5kZXIodW5kZWZpbmVkKVxuXHRcdHNldEVkaXRpbmdQZXJzb24odW5kZWZpbmVkKVxuXHRcdHNldE5ld1BlcnNvbkluZm8oe30pXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGVkaXRpbmdQZXJzb24pXG5cdH0sIFtlZGl0aW5nUGVyc29uXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOm1iLTEyXCI+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy8nKX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBtbC0xIG10LTEgdGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI0Y4RUJEQl0gaG92ZXI6b3V0bGluZS1bI2ViMmYwNl0gZmlsbC1bIzBBOURCRl0gaG92ZXI6ZmlsbC1bI0Y4RUJEQl1cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibS4yOTMgOC4yOTMgNC00YTEgMSAwIDEgMSAxLjQxNCAxLjQxNEwzLjQxNSA4SDE1YTEgMSAwIDEgMSAwIDJIMy40MTVsMi4yOTQgMi4yOTRhMSAxIDAgMSAxLTEuNDE0IDEuNDE0bC00LTRhLjk5Ny45OTcgMCAwIDEtLjAwMi0xLjQxNFpcIiAvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IHRleHQtZ3JheS05MDAgbWwtNVwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdvcmRlcicpfVxuXHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7b3JkZXIucGVyc29ucyAmJiBvcmRlci5wZXJzb25zLmxlbmd0aCA/IChcblx0XHRcdFx0b3JkZXIucGVyc29ucy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8UGVyc29uT25PcmRlciBrZXk9e2tleX0gZGV0YWlscz17aXRlbX0gZWRpdEl0ZW09eygpID0+IHNldEVkaXRpbmdQZXJzb24oa2V5KX0gdHJhbnNsYXRvcj17dHJhbnNsYXRvcn0gLz5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pXG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtbWVkaXVtIG15LTVcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ3dob19pc193ZWFyaW5nJyl9PC9kaXY+XG5cdFx0XHQpfVxuXHRcdFx0eyFzZWxlY3RlZEdlbmRlciA/IChcblx0XHRcdFx0PEdlbmRlclNlbGVjdG9yIHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9IHNlbGVjdEdlbmRlcj17cGlja0dlbmRlcn0gLz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxQZXJzb25Ub09yZGVyIHRyYW5zbGF0b3I9e3RyYW5zbGF0b3J9IHNlbGVjdGVkR2VuZGVyPXtzZWxlY3RlZEdlbmRlcn0gaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuXHRcdFx0KX1cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiBteS0xMCBteC0yIHctZnVsbCBtZDp3LTEvMlwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17YWRkTmV4dFBlcnNvbn1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBiZy1bI2ViMmYwNl0gdGV4dC1bI0Y4RUJEQl0gb3V0bGluZS1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI2ViMmYwNl0gaG92ZXI6YmctWyNGOEVCREJdXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnYWRkX3BlcnNvbicpfVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctZnVsbCBteS00IGJvcmRlciBib3JkZXItWyM5NTdENUVdIG9wYWNpdHktMjBcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIG15LTEwIG14LTIgdy1mdWxsIG1kOnctMS8yXCI+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtuZXh0Rm9ybX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgIHRleHQtWyMwQTlEQkZdIGJvcmRlci0wIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgb3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsICBmb250LXNlbWlib2xkIHRleHQtbGcgaG92ZXI6YmctWyNlYjJmMDZdIGhvdmVyOnRleHQtWyNGOEVCREJdIGhvdmVyOm91dGxpbmUtWyNlYjJmMDZdXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY29udGludWUnKX1cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2xhdG9yIH0gZnJvbSAnfi9sb2NhbGUvdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tICd+L3Jvb3QnXG5cbnR5cGUgUGVyc29uT25PcmRlclBhcmFtcyA9IHtcblx0dHJhbnNsYXRvcjogVHJhbnNsYXRvclxuXHRkZXRhaWxzOiBQZXJzb25cblx0ZWRpdEl0ZW06IE1vdXNlRXZlbnRIYW5kbGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbk9uT3JkZXIoeyB0cmFuc2xhdG9yLCBkZXRhaWxzLCBlZGl0SXRlbSB9OiBQZXJzb25Pbk9yZGVyUGFyYW1zKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtMnhsIGdyb3VwIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSB3LWZ1bGwgaC03MiBwLTIgYm9yZGVyIGJvcmRlci1bI2ViMmYwNl1cIj5cblx0XHRcdDxpbWcgc3JjPVwid29tYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBteC0yXCIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXgtNFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57ZGV0YWlscy5mdWxsbmFtZX08L3NwYW4+XG5cdFx0XHRcdHtkZXRhaWxzLnJlcXVpcmVtZW50cy5tYXAoKHJlcXVpcmVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJweS0yXCI+XG5cdFx0XHRcdFx0XHRcdHtyZXF1aXJlbWVudH1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pfVxuXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtlZGl0SXRlbX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXSBtdC00IGJvcmRlci0wIHB5LTIgcHgtNSBvdXRsaW5lIG91dGxpbmUtWyNGOEVCREJdIHJvdW5kZWQtZnVsbFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2VkaXQnKX1cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zbGF0b3IgfSBmcm9tICd+L2xvY2FsZS90cmFuc2xhdGlvbidcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJ34vcm9vdCdcblxudHlwZSBQZXJzb25Ub09yZGVyUHJvcHMgPSB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0c2VsZWN0ZWRHZW5kZXI6ICdtYW4nIHwgJ3dvbWFuJyB8ICdraWQnXG5cdGhhbmRsZUlucHV0Q2hhbmdlOiAoa2V5OiBrZXlvZiBQZXJzb24pID0+IFJlYWN0LkNoYW5nZUV2ZW50SGFuZGxlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25Ub09yZGVyKHsgdHJhbnNsYXRvciwgc2VsZWN0ZWRHZW5kZXIsIGhhbmRsZUlucHV0Q2hhbmdlIH06IFBlcnNvblRvT3JkZXJQcm9wcykge1xuXHRjb25zdCBpc0tpZCA9IHNlbGVjdGVkR2VuZGVyID09ICdraWQnXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy1bIzBBOURCRl0gdGV4dC1bI0Y4RUJEQl0gdy1mdWxsIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyMwQTlEQkZdIGZsZXggZmxleC1jb2wgaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtgJHtzZWxlY3RlZEdlbmRlcn0uc3ZnYH0gYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LVsjMEE5REJGXVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZShzZWxlY3RlZEdlbmRlcil9PC9zcGFuPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBncm91cC1ob3Zlcjp0ZXh0LVsjMEE5REJGXSBtdC00IGJvcmRlci0wIHB5LTIgcHgtNSBvdXRsaW5lIG91dGxpbmUtWyNGOEVCREJdIGdyb3VwLWhvdmVyOm91dGxpbmUtWyMwQTlEQkZdIHJvdW5kZWQtZnVsbFwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdyZW1vdmUnKX1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtpc0tpZCAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC0zIG15LTYgZm9udC1ib2xkIHNwYWNlLXgtMiB0ZXh0LVsjMEE5REJGXSBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhY2NlbnQtWyMwQTlEQkZdXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJnaXJsXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImtpZGdlbmRlcnNlbGVjdG9yXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJtYW5cIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UoJ3NleCcpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYm95XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdib3knKX08L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0XHRpZD1cImdpcmxcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwia2lkZ2VuZGVyc2VsZWN0b3JcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT1cIndvbWFuXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlKCdzZXgnKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdpcmxcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2dpcmwnKX08L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctMS81XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnYWdlJyl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJhZ2VcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiYWdlXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCIyMlwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZSgnYWdlJyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctNC81XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnbmFtZScpfVxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJBYVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZSgnZnVsbG5hbWUnKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LWJvbGQgdGl0bGUtZm9udCBteS00IHRleHQtZ3JheS05MDAgbWwtMVwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdzZWxlY3RfY2xvdGhlcycpfVxuXHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRKYWtcdTAwRTkgb2JsZVx1MDEwRGVuXHUwMEVEIHBvdFx1MDE1OWVidWpldGU/XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCI1IGtzIHRyaWthLCAyIGtzIGthbGhvdHlcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UoJ3JlcXVpcmVtZW50cycpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTIvNVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2Nsb3RoX3NpemUnKX1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UoJ2Nsb3RoaW5nX3NpemUnKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTIvNVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3Nob2VzX3NpemUnKX1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiNDRcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlKCdzaG9lX3NpemUnKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zbGF0b3IgfSBmcm9tICd+L2xvY2FsZS90cmFuc2xhdGlvbidcblxuZXhwb3J0IHR5cGUgR2VuZGVyU2VsZWN0b3JQYXJhbXMgPSB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0c2VsZWN0R2VuZGVyOiAoZ2VuZGVyOiBHZW5kZXIpID0+IE1vdXNlRXZlbnRIYW5kbGVyXG59XG5cbmV4cG9ydCB0eXBlIEdlbmRlciA9ICdtYW4nIHwgJ3dvbWFuJyB8ICdraWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmRlclNlbGVjdG9yKHsgdHJhbnNsYXRvciwgc2VsZWN0R2VuZGVyIH06IEdlbmRlclNlbGVjdG9yUGFyYW1zKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtzZWxlY3RHZW5kZXIoJ3dvbWFuJyl9XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdyb3VwIGJnLXdoaXRlIHctMS8zIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZsZXggZmxleC1jb2wgaG92ZXI6Ym9yZGVyLVsjMEE5REJGXSBob3ZlcjpiZy1bI0Y4RUJEQl0gaXRlbXMtY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0PGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IFwiIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnd29tYW4nKX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtzZWxlY3RHZW5kZXIoJ21hbicpfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxpbWcgc3JjPVwibWFuLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdtYW4nKX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtzZWxlY3RHZW5kZXIoJ2tpZCcpfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy13aGl0ZSB3LTEvMyBoLTgwIHAtMiBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmbGV4IGZsZXgtY29sIGhvdmVyOmJvcmRlci1bIzBBOURCRl0gaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxpbWcgc3JjPVwia2lkLnN2Z1wiIGFsdD1cIm1hblwiIGNsYXNzTmFtZT1cIm15LTQgXCIgLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdraWQnKX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwQTlEQkZdIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGljaycpfTwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgT3V0bGV0Q29udGV4dCB9IGZyb20gJ34vcm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJPbmUoKSB7XG5cdGNvbnN0IHsgdHJhbnNsYXRvciwgc2V0T3JkZXJJdGVtIH0gPSB1c2VPdXRsZXRDb250ZXh0PE91dGxldENvbnRleHQ+KClcblx0Y29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG5cdGNvbnN0IG5leHRGb3JtOiBNb3VzZUV2ZW50SGFuZGxlciA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Ly8gICAgc2V0T3JkZXJJdGVtKFwiblx1MDExQmNvXCIpO1xuXHRcdG5hdmlnYXRlKCcvc3VtbWFyeScsIHsgcmVwbGFjZTogZmFsc2UgfSlcblx0fVxuXHRjb25zdCBhZHVsdCA9IHRydWUgLy9qZSBwb3RcdTAxNTllYmEgbmFzdGF2aXQgamVzdGxpIGplIHRvIGRcdTAwRUR0XHUwMTFCIG5lYm8gZG9zcFx1MDExQmxcdTAwRkRcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCByZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBweS0xNCBtZDpweS0yNCBteC1hdXRvIGZsZXggc206ZmxleC1ub3dyYXAgZmxleC13cmFwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgbWQ6dy0xLzIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206bXItMTAgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LWJvbGQgdGl0bGUtZm9udCBtYi00IHRleHQtZ3JheS05MDAgbWwtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdvcmRlcicpfVxuXHRcdFx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBncm91cCBiZy1bIzBBOURCRl0gdGV4dC1bI0Y4RUJEQl0gdy1mdWxsIGgtODAgcC0yIGJvcmRlciBib3JkZXItWyMwQTlEQkZdIGZsZXggZmxleC1jb2wgaG92ZXI6YmctWyNGOEVCREJdIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwid29tYW4uc3ZnXCIgYWx0PVwibWFuXCIgY2xhc3NOYW1lPVwibXktNCBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LVsjMEE5REJGXVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnd29tYW4nKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGdyb3VwLWhvdmVyOnRleHQtWyMwQTlEQkZdIG10LTQgYm9yZGVyLTAgcHktMiBweC01IG91dGxpbmUgb3V0bGluZS1bI0Y4RUJEQl0gZ3JvdXAtaG92ZXI6b3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRPZGVicmF0XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7IWFkdWx0ICYmIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTMgbXktNiBmb250LWJvbGQgc3BhY2UteC0yIHRleHQtWyMwQTlEQkZdIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIiB0eXBlPVwicmFkaW9cIiBpZD1cImdpcmxcIiBuYW1lPVwia2lkZ2VuZGVyc2VsZWN0b3JcIiB2YWx1ZT1cImJveVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImJveVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnYm95Jyl9PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJhY2NlbnQtWyMwQTlEQkZdXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJnaXJsXCIgbmFtZT1cImtpZGdlbmRlcnNlbGVjdG9yXCIgdmFsdWU9XCJnaXJsXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZ2lybFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnZ2lybCcpfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy0xLzVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdhZ2UnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiMjJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LTQvNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ25hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG15LTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3NlbGVjdF9jbG90aGVzJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEpha1x1MDBFOSBvYmxlXHUwMTBEZW5cdTAwRUQgcG90XHUwMTU5ZWJ1amV0ZT9cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIjUga3MgdHJpa2EsIDIga3Mga2FsaG90eVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctMi81XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY2xvdGhfc2l6ZScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIHctMi81XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnc2hvZXNfc2l6ZScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCI0NFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIG15LTEwIG14LTIgdy1mdWxsIG1kOnctMS8yXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2FkZHBlcnNvblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGJvcmRlci0wIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgcm91bmRlZC1mdWxsICBmb250LXNlbWlib2xkIHRleHQtbGcgYmctWyNlYjJmMDZdIHRleHQtWyNGOEVCREJdIG91dGxpbmUtWyNlYjJmMDZdIGhvdmVyOnRleHQtWyNlYjJmMDZdIGhvdmVyOmJnLVsjRjhFQkRCXVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdhZGRfcGVyc29uJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cInctZnVsbCBteS00IGJvcmRlciBib3JkZXItWyM5NTdENUVdIG9wYWNpdHktMjBcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIG15LTEwIG14LTJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e25leHRGb3JtfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciAgdGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI0Y4RUJEQl0gaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdjb250aW51ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMyBtZDp3LTEvMiBoaWRkZW4gbWQ6ZmxleCBmbGV4LWNvbCBtZDptbC1hdXRvIHctZnVsbCAgbXQtOCBtZDptdC0wXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODI3MTkxODgzOTMtYmI3MWNhNDVkYmI5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJpbGx1c3RyYXRpb25cIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgRm9ybUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCwgdXNlTmF2aWdhdGUsIExpbmssIHVzZVN1Ym1pdCwgcmVkaXJlY3QsIEZvcm0gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE9yZGVyLCBPdXRsZXRDb250ZXh0IH0gZnJvbSAnfi9yb290J1xuaW1wb3J0IHsgc2F2ZU5ld09yZGVyIH0gZnJvbSAnLi4vLi4vcHJpc21hL2FwaS9PcmRlcidcblxuY29uc3Qgb3JkZXJNb2NrID0ge1xuXHRmdWxsbmFtZTogJ09sZW5hIFNoZXZjaGVua28nLFxuXHRwaG9uZTogJzc3Nzc3Nzc3NycsXG5cdGVtYWlsOiAnbWljaGFsLnBhbG1hQGdtYWlsLmNvbScsXG5cdGRlbGl2ZXJ5X3R5cGU6ICdwaWNrdXAnLFxuXHRkZWxpdmVyeV9mdWxsbmFtZTogJ1RoaXMgaXMganVzdCBURVNUSU5HIE9yZGVyIC8gVG90byBqZSBwb3V6ZSBURVNUT1ZBQ0kgb2JqZWRuYXZrYScsXG5cdGRlbGl2ZXJ5X3N0cmVldDogJ0plY25hIDIyJyxcblx0ZGVsaXZlcnlfY2l0eTogJ1ByYWhhJyxcblx0ZGVsaXZlcnlfemlwOiAnMTIwMDAnLFxuXHRkZWxpdmVyeV9waG9uZTogJzc3NzExMTExMScsXG5cdGRlbGl2ZXJ5X3RpbWU6IG5ldyBEYXRlKCcyMDIyLTAzLTAxJyksXG5cdHBlcnNvbnM6IFtcblx0XHR7XG5cdFx0XHRzZXg6ICd3b21hbicsXG5cdFx0XHRhZHVsdDogdHJ1ZSxcblx0XHRcdGZ1bGxuYW1lOiAnQW5uYSBLb3JvbGplbmtvJyxcblx0XHRcdGFnZTogMzAsXG5cdFx0XHRjbG90aGluZ19zaXplOiAnbScsXG5cdFx0XHRzaG9lX3NpemU6ICc0MScsXG5cdFx0XHRyZXF1aXJlbWVudHM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnY2VybmEgYnVuZGEnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdtb2RyZSBib3R5Jyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzZXg6ICdtYW4nLFxuXHRcdFx0YWR1bHQ6IGZhbHNlLFxuXHRcdFx0ZnVsbG5hbWU6ICdQYXZlbCBLb3JvbGplbmtvJyxcblx0XHRcdGFnZTogMTAsXG5cdFx0XHRjbG90aGluZ19zaXplOiAncycsXG5cdFx0XHRzaG9lX3NpemU6ICczMCcsXG5cdFx0XHRyZXF1aXJlbWVudHM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnbmVqYWtlIGthbGhvdHknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdLFxuXHRzdGF0ZTogJ29wZW4nLFxuXHRsYW5nOiAnY3MnLFxuXHRjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuXHR1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9OiB7IHJlcXVlc3Q6IFJlcXVlc3QgfSkge1xuXHRjb25zdCBvcmRlciA9IChhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCkpLmdldCgnb3JkZXInKVxuXHRjb25zb2xlLmxvZyhhd2FpdCBzYXZlTmV3T3JkZXIoSlNPTi5wYXJzZShvcmRlciBhcyBzdHJpbmcpIGFzIE9yZGVyKSlcblx0cmV0dXJuIHJlZGlyZWN0KCcvc3VtbWFyeScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bW1hcnkoKSB7XG5cdGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpXG5cdGNvbnN0IHsgdHJhbnNsYXRvciwgb3JkZXIgfSA9IHVzZU91dGxldENvbnRleHQ8T3V0bGV0Q29udGV4dD4oKVxuXHRjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcblx0Y29uc3Qgc3VibWl0Rm9ybTogRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zb2xlLmxvZygnc3VibWl0dGluZycpXG5cdFx0Y29uc29sZS5sb2coZSlcblx0XHRzdWJtaXQoZS5jdXJyZW50VGFyZ2V0KVxuXHRcdC8vICAgIG9kZXNsYXQgZGF0YSBuYSBzZXJ2ZXJcblx0XHQvLyAgICBwb2t1ZCBzZSB0byBwb2Rhcmlsbywgem9icmF6aXQgL2NvbmZpcm1hdGlvblxuXHR9XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTQgbWQ6cHktMjQgbXgtYXV0byBmbGV4IHNtOmZsZXgtbm93cmFwIGZsZXgtd3JhcFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMi8zIG1kOnctMS8yIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNtOm1yLTEwIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnb3JkZXInKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtMnhsIGdyb3VwIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSB3LWZ1bGwgaC03MiBwLTIgYm9yZGVyIGJvcmRlci1bI2ViMmYwNl1cIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJ3b21hbi5zdmdcIiBhbHQ9XCJtYW5cIiBjbGFzc05hbWU9XCJteS00IG14LTJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG14LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5PbGVuYSBLeWFzaGVua288L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHktMlwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY2xvdGhfZXhhbXBsZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1bI2ViMmYwNl0gaG92ZXI6YmctWyNGOEVCREJdIG10LTQgYm9yZGVyLTAgcHktMiBweC01IG91dGxpbmUgb3V0bGluZS1bI0Y4RUJEQl0gcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2VkaXQnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMiBteS0xMCBteC0yIHctZnVsbCBtZDp3LTEvMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciAgdGV4dC1bIzBBOURCRl0gYm9yZGVyLTAgcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lICBvdXRsaW5lLVsjMEE5REJGXSByb3VuZGVkLWZ1bGwgIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3ZlcjpiZy1bI2ViMmYwNl0gaG92ZXI6dGV4dC1bI0Y4RUJEQl0gaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIj5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2FkZF9wZXJzb24nKX1cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktNCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBvcGFjaXR5LTIwXCIgLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOm1iLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgbXQtMTIgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ29yZGVyX2NoZWNrJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiLz9lZGl0XCIgY2xhc3NOYW1lPVwidGV4dC1bIzBBOURCRl0gZm9udC1zZW1pYm9sZCBtbC0xIHVuZGVybGluZVwiPlxuXHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2VkaXRfY29udGFjdCcpfVxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvMiBweC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtdC00XCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdvcmRlcmVyJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPk9sZW5hIEt5YXNoZW5rbzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj4rMzggMDUwMyAyMCAyMCA0Njwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5PbGVuYS5LQGdtYWlsLmNvbTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG10LTRcIj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2RlbGl2ZXJ5X2FkZHJlc3MnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+SmFrdWIgSGVydGw8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+VSBVcmFuaWUgMjcsIFByYWhhIDc8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+MTcwMDA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+KzQyMCA3NzYgNzY0IDIyMTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbXQtNFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnZm9yX3dob19hbmRfd2hhdCcpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5PbGVuYSBLeWlhc2tobzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dHJhbnNsYXRvci50cmFuc2xhdGUoJ2Nsb3RoX2V4YW1wbGUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktMTAgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gb3BhY2l0eS0yMFwiIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbXgtMiB3LWZ1bGwgbWQ6dy0xLzJcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJmb3JtRGF0YVwiIHR5cGU9eydoaWRkZW4nfSBuYW1lPVwib3JkZXJcIiB2YWx1ZT17SlNPTi5zdHJpbmdpZnkob3JkZXJNb2NrKX0gcmVhZE9ubHk+PC9pbnB1dD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBib3JkZXItMCBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIG91dGxpbmUgIHJvdW5kZWQtZnVsbCAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLVsjZWIyZjA2XSB0ZXh0LVsjRjhFQkRCXSBvdXRsaW5lLVsjZWIyZjA2XSBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgndG9fb3JkZXInKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsICBtdC04IG1kOm10LTBcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MjcxOTE4ODM5My1iYjcxY2E0NWRiYjk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcblx0XHRcdFx0XHRcdGFsdD1cImlsbHVzdHJhdGlvblwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBPcmRlciB9IGZyb20gXCJ+L3Jvb3RcIlxuXG5jb25zdCBBanYgPSByZXF1aXJlKCdhanYnKVxuY29uc3QgeyBwcmVwYXJlT3JkZXJGb3JQcmlzbWFJbnNlcnQgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKVxuY29uc3QgeyBnZXREQiB9ID0gcmVxdWlyZSgnLi4vZ2V0REInKVxuY29uc3QgYWp2ID0gbmV3IEFqdigpXG5cbmNvbnN0IHJlcXVpcmVtZW50U2NoZW1hID0ge1xuXHR0eXBlOiAnb2JqZWN0Jyxcblx0cHJvcGVydGllczoge1xuXHRcdGRlc2NyaXB0aW9uOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdH0sXG5cdHJlcXVpcmVkOiBbJ2Rlc2NyaXB0aW9uJ10sXG5cdGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn1cbmNvbnN0IHBlcnNvblNjaGVtYSA9IHtcblx0dHlwZTogJ29iamVjdCcsXG5cdHByb3BlcnRpZXM6IHtcblx0XHRzZXg6IHsgZW51bTogWydtYW4nLCAnd29tYW4nXSB9LFxuXHRcdGFkdWx0OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuXHRcdGZ1bGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0YWdlOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuXHRcdGNsb3RoaW5nX3NpemU6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRzaG9lX3NpemU6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRyZXF1aXJlbWVudHM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHJlcXVpcmVtZW50U2NoZW1hIH0sXG5cdH0sXG5cdHJlcXVpcmVkOiBbJ3NleCcsICdhZHVsdCcsICdmdWxsbmFtZScsICdhZ2UnLCAnY2xvdGhpbmdfc2l6ZScsICdzaG9lX3NpemUnLCAncmVxdWlyZW1lbnRzJ10sXG5cdGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn1cbmNvbnN0IG9yZGVyU2NoZW1hID0ge1xuXHR0eXBlOiAnb2JqZWN0Jyxcblx0cHJvcGVydGllczoge1xuXHRcdGZ1bGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0cGhvbmU6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRlbWFpbDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3R5cGU6IHsgZW51bTogWydkZWxpdmVyeScsICdwaWNrdXAnXSB9LFxuXHRcdGRlbGl2ZXJ5X2Z1bGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0ZGVsaXZlcnlfc3RyZWV0OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0ZGVsaXZlcnlfY2l0eTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3ppcDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGRlbGl2ZXJ5X3Bob25lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0ZGVsaXZlcnlfdGltZToge30sXG5cdFx0cGVyc29uczogeyB0eXBlOiAnYXJyYXknLCBpdGVtczogcGVyc29uU2NoZW1hIH0sXG5cdFx0c3RhdGU6IHsgZW51bTogWydvcGVuJ10gfSxcblx0XHRsYW5nOiB7IGVudW06IFsndWEnLCAnY3MnXSB9LFxuXHRcdGNyZWF0ZWRfYXQ6IHt9LFxuXHRcdHVwZGF0ZWRfYXQ6IHt9LFxuXHR9LFxuXHRyZXF1aXJlZDogW1xuXHRcdCdmdWxsbmFtZScsXG5cdFx0J3Bob25lJyxcblx0XHQnZW1haWwnLFxuXHRcdCdkZWxpdmVyeV90eXBlJyxcblx0XHQnZGVsaXZlcnlfZnVsbG5hbWUnLFxuXHRcdCdkZWxpdmVyeV9zdHJlZXQnLFxuXHRcdCdkZWxpdmVyeV9jaXR5Jyxcblx0XHQnZGVsaXZlcnlfemlwJyxcblx0XHQnZGVsaXZlcnlfcGhvbmUnLFxuXHRcdCdwZXJzb25zJyxcblx0XHQnc3RhdGUnLFxuXHRcdCdjcmVhdGVkX2F0Jyxcblx0XHQndXBkYXRlZF9hdCcsXG5cdF0sXG5cdGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn1cblxuY29uc3QgdmFsaWRhdGVPcmRlciA9IGFqdi5jb21waWxlKG9yZGVyU2NoZW1hKVxuXG5jb25zdCBzYXZlTmV3T3JkZXIgPSBhc3luYyBmdW5jdGlvbiAob3JkZXI6IE9yZGVyKSB7XG5cdG9yZGVyLnN0YXRlID0gJ29wZW4nXG5cblx0aWYgKCF2YWxpZGF0ZU9yZGVyKG9yZGVyKSkge1xuXHRcdGNvbnNvbGUubG9nKHZhbGlkYXRlT3JkZXIuZXJyb3JzKVxuXHRcdHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZU9yZGVyLmVycm9ycykpXG5cdH1cblxuXHRvcmRlciA9IHByZXBhcmVPcmRlckZvclByaXNtYUluc2VydChvcmRlcilcblx0cmV0dXJuIGF3YWl0IGdldE9yZGVyTW9kZWwoKS5jcmVhdGUoeyBkYXRhOiBvcmRlciB9KVxufVxuY29uc3QgZ2V0T3JkZXJCeUlEID0gYXN5bmMgZnVuY3Rpb24gKGlkOiBudW1iZXIpIHtcblx0cmV0dXJuIGF3YWl0IGZpbmRVbmlxdWVPcmRlcih7IGlkIH0pXG59XG5cbi8qKlxuICogZm9yIHF1ZXJ5IHJlYWQgaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtY2xpZW50L2NydWQjcmVhZFxuICogQHBhcmFtIHF1ZXJ5XG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAqL1xuY29uc3QgZmluZFVuaXF1ZU9yZGVyID0gYXN5bmMgZnVuY3Rpb24gKHF1ZXJ5OiBhbnkpIHtcblx0cmV0dXJuIGF3YWl0IGdldE9yZGVyTW9kZWwoKS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogcXVlcnksXG5cdFx0aW5jbHVkZTogZ2V0SW5jbHVkZXMoKSxcblx0fSlcbn1cblxuLyoqXG4gKiBmb3IgcXVlcnkgcmVhZCBodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9jb25jZXB0cy9jb21wb25lbnRzL3ByaXNtYS1jbGllbnQvY3J1ZCNyZWFkXG4gKiBAcGFyYW0gcXVlcnlcbiAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuICovXG5jb25zdCBmaW5kRmlyc3QgPSBhc3luYyBmdW5jdGlvbiAocXVlcnk6IGFueSkge1xuXHRyZXR1cm4gYXdhaXQgZ2V0T3JkZXJNb2RlbCgpLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHF1ZXJ5LFxuXHRcdGluY2x1ZGU6IGdldEluY2x1ZGVzKCksXG5cdH0pXG59XG5cbmZ1bmN0aW9uIGdldEluY2x1ZGVzKCkge1xuXHRyZXR1cm4ge1xuXHRcdHBlcnNvbnM6IHtcblx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0cmVxdWlyZW1lbnRzOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9XG59XG5cbi8qKlxuICogZm9yIG1vZGVsIHVzYWdlIHJlYWQgaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtY2xpZW50L2NydWQjcmVhZFxuICovXG5jb25zdCBnZXRPcmRlck1vZGVsID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZ2V0REIoKS5vcmRlclxufVxuXG5leHBvcnQgeyBnZXRPcmRlck1vZGVsLCBzYXZlTmV3T3JkZXIsIGZpbmRVbmlxdWVPcmRlciwgZmluZEZpcnN0LCBnZXRPcmRlckJ5SUQgfVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIE1vdXNlRXZlbnRIYW5kbGVyLCBDaGFuZ2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQsIHVzZU5hdmlnYXRlLCB1c2VTdWJtaXQsIExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCBDb250YWN0SW5mbyBmcm9tICd+L2NvbXBvbmVudHMvQ29udGFjdEluZm8nXG5pbXBvcnQgRGVsaXZlcnlJbmZvIGZyb20gJ34vY29tcG9uZW50cy9EZWxpdmVyeUluZm8nXG5pbXBvcnQgeyBPdXRsZXRDb250ZXh0IH0gZnJvbSAnfi9yb290J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0Y29uc3QgeyB0cmFuc2xhdG9yLCBzZXRPcmRlckl0ZW0sIG9yZGVyIH0gPSB1c2VPdXRsZXRDb250ZXh0PE91dGxldENvbnRleHQ+KClcblx0Y29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG5cdGNvbnN0IFtkZWxpdmVyeSwgc2V0RGVsaXZlcnldID0gdXNlU3RhdGUob3JkZXIuZGVsaXZlcnlfdHlwZSA9PSAnZGVsaXZlcnknKVxuXG5cdGNvbnN0IGhhbmRsZURlbGl2ZXJ5OiBDaGFuZ2VFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdHNldERlbGl2ZXJ5KCFkZWxpdmVyeSlcblx0fVxuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpZGVudGlmaWNhdG9yOiBzdHJpbmcpOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAoZXZlbnQpID0+IHtcblx0XHRcdHNldE9yZGVySXRlbShbaWRlbnRpZmljYXRvcl0sIGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHR9XG5cdH1cblxuXHRjb25zdCBuZXh0Rm9ybTogTW91c2VFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdG5hdmlnYXRlKCcvbmV3T3JkZXInLCB7IHJlcGxhY2U6IGZhbHNlIH0pXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldE9yZGVySXRlbSgnZGVsaXZlcnlfdHlwZScsIGRlbGl2ZXJ5ID8gJ2RlbGl2ZXJ5JyA6ICdwaWNrdXAnKVxuXHR9LCBbZGVsaXZlcnksIHNldE9yZGVySXRlbV0pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cblx0XHRcdDxDb250YWN0SW5mbyB0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfSBvcmRlcj17b3JkZXJ9IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuXHRcdFx0PERlbGl2ZXJ5SW5mb1xuXHRcdFx0XHR0cmFuc2xhdG9yPXt0cmFuc2xhdG9yfVxuXHRcdFx0XHRoYW5kbGVEZWxpdmVyeT17aGFuZGxlRGVsaXZlcnl9XG5cdFx0XHRcdGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRvcmRlcj17b3JkZXJ9XG5cdFx0XHRcdGRlbGl2ZXJ5PXtkZWxpdmVyeX1cblx0XHRcdFx0bmV4dEZvcm09e25leHRGb3JtfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IFRyYW5zbGF0b3IgfSBmcm9tICd+L2xvY2FsZS90cmFuc2xhdGlvbidcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnfi9yb290J1xuXG50eXBlIENvbnRhY3RJbmZvUGFyYW1zID0ge1xuXHR0cmFuc2xhdG9yOiBUcmFuc2xhdG9yXG5cdGhhbmRsZUNoYW5nZTogKGlkZW50aWZpY2F0b3I6IHN0cmluZykgPT4gUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyXG5cdG9yZGVyOiBPcmRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0SW5mbyh7IHRyYW5zbGF0b3IsIGhhbmRsZUNoYW5nZSwgb3JkZXIgfTogQ29udGFjdEluZm9QYXJhbXMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6bWItMTJcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtYm9sZCB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMCBtbC0xXCI+XG5cdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdjb250YWN0Jyl9XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCduYW1lX2FuZF9zdXJuYW1lJyl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2Z1bGxuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkFhXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIG10LTEgYmctd2hpdGUgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyM5NTdENUVdIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBBOURCRl0gdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTIgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5mdWxsbmFtZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGhvbmUnKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGhvbmUnKX1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInRlbFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwicGhvbmVcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwicGhvbmVcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIiszODAgMTExIDExMSAxMTFcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLnBob25lfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZmxleCAgdGV4dC1bIzk1N0Q1RV1cIj5cblx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNy00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNOSA5YTEgMSAwIDAwMCAydjNhMSAxIDAgMDAxIDFoMWExIDEgMCAxMDAtMnYtM2ExIDEgMCAwMC0xLTFIOXpcIlxuXHRcdFx0XHRcdFx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGhvbmVfdG9fZmluZF95b3UnKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBncm93IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2VtYWlsJyl9XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM5NTdENUVdIGZvbnQtYm9sZCB0ZXh0LXNtXCI+e3RyYW5zbGF0b3IudHJhbnNsYXRlKCdvcHRpb25hbCcpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkBcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLmVtYWlsfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2xhdG9yIH0gZnJvbSAnfi9sb2NhbGUvdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ34vcm9vdCdcblxudHlwZSBEZWxpdmVyeUluZm9QYXJhbXMgPSB7XG5cdHRyYW5zbGF0b3I6IFRyYW5zbGF0b3Jcblx0b3JkZXI6IE9yZGVyXG5cdGhhbmRsZURlbGl2ZXJ5OiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXJcblx0aGFuZGxlQ2hhbmdlOiAoc3RyaW5nOiBzdHJpbmcpID0+IFJlYWN0LkNoYW5nZUV2ZW50SGFuZGxlclxuXHRkZWxpdmVyeTogYm9vbGVhblxuXHRuZXh0Rm9ybTogTW91c2VFdmVudEhhbmRsZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsaXZlcnlJbmZvKHtcblx0dHJhbnNsYXRvcixcblx0b3JkZXIsXG5cdGhhbmRsZURlbGl2ZXJ5LFxuXHRoYW5kbGVDaGFuZ2UsXG5cdGRlbGl2ZXJ5LFxuXHRuZXh0Rm9ybSxcbn06IERlbGl2ZXJ5SW5mb1BhcmFtcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbXQtMTRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDptYi0xMlwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwIG1sLTFcIj5cblx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ2RlbGl2ZXJ5X2FkZHJlc3MnKX1cblx0XHRcdFx0PC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC0zIG15LTYgaXRlbXMtY2VudGVyIGZvbnQtYm9sZCBzcGFjZS14LTIgdGV4dC1bIzBBOURCRl1cIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFjY2VudC1bIzBBOURCRl1cIlxuXHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcblx0XHRcdFx0XHRcdGlkPVwicmFkaW9kZWxpdmVyeVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicmFkaW9zZWxlY3RvclwiXG5cdFx0XHRcdFx0XHR2YWx1ZT1cInJhZGlvZGVsaXZlcnlcIlxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17ZGVsaXZlcnkgPT0gdHJ1ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEZWxpdmVyeX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicmFkaW9kZWxpdmVyeVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnZGVsaXZlcl90b19hZHJlc3MnKX08L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjZW50LVsjMEE5REJGXVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0aWQ9XCJyYWRpb3BpY2t1cFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicmFkaW9zZWxlY3RvclwiXG5cdFx0XHRcdFx0XHR2YWx1ZT1cInJhZGlvcGlja3VwXCJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2RlbGl2ZXJ5ID09IGZhbHNlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURlbGl2ZXJ5fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJyYWRpb3BpY2t1cFwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGlja3VwJyl9PC9sYWJlbD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtkZWxpdmVyeSA9PSB0cnVlID8gKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0b3IudHJhbnNsYXRlKCduYW1lX2FuZF9zdXJuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2RlbGl2ZXJ5X2Z1bGxuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJBYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV9mdWxsbmFtZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZsZXggIHRleHQtWyM5NTdENUVdXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNy00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNOSA5YTEgMSAwIDAwMCAydjNhMSAxIDAgMDAxIDFoMWExIDEgMCAxMDAtMnYtM2ExIDEgMCAwMC0xLTFIOXpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3BpY2tlcl9uYW1lJyl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteS0yIG14LTFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInN0cmVldFwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3N0cmVldF9hbmRfbnVtYmVyJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2RlbGl2ZXJ5X3N0cmVldCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJzdHJlZXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInN0cmVldFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlN0cmFcdTAxNjFuaWNrXHUwMEUxIDEyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjOTU3RDVFXSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyMwQTlEQkZdIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0yIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e29yZGVyLmRlbGl2ZXJ5X3N0cmVldH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMiBteC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjaXR5XCIgY2xhc3NOYW1lPVwibGVhZGluZy03IGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY2l0eScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdkZWxpdmVyeV9jaXR5Jyl9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cImNpdHlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNpdHlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQcmFoYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV9jaXR5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiB3LTEvMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiIGNsYXNzTmFtZT1cImxlYWRpbmctNyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3ppcCcpfVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdkZWxpdmVyeV96aXAnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicHNjXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwc2NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCIxNDAwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV96aXB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwaG9uZTJcIiBjbGFzc05hbWU9XCJsZWFkaW5nLTcgZ3JvdyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgncGhvbmUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTU3RDVFXSBmb250LWJvbGQgdGV4dC1zbVwiPnt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnb3B0aW9uYWwnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdkZWxpdmVyeV9waG9uZScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRlbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBob25lMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGhvbmUyXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiKzM4MCAxMTEgMTExIDExMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMSBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzk1N0Q1RV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMEE5REJGXSB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMiBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvcmRlci5kZWxpdmVyeV9waG9uZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZsZXggIHRleHQtWyM5NTdENUVdXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTQgdy00IG14LTFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNy00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNOSA5YTEgMSAwIDAwMCAydjNhMSAxIDAgMDAxIDFoMWExIDEgMCAxMDAtMnYtM2ExIDEgMCAwMC0xLTFIOXpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRvci50cmFuc2xhdGUoJ3Bob25lX2lmX290aGVyJyl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTIgbXgtMSBiZy1bIzBBOURCRl0gdGV4dC14bCBmbGV4IGZsZXgtY29sIHRleHQtWyNGOEVCREJdIGZvbnQtc2VtaWJvbGQgcC01IG1kOnctMi8zIFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5IYWxhIDEzIHYgUHJhXHUwMTdFc2tcdTAwRTkgdHJcdTAxN0VuaWNpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5CdWJlbnNrXHUwMEU5IG5cdTAwRTFiXHUwMTU5ZVx1MDE3RVx1MDBFRCAzMDY8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjE3MCAwMCBQcmFoYSA3PC9zcGFuPlxuXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm10LTVcIiBocmVmPVwidGVsOis0MjA3Mzc1OTcwNzBcIj5cblx0XHRcdFx0XHRcdFx0XHRNb2JpbDogNzM3IDU5IDcwIDcwXG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIm1haWx0bzppbmZvQHNhdG5pa3ByYWhhLmN6XCI+RS1tYWlsOiBpbmZvQHNhdG5pa3ByYWhhLmN6PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9vNlo4cXprRzZwblRSczdQOFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInctNDQgdGV4dC1iYXNlIG10LTEwIHRleHQtWyNGOEVCREJdIGJvcmRlci0wIHB5LTIgcHgtMyBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgb3V0bGluZS1bI0Y4RUJEQl0gcm91bmRlZC1mdWxsICBob3Zlcjp0ZXh0LVsjZWIyZjA2XSBob3ZlcjpiZy1bI0Y4RUJEQl0gIGhvdmVyOm91dGxpbmUtWyNGOEVCREJdIGZvbnQtc2VtaWJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnc2hvd19vbl9tYXAnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yIG15LTEwIG14LTJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtuZXh0Rm9ybX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgIHRleHQtWyMwQTlEQkZdIGJvcmRlci0wIHB5LTQgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgb3V0bGluZSAgb3V0bGluZS1bIzBBOURCRl0gcm91bmRlZC1mdWxsIHRleHQteGwgaG92ZXI6YmctWyNlYjJmMDZdIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6b3V0bGluZS1bI2ViMmYwNl1cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt0cmFuc2xhdG9yLnRyYW5zbGF0ZSgnY29udGludWVfdG9fY2xvdGhfc2VsZWN0aW9uJyl9XG5cdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTYgdy02IG1sLTJcIlxuXHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17Mn1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTMgN2w1IDVtMCAwbC01IDVtNS01SDZcIiAvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicxOTQ0NTJjNicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtU0dZQ1pCSFkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxVTVpLVUkzLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0zNFlPUFpKVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRkcGVyc29uJzp7J2lkJzoncm91dGVzL2FkZHBlcnNvbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZGRwZXJzb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRkcGVyc29uLURUQURDTTNPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29uZmlybWF0aW9uJzp7J2lkJzoncm91dGVzL2NvbmZpcm1hdGlvbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb25maXJtYXRpb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29uZmlybWF0aW9uLUc2Q0gzNUpMLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZ2VuZGVyc2VsZWN0Jzp7J2lkJzoncm91dGVzL2dlbmRlcnNlbGVjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidnZW5kZXJzZWxlY3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZ2VuZGVyc2VsZWN0LUFTVU82UkNOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVjRDM0dPRDMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9uZXdPcmRlcic6eydpZCc6J3JvdXRlcy9uZXdPcmRlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOiduZXdPcmRlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9uZXdPcmRlci1TT0hLUlJVSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL29yZGVyb25lJzp7J2lkJzoncm91dGVzL29yZGVyb25lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J29yZGVyb25lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL29yZGVyb25lLUFSQUhBVzJILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc3VtbWFyeSc6eydpZCc6J3JvdXRlcy9zdW1tYXJ5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N1bW1hcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3VtbWFyeS1XTVlOTVZCVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTE5NDQ1MkM2LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhC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
