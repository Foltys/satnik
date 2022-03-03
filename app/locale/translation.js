import cs from "./translations/cs.json";
import ua from "./translations/ua.json";
export default function translation(locale) {
  const translationToUse = locale == "ua" ? ua : cs;
  return function translate(string) {
    return translationToUse[string] || "missing translation: " + string;
  };
}
