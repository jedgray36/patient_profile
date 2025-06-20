import {
  Modal,
  Box,
  Button,
  IconButton,
  Typography,
  FormControlLabel,
  Slider,
  Switch,
} from "@mui/material";
import { useModalStyles } from "./styles";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useProfileContext } from "../../context/profleContext";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

const SettingsModal = ({ open, onClose }: SettingsModalProps) => {
  const styles = useModalStyles();

  const [fontSize, setFontSize] = useState<number>(14);
  const { darkMode, setDarkMode } = useProfileContext();

  const handleFontSizeChange = (_: Event, value: number | number[]) => {
    setFontSize(value as number);
  };

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDarkMode(isChecked);
    localStorage.setItem("darkMode", JSON.stringify(isChecked));
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={darkMode ? styles.modalDark : styles.modal}>
          <Box sx={styles.header}>
            <Typography variant="h6">Settings</Typography>
          </Box>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box width={"50%"}>
              <Typography gutterBottom>Font Size</Typography>
              <Slider
                value={fontSize}
                min={10}
                max={24}
                step={1}
                valueLabelDisplay="auto"
                onChange={handleFontSizeChange}
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Switch checked={darkMode} onChange={handleDarkModeToggle} />
                }
                label="Dark Mode (unfinished)"
              />
            </Box>
          </Box>
          <Box sx={styles.footer}>
            <Button onClick={onClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SettingsModal;
