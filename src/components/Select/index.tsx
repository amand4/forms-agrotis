import React from 'react';
import { string, func, any, bool, array } from 'prop-types';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import _get from 'lodash/get';

const SelectInput = ({
  fieldName,
  options,
  onChange,
  onBlur,
  errors,
  touched,
  label,
  placeholder,
  value,
  ...rest
}) => {
  const isTouched = _get(touched, fieldName);
  const hasErrors = _get(errors, fieldName);

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        variant="standard"
        name={fieldName}
        value={value}
      >
        <MenuItem value="">{placeholder}</MenuItem>
        {options?.map((item) => (
          <MenuItem key={item.id} value={item.id }>{item.nome}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectInput.propTypes = {
  fieldName: string.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  errors: any,
  touched: any,
  label: string,
  placeholder: string,
  options: array,
  value: any,
};

export default SelectInput;
