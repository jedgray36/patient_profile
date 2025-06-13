import { Box, Typography, List, ListItem, Divider } from "@mui/material";
import { useOtherInfoStyles } from "./styles";
import { useProfileContext } from "../../context/profleContext";

interface PatientOtherInfoProps {
  allergies: string[];
  medicalHistory: string[];
  familyHistory: string[];
}

const PatientOtherInfo = ({
  allergies,
  medicalHistory,
  familyHistory,
}: PatientOtherInfoProps) => {
  const styles = useOtherInfoStyles();
  const { darkMode } = useProfileContext();
  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        {allergies.length > 0 && (
          <>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: darkMode ? "#fff" : "" }}
            >
              Allergies
            </Typography>
            <List dense>
              {allergies.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    ...(darkMode ? styles.listItemDark : styles.listItem),
                    ...(index % 2 === 1 && darkMode
                      ? styles.alternateRowDark
                      : styles.alternateRow),
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>

      <Box sx={styles.section}>
        {medicalHistory.length > 0 && (
          <>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: darkMode ? "#fff" : "" }}
            >
              Medical History
            </Typography>
            <List dense>
              {medicalHistory.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    ...(darkMode ? styles.listItemDark : styles.listItem),
                    ...(index % 2 === 1 && darkMode
                      ? styles.alternateRowDark
                      : styles.alternateRow),
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>

      <Box sx={styles.section}>
        {familyHistory.length > 0 && (
          <>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: darkMode ? "#fff" : "" }}
            >
              Family History
            </Typography>
            <List dense>
              {familyHistory.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    ...(darkMode ? styles.listItemDark : styles.listItem),
                    ...(index % 2 === 1 && darkMode
                      ? styles.alternateRowDark
                      : styles.alternateRow),
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PatientOtherInfo;
