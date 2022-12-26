'use client';
import { SubmitHandler } from 'react-hook-form';
import JSuggestLayout from '../../../components/layout/suggest-layout';
import { FormTypes } from '../../../types/form-types';

const SuggestNewProgramStudi = () => {
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <JSuggestLayout
      onSubmit={onSubmit}
      title="Suggestion new program studi"
      formFields={[
        {
          label: 'Nama program studi',
          name: 'titleProgramStudi',
          placeholder: 'Nama program studi',
        },
        {
          label: 'deskripsi program studi',
          name: 'descriptionProgramStudi',
          placeholder: 'Deskripsi program studi',
          isTextArea: true,
        },
        {
          label: 'Referensi',
          name: 'reference',
          isTextArea: true,
          rows: 3,
          placeholder:
            'Referensi sumber program studi, dipisahkan koma. contoh https://web,https://angkata...',
        },
      ]}
    />
  );
};

export default SuggestNewProgramStudi;
