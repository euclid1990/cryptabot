import React, {Component} from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => (
  {
    root: theme.mixins.gutters({
      paddingTop: 80,
      flex: '1 0 100%',
      maxWidth: '100%',
      margin: '0 auto',
    }),
    [theme.breakpoints.up(1015 + theme.spacing.unit * 6)]: {
      root: {
        maxWidth: 1015,
      },
    },
    rootWithoutSidebar: {
      flex: '1 0 100%',
      maxWidth: 1015,
      margin: '0 auto',
    }
  }
);

class Section extends Component {

  render() {
    const { className, classes, children, sidebarDisable } = this.props;
    let rootWithoutSidebar = null;
    if (sidebarDisable) {
      rootWithoutSidebar = classes.rootWithoutSidebar;
    }
    return (
      <div className={classNames(classes.root, className, rootWithoutSidebar)}>{children}</div>
    );
  }
}

export default withStyles(styles)(Section);
