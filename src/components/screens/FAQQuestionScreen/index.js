import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Grid } from '../../layout/Grid';
import { Box } from '../../layout/Box';
import Text from '../../commons/Text';

export default function FAQQuestionScreen({ category, question }) {
  const theme = useTheme();
  return (
    <Grid.Container
      flex="1"
      margin={{
        xs: '32px auto 0 auto',
        md: '80px auto 0 auto',
        xl: '100px auto 0 auto',
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid.Col
          offset={{ sm: 0, lg: 1 }}
          value={{ xs: 12, md: 4, lg: 4 }}
        >
          <Text
            variant="title"
            tag="h2"
            color="tertiary.main"
            margin="0 0 16px 0"
            padding=" 0 0 0 16px"
          >
            Artigos
            <br />
            Relacionados
          </Text>
          <Box
            as="ul"
            listStyle="none"
            padding="32px"
            background={theme.colors.borders.main.color}
            borderRadius={theme.borderRadius}
          >
            {category.questions.map((currentQuestion) => (
              <li
                key={currentQuestion.slug}
                style={{
                  padding: '0 0 16px 0',
                }}
              >
                <Text
                  variant="paragraphy"
                  href={`/${currentQuestion.slug}`}
                  color="primary.main"
                >
                  {currentQuestion.title}
                </Text>
              </li>
            ))}
          </Box>
        </Grid.Col>

        <Grid.Col
          value={{ lg: 6 }}
          margin={{
            xs: '0 0 50px 0',
            md: '0 0 0 auto',
          }}
        >
          <Text
            variant="title"
            tag="h2"
            color="tertiary.main"
            margin="16px 0 16px 0"
          >
            {question.title}
          </Text>
          <Text
            variant="paragraphy"
            tag="p"
            color="tertiary.light"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: question.description }}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

FAQQuestionScreen.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
  }).isRequired,
  question: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
