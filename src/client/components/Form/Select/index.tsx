/* eslint-disable @typescript-eslint/ban-ts-comment */
import ReactSelect from 'react-select';
import * as React from 'react';
import { ISelectorOption } from 'client/types/ISelectorOption';
import { FieldErrors } from 'react-hook-form';
import customStyles from './styles';
import './_Select.css';

export interface Props {
  id?: string;
  options: ISelectorOption[];
  multi?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  placeholder?: string;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: unknown) => void;
  error?: FieldErrors;
  value: ISelectorOption | ISelectorOption[];
}

const Select: React.FC<Props> = ({
  id,
  options,
  multi = false,
  isClearable = true,
  isSearchable = false,
  label,
  placeholder,
  onChange,
  error,
  value,
}) => {
  React.useEffect(() => {
    if (!multi && value instanceof Array) onChange(undefined);
  }, [multi, value]);
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        <span className="d-flex justify-content-between align-items-center form-custom-label">
          {label}
        </span>
      </label>
      <ReactSelect
        isMulti={multi}
        options={options}
        placeholder={<div className="react-select-placeholder">{placeholder}</div>}
        isClearable={isClearable}
        isSearchable={isSearchable}
        // @ts-ignore
        styles={customStyles}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-danger text-error ">This field is required</div>}
    </div>
  );
};

export default Select;
