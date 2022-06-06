import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector ,useDispatch} from "react-redux";
import Swal from 'sweetalert2'

export default function MediaCard() {
    function addClick(ele){
      if(ele.quantity===0){
        Swal.fire('out of stuck, please choose another item')
        return;
      }
        dispatch({type:"addToCart",payload:ele})
        dispatch({type:"decreaseQuantity",payload:ele})
    }
  const dispatch = useDispatch();
  const state4 = useSelector((state) => state.reducerProducts);
  return (
    <div style={{display:"flex", justifyContent: "space-round",width: "40px",}}>
      {state4.selectedProducts.map((ele) => {
        return (
          <div key={ele.id} >
            <Card sx={{ maxWidth: 345 ,width: 300 ,margin:2, marginBottom:5}}>
              <CardMedia
                component="img"
                height="110"
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
                <Button size="small" onClick={()=>addClick(ele)}>Add to cart</Button>
                <Button size="small" >Learn More</Button>
              </CardActions>
            </Card>
            
          </div>
        );
      })}
    </div>
  );
}
