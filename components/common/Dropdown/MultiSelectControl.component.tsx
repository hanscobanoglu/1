import { FormikProps, FormikValues } from 'formik';
import React, { FunctionComponent } from 'react';
import SelectControl from './SelectControl.component';

export interface MultiSelectControlProps {
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

const MultiSelectControl: FunctionComponent<MultiSelectControlProps> = (
  props: MultiSelectControlProps,
) => {
  const { inputProps } = props;
  return (
    <SelectControl {...props} inputProps={{ multiple: true, ...inputProps }} />
  );
};

export default MultiSelectControl;