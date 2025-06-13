import NavbarUser from "@/components/navbar-user";
import FooterUser from "@/components/footer-user";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarUser />
      <div className="mx-auto max-w-screen-lg px-8 md:px-16 lg:px-32 xl:px-0">
        <div className="pt-8">{children}</div>
        <FooterUser />
      </div>
    </>
  );
}
