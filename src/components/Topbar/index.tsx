import { Box, IconButton, Typography } from "@mui/material";
import { useTopbarStyles } from "./styles";
import { AccountCircle } from "@mui/icons-material";
import { useProfileContext } from "../../context/profleContext";

const Topbar = () => {
  const navigationStyles = useTopbarStyles();
  const { darkMode } = useProfileContext();
  return (
    <>
      <div
        style={
          !darkMode
            ? navigationStyles.container
            : navigationStyles.containerDark
        }
      >
        <Box sx={navigationStyles.spacingContainer}>
          <Typography
            sx={!darkMode ? navigationStyles.logo : navigationStyles.logoDark}
          >
            Patient Log
          </Typography>
          <Box sx={navigationStyles.accounts}>
            <AccountCircle
              sx={{ color: darkMode ? "#fff" : "#000" }}
              fontSize="large"
            />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Topbar;
