'use client';
import { SubmitHandler } from 'react-hook-form';
import JSuggestLayout from '../../../components/layout/suggest-layout';
import { FormTypes } from '../../../types/form-types';

const SuggestNewMateri = () => {
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <JSuggestLayout
      onSubmit={onSubmit}
      title="Suggestion new materi {program studi}"
      formFields={[
        {
          label: 'Judul materi',
          name: 'titleMateri',
          placeholder: 'Judul materi program studi',
        },
        {
          label: 'deskripsi materi',
          name: 'descriptionMateri',
          placeholder: 'Deskrpisi materi yang ingin di tambahkan',
          isTextArea: true,
        },
        {
          label: 'Referensi',
          name: 'reference',
          isTextArea: true,
          rows: 3,
          placeholder:
            'Referensi link materi terkait, dipisahkan koma. contoh https://web,https://angkata...',
        },
      ]}
    />
  );
};

export default SuggestNewMateri;
