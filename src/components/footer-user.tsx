import Link from "next/link";

export default function FooterUser() {
  return (
    <footer className="space-y-4 py-8 font-sans text-xs font-light">
      <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-500">
        <Link href="leaderboard" className="hover:underline">
          Leaderboard
        </Link>
        <span>•</span>
        <Link href="servers" className="hover:underline">
          Servers
        </Link>
        <span>•</span>
        <Link href="forums" className="hover:underline">
          Forums
        </Link>
        <span>•</span>
        <Link href="news" className="hover:underline">
          News
        </Link>
        <span>•</span>
        <Link href="changelog" className="hover:underline">
          Changelog
        </Link>
        <span>•</span>
        <Link href="about" className="hover:underline">
          About
        </Link>
        <span>•</span>
        <Link href="terms" className="whitespace-nowrap hover:underline">
          Terms of Service
        </Link>
        <span>•</span>
        <Link href="privacy" className="whitespace-nowrap hover:underline">
          Privacy & Cookies Policy
        </Link>
        <span>•</span>
        <a
          href="https://x.com/ratemyserver.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          X
        </a>
        <span>•</span>
        <a
          href="https://youtube.com/@ratemyserver.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          YouTube
        </a>
        <span>•</span>
        <Link href="advertise" className="hover:underline">
          Advertise
        </Link>
      </div>
      <div className="space-y-0">
        <p className="text-gray-400">
          Copyright © 2025 ratemyserver.org. All rights reserved.
        </p>
        <p className="text-gray-400">
          We are not affiliated with Mojang, Microsoft, or any game publishers.
        </p>
      </div>
    </footer>
  );
}
