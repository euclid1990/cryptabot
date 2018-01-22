import {
  THEME_SIDEBAR_SIZE,
  THEME_SIDEBAR_TOGGLE,
} from '../constants/themeActionTypes';

export const sidebarSize = (width) => ({
  'type': THEME_SIDEBAR_SIZE,
  width
});

export const sidebarToggle = () => ({
  'type': THEME_SIDEBAR_TOGGLE,
});
