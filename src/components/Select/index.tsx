import React from 'react';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText, SelectChangeEvent } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { selectLabelStyles, componentErrorTextStyles } from './styles';
import { LaboratoryProps, PropertyProps } from '../../interfaces';

interface SelectInputProps {
  fieldName: string;
  options?: LaboratoryProps[] | PropertyProps[];
  onChange: (event: SelectChangeEvent<string>) => void;
  onBlur: () => void;
  errors?: string | undefined
  label: string;
  placeholder: string;
  value: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  fieldName,
  options,
  onChange,
  onBlur,
  errors,
  label,
  placeholder,
  value,
}: SelectInputProps) => {
  const hasErrors: boolean = Boolean(errors);

  return (
    <FormControl fullWidth error={hasErrors}>
      <InputLabel sx={selectLabelStyles}>{label}</InputLabel>
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
        {options?.map((item, index) => (
          <MenuItem key={item.id || index} value={item.id}>
            {item.nome}
          </MenuItem>
        ))}
      </Select>
      {hasErrors && <FormHelperText sx={componentErrorTextStyles}> <WarningIcon fontSize="inherit" /> Error </FormHelperText>}
    </FormControl >
  );
};

export default SelectInput;
