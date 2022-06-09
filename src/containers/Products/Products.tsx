import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import { formatMoney } from "utils/format";
import { useSelector, useDispatch } from "react-redux";
import { reduceBalance } from "slices/vendingSlice";
import { RootState } from "store";

const choices = [
  {
    name: "Caramel",
    value: 2.5,
    link: "https://www.fresh-store.eu/9207-large_default/milka-caramel-chocolate-100-g-34-oz.jpg",
  },
  {
    name: "Hazelnut",
    value: 3.1,
    link: "https://aldprdproductimages.azureedge.net/media/resized/$Aldi_GB/25.03.22(1)/4088600274324_0_XL.jpg",
  },
  {
    name: "Organic Raw",
    value: 2.0,
    link: "https://cdn.webshopapp.com/shops/311854/files/392949977/1100x720x2/raw-organic-food-chocobar-dark.jpg",
  },
] as const;

type Choice = typeof choices[number];
type ChoiceName = typeof choices[number]["name"];

export default function Products() {
  const [item, setItem] = React.useState<ChoiceName | null>(null);

  const { balance } = useSelector((state: RootState) => state.vendingMachine);
  const dispatch = useDispatch();

  const handleSelectProduct = (choice: Choice) => () => {
    setItem(choice.name);
    dispatch(reduceBalance(choice.value));
  };

  return (
    <>
      <Grid container xs={12} direction="row">
        {item && (
          <Alert onClose={() => setItem(null)}>Yey! You got {item}.</Alert>
        )}
      </Grid>
      <Grid container xs={12} direction="row">
        {choices.map((choice, index) => (
          <Grid key={index} item xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="140" image={choice.link} />
              <CardContent>
                {choice.name} - {formatMoney(choice.value)}
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  disabled={balance < choice.value}
                  onClick={handleSelectProduct(choice)}
                >
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
