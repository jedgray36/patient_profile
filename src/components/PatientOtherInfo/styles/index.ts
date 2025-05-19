

export const useOtherInfoStyles = () => {

return {
    container: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      mt: 4,
      borderLeft: '1px solid #e0e0e0',
    },
    section: {
      flex: 1,
      px: 2,
      borderRight: '1px solid #e0e0e0',
      '&:last-of-type': {
        borderRight: 'none', 
      },
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      pl: 0,
      textDecoration: 'none'
    },
    alternateRow: {
      backgroundColor: '#f9f9f9',
    },
  };
}
