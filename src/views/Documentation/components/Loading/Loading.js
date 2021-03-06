import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'cloudhub-components/dist/mui/core';
import { Skeleton } from 'cloudhub-components/dist/mui/lab';

const Loading = ({ className, ...rest }) => (
  <List className={className} {...rest}>
    <ListItem>
      <Skeleton variant="text" width={250} />
    </ListItem>
    <ListItem>
      <Skeleton variant="rect" width={200} height={25} />
    </ListItem>
    <ListItem>
      <Skeleton variant="text" width={250} />
    </ListItem>
    <ListItem>
      <Skeleton variant="rect" width={350} height={20} />
    </ListItem>
    <ListItem>
      <Skeleton variant="text" width={250} />
    </ListItem>
    <ListItem>
      <Skeleton variant="rect" width={'100%'} height={300} />
    </ListItem>
    <ListItem>
      <Skeleton variant="text" width={250} />
    </ListItem>
    <ListItem>
      <Skeleton variant="rect" width={'100%'} height={350} />
    </ListItem>
  </List>
);

Loading.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Loading;
