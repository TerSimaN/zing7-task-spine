import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spine: {
          neutral: {
            DEFAULT: '#ADADAD',
            100: '#F4F4F4',
            200: '#EBEBEB',
            300: '#DCDCDC',
            400: '#7B7B7B',
            500: '#606060',
            600: '#464646',
            700: '#353535',
            800: '#0C0C0C'
          },
          'pale-lime': '#B4FF5C',
          'anti-flash-white': '#F1F4F5',
          'pale-red': '#FE2A2A'
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        raleway: ['var(--font-raleway)'],
        'sf-pro': ['var(--font-sf-pro)']
      },
      fontSize: {
        'web-display-1': ['88px', '110%'],
        'web-display-2': ['72px', '110%'],
        'web-display-3': ['64px', '110%'],
        'web-display-4': ['56px', '110%'],
        'web-display-5': ['24px', '110%'],
        'web-body-1': ['20px', '140%'],
        'web-body-2': ['16px', '140%'],
        'web-body-3': ['14px', '140%'],
        'button-1': ['18px', '120%'],
        'button-2': ['16px', '120%'],
        'button-3': ['16px', '150%'],
        'display-1': ['48px', '110%'],
        'display-2': ['36px', '110%'],
        'display-3': ['14px', '110%'],
        'display-4': ['14px', '120%'],
        'body-1': ['14px', '140%'],
        'body-2': ['12px', '140%']
      },
      animation: {
        slide: 'slide 8s linear alternate infinite'
      },
      keyframes: {
        slide: {
          from: {
            transform: 'translateX(-30vw)'
          },
          to: {
            transform: 'translateX(10vw)'
          }
        }
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
