import { FormikProps, FormikValues } from "formik";
import React, { FunctionComponent, useCallback, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";

export interface TextControlProps {
    name: string;
    label?: string;
    inputProps?: any;
    prepend?: any;
    append?: any;
    required?: boolean;
    icon?: any;
    formikProps: FormikProps<FormikValues>;
    onChange?: (value: any) => void;
    value: any;
    className?: string;
    type?: any;
  }

const InputComponent: FunctionComponent<TextControlProps> = (props:TextControlProps) => {
    const {
        name,
        label,
        icon,
        required,
        inputProps,
        formikProps,
        value,
        className,
        type,
      } = props;

    const { handleChange, handleBlur, errors, touched } = formikProps;
    const myError = errors && errors[name];
    const myTouched = touched && touched[name];
    const myHandleChange = useCallback(
        (e: any) => {
        handleChange(name)(e);
        // if (onChange) onChange(e.target.value);
        },
    [handleChange, name],
  );
    return(
        <div>
           <Form.Input
                inline
                required={required}
                icon={icon}
                name={name}
                className={className}
                onChange={myHandleChange}
                onBlur={handleBlur}
                value={value}
                error={!!myTouched && myError}
                placeholder={label}
                aria-invalid="true"
                style={{ with: '100%' }}
                type={type}
                {...inputProps}
                fluid
            />
         
        </div>
    )}
export default InputComponent;