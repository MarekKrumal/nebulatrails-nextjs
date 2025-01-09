"use client";

import React from "react";
import { useTranslations } from "next-intl";
import HeroImage from "@/components/HeroImage";
import Cart from "@/components/cart";

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <div className="text-white">
      {" "}
      {/* Single parent element */}
      <div>
        <HeroImage heading={t("heading")} text={t("subheading")} />
      </div>
      <div className="w-full px-10 py-10 bg-black z-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
          {/* Basic Plan => 5 USD */}
          <Cart
            title={t("basicPlan.title")}
            price={t("basicPlan.price")}
            duration="3 Days"
            services={["Private Quarters", "Space Walks", "Onboard Meals"]}
            safetyInfo="Fully certified by the Space Agency."
            buttonText={t("bookButton")}
            buttonLink="/checkout?amount=5"
          />

          {/* Suite Plan => 10 USD */}
          <Cart
            title={t("suitePlan.title")}
            price={t("suitePlan.price")}
            duration="5 Days"
            services={["Luxury Cabin", "Guided Tours", "Premium Meals"]}
            safetyInfo="Comprehensive safety protocols in place."
            buttonText={t("bookButton")}
            buttonLink="/checkout?amount=10"
          />

          {/* Inclusive Plan => 15 USD */}
          <Cart
            title={t("inclusivePlan.title")}
            price={t("inclusivePlan.price")}
            duration="7 Days"
            services={["VIP Suite", "Private Guide", "All-Inclusive Meals"]}
            safetyInfo="Monitored by experienced astronauts."
            buttonText={t("bookButton")}
            buttonLink="/checkout?amount=15"
          />
        </div>
      </div>
    </div>
  );
}
