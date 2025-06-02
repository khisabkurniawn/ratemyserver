export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Navbar Admin</div>
      <div>{children}</div>
    </div>
  );
}
