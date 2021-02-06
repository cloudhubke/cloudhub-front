import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { makeStyles } from 'cloudhub-components/dist/mui/styles';
import { NoSsr } from 'cloudhub-components/dist/mui/core';

const useStyles = makeStyles(() => ({
  extraSmall: {
    fontSize: 10,
  },
  small: {
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
}));

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = props => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;

  const classes = useStyles();

  let icon = `${fontIconClass}`.split(' ').map(c => `${c}`.replace('fa-', ''));

  return (
    <NoSsr>
      <FontAwesomeIcon
        icon={icon}
        className={clsx('icon', classes[size], className)}
        style={{ color: fontIconColor }}
        {...rest}
      />
    </NoSsr>
  );
};

Icon.defaultProps = {
  size: 'small',
};

Icon.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The classes of the font icon
   */
  fontIconClass: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large']),
  /**
   * Color of the icon
   */
  fontIconColor: PropTypes.string,
};

export default Icon;
