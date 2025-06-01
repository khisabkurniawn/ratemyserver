import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rate My Server",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
