import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Discover and Monitor Game Servers Worldwide",
  description:
    "Track uptime, read feedback, and discover the best game servers. Claim yours and join a global gaming network.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "zh" }>;
}>) {
  return (
    <html lang={(await params).lang}>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
