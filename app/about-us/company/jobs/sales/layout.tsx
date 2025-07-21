export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <span>$$$</span>
    </div>
  );
}
