import { extendTheme } from '@chakra-ui/react';

const themes = extendTheme({
  colors: {
    netural: {
      10: '#e1e3e7',
      20: '#c3c8cf',
      30: '#a5acb6',
      40: '#87919e',
      50: '#697586',
      60: '#545e6b',
      70: '#3f4650',
      80: '#2a2f36',
      90: '#15171b',
    },
    primary: {
      10: '#dce3ff',
      20: '#bac6ff',
      30: '#97aaff',
      40: '#758dff',
      50: '#5271ff',
      60: '#425acc',
      70: '#314499',
      80: '#212d66',
      90: '#101733',
    },
    secondary: {
      10: '#ffdcf4',
      20: '#ffbae9',
      30: '#ff97de',
      40: '#ff75d3',
      50: '#ff52c8',
      60: '#cc42a0',
      70: '#993178',
      80: '#662150',
      90: '#331028',
    },
    success: {
      10: '#dcffe8',
      20: '#baffd0',
      30: '#97ffb9',
      40: '#75ffa1',
      50: '#52ff8a',
      60: '#42cc6e',
      70: '#319953',
      80: '#216637',
      90: '#10331c',
    },
    warning: {
      10: '#fff9dc',
      20: '#fff3ba',
      30: '#ffec97',
      40: '#ffe675',
      50: '#ffe052',
      60: '#ccb342',
      70: '#998631',
      80: '#665a21',
      90: '#332d10',
    },
    error: {
      10: '#ffdce3',
      20: '#ffbac6',
      30: '#ff97aa',
      40: '#ff758d',
      50: '#ff5271',
      60: '#cc425a',
      70: '#993144',
      80: '#66212d',
      90: '#331017',
    },
  },
  fonts: {
    body: "'Albert Sans', sans-serif",
    heading: "'Albert Sans', sans-serif",
  },
  fontSize: {
    sm: '0.8125rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.9375rem',
    '2xl': '2.4375rem',
    '3xl': '3.0625rem',
  },
});

export default themes;
