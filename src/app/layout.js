import "./globals.css";
import Header from "../../components/header";
import { I18nextProvider } from "react-i18next";
import i18n from "../../lib/i18n";

export const metadata = {
  title: "Wahdatul Ummah – Unity, Knowledge & Community Development",
  description: "Islamic Charity and Development Organization",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <I18nextProvider i18n={i18n}>
          <Header />
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
