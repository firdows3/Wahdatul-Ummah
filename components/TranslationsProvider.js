"use client";
import { createContext, useContext } from "react";

const TranslationsContext = createContext({ t: {} });

export function TranslationsProvider({ locale, children }) {
  const translations = {
    en: { home: "Home" },
    am: { home: "ገበታ" },
    ar: { home: "الصفحة الرئيسية" },
    om: { home: "Mana" },
  };

  return (
    <TranslationsContext.Provider value={{ t: translations[locale] || {} }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export const useT = () => useContext(TranslationsContext);
