import React, { Component } from 'react';
import List from 'material-ui/List';
import warning from 'warning';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import SidebarNavItem from './SidebarNavItem';

function titleize(string) {
  warning(
    typeof string === 'string' && string.length > 0,
    'titleize(string) expects a non empty string argument.',
  );

  return string
    .split('-')
    .map(word => word.split(''))
    .map(letters => {
      const first = letters.shift();
      return [first.toUpperCase(), ...letters].join('');
    })
    .join(' ');
}

function pageToTitle(page) {
  if (page.title) {
    return page.title;
  }

  const name = page.pathname.replace(/.*\//, '');

  if (page.pathname.indexOf('/api') === 0) {
    return upperFirst(camelCase(name));
  }

  return titleize(name);
}

class SidebarNavList extends Component {

  renderNavItems = (props, pages, activePage) => {
    let navItems = null;

    if (pages && pages.length) {
      // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
      navItems = pages.reduce(this.reduceChildRoutes.bind(null, props, activePage), []);
    }

    return <List>{navItems}</List>;
  }

  reduceChildRoutes = (props, activePage, items, childPage, index) => {
    if (childPage.children && childPage.children.length > 1) {
      const openImmediately = activePage.pathname.indexOf(childPage.pathname) !== -1 || false;

      items.push(
        <SidebarNavItem
          key={index}
          openImmediately={openImmediately}
          title={pageToTitle(childPage)}
        >
          {this.renderNavItems(props, childPage.children, activePage)}
        </SidebarNavItem>,
      );
    } else if (childPage.title !== false) {
      childPage =
        childPage.children && childPage.children.length === 1 ? childPage.children[0] : childPage;

      items.push(
        <SidebarNavItem
          key={index}
          title={pageToTitle(childPage)}
          currentPathname={props.location.pathname}
          href={childPage.pathname}
          onClick={props.onClose}
        />,
      );
    }

    return items;
  }

  render() {
    const { pages, location } = this.props;
    return (
      <div>{this.renderNavItems(this.props, pages, location)}</div>
    );
  }
}

export default SidebarNavList;
