import { useTheme } from "@mui/material/styles";



export const usePersonalInformationStyles = () => {

return {
    personalInfoText: {
        fontSize: '1rem',
        display: 'flex',
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem'
    },
    personalInfoTextDark: {
        fontSize: '1rem',
        display: 'flex',
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem',
        color: '#fff'
    },
    addressAlign: {
        display: 'flex',
        alignItems: 'center'
    },
    centerText: {
        fontSize: '1.1rem',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '0.2rem'
    },
        centerTextDark: {
        fontSize: '1.1rem',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '0.2rem',
        color: '#fff'
    },
    bold: {
        fontSize: '1rem',
        fontWeight: '600',
        marginRight: '0.2rem'
    },
    boldDark: {
        fontSize: '1rem',
        fontWeight: '600',
        marginRight: '0.2rem',
        color: '#fff'
    },
    tableRow: {
        padding: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        marginRight: '0.2rem'
    },
    tableRowDark: {
        padding: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        marginRight: '0.2rem',
        color: '#fff'
    },
        tableRowValue: {
        padding: '0rem',
        fontSize: '1rem',
        marginLeft: '2rem'
    },
        tableRowValueDark: {
        padding: '0rem',
        fontSize: '1rem',
        marginLeft: '2rem',
        color: '#fff'
    },
        boldLarge: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginRight: '0.2rem',
    },
        boldLargeDark: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginRight: '0.2rem',
        color: '#fff'
    },
    validAddress: {
        background: '#008000',
        borderRadius: '0.5rem',
        color: '#fff',
        padding: '0.2rem',
        fontSize: '1rem',
        fontWeight: '600',
        marginRight: '0.2rem'
    },
    invalidAddress: {
        color: 'red',
        fontSize: '1rem',
        fontWeight: '600',
        marginRight: '0.2rem'
        },
    marginLeft: {
        marginLeft: '0.5rem'
    },
    alignRight: {
        marginTop: '1rem',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    weightContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.5rem',
        marginTop: '1.5rem'
    }
  
}
}