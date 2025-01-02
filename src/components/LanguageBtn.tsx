"use client";
import { usePathname } from "next/navigation";

export default function LanguageButton() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "cz";

  const toggleLanguage = () => {
    const newLocale = currentLocale === "cz" ? "en" : "cz";
    const newPath = `/${newLocale}${pathname.slice(currentLocale.length + 1)}`;
    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-5 py-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {currentLocale === "cz" ? "ENGLISH" : "ČEŠTINA"}
    </button>
  );
}
