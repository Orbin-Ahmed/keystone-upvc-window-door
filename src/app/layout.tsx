import "@/css/style.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="container w-4/5 mx-auto">{children}</div>
      </body>
    </html>
  );
}
