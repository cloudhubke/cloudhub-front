export const getLightColors = ({
  primaryColors,
  secondaryColors,
  tertiaryColors,
  textColors,
  backgroundColors,
}) => ({
  tertiary: {
    main: 'rgb(247, 249, 250)',
    dark: '#e8eaf6',
    ...tertiaryColors,
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  type: 'light',
  primary: {
    main: '#3f51b5',
    light: 'rgb(71, 145, 219)',
    dark: 'rgb(17, 82, 147)',
    contrastText: '#fff',
    ...primaryColors,
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    ...secondaryColors,
  },
  text: {
    primary: '#2d3748',
    secondary: '#718096',
    ...textColors,
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#fff',
    level2: '#f5f5f5',
    level1: '#fff',
    footer: '#1b1642',
    ...backgroundColors,
  },
});

export const getDarkColors = ({
  primaryColors,
  secondaryColors,
  tertiaryColors,
  textColors,
  backgroundColors,
}) => ({
  tertiary: {
    main: '#2D3748',
    dark: '#24242b',
    ...tertiaryColors,
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  type: 'dark',
  primary: {
    main: '#90caf9',
    light: 'rgb(166, 212, 250)',
    dark: 'rgb(100, 141, 174)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    ...primaryColors,
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    ...secondaryColors,
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
    ...textColors,
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#1A202C',
    default: '#121212',
    level2: '#333',
    level1: '#2D3748',
    footer: '#18181f',
    ...backgroundColors,
  },
});
