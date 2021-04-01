import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";

interface LoginUser {
  email: string;
  password: string;
}

interface Props {
  type: string;
  placeholder: string;
  isError: boolean;
  name: string;
  autoFocus: boolean;
  multiline: boolean;
  rows: number;
  onChange: (event: any) => void;
}

const TextInput = (props: Props) => {
  const {
    type,
    placeholder,
    isError,
    name,
    autoFocus,
    multiline,
    rows,
    onChange,
  } = props;

  let icon = null;

  switch (name) {
    case "email":
      icon = (
        <>
          <AlternateEmailIcon />
        </>
      );
      break;
    case "password":
      icon = (
        <>
          <LockIcon />
        </>
      );
      break;
  }

  return (
    <FormControl fullWidth>
      <TextField
        type={type}
        variant="outlined"
        placeholder={placeholder}
        error={isError}
        name={name}
        onChange={onChange}
        size="small"
        autoFocus={autoFocus}
        multiline={multiline}
        rows={rows}
        InputProps={{
          endAdornment: icon,
        }}
      />
    </FormControl>
  );
};

export default TextInput;
