---
title: Controller Components
---

## Controller TextFiled

```tsx
import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
// import { useTranslation } from "react-i18next";
// import type { Dictionary } from "types/common";
import Typography from "@mui/material/Typography";

interface Props<T> extends Omit<TextFieldProps, "name"> {
  control: Control<T>;
  name: FieldPath<T>;
  // interpolation?: Dictionary;
}

const ControllerTextField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, placeholder, disabled, ...rest } = props;
  // const { control, name, placeholder, disabled, interpolation, ...rest } =
  //   props;
  // const { t } = useTranslation();

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          id={name}
          fullWidth
          error={Boolean(error)}
          // helperText={error?.message && t(error.message, interpolation)}
          helperText={
            error?.message && (
              <Typography variant="subtitle2" component="div" sx={{ mt: 1 }}>
                {error.message}
              </Typography>
            )
          }
          placeholder={disabled ? void 0 : placeholder}
          disabled={disabled}
          {...field}
          {...rest}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default ControllerTextField;
```
