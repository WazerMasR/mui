import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-Component/Appbar";
import Drawerr from "../MUI-Component/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import getDesignTokens from "../Styles/Theme";

const drawerWidth = 240;
const Root = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const [noneOrBlock, setnoneOrBlock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const showDrawer = () => {
    setnoneOrBlock("block");
    setDrawerType("temporary");
  };

  const hideDrawer = () => {
    setnoneOrBlock("none");
    setDrawerType("permanent");
  };

  // import theme from styles page
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        drawerWidth={drawerWidth}
        setnoneOrBlock={setnoneOrBlock}
        setDrawerType={setDrawerType}
        showDrawer={showDrawer}
      />

      <Drawerr
        drawerWidth={drawerWidth}
        setMode={setMode}
        noneOrBlock={noneOrBlock}
        drawerType={drawerType}
        hideDrawer={hideDrawer}
      />
      <Box
        component="main"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          justifyContent: "center",
          mt: "66px",
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
