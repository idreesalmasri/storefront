import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
export default function MediaCard() {
    

  const state4 = useSelector((state) => state.reducerProducts);
  return (
    <div style={{display:"flex", justifyContent: "space-round",width: "40px",}}>
      {state4.selectedPrpducts.map((ele) => {
        return (
          <div key={ele.id} >
            <Card sx={{ maxWidth: 345 ,width: 300 ,margin:2}}>
              <CardMedia
                component="img"
                height="140"
                image={ele.image}
                alt={ele.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  price :{ele.price} JOD
                </Typography>
                <Typography variant="body2" color="text.secondary">
                quantity :{ele.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ele.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            
          </div>
        );
      })}
    </div>
  );
}
