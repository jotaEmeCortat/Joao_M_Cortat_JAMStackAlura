import React from 'react';
import { Button } from '../../commons/Button';
import Text from '../../commons/Text';

export default function UploadForm() {
  return (
    <>
      <img alt="imagem" src="https://via.placeholder.com/300x150" />

      <div>
        <input
          type="text"
          placeholder="URL da imagem"
        />
      </div>

      <Text
        href="/login"
        variant="paragraphy"
        color="secondary.main"
      >
        Formatos suportados .jpg .png .svg
      </Text>

      <Button
        color="primary.main"
        type="submit"
        fullWidth
      >
        Avançar
      </Button>
    </>
  );
}
