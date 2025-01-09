"use client";

import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="w-full h-full bg-black/80 p-20 z-50 sticky">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <FaSearchLocation size={30} className="text-white" />
            <div>
              <p className="text-white text-lg">{t("addressLine1")}</p>
              <h1 className="text-white text-lg">{t("addressLine2")}</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone size={30} className="text-white" />
            <h2 className="text-white text-lg">{t("phone")}</h2>
          </div>
          <div className="flex items-center space-x-4">
            <FaMailBulk size={30} className="text-white" />
            <h3 className="text-white text-lg">{t("email")}</h3>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-white text-2xl font-bold">{t("aboutTitle")}</h2>
          <p className="text-white text-base leading-relaxed">
            {t("aboutDescription")}
          </p>
          <div className="flex space-x-4">
            <FaFacebook size={30} className="text-white" />
            <FaTwitter size={30} className="text-white" />
            <FaLinkedin size={30} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
