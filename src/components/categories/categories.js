
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useSelector,useDispatch } from 'react-redux';
function Catrgories() {
  const state = useSelector((state) => state.CategoriesReducer);
  const dispatch = useDispatch();
  function handelClick(ele){
    dispatch({type:"activeCategory",payload:ele})
    dispatch({type:"PRODUCT_SELECTED",payload:ele})
  }
    
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,margin:4}}>
      <nav aria-label="main mailbox folders">
      <p>Browse our Catrgories :</p>
        <List>
          <ListItem disablePadding>
            {state.CategoriesList.map((ele) => {
              return(<ListItemButton key={ele.id} onClick={()=>handelClick(ele.normalizedName)} >
              <ListItemIcon>
                <AttachFileIcon />
              </ListItemIcon>
              <div style={{display:'flex',flexDirection:"column",margin:2}}>
              <ListItemText primary={`${ele.normalizedName}`} /><br/><hr></hr>
              <ListItemText primary={`${ele.description}`} />
              </div>
            </ListItemButton>)
            })}
            
          </ListItem>
        </List>
      </nav>
      </Box>
    </>
  );
  
}
const mapStateToProps = state => ({
  CategoriesReducer: state.CategoriesReducer,
  reducerProducts:state.reducerProducts
});
export default Catrgories;

