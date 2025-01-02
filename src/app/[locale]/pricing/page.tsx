"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeroImage from "@/components/HeroImage";

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <>
      <div className="pb-10">
        <HeroImage heading={t("heading")} text={t("subheading")} />
      </div>
      <div className="w-full px-10 py-14 bg-black z-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Basic Card */}
          <div className="card bg-black border p-6 shadow-lg min-h-[500px] w-full sm:w-[350px]">
            <h3 className="text-white text-4xl font-extrabold uppercase text-center mb-10">
              {t("basicPlan.title")}
            </h3>
            <div className="bar text-white">
              <p className="btc text-center text-3xl mb-6 font-bold">
                {t("basicPlan.price")}
              </p>
              <p className="text-center mb-4 text-xl">- 3 Days -</p>
              <p className="text-center mb-4 text-xl">- Views -</p>
              <p className="text-center mb-4 text-xl">- Private Quarters -</p>
              <Link
                href="/contact"
                className="p-4 uppercase bg-white/20 hover:bg-white/30 text-white mt-4 block text-center cursor-pointer border border-white"
              >
                {t("bookButton")}
              </Link>
            </div>
          </div>

          {/* Suite Card */}
          <div className="card bg-black border p-6 shadow-lg min-h-[500px] w-full sm:w-[350px]">
            <h3 className="text-white text-4xl font-extrabold uppercase text-center mb-10">
              {t("suitePlan.title")}
            </h3>
            <div className="bar text-white">
              <p className="btc text-center text-3xl mb-6 font-bold">
                {t("suitePlan.price")}
              </p>
              <p className="text-center mb-4 text-xl">- 5 Days -</p>
              <p className="text-center mb-4 text-xl">- Views -</p>
              <p className="text-center mb-4 text-xl">- Private Quarters -</p>
              <Link
                href="/contact"
                className="p-4 uppercase bg-white/20 hover:bg-white/30 text-white mt-4 block text-center cursor-pointer border border-white"
              >
                {t("bookButton")}
              </Link>
            </div>
          </div>

          {/* Inclusive Card */}
          <div className="card bg-black border p-6 shadow-lg min-h-[500px] w-full sm:w-[350px]">
            <h3 className="text-white text-4xl font-extrabold uppercase text-center mb-10">
              {t("inclusivePlan.title")}
            </h3>
            <div className="bar text-white">
              <p className="btc text-center text-3xl mb-6 font-bold">
                {t("inclusivePlan.price")}
              </p>
              <p className="text-center mb-4 text-xl">- 7 Days -</p>
              <p className="text-center mb-4 text-xl">- Views -</p>
              <p className="text-center mb-4 text-xl">- Private Quarters -</p>
              <Link
                href="/contact"
                className="p-4 uppercase bg-white/20 hover:bg-white/30 text-white mt-4 block text-center cursor-pointer border border-white"
              >
                {t("bookButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
