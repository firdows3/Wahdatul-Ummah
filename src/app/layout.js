import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import { I18nextProvider } from "react-i18next";
import i18n from "../../lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wahdatul Ummah – Unity, Knowledge & Community Development",
  description: "Islamic Charity and Development Organization",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nextProvider i18n={i18n}>
          <Header />
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
