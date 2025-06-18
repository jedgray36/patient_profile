import { AccountCircle, Badge } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { usePersonalInformationStyles } from "../personalInformation/styles/styles";
import { usePatientDataStyles } from "../PatientData/styles";
import { Patient } from "../../types";
import { useProfileContext } from "../../context/profleContext";

const AddressAndEmployment = ({
  address,
  addressLineTwo,
  city,
  state,
  zipCode,
  country,
  employmentStatus,
  addressValid,
}: Patient) => {
  const styles = usePersonalInformationStyles();
  const patientDataStyles = usePatientDataStyles();
  const { darkMode } = useProfileContext();
  return (
    <>
      <Box>
        <Typography
          sx={
            darkMode
              ? patientDataStyles.employmentDark
              : patientDataStyles.employment
          }
        >
          Address And Employment <Badge sx={styles.marginLeft} />
        </Typography>

        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Address:</Typography>
          {address || "Not provided"}
        </Typography>

        <Typography sx={styles.addressAlign}>
          <Typography sx={!darkMode ? styles.bold : styles.boldDark}>
            Address Valid:
          </Typography>
          <Typography
            sx={addressValid ? styles.validAddress : styles.invalidAddress}
          >
            {addressValid === undefined
              ? "Not provided"
              : addressValid
              ? "Valid"
              : "Not Valid"}
          </Typography>
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>City:</Typography>
          {city || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>State:</Typography>
          {state || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Zip Code:</Typography>
          {zipCode || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Country:</Typography>
          {country || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Employment Status:</Typography>
          {employmentStatus || "Not provided"}
        </Typography>
      </Box>
    </>
  );
};
export default AddressAndEmployment;
