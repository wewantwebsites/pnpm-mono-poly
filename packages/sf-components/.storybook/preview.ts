import '../src/app.css';
import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from '@storybook/addon-themes';

/* snipped for brevity */

const themes = {
  light: 'light',
  dark: 'dark',
};

export const decorators = [
  withThemeByClassName({
    themes,
    defaultTheme: 'light',
  }),
  withThemeByDataAttribute({
    themes,
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];
