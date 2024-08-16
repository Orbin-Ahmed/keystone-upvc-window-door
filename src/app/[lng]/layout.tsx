import "@/css/style.css";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || Keystone uPVC Windows & Doors",
  description: "This is the Home Page.",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { lng } = params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body suppressHydrationWarning={true}>
        <div className="mx-auto w-full">{children}</div>
      </body>
    </html>
  );
}
