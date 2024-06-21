import { Close } from "@mui/icons-material";
import "./Home.css";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function Home() {
  
  const [mydata, setmydata] = useState([]);
  const themee = useTheme();
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/mydata")
      .then((Response) => Response.json())
      .then((data) => setmydata(data));
  }, []);

  //delete
  const handleDelete = (item) => { 
      fetch(`http://localhost:3001/mydata/${item.id}`,{method:'DELETE'})

      const newArr=mydata.filter((myobject) => { 
        return myobject.id !== item.id
       })
       setmydata(newArr)
      
     }
   



  let totalPrice=0;

  return (
    <Box>
      <Typography
        variant="h3"
        color={
          // @ts-ignore
          themee.palette.farhat.main
        }
      >
        bilel
      </Typography>

      {mydata.map((item) => {

        totalPrice += item.price 
      
        return (
          <Paper
            key={item.id}

            sx={{
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
              position: "relative",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3en" }} variant="h6">
              {item.title}
            </Typography>

            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4en",
                opacity: "0,8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>
            <IconButton 

            onClick={() => { 
              handleDelete(item)
             }}
             

            sx={{ position: "absolute", top: "0", right: "0" }}>
              <Close />
            </IconButton>
          </Paper>
        );
      })}

      <Typography mt="55px" textAlign="center" variant="h6">You Spend ${totalPrice}</Typography>
    </Box>
  );
}

export default Home;
