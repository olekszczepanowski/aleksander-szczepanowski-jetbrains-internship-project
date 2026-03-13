import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), devtoolsJson()],
  ssr: {
    noExternal: [
      "@rescui/typography",
      "@rescui/button",
      "@rescui/card",
      "@rescui/checkbox",
      "@rescui/colors",
      "@rescui/icons",
      "@rescui/input",
      "@rescui/tab-list",
      "@rescui/tooltip",
      "@rescui/ui-contexts",
    ],
  },
});
