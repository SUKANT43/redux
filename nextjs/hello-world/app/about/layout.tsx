export default function DashboardLayout({children,}: {  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>I am layout</h1>
      <nav>{children}</nav>
    </div>
  );
}