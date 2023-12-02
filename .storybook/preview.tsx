import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/components/theme-provider";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
