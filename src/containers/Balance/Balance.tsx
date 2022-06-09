import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { addBalance } from "slices/vendingSlice";
import { formatMoney } from "utils/format";

const denominations = [0.1, 0.2, 0.5, 1, 2];

export default function Balance() {
  const { balance } = useSelector((state: RootState) => state.vendingMachine);
  const dispatch = useDispatch();

  const handleAddBalance = (value: number) => () => dispatch(addBalance(value));

  return (
    <>
      <Grid container m={3} direction="row" rowSpacing={2}>
        Balance: <strong>{formatMoney(balance)}</strong>
      </Grid>

      <Grid container m={3} direction="row" rowSpacing={2}>
        {denominations.map((denomination) => (
          <Grid item xs={2}>
            <Button onClick={handleAddBalance(denomination)}>
              <Avatar key={denomination} sx={{ width: 56, height: 56 }}>
                {formatMoney(denomination)}
              </Avatar>
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
