import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn, Mail, MailOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarUser() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white transition-all">
      <div className="mx-auto max-w-screen-lg px-8 md:px-16 lg:px-32 xl:px-0">
        <div className="flex flex-row justify-between py-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="my-auto">
                    <Image
                      src="/logoipsum.png"
                      width={400}
                      height={76}
                      alt="Logo ratemyserver.org"
                      className="w-32"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">asd</div>
                <div className="grid gap-3">asd</div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="my-auto">
            <Image
              src="/logoipsum.png"
              width={400}
              height={76}
              alt="Logo ratemyserver.org"
              className="w-32"
            />
          </Link>

          <nav className="my-auto hidden flex-row font-sans text-sm font-medium md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="leaderboard">Leaderboard</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="servers">Servers</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="forums">Forums</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="news">News</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="advertise">Advertise</Link>
            </Button>
          </nav>

          <div className="my-auto flex flex-row space-x-3 font-sans text-sm font-medium">
            <Button
              variant="secondary"
              size="sm"
              className="hidden md:flex"
              asChild
            >
              <Link href="newsletters">
                <Mail />
              </Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="hidden px-6 md:flex"
              asChild
            >
              <Link href="login">Login</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <LogIn className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="notifications">
                <MailOpen />
              </Link>
            </Button>
            <Link href="user">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
