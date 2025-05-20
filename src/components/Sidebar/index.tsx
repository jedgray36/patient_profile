import { useState } from "react";
import {
  AccountCircle,
  ChevronLeft,
  ChevronRight,
  Dashboard,
  HomeFilled,
  Message,
  Settings,
} from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSidebarStyles } from "./styles";
import SettingsModal from "../SettingsModal";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const sidebarStyles = useSidebarStyles();

  const [settingsOpen, setSettingsOpen] = useState(false);

  const openSettings = () => {
    setSettingsOpen(true);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  return (
    <>
      <Box
        sx={
          collapsed
            ? sidebarStyles.containerClosed
            : sidebarStyles.containerOpen
        }
      >
        <IconButton
          onClick={onToggle}
          sx={{ alignSelf: collapsed ? "center" : "flex-end" }}
        >
          {collapsed ? (
            <ChevronRight fontSize="large" sx={{ color: "#fff" }} />
          ) : (
            <ChevronLeft fontSize="large" sx={{ color: "#fff" }} />
          )}
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <IconButton
              disabled
              style={sidebarStyles.settingsButton(collapsed)}
            >
              <HomeFilled sx={sidebarStyles.settingsIcon} />
              {!collapsed && (
                <Typography sx={{ textTransform: "capitalize" }}>
                  Home
                </Typography>
              )}
            </IconButton>
          </Box>
          <Box sx={{ mb: 2 }}>
            <IconButton
              disabled
              style={sidebarStyles.settingsButton(collapsed)}
            >
              <Dashboard sx={sidebarStyles.settingsIcon} />
              {!collapsed && (
                <Typography sx={{ textTransform: "capitalize" }}>
                  Dashboard
                </Typography>
              )}
            </IconButton>
          </Box>
          <Box sx={{ mb: 2 }}>
            <IconButton
              disabled
              style={sidebarStyles.settingsButton(collapsed)}
            >
              <AccountCircle sx={sidebarStyles.settingsIcon} />
              {!collapsed && (
                <Typography sx={{ textTransform: "capitalize" }}>
                  Patients List
                </Typography>
              )}
            </IconButton>
          </Box>
          <Box sx={{ mb: 2 }}>
            <IconButton
              disabled
              style={sidebarStyles.settingsButton(collapsed)}
            >
              <Message sx={sidebarStyles.settingsIcon} />
              {!collapsed && (
                <Typography sx={{ textTransform: "capitalize" }}>
                  Messages
                </Typography>
              )}
            </IconButton>
          </Box>
          <Box sx={sidebarStyles.settings} onClick={openSettings}>
            <span style={sidebarStyles.settingsButton(collapsed)}>
              <Settings sx={sidebarStyles.settingsIcon} />
              {!collapsed && "Settings"}
            </span>
          </Box>
        </Box>
      </Box>
      <SettingsModal open={settingsOpen} onClose={closeSettings} />
    </>
  );
};

export default Sidebar;
