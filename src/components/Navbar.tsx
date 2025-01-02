"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";
import LanguageButton from "./LanguageBtn";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");

  return (
    <header className="sticky top-0 bg-background">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/">{t("home")}</Link>
          <Link href="/projects">{t("home")}</Link>
          <Link href="/about">{t("pricing")}</Link>
          <Link href="/posts">{t("training")}</Link>
          <Link href="/contact">{t("contact")}</Link>
        </nav>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageButton />
        </div>
      </div>
    </header>
  );
}
