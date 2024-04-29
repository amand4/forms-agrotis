import { useState } from 'react';
import { string, func, bool, number, object } from 'prop-types';
import {
  FormControl, TextField, Typography, FormHelperText,
  Box,
  any,
  InputLabel
} from '@mui/material';
import _get from 'lodash/get';
import WarningIcon from '@mui/icons-material/Warning';
import { textErrorStyles } from './styles';

const TextInput = ({
  fieldName,
  onChange,
  onBlur,
  errors,
  touched,
  autoFocus = false,
  maxCharacters,
  multiline,
  rows,
  placeholder,
  style,
  ...rest
}) => {
  const [charCount, setCharCount] = useState(_get(rest, 'value', '').length);

  const handleChange = (event) => {
    const { value } = event.target;
    setCharCount(value.length);
    onChange(event);
  };

  const hasErrors = touched && Boolean(errors)

  return (
    <FormControl fullWidth >
      <TextField
        fullWidth
        autoFocus={autoFocus}
        id={fieldName}
        name={fieldName}
        value={rest.value}
        onChange={handleChange}
        onBlur={onBlur}
        error={touched && Boolean(errors)}
        variant="standard"
        inputProps={{
          maxLength: maxCharacters,
        }}
        multiline={multiline}
        rows={rows}
        label={rest.label}
      />

      {hasErrors && <FormHelperText sx={textErrorStyles} style={{...textErrorStyles}} color="error" id="component-error-text"> <WarningIcon fontSize="inherit" />Error</FormHelperText>}
      <Typography variant="body2" color="textSecondary" align="right">
        {charCount}/{maxCharacters}
      </Typography>
    </FormControl >

  );
};

TextInput.propTypes = {
  fieldName: string.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  errors: string,
  touched: bool,
  autoFocus: bool,
  maxCharacters: number,
  multiline: bool,
  rows: number,
  placeholder: string,
  style: object
};

export default TextInput;
