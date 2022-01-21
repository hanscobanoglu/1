import React, { FunctionComponent, useMemo} from "react";
import * as Yup from 'yup';

import { Button, Input } from "semantic-ui-react";
import InputComponent from "../Input/Input";
import { Formik, useFormik, FormikHelpers,Field,Form  } from "formik";


const CreateArticle: FunctionComponent = () => { 
    //create sayfasına izni olmayan giremeyecek.
    const validationSchema = Yup.object().shape({
      bookName:Yup.string().required("Burayı boş bırakma la göt"),
      authorId:Yup.string(),
      categoryId:Yup.string(),
    })
    const initialValues:any = useMemo(() => {
      return{
        bookName:"",
        authorId:"",
        categoryId:"", 
      }
    },[])
    return(
        <div>
          naber la
          <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(
                values: any,
                { setSubmitting }: FormikHelpers<any>
              ) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}>
            <Form>
            <Field id="bookName" name="bookName" placeholder="Book Name" />
            <Button type='submit'>gonder la</Button>
            </Form>
          </Formik>
        </div>
    );}
export default CreateArticle;

/*   <InputComponent 
                formikProps={formikProps}
                name="bookName"
                label="Kitap İsmi"
                value={formikProps.values.bookName}
                />
                 */