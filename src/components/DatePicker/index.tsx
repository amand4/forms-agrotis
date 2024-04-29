import { string, func, any, bool, object } from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { FormControl, FormHelperText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { containerDateStyles, componentErrorTextStyles } from './styles';

const DatePickerInput = ({
  fieldName,
  onChange,
  onBlur,
  errors,
  touched,
  label,
  value,
  ...rest
}) => {
  const hasErrors = Boolean(errors)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl fullWidth sx={containerDateStyles} error={hasErrors}>
        <DatePicker
          name={fieldName}
          label={label}
          value={value ? dayjs(value) : null}
          onChange={onChange}
          sx={{ width: "100%" }}
          {...rest}
          slotProps={{ textField: { variant: "standard" } }}
        />
        {hasErrors && <FormHelperText sx={componentErrorTextStyles}>  <WarningIcon fontSize="inherit" /> Error </FormHelperText>}
      </FormControl >
    </LocalizationProvider >
  );
};

DatePickerInput.propTypes = {
  className: string,
  fieldName: string.isRequired,
  label: string,
  value: any,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  helperText: string,
  errors: string,
  touched: bool,
};

export default DatePickerInput;
