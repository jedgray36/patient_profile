import { useTheme } from "@mui/material";


export const useProfileStyles = () => {
    const theme = useTheme();
    return {
        container: {
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            overflow: "hidden",
             height: "100vh"
        },
        innerContainer: {
            display: 'flex',
            flex: 1,
            overflow: "hidden",
        },
    sidebarContainer: {
      height: '100vh',
      flexShrink: 0,
      overflow: 'hidden', 
    },
        dataContainer: {
            flex: 1,
            overflowY: "auto",
             height: "100%",
        }
        
    }
    };