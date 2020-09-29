const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
    // ...
  ],
};
