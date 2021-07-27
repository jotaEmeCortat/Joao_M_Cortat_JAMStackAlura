import React from 'react';
import TextField from '../TextFild';
import { Button } from '../../commons/Button';
import Text from '../../commons/Text';
import { Box } from '../../layout/Box';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export default function RegisterForm() {
  const [formSubmited, setFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    email: 'macacolouco@gmail.com',
    usuario: '',

  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          name: userInfo.email,
          username: userInfo.usuario,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        padding="0 0 16px 0"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraphy"
        tag="p"
        color="tertiary.light"
        padding="0 0 16px 0"
      >
        Você está a um passo de saber tudo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          type="text"
          placeholder="e-mail"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          type="text"
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        color="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      <Text
        variant="paragraphy"
        tag="p"
        color="tertiary.light"
        textAlign="center"
        padding="16px 0 0 0"
      >
        {'Já tem uma conta? '}
        <Text
          href="/login"
          variant="paragraphy"
          color="secondary.main"
        >
          Entrar
        </Text>
      </Text>
      {/* AULA 02.04 */}

      {formSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          {/* <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          /> */}
        </Box>
      )}
    </form>
  );
}
