import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Button } from '../../commons/Button';
import TextField from '../TextFild';
import useForm from '../../../infra/hook/useForm';
import loginService from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  password: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    username: 'omariosouto',
    password: 'senhasegura',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.username, // 'omariosouto'
        password: values.password, // 'senhasegura'
      })
        .then(() => {
          router.push('/app/profile');
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="LoginForm" onSubmit={form.handleSubmit}>
      <TextField
        type="text"
        placeholder="Usuário"
        name="username"
        value={form.values.username}
        onChange={form.handleChange}
        error={form.errors.username}
        isTouched={form.touched.username}
        onBlur={form.handleBlur}
      />
      <TextField
        type="password"
        placeholder="Senha"
        name="password"
        value={form.values.password}
        onChange={form.handleChange}
        error={form.errors.password}
        isTouched={form.touched.password}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        color="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
}
