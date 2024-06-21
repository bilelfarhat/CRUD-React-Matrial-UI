import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';

import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import getDesignTokens from "styles/MyTheme";

const drawerWidth = 240;



function Root() {
  const [mode, setmyMode] = useState(localStorage.getItem("currentMode")===null
  ?"light"
  :localStorage.getItem("currentMode")==="light"
  ?"light"
  :"dark"
);


const [noneORblock, setnoneORblock] = useState("none");
const [drawerType, setdrawerType] = useState("permanent");
const showDrawer = () => {
  setdrawerType("temporary")
  setnoneORblock("block")
}
const hideDrawer = () => { 
  setdrawerType("permanent")
  setnoneORblock("none")
 }

  

 const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <div>
      <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />
      

      <Drawerr drawerWidth={drawerWidth} setmyMode={setmyMode} noneORblock={noneORblock} drawerType={drawerType} hideDrawer={hideDrawer}  />

    

      <Box component="main" sx={{
        ml:{sm:`${drawerWidth}px`},
        display:"flex",
        justifyContent:"center",
        mt:"66px"
      }}>
      <Outlet />
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default Root;
