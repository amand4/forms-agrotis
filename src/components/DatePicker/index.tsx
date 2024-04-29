import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { FormControl, FormHelperText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { containerDateStyles, componentErrorTextStyles } from './styles';

interface DatePickerInputProps {
  fieldName: string;
  onChange: (date: Date | null) => void;
  errors?: string | null;
  label: string;
  value: Date | null;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  fieldName,
  onChange,
  errors,
  label,
  value,
  ...rest
}: DatePickerInputProps) => {
  const hasErrors: boolean = Boolean(errors);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl fullWidth sx={containerDateStyles} error={hasErrors}>
        <DatePicker
          name={fieldName}
          label={label}
          value={value ? dayjs(value) : null}
          onChange={(newValue: Dayjs | null) => onChange(newValue ? newValue.toDate() : null)}
          sx={{ width: "100%" }}
          {...rest}
          slotProps={{ textField: { variant: "standard" } }}
        />
        {hasErrors && <FormHelperText sx={componentErrorTextStyles}> <WarningIcon fontSize="inherit" /> Error </FormHelperText>}
      </FormControl >
    </LocalizationProvider >
  );
};

export default DatePickerInput;
