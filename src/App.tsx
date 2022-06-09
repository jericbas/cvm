import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Balance from "containers/Balance";
import Products from "containers/Products";
import { store } from "store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Products />
          </Grid>
          <Grid item xs={4}>
            <Balance />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}
export default App;
