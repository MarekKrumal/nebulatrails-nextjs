"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useLocale, useTranslations } from "next-intl";
import LanguageButton from "./LanguageBtn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
  const locale = useLocale();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="fixed w-full h-[90px] flex justify-between items-center p-1 z-30 text-white ">
        {/* hlavicka "logo" */}
        <Link className="text-xl" href="/">
          <h1 className="p-3 text-3xl font-bold ">NEBULA TRAILS</h1>
        </Link>

        {/* big screens */}
        <ul className="hidden md:flex">
          <li className="p-[1rem]">
            <Link className="text-2xl" href={`/${locale}/`}>
              {t("home")}
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" href={`/${locale}/pricing`}>
              {t("pricing")}
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" href={`/${locale}/training`}>
              {t("training")}
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" href={`/${locale}/contact`}>
              {t("contact")}
            </Link>
          </li>
          <li className="p-4 pt-5 hidden">
            <ThemeToggle />
          </li>
          <li className="p-4 pt-2">
            <LanguageButton />
          </li>
        </ul>

        <div className="block md:hidden p-1" onClick={handleClick}>
          {click ? (
            <X className="text-white text-3xl" />
          ) : (
            <Menu className="text-white text-3xl" />
          )}
        </div>
      </div>

      <ul
        className={`${
          click ? "block" : "hidden"
        } absolute top-0 left-0 md:hidden w-full h-full bg-black text-white flex flex-col justify-center items-center z-20`}
      >
        <li className="p-[2rem]">
          <Link href={`/${locale}/`}>{t("home")}</Link>
        </li>
        <li className="p-[2rem]">
          <Link href={`/${locale}/pricing`}>{t("pricing")}</Link>
        </li>
        <li className="p-[2rem]">
          <Link href={`/${locale}/training`}>{t("training")}</Link>
        </li>
        <li className="p-[2rem]">
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>

        <li className="p-[2rem]">
          <LanguageButton />
        </li>
        <li className="p-[2rem] hidden">
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
}
