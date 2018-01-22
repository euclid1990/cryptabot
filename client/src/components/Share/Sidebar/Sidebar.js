import React, { Component } from 'react';
import classNames from 'classnames';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import SidebarNavItem from './SidebarNavItem';
import Link from '../Link/Link';
import './Sidebar.css'

const sidebarWidth = 250;

const styles = theme => ({
  paper: {
    width: sidebarWidth,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: theme.palette.text.secondary,
    'text-decoration': 'none',
    '&:hover': {
      color: theme.palette.primary[500],
    },
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  anchor: {
    position: 'absolute',
    right: 0,
    top: 8,
    [theme.breakpoints.down('xs')]: {
      top: 4,
    },
  },
});

class Sidebar extends Component {

  handleChangeList = (event, value) => {
    this.props.history.push(value);
  };

  handleTouchTapHeader = () => {
    this.props.onRequestChangeSidebar(false);
  };

  render() {
    const { classes, sidebar, onClose, drawerClassName  } = this.props;
    const drawer = (
      <div className={classes.nav}>
        <div className={classes.toolbarIe11}>
          <Toolbar className={classes.toolbar}>
            <a className={classes.title} href="/" onClick={onClose}>
              <Typography type="title" gutterBottom color="inherit">
                Cryptabot
              </Typography>
            </a>
            <Typography type="caption">v1.0</Typography>
            <Divider absolute />
          </Toolbar>
          <Hidden lgUp>
            <div className={classes.anchor}>
              <IconButton onClick={onClose}>
                  <ChevronLeftIcon />
              </IconButton>
            </div>
          </Hidden>
        </div>
        <List>

        </List>
      </div>
    );
    return (
      <div className={drawerClassName}>
        {/* Show on small/medium screen */}
        <Hidden lgUp={!sidebar.disable}>
          <Drawer
            classes={{
              paper: classNames(classes.paper, 'algolia-drawer'),
            }}
            type="temporary"
            open={sidebar.open}
            onClose={onClose}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      {/* Show on large screen only */}
        {sidebar.disable ? null : (
          <Hidden mdDown implementation="css">
            <Drawer
              classes={{
                paper: classes.paper,
              }}
              type="permanent"
              open
            >
              {drawer}
            </Drawer>
            <p>sss</p>
          </Hidden>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
