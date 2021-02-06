import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from 'cloudhub-components/dist/mui/styles';
import CloudThemeProvider from 'cloudhub-components/dist/theme/ThemeProvider';
import { Paper, CssBaseline } from 'cloudhub-components/dist/mui/core';
import getTheme from './getTheme';
import addIcons from './addIcons';

import AOS from 'aos';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import '../assets/css/index.css';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

const icons = [
  'angle-right',
  'chevron-down',
  'chevron-up',
  'quote-right',
  'paper-plane',
  'search',
  'map-marker-alt',
  'pen-nib',
  'book-open',
  'camera-retro',
  'video',
  'heartbeat',
  'bullhorn',
  'funnel-dollar',
  'paint-brush',
  'cloud-upload-alt',
  'check-circle',
  'book',
  'briefcase',
  'bolt',
  'puzzle-piece',
  'bullseye',
  'clock',
  'star',
  'users',
  'address-book',
  'angellist',
  'phone-alt',
  'couch',
  'pump-soap',
  'dumbbell',
  'wifi',
  'soap',
  'calendar-week',
  'layer-group',
  'check',
  'folder',
  'farstar',
  'heart',
  'graduation-cap',
  'user-graduate',
  'gift',
  'money-bill-wave',
  'trophy',
  'cog',
  'plug',
  'lock',
  'hand-holding-heart',
  'plus',
  'rocket',
  'brain',
  'comments',
  'user',
  'dollar-sign',
  'sketch',
  'code',
  'cubes',
  'palette',
  'moon',
  'play',
  'pencil-alt',
  'mouse-pointer',
  'comment',
  'sign-in-alt',
  'share-square',
  'laptop-code',
  'mobile-alt',
  'lightbulb',
  'cogs',
  'comment-dollar',
  'calendar-alt',
  'home',
  'parking',
  'bath',
  'door-open',
  'box-tissue',
  'play-circle',
  'question',
];

addIcons(icons);

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [themeMode]);

  return [themeMode, themeToggler, mountedComponent];
};

const ThemeProvider = ({ children, ...props }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  if (!mountedComponent) return <div />;

  const theme = getTheme({ mode: themeMode, ...props });

  return (
    <CloudThemeProvider
      theme={theme}
      themeMode={themeMode}
      themeToggler={themeToggler}
      {...props}
    >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>
        {typeof children === 'function'
          ? children({ themeMode, themeToggler })
          : children}
      </Paper>
    </CloudThemeProvider>
  );
};

export default ThemeProvider;
