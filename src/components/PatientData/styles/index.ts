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
        patientNameContainerDark: {
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            color: '#fff'
        },
        topContainer: {
            display: 'flex',
            width: '100%',
             flexWrap: 'wrap', 
            gap: 2,
        },
  responsiveBox: {
    flex: '1 1 100%',
    '@media (min-width:600px)': {
      flex: '1 1 32%',
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
        outerPaddingDark: {
            minHeight: '20rem',
            padding: '1rem',
            background: 'grey'
        },
        outerPaddingTable: {
            minHeight: '13rem',
            padding: '1rem'
        },
        outerPaddingTableDark: {
            minHeight: '13rem',
            padding: '1rem',
            background: 'grey'
        },
        patientName: {
            color: theme.palette.primary.main,
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        tableHeader: {
            fontSize: '1.1rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        tableHeaderDark: {
            fontSize: '1.1rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
        },
        alignTitle: {
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem'
        },
        alignTitleDark: {
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem',
            color: '#fff'
        },
        employment: {
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem',
            marginBottom: '2rem'
        },
        employmentDark: {
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem',
            marginBottom: '2rem',
            color: '#fff'
        }
      }
}