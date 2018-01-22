import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import MenuIcon from 'material-ui-icons/Menu';
import HeaderSearch from './HeaderSearch';

class Header extends Component {

  render() {
    const { classes, sidebarDisable, onTouchSidebarIconButton } = this.props;
    const title = this.context.activePage
    let navIconClassName = '';
    let appBarClassName = classes.appBar;

    if (sidebarDisable === null || sidebarDisable) {
      // If home route, don't shift app bar or dock drawer
      appBarClassName += ` ${classes.appBarHome}`;
    } else {
      navIconClassName = classes.navIconHide;
      appBarClassName += ` ${classes.appBarShift}`;
    }

    return (
      <AppBar className={appBarClassName}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onTouchSidebarIconButton}
            className={navIconClassName}
          >
            <MenuIcon />
          </IconButton>
          {title !== null && (
            <Typography className={classes.title} type="title" color="inherit" noWrap>
              {title}
            </Typography>
          )}
          <div className={classes.grow} />
          <HeaderSearch />
          <Tooltip id="appbar-github" title="Material-UI GitHub repo" enterDelay={300}>
            <IconButton
              component="a"
              color="inherit"
              href="https://github.com/mui-org/material-ui"
              aria-labelledby="appbar-github"
            >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
