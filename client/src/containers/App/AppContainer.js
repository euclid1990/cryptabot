import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import App from '../../components/App/App';
import { ThemeAction } from '../../actions';

const sidebarWidth = 250;

const theme = createMuiTheme({
  direction: 'ltr',
  palette: {
    primary: blue,
    secondary: pink,
    type: 'light',
  },
});

const styles = theme => ({
  '@global': {
    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        position: 'fixed',
        background: theme.palette.common.black,
        borderRadius: 1,
        zIndex: theme.zIndex.tooltip,
        top: 0,
        left: 0,
        width: '100%',
        height: 2,
      },
      '& dd, & dt': {
        position: 'absolute',
        top: 0,
        height: 2,
        boxShadow: `${theme.palette.common.black} 1px 0 6px 1px`,
        borderRadius: '100%',
        animation: 'nprogress-pulse 2s ease-out 0s infinite',
      },
      '& dd': {
        opacity: 0.6,
        width: 20,
        right: 0,
        clip: 'rect(-6px,22px,14px,10px)',
      },
      '& dt': {
        opacity: 0.6,
        width: 180,
        right: -80,
        clip: 'rect(-6px,90px,14px,-6px)',
      },
    },
    '@keyframes nprogress-pulse': {
      '30%': {
        opacity: 0.6,
      },
      '60%': {
        opacity: 0,
      },
      to: {
        opacity: 0.6,
      },
    },
  },
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
    paddingBottom: 130,
  },
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    transition: theme.transitions.create('width'),
    '@media print': {
      position: 'absolute',
    },
  },
  appBarHome: {
    boxShadow: 'none',
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 250px)',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: sidebarWidth,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  appFooter: {
    height: 130,
  },
  appFooterShift: {
    [theme.breakpoints.up('lg')]: {
      left: sidebarWidth,
    },
  }
});

const mapStateToProps = (state) => {
  let sidebar = state.theme.sidebar;
  return {
    uiTheme: theme,
    sidebar: Object.assign({}, sidebar, {width: sidebarWidth}),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sidebarToggle: () => {
      dispatch(ThemeAction.sidebarToggle())
    },
  }
}

const AppContainer = compose(
  withStyles(styles, {
    name: 'App',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(App);

export default AppContainer;
