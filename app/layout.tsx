import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/home/Footer";
import AuthProvider from "@/components/provider/AuthProvider";
import { MyContextProvider } from "@/components/UI/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reservation",
  description: "Find your apartments",
  icons: {
    icon: "/assets/reservation.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <MyContextProvider>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </MyContextProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
