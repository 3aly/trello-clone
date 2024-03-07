import { Provider } from "react-redux";
import React from "react";
import { ReactElement } from "react";
import store from "./redux/store";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "@constants/theme";
export function ProvidersWrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
