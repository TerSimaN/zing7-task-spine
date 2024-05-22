import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        spine: {
          neutral: {
            DEFAULT: '#ADADAD',
            100: '#F4F4F4',
            200: '#EBEBEB',
            300: '#DCDCDC',
            400: '#7B7B7B',
            500: '#464646',
            600: '#353535',
            700: '#0C0C0C'
          },
          'pale-lime': '#B4FF5C',
          'anti-flash-white': '#F1F4F5'
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        'sf-pro': ['var(--font-sf-pro)']
      },
      fontSize: {
        'web-display-1': ['88px', '110%'],
        'web-display-2': ['72px', '110%'],
        'web-display-3': ['64px', '110%'],
        'web-display-4': ['24px', '110%'],
        'web-body-1': ['20px', '140%'],
        'web-body-2': ['16px', '140%'],
        'web-body-3': ['14px', '140%'],
        'button-1': ['18px', '120%'],
        'button-2': ['16px', '120%'],
        'display-1': ['48px', '110%'],
        'display-2': ['36px', '110%'],
        'display-3': ['14px', '110%'],
        'body-1': ['14px', '140%'],
        'body-2': ['12px', '140%']
      }
    },
    container: {
      padding: {
        xl: '0rem'
      },
      center: true,
      screens: {
        sm: '1170px'
      }
    }
  },
  plugins: [],
};
export default config;
