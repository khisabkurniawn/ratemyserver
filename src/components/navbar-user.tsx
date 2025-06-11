import Link from "next/link";
import Image from "next/image";

export default function NavbarUser() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white transition-all">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8 lg:px-16 xl:px-0">
        <div className="flex flex-row justify-between py-4">
          <Link href="/">
            <Image
              src="/logoipsum.png"
              width={400}
              height={76}
              alt="Logo ratemyserver.org"
              className="w-32"
            />
          </Link>

          <nav className="my-auto flex flex-row space-x-4 font-sans text-sm font-medium">
            <Link href="/" className="hover:text-blue-800">
              Home
            </Link>
            <Link href="servers" className="hover:text-blue-800">
              Servers
            </Link>
            <Link href="news" className="hover:text-blue-800">
              News
            </Link>
            <Link href="forums" className="hover:text-blue-800">
              Forums
            </Link>
            <Link href="advertise" className="hover:text-blue-800">
              Advertise
            </Link>
          </nav>

          <div className="my-auto flex flex-row space-x-4 font-sans text-sm font-medium">
            <Link href="newsletters" className="hover:text-blue-800">
              Newsletters
            </Link>
            <Link href="signin" className="hover:text-blue-800">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
