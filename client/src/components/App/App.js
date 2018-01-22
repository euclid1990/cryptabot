import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import withWidth, { LARGE, MEDIUM, SMALL } from 'material-ui/utils/withWidth';
import { Header, Sidebar, Section, Footer } from '../Share';
import Routes from './Routes';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, uiTheme, sidebar, sidebarToggle } = this.props;
    return (
      <Router>
        <MuiThemeProvider theme={uiTheme}>
          <div className={classes.root}>
            <Header
              classes={classes}
              sidebarDisable={sidebar.disable}
              onTouchSidebarIconButton={sidebarToggle}
            />
            <Sidebar drawerClassName={classes.drawer} sidebar={sidebar} onClose={sidebarToggle} />
            <Section sidebarDisable={sidebar.disable}>
              <Routes />
              <Footer
                sidebarDisable={sidebar.disable}
                footerClassName={classes.appFooter}
                footerShiftClassName={classes.appFooterShift}
              />
            </Section>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
