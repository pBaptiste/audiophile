import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        zx7Mobile: "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        zx7Tablet: "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        zx7Desktop: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        earphonesMobile: "url('/assets/home/mobile/image-earphones-yx1.jpg')",
        earphonesTablet: "url('/assets/home/tablet/image-earphones-yx1.jpg')",
        earphonesDesktop: "url('/assets/home/desktop/image-earphones-yx1.jpg')",
      },
      colors: {
        "custom-orange": "#D87D4A",
        "custom-light-orange": "#FBAF85",
        "custom-black": "#101010",
        "custom-grey": "#F1F1F1",
        "custom-light-grey": "#FAFAFA",
        "custom-red": "#CD2C2C",
      },
    },
  },
  plugins: [],
};
export default config;
