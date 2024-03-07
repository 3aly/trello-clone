import { Provider } from "react-redux";
import { ReactElement } from "react";
import { persistor, store } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
export function ProvidersWrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
}
