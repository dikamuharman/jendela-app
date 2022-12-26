'use client';
import { SubmitHandler } from 'react-hook-form';
import JSuggestLayout from '../../../components/layout/suggest-layout';
import { FormTypes } from '../../../types/form-types';

const SuggestChageProgramStudi = () => {
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <JSuggestLayout
      onSubmit={onSubmit}
      title="Suggestion materi {Program studi}"
      formFields={[
        {
          label: 'Saran perubahan',
          isTextArea: true,
          name: 'suggest',
        },
      ]}
    />
  );
};

export default SuggestChageProgramStudi;
