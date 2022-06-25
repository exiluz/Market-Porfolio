/** @type {import('next').NextConfig} */
module.exports = {
    // i18n: {//not compatible with next export
    //   locales: ["en"],
    //   defaultLocale: "en",
    // },
    reactStrictMode: true,
    images: {
        loader: "akamai",//for next export
        path: '/',//for next export
        domains: [
            "you.external.domain.com",
            "codecanyon.img.customer.envatousercontent.com"
        ],
    },
};
