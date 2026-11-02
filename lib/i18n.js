import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define your translations here
const resources = {
  en: {
    translation: {
      home: "Home",
      whoWeAre: "Who we are",
      whatWeDo: "What we do",
      news: "What's New",
      ourCause: "Our Cause",
      contactUs: "Contact Us",
      register: "Register",
      translate: "Translate",
    },
  },
  ar: {
    translation: {
      home: "الرئيسية",
      whoWeAre: "من نحن",
      whatWeDo: "ماذا نفعل",
      news: "أخبار جديدة",
      ourCause: "قضيتنا",
      contactUs: "اتصل بنا",
      register: "سجل",
      translate: "ترجمة",
    },
  },
  om: {
    translation: {
      home: "Mana",
      whoWeAre: "Akkam jirtu",
      whatWeDo: "Maaliif hojjennuu",
      news: "Oduu",
      ourCause: "Sababi",
      contactUs: "Nu qunnamaa",
      register: "Galma",
      translate: "Hiikuu",
    },
  },
  am: {
    translation: {
      home: "መነሻ",
      whoWeAre: "እንኳን ወደ ዚህ መንግስት በደስታ መጡ",
      whatWeDo: "ምን እንደኔነት ታድናቸው",
      news: "ዜናዎች",
      ourCause: "ምንድን ይኽን",
      contactUs: "ወቅት ወዲ።",
      register: "መዘገብ",
      translate: "ተረጎም",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
