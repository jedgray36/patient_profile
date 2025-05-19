import { useTheme } from '@mui/material/styles';



export const usePaymentStyles = () => {
 const theme = useTheme();

  return {
drawerPaper: {
    width: '85%',
    margin: '0 auto',
    padding: '2rem',
    maxHeight: '80vh',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  section: {
    mb: 4,
    borderBottom: '1px solid #e0e0e0',
    pb: 3,
  },
  subtitle: {
    fontWeight: 'bold',
    mb: 1,
  },
  detailGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    columnGap: 4,
    mb: 2,
  },
  detailItem: {
    flex: '1 1 45%',
  },
  };
}