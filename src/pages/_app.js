import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { setCookies, getCookie } from "cookies-next";
import { useState } from "react";
import AppContainer from "../container/AppContainer";
import { RouterTransition } from "../components/smart/RouterTransition";
import { ErrorBoundary } from "react-error-boundary";
import FallBackErrorUi from "../components/errorFallback/FallBackErrorUi";
import { useForceUpdate } from "@mantine/hooks";

export default function App(props) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);
  const [colorScheme, setColorScheme] = useState(props.colorScheme);
  const toggleColorScheme = (value) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };
  const forceUpdate = useForceUpdate();

  const onErrorReset = () => {
    console.log("Bosildi");
  };

  return getLayout(
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RouterTransition />
        <AppContainer>
          <ErrorBoundary
            FallbackComponent={FallBackErrorUi}
            onReset={onErrorReset}
          >
            <Component {...pageProps} />
          </ErrorBoundary>
        </AppContainer>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
App.getInitialProps = ({ ctx }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "n ",
});
