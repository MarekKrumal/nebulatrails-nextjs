"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";
import LanguageButton from "./LanguageBtn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
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
            <Link className="text-2xl" href="/">
              {t("home")}
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" href="/pricing">
              {t("pricing")}
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" href="/training">
              {t("training")}
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" href="/contact">
              {t("contact")}
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <LanguageButton />
          </li>
        </ul>

        {/* hamburger small screens only */}
        <div className="block md:hidden p-1" onClick={handleClick}>
          {click ? (
            <X className="text-white text-3xl" />
          ) : (
            <Menu className="text-white text-3xl" />
          )}
        </div>
      </div>

      {/* Dropdown menu pouze smalal screens */}
      <ul
        className={`${
          click ? "block" : "hidden"
        } absolute top-0 left-0 md:hidden w-full h-full bg-black text-white flex flex-col justify-center items-center z-20`}
      >
        <li className="p-[2rem]">
          <Link href="/home">{t("home")}</Link>
        </li>
        <li className="p-[2rem]">
          <Link href="/pricing">{t("pricing")}</Link>
        </li>
        <li className="p-[2rem]">
          <Link href="/training">{t("training")}</Link>
        </li>
        <li className="p-[2rem]">
          <Link className="text-3xl" href="/contact">
            {t("contact")}
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <LanguageButton />
        </li>
      </ul>
    </div>
  );
}
