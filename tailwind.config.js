/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"]
        },
        extend: {
            colors: {
                primary: "#25B196",
                primaryDark: "#146153",
                secondary: "#575A89",
                secondaryDark: "#1E204A",
                lightGrey: "#D0D5DB",
                lightWhite: "#F1F3F6"
            }
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === "production",
        content: [
            "components/**/*.vue",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.js",
            "nuxt.config.js"
        ]
    }
};