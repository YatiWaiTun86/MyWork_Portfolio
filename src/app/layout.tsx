import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yati Wai Tun - Full-Stack Software Engineer",
  description:
    "Welcome to the portfolio of Yati Wai Tun, a skilled Full-Stack Software Engineer specializing in modern web technologies such as Next.js, TypeScript, .NET, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light text-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
