import { string, func, any, bool } from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const DatePickerInput = ({
  fieldName,
  onChange,
  onBlur,
  label,
  value,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        name={fieldName}
        label={label}
        value={value ? dayjs(value) : null}
        onChange={onChange}
        {...rest}
      />
    </LocalizationProvider>
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
  error: bool,
};

export default DatePickerInput;
