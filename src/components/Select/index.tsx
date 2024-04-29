import { string, func, any, bool, array } from 'prop-types';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { selectLabelStyles, componentErrorTextStyles } from './styles';

const SelectInput = ({
  fieldName,
  options,
  onChange,
  onBlur,
  errors,
  label,
  placeholder,
  value,
  ...rest
}) => {

  const hasErrors = Boolean(errors)

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
      {hasErrors && <FormHelperText sx={componentErrorTextStyles}>  <WarningIcon fontSize="inherit" /> Error </FormHelperText>}
    </FormControl >
  );
};

SelectInput.propTypes = {
  fieldName: string.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  errors: any,
  label: string,
  placeholder: string,
  options: array,
  value: any,
};

export default SelectInput;


// flex-direction: column;
//justify-content: start;
//align-items: start;
//font-size: 9px
//
//<p > {item.nome}</p>
//<p>  {item.id}</p>