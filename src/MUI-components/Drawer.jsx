import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";


function Drawerr({ drawerWidth, setmyMode,noneORblock,drawerType,hideDrawer}) {
  const currentLocation=useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const myList=[
    {text:"Home",icon:<Home />,path:"/"},
    {text:"Create",icon:<Create />,path:"/Create"},
    {text:"Profile",icon:<Person2 />,path:"/Profile"},
    {text:"Settings",icon:<Settings />,path:"/Settings"}
  ]

  return (
    <Box component="nav">
      <Drawer
      sx={{
        display:{xs:noneORblock,sm:"block"},
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer()
       }}

    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          disablePadding
        >
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              // @ts-ignore
              localStorage.setItem("currentMode",theme.palette.mode==="dark"? "light":"dark")
              // @ts-ignore
              setmyMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {// @ts-ignore
            theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

        <Divider />



        {myList.map((item) => { return(
          
        <ListItem
          key={item.text}
        
        disablePadding sx={{bgcolor:currentLocation.pathname===item.path? theme.
        // @ts-ignore
                palette.farhat.main : null}}>
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                    }}
                  >
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>

        ) })}




        










        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
    </Box>
  );
}

export default Drawerr;
