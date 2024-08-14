// src/components/FAQ/FAQStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
    color: '#5129D6',
    fontWeight: 'bold',
  },
  accordion: {
    marginBottom: theme.spacing(2),
    border: '1px solid #ddd',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
