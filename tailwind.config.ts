import { Config } from "tailwindcss"

const config: Config = {
  content: ["src/app/**/*.tsx", "src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "#050506",
        background: "#f5f5f7",
        primary: "#c3b6c4",
      },
    },
  },
}

export default config
