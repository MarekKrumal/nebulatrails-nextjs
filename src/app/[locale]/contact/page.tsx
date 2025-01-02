"use client";

import React from "react";
import { useTranslations } from "next-intl";
import HeroImage from "@/components/HeroImage";
import { FaPhone, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <>
      <div>
        <HeroImage heading={t("heading")} text={t("subheading")} />
      </div>
      <div className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col space-y-8">
            <h2 className="text-4xl font-bold">{t("contactInfo")}</h2>
            <div className="flex items-center space-x-4">
              <FaPhone size={30} />
              <p className="text-lg">{t("phone")}</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMailBulk size={30} />
              <p className="text-lg">{t("email")}</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt size={30} />
              <p className="text-lg">{t("address")}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black border border-gray-700 text-white p-8 rounded-sm shadow-lg">
            <h2 className="text-3xl font-bold mb-6">{t("formTitle")}</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                className="p-4 border border-gray-600 bg-gray-800 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-white/70"
              />
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="p-4 border border-gray-600 bg-gray-800 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-white/70"
              />
              <textarea
                placeholder={t("messagePlaceholder")}
                rows={5}
                className="p-4 border border-gray-600 bg-gray-800 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-white/70"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black text-lg font-bold rounded-sm hover:bg-gray-200"
              >
                {t("submitButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
