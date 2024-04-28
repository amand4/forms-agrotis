import React, { useState } from 'react';
import { string, func, any, bool, number } from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';
import _get from 'lodash/get';

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
  ...rest
}) => {
  const [charCount, setCharCount] = useState(_get(rest, 'value', '').length);

  const isTouched = _get(touched, fieldName);
  const hasErrors = _get(errors, fieldName);

  const handleChange = (event) => {
    const { value } = event.target;
    setCharCount(value.length);
    onChange(event);
  };

  return (
    <Box>
      <TextField
        fullWidth
        autoFocus={autoFocus}
        id={fieldName}
        name={fieldName}
        value={rest.value}
        onChange={handleChange}
        onBlur={onBlur}
        helperText={(isTouched || hasErrors) && hasErrors}
        error={(isTouched || hasErrors) && Boolean(hasErrors)}
        variant="standard"
        inputProps={{
          maxLength: maxCharacters,
        }}
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
      />
      <Typography variant="body2" color="textSecondary" align="right">
        {charCount}/{maxCharacters}
      </Typography>
    </Box>
  );
};

TextInput.propTypes = {
  fieldName: string.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  errors: any,
  touched: any,
  autoFocus: bool,
  maxCharacters: number,
  multiline: bool,
  rows: number,
  placeholder: string,
};

export default TextInput;
