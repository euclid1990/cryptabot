import React from 'react';
import classNames from 'classnames';
import { Link as ReactLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { capitalizeFirstLetter } from 'material-ui/utils/helpers';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  variantDefault: {
    color: 'inherit',
  },
  variantPrimary: {
    color: theme.palette.primary[500],
  },
  variantAccent: {
    color: theme.palette.secondary.A400,
  },
  variantButton: {
    '&:hover': {
      textDecoration: 'inherit',
    },
  },
});

function Link(props) {
  const {
    activeClassName,
    children: childrenProp,
    component: ComponentProp,
    classes,
    className: classNameProp,
    variant,
    currentPathname,
    href,
    onClick,
    prefetch,
    ...other
  } = props;

  let ComponentRoot;
  const className = classNames(
    classes.root,
    classes[`variant${capitalizeFirstLetter(variant)}`],
    classNameProp,
  );
  let RootProps;
  let children = childrenProp;

  if (ComponentProp) {
    ComponentRoot = ComponentProp;
    RootProps = {
      ...other,
      className,
    };
  } else if (href) {
    ComponentRoot = ReactLink;
    const active = currentPathname === href;
    RootProps = {
      to: href,
      className: classNames(className, {
        [activeClassName]: active && activeClassName,
      }),
      onClick: onClick,
    };
  } else {
    ComponentRoot = 'a';
    RootProps = {
      ...other,
      className,
    };
  }

  return <ComponentRoot {...RootProps}>{children}</ComponentRoot>;
}

export default withStyles(styles)(Link);
