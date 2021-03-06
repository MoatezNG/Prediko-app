import * as React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Select, { Props as IComponentProps } from 'client/components/Form/Select';

interface IProps extends Omit<IComponentProps, 'errors' | 'onChange' | 'value'> {
  name: string;
}

const FormSelect: React.FC<IProps> = ({ name, ...selectProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      rules={{ required: true }}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          {...selectProps}
          id={name}
          onChange={onChange}
          value={value}
          error={errors[name]}
        />
      )}
    />
  );
};

export default FormSelect;
