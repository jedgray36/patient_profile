import { Box, Typography, List, ListItem, Divider } from "@mui/material";
import { useOtherInfoStyles } from "./styles";

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
  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        {allergies.length > 0 && (
          <>
            <Typography variant="h6" gutterBottom>
              Allergies
            </Typography>
            <List dense>
              {allergies.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    ...styles.listItem,
                    ...(index % 2 === 1 && styles.alternateRow),
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
            <Typography variant="h6" gutterBottom>
              Medical History
            </Typography>
            <List dense>
              {medicalHistory.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    ...styles.listItem,
                    ...(index % 2 === 1 && styles.alternateRow),
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
            <Typography variant="h6" gutterBottom>
              Family History
            </Typography>
            <List dense>
              {familyHistory.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    ...styles.listItem,
                    ...(index % 2 === 1 && styles.alternateRow),
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
