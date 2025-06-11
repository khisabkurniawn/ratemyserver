import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Rate My Server - Discover and Monitor Game Servers Worldwide",
  description:
    "Explore thousands of game servers across various platforms. Track uptime, read reviews, and find the best servers to play on. Claim your server and grow your community with our comprehensive tools.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
