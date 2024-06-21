import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";


function Appbar({ drawerWidth, showDrawer}) {
  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer()
            
          }}
          sx={{mr:"9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Link href="/" underline="none" color="inherit" sx={{ flexGrow: 1 }}>
          My expenses
        </Link>
        <Typography>Bilel Farhat</Typography>
        <Avatar sx={{ ml: 2 }} src=".\images\profil.png"></Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
