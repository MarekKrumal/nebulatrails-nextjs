"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import { useLocale, useTranslations } from "next-intl";

export default function Training() {
  const t = useTranslations("Training");
  const locale = useLocale();

  return (
    <>
      <div>
        <HeroImage heading={t("heading")} text={t("subheading")} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto p-8">
        {/* Left Column */}
        <div className="text-white flex flex-col space-y-4 md:w-1/2">
          <h1 className="text-5xl text-center font-bold">{t("heading")}</h1>
          <p className="text-xl font-light p-3 text-center">
            {t("description")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="flex items-center justify-center text-center px-8 py-3 text-lg uppercase bg-transparent border border-white text-white cursor-pointer hover:bg-white/30 w-auto mx-auto"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-row space-x-6 w-full md:w-1/2">
          <div className="w-1/2 h-auto">
            <Image
              src="/pic6.avif"
              className="w-full h-full object-contain"
              alt="img"
              width={500}
              height={500}
            />
          </div>

          <div className="w-1/2 h-auto">
            <Image
              src="/pic5.avif"
              className="w-full h-full object-contain"
              alt="img"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
