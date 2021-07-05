import React from 'react';
import { WebsitePageContext } from '../../../wrappers/WebsitePage';
import { Grid } from '../../../layout/Grid';
import { Box } from '../../../layout/Box';
import Link from '../../../commons/Link';
import Logo from '../../../commons/Logo';
import LoginForm from '../../../forms/LoginForm';
import Text from '../../../commons/Text';

export default function LoginScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Grid.Container
      display="flex"
      flex="1"
      alignItems="center"
    >
      <Grid.Row
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="37px 0 37px 0"
          >
            <Link
              href="/"
              color="secondary.main"
            >
              <Logo size="large" />
            </Link>
          </Box>

          <LoginForm />

          <Text
            variant="paragraphy"
            tag="p"
            color="tertiary.light"
            textAlign="center"
            padding="16px 0 0 0"
          >
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.main"
              onClick={(event) => {
                event.preventDefault();
                websitePageContext.toggleModal();
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              align="center"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
