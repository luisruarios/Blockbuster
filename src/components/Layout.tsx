import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navigation from './Navigation/index';
import Footer from './Footer';

// Define typography object with font types and styles
const typography = {
  fontFamily: {
    primary: "'Poppins', Arial, sans-serif",
    // Add more fonts as needed
  },
  textColor: 'white',
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  paragraph: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
};

// Define theme object with styles
const theme = {
  backgroundGradient: 'linear-gradient(to right, #290101, #190a05)',
};

// Define global styles using createGlobalStyle
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily.primary}; /* Use primary font */
    background: ${(props) => props.theme.backgroundGradient}; /* Set background gradient */
    color: ${(props) => props.theme.typography.textColor};
  }

  h1, h2, h3, h4, h5, h6, button {
    font-size: ${(props) => props.theme.typography.heading.fontSize};
    font-weight: ${(props) => props.theme.typography.heading.fontWeight};
    font-style: ${(props) => props.theme.typography.heading.fontStyle};
  }

  p {
    font-size: ${(props) => props.theme.typography.paragraph.fontSize};
    font-weight: ${(props) => props.theme.typography.paragraph.fontWeight};
    font-style: ${(props) => props.theme.typography.paragraph.fontStyle};
  }

  .container {
    max-width: 1330px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={{ ...theme, typography }}>
      <div>
        <GlobalStyle />
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
