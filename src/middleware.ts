import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["cz", "en"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/cz/:path*", "/en/:path*"],
};
