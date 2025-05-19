import { AccountCircle, Badge } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { usePersonalInformationStyles } from "../personalInformation/styles/styles";
import { usePatientDataStyles } from "../PatientData/styles";
import { Patient } from "../../types";

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
  return (
    <>
      <Box>
        <Typography sx={patientDataStyles.employment}>
          Address And Employment <Badge sx={styles.marginLeft} />
        </Typography>

        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Address:</Typography>
          {address || "Not provided"}
        </Typography>

        <Typography sx={styles.addressAlign}>
          <Typography sx={styles.bold}>Address Valid:</Typography>
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
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>City:</Typography>
          {city || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>State:</Typography>
          {state || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Zip Code:</Typography>
          {zipCode || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Country:</Typography>
          {country || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Employment Status:</Typography>
          {employmentStatus || "Not provided"}
        </Typography>
      </Box>
    </>
  );
};
export default AddressAndEmployment;
