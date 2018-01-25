import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import classNames from 'classnames';
import './Footer.css';

class Footer extends Component {

  render() {
    const { sidebarDisable, footerClassName, footerShiftClassName } = this.props;

    return (
      <div
        className={sidebarDisable ? classNames('footer', footerClassName) : classNames('footer', footerClassName, footerShiftClassName)}
      >
        <p>
            {'Hand crafted with love by '}
            <a href="https://github.com/euclid1990">
              euclid1990
            </a>
            {' and our awesome '}
            <a href="https://github.com/euclid1990/cryptabot/graphs/contributors">
              contributors
            </a>.
          </p>
          <IconButton
              component="a"
              color="inherit"
              aria-labelledby="appbar-github"
            >
              <i className="fa fa-github-alt" aria-hidden="true"></i>
            </IconButton>
      </div>
    );
  }
}

export default Footer;
