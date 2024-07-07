import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import "./styles/theme.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecom App",
  description: "Generated by Banglore Gang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <div className="flex-wrapper">
          <main>
            <div className="content">{children}</div>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
