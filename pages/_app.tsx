import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sandbox HSI Level 4 - Form</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "var(--font-dmsans)",
          colors: {
            violet: [
              "#170F49",
              "#170F49",
              "#170F49",
              "#170F49",
              "#170F49",
              "#170F49",
              "#170F49",
              "#170F49",
              "#170F49",
              "#170F49",
            ],
            blueribbon: [
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
              "#4a3aff",
            ],
            whisper: [
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
              "#EFF0F7",
            ],
            waterloo: [
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
              "#6F6C90",
            ],
            mischka: [
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
              "#D9DBE9",
            ],
            electricviolet: [
              "#962DFF",
              "#962DFF",
              "#962DFF",
              "#962DFF",
              "#962DFF",
              "#962DFF",
              "#962DFF",
              "#962DFF",
              "#962DFF",
              "#962DFF",
            ],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
