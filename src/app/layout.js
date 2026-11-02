import "./globals.css";
import Header from "../../components/header";
import Providers from "../../components/Providers";

export const metadata = {
  title: "Wahdatul Ummah – Unity, Knowledge & Community Development",
  description: "Islamic Charity and Development Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
