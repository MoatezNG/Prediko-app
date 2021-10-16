import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type InputOrAreaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface IInputProps extends InputOrAreaProps {
  label?: string;
  capture?: boolean | 'user' | 'environment';
  name: string;
}

const Input: React.FC<IInputProps> = ({ name, label, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div data-testid="inputFormGroup" className="form-group ">
      <label htmlFor="input" className="form-label">
        <span className="d-flex justify-content-between align-items-center  form-custom-label ">
          {label}
        </span>
      </label>
      <div className="input-group">
        <input
          {...register(name, { required: true })}
          {...props}
          name={name}
          className="custom-input"
        />
      </div>
      {errors[name] && <div className="text-error text-danger">This field is required</div>}
    </div>
  );
};

export default Input;
