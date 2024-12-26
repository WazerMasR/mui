import React from "react";
import { Drawer, Divider, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  Brightness4,
  Brightness7,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";

const Drawerr = ({
  drawerWidth,
  setMode,
  noneOrBlock,
  drawerType,
  hideDrawer,
}) => {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const myLists = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Create", icon: <CreateIcon />, path: "/create" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "Setting", icon: <SettingsIcon />, path: "/setting" },
  ];

  return (
    <Drawer
      sx={{
        display: { xs: noneOrBlock, sm: "block" },
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
        hideDrawer();
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
        >
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{ color: "orange", fontSize: "25px" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
          )}
        </ListItem>
        <Divider />

        {myLists.map((item) => {
          return (
            <ListItem
              key={item.text}
              sx={{
                bgcolor:
                  currentLocation.pathname === item.path
                    ? theme.palette.favColor.main
                    : null,
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem
          sx={{
            bgcolor:
              currentLocation.pathname === "/logout"
                ? theme.palette.favColor.main
                : null,
          }}
          disablePadding
        >
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
