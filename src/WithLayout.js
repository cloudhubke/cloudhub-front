import React from 'react';
import ThemeProvider from './theme/ThemeProvider';

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <ThemeProvider>
      {({ themeMode, themeToggler }) => (
        <Layout themeMode={themeMode} themeToggler={themeToggler}>
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      )}
    </ThemeProvider>
  );
}
