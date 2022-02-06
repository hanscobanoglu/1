import React, { FunctionComponent } from 'react';
import { FormikProps, FormikValues } from 'formik';
import SelectCategory from './SelectCategory.component';
interface Props {
  data: any;
  formikProps: FormikProps<FormikValues>;
  name: string;
  label?: string;
  multiple?: boolean;
}

const MultiSelectContainer: FunctionComponent<Props> = componentProps => {
  const { formikProps, name, data, label, multiple } = componentProps;
  return (
    <div>
      <SelectCategory
        formikProps={formikProps}
        name={name}
        label={label}
        data={data}
        multiple={multiple}
      />
    </div>
  );
};

export default MultiSelectContainer;