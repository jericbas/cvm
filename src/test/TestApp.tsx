import * as React from "react";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import { config } from "store";

export function createTestStore() {
  const store = configureStore(config);
  return store;
}

function App({ children }: React.PropsWithChildren<{}>) {
  const store = createTestStore();

  return <Provider store={store}>{children}</Provider>;
}
export default App;
