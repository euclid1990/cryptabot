import { combineReducers } from 'redux';
import {
  THEME_SIDEBAR_TOGGLE
} from '../constants/themeActionTypes';

const header = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const sidebar = (state = {open: false, width: 250, disable: false}, action) => {
  switch (action.type) {
    case THEME_SIDEBAR_TOGGLE:
      return Object.assign({}, state, {
        open: !state.open
      });
    default:
      return state;
  }
}

const section = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const footer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const layout = combineReducers({
  header,
  sidebar,
  section,
  footer
})

export default layout;
