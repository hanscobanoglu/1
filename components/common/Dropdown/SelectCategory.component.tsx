import { FormikProps, FormikValues } from 'formik';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import MultiSelectControl from './MultiSelectControl.component';
import SelectControl from './SelectControl.component';

interface Props {
  formikProps: FormikProps<FormikValues>;
  multiple?: boolean;
  name?: string;
  data: any;
  label?: string;
}
//item.node.`${name}`

const SelectCategory: FunctionComponent<Props> = (componentProps: Props) => {
  const { label, data, formikProps, name, multiple = true } = componentProps;
  const [state, setState] = useState([]);
  const formatItem = item => {
    return {
      key: item.node.id,
      value: item.node.id,
      text: item.node[`${name}`],
    };
  };
  useEffect(() => {
    const tempArr = data?.map(item => {
      return formatItem(item);
    });
    setState(tempArr);
  }, [data]);
  if (multiple) {
    // console.log('formikProps.values[name]', formikProps.values[name]);
    return (
      <MultiSelectControl
        name={name}
        options={state}
        label={label}
        handleChange={formikProps.handleChange}
        setFieldValue={formikProps.setFieldValue}
        handleBlur={formikProps.handleBlur}
        value={formikProps.values[name]}
        error={formikProps.errors && formikProps.errors[name]}
        touched={formikProps.touched && formikProps.touched[name]}
        inputProps={{
          // placeholder: 'Categories ...',
          search: true,
        }}
      />
    );
  }

  return (
    <SelectControl
      name={name}
      options={state}
      label={label}
      handleChange={formikProps.handleChange}
      setFieldValue={formikProps.setFieldValue}
      handleBlur={formikProps.handleBlur}
      value={formikProps.values[name]}
      error={formikProps.errors && formikProps.errors[name]}
      touched={formikProps.touched && formikProps.touched[name]}
      inputProps={{
        // placeholder: 'Category ...',
        search: true,
      }}
    />
  );
};

export default SelectCategory;