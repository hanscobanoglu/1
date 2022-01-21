import React, { FunctionComponent, useMemo } from "react";
import router, { useRouter } from 'next/router';
import { useQuery,STORE_OR_NETWORK, commitMutation } from "relay-hooks";
import AUTHOR_SINGLE_QUERY,{ AuthorSingleQuery } from "../../../src/__generated__/AuthorSingleQuery.graphql";
import { Button, Form } from "semantic-ui-react";
import Input from "../Input/Input";


import { useFormik } from "formik";
import * as Yup from 'yup';
import environment from "../../../relay/environment";

const AuthorDelete: FunctionComponent = () => {
  
  };

  return (
    <div>
      <div>
        <Button onClick={()=> handleMutation(id)}> Sil</Button>
      </div>
    </div>
  );
};
export default AuthorDelete;
