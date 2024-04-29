import React from 'react';
import { MenuItem, Select, Box, InputLabel, FormControl, FormHelperText, SelectChangeEvent, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { selectLabelStyles, componentErrorTextStyles } from './styles';
import { SelectOptionsProps } from '../FormRegister';

interface SelectInputProps {
  fieldName: string;
  options?: SelectOptionsProps[];
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
        renderValue={(selected) => {
          const selectedItem = options?.find((item) => item.id === selected);
          return (
            <div>
              <Typography>{selectedItem?.nome}</Typography>
            </div>
          );
        }}
      >
        {options?.map((item: SelectOptionsProps, index: number) => (
          <MenuItem key={item.id || index} value={item.id}>
            <Box>
              <Typography>{item.nome}</Typography>
              <Typography variant="subtitle1">{item?.cnpj}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
      {hasErrors && <FormHelperText sx={componentErrorTextStyles}> <WarningIcon fontSize="inherit" /> Error </FormHelperText>}
    </FormControl >
  );
};

export default SelectInput;
