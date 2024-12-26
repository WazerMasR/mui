import {
  Typography,
  Avatar,
  Link,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";

const Appbar = ({ drawerWidth, showDrawer}) => {
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
          sx={{ display: { sm: "none" }, mr: "9px" }}
        >
          <ListIcon />
        </IconButton>
        <Link
          href="/"
          underline="none"
          sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
          color="inherit"
        >
          My expenses
        </Link>
        <Typography mr={2} variant="body1" color="inherit">
          Islam hassan
        </Typography>
        <Avatar alt="Islam Hassan" src="./Images/Avatar.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
