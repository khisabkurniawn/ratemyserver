import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartNoAxesCombined,
  ChevronUp,
  Flame,
  Rocket,
  Trophy,
} from "lucide-react";

const invoices = [
  { invoice: "INV001" },
  { invoice: "INV002" },
  { invoice: "INV003" },
  { invoice: "INV004" },
  { invoice: "INV005" },
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="grid grid-cols-6 gap-8">
      <Tabs
        defaultValue="mje"
        className="col-span-6 space-y-8 md:col-span-6 lg:col-span-4 xl:col-span-4"
      >
        <TabsList className="mx-4 h-32 w-96">
          <TabsTrigger value="mje">
            <Image
              src="/minecraft-background.jpg"
              width={128}
              height={128}
              alt="Minecraft: Java Edition"
              className="h-full w-full opacity-70 blur-sm brightness-75"
            />
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              Minecraft
            </span>
          </TabsTrigger>
          <TabsTrigger value="mbe">
            <Image
              src="/minecraft-background.jpg"
              width={128}
              height={128}
              alt="Minecraft: Bedrock Edition"
            />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mje" className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-row space-x-2 px-4">
              <Flame className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                {dict.home.trendingtoday}
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none bg-gray-50 hover:bg-gray-100"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                        unoptimized={true}
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <ChartNoAxesCombined className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                Weekly Top Servers
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none hover:bg-gray-50"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2.5"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <Trophy className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                All-Time Favorites
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none hover:bg-gray-50"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2.5"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <Rocket className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                Coming Soon Servers
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none hover:bg-gray-50"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2.5"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="mbe" className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <Flame className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                Trending Today
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none hover:bg-gray-50"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2.5"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <ChartNoAxesCombined className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                Weekly Top Servers
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none hover:bg-gray-50"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2.5"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <Trophy className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                All-Time Favorites
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none hover:bg-gray-50"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2.5"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <Rocket className="my-auto size-6" />{" "}
              <span className="text-xl font-bold text-gray-900">
                Coming Soon Servers
              </span>
            </div>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.invoice}
                    className="rounded-xl border-none hover:bg-gray-50"
                  >
                    <TableCell className="w-24">
                      <Image
                        src={"/server-icon.svg"}
                        width={64}
                        height={64}
                        alt="Logo ServerName"
                        className="mx-auto ml-2.5"
                      />
                    </TableCell>
                    <TableCell className="flex flex-col space-y-2">
                      <div className="text-sm font-bold text-gray-900">
                        ServerName{" "}
                        <span className="font-normal text-gray-500">#32</span>
                      </div>
                      <Image
                        src={"/server-banner.gif"}
                        width={468}
                        height={60}
                        alt="Banner ServerName"
                      />
                      <div className="text-xs font-light text-gray-500">
                        Category, Category, Category
                      </div>
                    </TableCell>
                    <TableCell className="justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/upvote" className="flex">
                          <ChevronUp className="size-4" /> 10
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
      <div className="col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
        Sidebar
      </div>
    </div>
  );
}
