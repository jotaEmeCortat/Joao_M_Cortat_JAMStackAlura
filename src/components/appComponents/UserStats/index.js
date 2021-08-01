import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../layout/Grid';
import Text from '../../commons/Text';

export function UserStats({ statsNumber, statsTitle }) {
  return (
    <Grid.Col
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Text
        variant="subTitle"
        tag="h2"
        color="tertiary.main"
      >
        {statsNumber}
      </Text>
      <Text
        variant="paragraphy"
        tag="p"
        color="tertiary.light"
      >
        {statsTitle}
      </Text>
    </Grid.Col>
  );
}

UserStats.defaultProps = {
  statsNumber: 0,
};

UserStats.propTypes = {
  statsNumber: PropTypes.node,
  statsTitle: PropTypes.string.isRequired,
};
