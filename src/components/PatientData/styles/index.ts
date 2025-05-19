import { useTheme } from "@mui/material/styles";


export const usePatientDataStyles = () => {
      const theme = useTheme();
      return {
        container: {
            margin: '1rem'
        },
        currentPatientContainer: {
            margin: '1rem',
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between'
        },
        patientNameContainer: {
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center'
        },
        topContainer: {
            display: 'flex',
            width: '100%',
             flexWrap: 'wrap', 
            gap: 2,
        },
  responsiveBox: {
    flex: '1 1 100%', // Full width on small screens
    '@media (min-width:600px)': {
      flex: '1 1 32%', // Approx. 3 boxes in a row with gap
    },
  },
  tableContainer: {
    flex: 1,
    paddingTop: '1rem',
  },
        outerPadding: {
            minHeight: '20rem',
            padding: '1rem'
        },
        outerPaddingTable: {
            minHeight: '13rem',
            padding: '1rem'
        },
        patientName: {
            color: theme.palette.primary.main,
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        tableHeader: {
            fontSize: '1.1rem',
            fontWeight: '600'
        },
        alignTitle: {
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem'
        },
        employment: {
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem',
            marginBottom: '2rem'
        }
      }
}