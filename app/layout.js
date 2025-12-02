import { Inter } from "next/font/google";
import GlobalLayout from "@/app/layout/GlobalLayout";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import "@/app/styles/variables/_reset.scss"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "TGM",
  description: "TGM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable}`}>
        <Header />
        <GlobalLayout>{children}</GlobalLayout>
        <Footer />
      </body>
    </html>
  );
}
