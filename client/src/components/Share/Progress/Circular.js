import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import CircularProgress from 'material-ui/Progress';
import lightGreen from 'material-ui/colors/lightGreen';

const styles = theme => ({
  progress: {
    display: 'block',
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

class CircularComponent extends Component {

  render() {
    let hide = this.props.hide;
    return (
      <div>
        {hide ? <CircularProgress style={{ color: lightGreen[400] }} /> : null}
      </div>
    );
  }
}

export default withStyles(styles)(CircularComponent);
