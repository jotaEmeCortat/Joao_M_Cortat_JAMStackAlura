import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../commons/Text';
import { Box } from '../../layout/Box';
import { Grid } from '../../layout/Grid';

export default function FAQScreen({ faqCategories }) {
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
          margin={{ xs: '32px 0 32px 0' }}
          justifyContent="center"
        >
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign="center"
              padding={{ xs: '16px 0 16px 0' }}
            >
              Como podemos te ajudar?
            </Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          alignItems="flex-start"
          justifyContent="center"
          flex="1"
        >
          {
            faqCategories && faqCategories.map((category) => (
              <Grid.Col
                value={{ xs: 12, md: 3 }}
                flex={1}
                padding="0 16px"
                key={category.title}
              >
                <Box
                  width="100%"
                >
                  <Text
                    variant="subTitle"
                    tag="h2"
                    color="tertiary.main"
                  >
                    {category.title}
                  </Text>

                  <Box
                    as="ul"
                    padding="0"
                    listStyle="none"
                  >
                    {category.questions.map((question) => (
                      <li
                        key={question.title}
                        style={{
                          padding: '0 0 8px 0',
                        }}
                      >
                        <Text
                          href={`/faq/${question.slug}`}
                          variant="paragraphy"
                          color="tertiary.light"
                          padding="0 0 16px 0"
                        >
                          {question.title}
                        </Text>
                      </li>
                    ))}
                  </Box>
                </Box>
              </Grid.Col>
            ))
          }
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

FAQScreen.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
};
