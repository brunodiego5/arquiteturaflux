import React from 'react';
import PropTypes from 'prop-types';

import { WebBrowser } from './styles';

export default function Repository(props) {
  const { route } = props;
  const { repository } = route.params;

  return <WebBrowser source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.shape(),
    }).isRequired,
  }).isRequired,
};
