import {
  createMuiTheme,
  responsiveFontSizes,
} from 'cloudhub-components/dist/mui/core';
import { getLightColors, getDarkColors } from './palette';

const getTheme = ({ mode, colors = {} }) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: mode === 'light' ? getLightColors(colors) : getDarkColors,
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: [
          'Lato',
          // 'Roboto',
          // '"Helvetica Neue"',
          // 'Arial',
          // 'sans-serif',
        ].join(','),
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    }),
  );

export default getTheme;
