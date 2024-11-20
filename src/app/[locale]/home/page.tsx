
import LocalSwitcher from "@/components/local-switcher";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}) {
  // Await the params object to access its properties correctly
  const { locale } = await params;

  // Fetch messages and use them to generate metadata
  const messages: any = await getMessages({ locale }); 
  const title = messages.HomePage.title || "Default Title";

  return {
    title
  };
}

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex w-full items-center justify-center">

   Minh Thanh SX
      <h1 className="text-3xl font-bold mt-20">{t("title") || "Default Title"}</h1>
    
      <LocalSwitcher />
    </div>
  );
};

export default HomePage;

