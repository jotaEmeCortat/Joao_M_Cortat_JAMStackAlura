import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../layout/Box';
import { Grid } from '../../layout/Grid';
import Text from '../../commons/Text';

export default function AboutScreen({ messages }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <Grid.Container
        flex="1"
      >
        <Grid.Row
          margin={{ xs: '32px 0 0 0'/* , md: '64px 0 0 0' */ }}
          justifyContent="center"
        >
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 6 }}
            /* offset={{ md: 2 }} */
            flex={1}
          >
            <Text
              variant="subTitle"
              tag="h2"
              color="tertiary.main"
              textAlign="center"
              padding={{ xs: '16px 0 0 0' }}
            >
              {messages.pageSobre.pageTitle}
            </Text>
            <Text
              variant="paragraphy"
              color="tertiary.light"
              padding="0 0 16px 0"
            >
              <Box
                dangerouslySetInnerHTML={{
                  __html: messages.pageSobre.pageDescription,
                }}
              />
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

AboutScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};
