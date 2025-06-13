
import { useTheme } from '@mui/material/styles';

export const useTopbarStyles = () => {
      const theme = useTheme();
    return {
    container: {
        display: 'flex',
        height: '4rem',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderBottom: `2px solid ${theme.palette.primary.main}`
    },
        containerDark: {
        display: 'flex',
        height: '4rem',
        width: '100%',
        backgroundColor: 'grey',
        borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.6rem',
        fontWeight: '600',
        paddingLeft: '1rem'
    },
        logoDark: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.6rem',
        fontWeight: '600',
        paddingLeft: '1rem',
        color: '#fff'
    },
    accounts: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '1rem',
        alignItems: 'center'
    },
    spacingContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    }
    }
}