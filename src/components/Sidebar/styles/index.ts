import { useTheme } from '@mui/material/styles';


export const useSidebarStyles = () => {
    const theme = useTheme();
    return {
containerOpen: {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 4.5rem)',
  width: '14rem',
  background: 'linear-gradient(180deg, rgb(10, 153, 255) 0%, rgb(80, 162, 255) 100%)',
  boxShadow: '5px 0px 15px rgba(0, 0, 0, 0.3)',
  borderRadius: '0 0.925rem 0.925rem 0',
  transition: 'width 0.3s ease',
},
containerClosed: {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 4.5rem)',
  width: '4rem',
  background: 'linear-gradient(180deg, rgb(10, 153, 255) 0%, rgb(80, 162, 255) 100%)',
  boxShadow: '5px 0px 15px rgba(0, 0, 0, 0.3)',
  borderRadius: '0 0.925rem 0.925rem 0',
  transition: 'width 0.3s ease',
},
      sidebar: {
        padding: '1rem'
      },

      quickActionsText: {
        fontSize: '1.2rem',
        color: '#fff'
      },
settings: {
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 'auto',
  borderTop: `2px solid ${theme.palette.background.default}`,
  borderRadius: '0 0 0.725rem 0',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover svg': {
    transform: 'rotate(360deg)',
    transition: 'transform 0.5s',
  },
},

settingsButton: (collapsed: boolean) => ({
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent:'center',
  fontSize: '1.2rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  gap: '0.5rem',
}),

settingsIcon: {
  fontSize: '1.5rem',
},

      navigationItems: {
        display: 'block',
      },
      navigationButton: {
        color: '#fff',
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
        paddingTop: '0.4rem',
        paddingBottom: '0.4rem',
        paddingLeft: '0.5rem',
        fontSize: '1rem',
        width: '100%',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '&:hover': {
         
            '& svg': {
              animation: 'wiggle 0.5s ease-in-out',
            },
          },
        '@keyframes wiggle': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      }
    }
    };