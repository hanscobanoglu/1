import { FormikProps, FormikValues } from 'formik';
import React, { FunctionComponent, SyntheticEvent, useCallback } from 'react';
import { Dropdown, Form, Icon, Label,  } from 'semantic-ui-react';

export interface SelectControlProps {
  name: string;
  label: string;
  options: any;
  inputProps: any;
  prepend?: any;
  append?: any;
  handleChange?: (name: string) => any;
  handleBlur: (name: string) => void;
  value: any;
  error: any;
  touched: any;
  required?: boolean;
  icon?: any;
  helpText?: string;
  setFieldValue: FormikProps<FormikValues>['setFieldValue'];
}

const SelectControl: FunctionComponent<SelectControlProps> = (
  props: SelectControlProps,
) => {
  const {
    name,
    label,
    options,
    helpText,
    icon,
    handleBlur,
    value,
    error,
    touched,
    required,
    inputProps,
    setFieldValue,
  } = props;

  const onSelectChange = useCallback(
    (e: SyntheticEvent, data: any) => {
      setFieldValue(name, data.value[0]);
    },
    [name, setFieldValue],
  );
  return (
    <Form.Field required={required} error={!!touched && !!error}>
      <label>
        {icon && <Icon name={icon} />}
        {label}
      </label>
      <Dropdown
        selection
        fluid
        name={name}
        options={options}
        className="select-control-input"
        onChange={onSelectChange}
        onBlur={handleBlur(name)}
        value={value}
        label={label}
        {...inputProps}
      />
      <input type="hidden" name={ name } value={value} />
      {helpText && <p>{helpText}</p>}
      {!!touched && error && (
        <Label pointing prompt>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectControl;