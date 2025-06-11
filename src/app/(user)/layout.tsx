import NavbarUser from "@/components/navbar-user";
import FooterUser from "@/components/footer-user";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarUser />
      <div className="mx-auto max-w-screen-lg px-4 md:px-8 lg:px-16 xl:px-0">
        <div className="pt-4">{children}</div>
        <FooterUser />
      </div>
    </>
  );
}
