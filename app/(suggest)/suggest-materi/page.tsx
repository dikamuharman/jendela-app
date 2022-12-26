'use client';
import { SubmitHandler } from 'react-hook-form';
import JSuggestLayout from '../../../components/layout/suggest-layout';
import { FormTypes } from '../../../types/form-types';

const SuggestMateri = () => {
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <>
      <JSuggestLayout
        onSubmit={onSubmit}
        title="Suggestion changes materi program studi"
        formFields={[
          {
            isTextArea: true,
            label: 'Saran edit',
            name: 'suggest',
            placeholder: 'apa yang anda pikirkan',
          },
        ]}
      />
    </>
  );
};

export default SuggestMateri;
