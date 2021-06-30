import React from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/commons/Text';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/layout/Grid';
import { Box } from '../src/components/layout/Box';
import Modal from '../src/components/Modal';

export default function Home() {
  const [modal, setModal] = React.useState(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal />
      <Menu />

      <Grid.Container
        margin={{
          xs: '32px auto 0 auto',
          md: '32px auto 0 auto',
          xl: '64px auto 0 auto',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            padding="0 0 32px 0"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraphy"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              padding="16px 0"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              display="block"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              color="primary.main"
              onClick={() => {
                setModal(!modal);
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
          >
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
