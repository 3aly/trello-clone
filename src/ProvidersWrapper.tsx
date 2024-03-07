import { Provider } from "react-redux";
import React from "react";
import { ReactElement } from "react";
import store from "./redux/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@constants/theme";
export function ProvidersWrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </>
  );
}
