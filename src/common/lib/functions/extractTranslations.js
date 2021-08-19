export const loadTranslations = (ns, t) => {
  let translations = {};
  let keys = Object.keys(ns);
  keys.map((key) => {
    translations[key] = t(key);
  });
  return translations;
};
