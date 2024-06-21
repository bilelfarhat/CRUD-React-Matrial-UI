import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";
import { KeyboardArrowRight, Scale } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.bilel.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.bilel.main,
    scale:"0.99"
  },
}));

function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate=useNavigate();
  


  return (
    <Box  
     autoComplete="off"
     sx={{ width: "380px" }} component="form">
      <TextField

        onChange={(eo) => { 
          settitle(eo.target.value)
         }}

        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField

        onChange={(eo) => { 
          setprice(Number(eo.target.value))
         }}

        fullWidth={true}
        label="Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton onClick={(first) => { 
        fetch("http://localhost:3001/mydata",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({title,price})
        }).then(() => { 
          navigate("/");
         })



       }} sx={{mt:"22px"}} variant="contained">Submit <KeyboardArrowRight /></ColorButton>
    </Box>
  );
}

export default Create;
