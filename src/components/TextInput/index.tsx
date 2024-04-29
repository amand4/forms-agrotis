import React, { useState, ChangeEvent, FocusEvent } from 'react';
import {
  FormControl, TextField, Typography, FormHelperText,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { textErrorStyles } from './styles';

interface TextInputProps {
  fieldName: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  errors?: string | null;
  touched?: boolean;
  autoFocus?: boolean;
  maxCharacters?: number;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  style?: React.CSSProperties;
  label?: string;
  value: string;
}

const TextInput: React.FC<TextInputProps> = ({
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
  value,
  ...rest
}: TextInputProps) => {
  const [charCount, setCharCount] = useState(value.length);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCharCount(value.length);
    onChange(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(event);
  };

  const hasErrors = touched && Boolean(errors);

  return (
    <FormControl fullWidth>
      <TextField
        fullWidth
        autoFocus={autoFocus}
        id={fieldName}
        name={fieldName}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasErrors}
        variant="standard"
        inputProps={{
          maxLength: maxCharacters,
        }}
        multiline={multiline}
        rows={rows}
        label={rest.label}
        placeholder={placeholder}
        {...rest}
      />
      {hasErrors && <FormHelperText sx={textErrorStyles} color="error" id="component-error-text"> <WarningIcon fontSize="inherit" /> Error</FormHelperText>}
      {maxCharacters && (
        <Typography variant="body2" color="textSecondary" align="right">
          {charCount}/{maxCharacters}
        </Typography>
      )}
    </FormControl>
  );
};

export default TextInput;
