import {
  createMuiTheme,
  responsiveFontSizes,
} from 'cloudhub-components/dist/mui/core';
import defaultsizes from 'cloudhub-components/dist/theme/Sizes';
import defaultcolors from 'cloudhub-components/dist/theme/Colors';
import defaultfonts from 'cloudhub-components/dist/theme/Fonts';

import { getLightColors, getDarkColors } from './palette';

const getTheme = ({ mode, colors = {}, sizes = {}, fonts = {} }) =>
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
      colors: { ...defaultcolors, ...colors },
      sizes: { ...defaultsizes, ...sizes },
      fonts: { ...defaultfonts, ...fonts },
    }),
  );

export default getTheme;
