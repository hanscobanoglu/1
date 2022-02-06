/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteBookInput = {
    id: string;
    clientMutationId?: string | null | undefined;
};
export type BookDeleteMutationVariables = {
    input: DeleteBookInput;
};
export type BookDeleteMutationResponse = {
    readonly deleteBook: {
        readonly deletedBookId: string;
    } | null;
};
export type BookDeleteMutation = {
    readonly response: BookDeleteMutationResponse;
    readonly variables: BookDeleteMutationVariables;
};



/*
mutation BookDeleteMutation(
  $input: DeleteBookInput!
) {
  deleteBook(input: $input) {
    deletedBookId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteBookPayload",
    "kind": "LinkedField",
    "name": "deleteBook",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedBookId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e4324c143731fd3221c48abc840272fd",
    "id": null,
    "metadata": {},
    "name": "BookDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation BookDeleteMutation(\n  $input: DeleteBookInput!\n) {\n  deleteBook(input: $input) {\n    deletedBookId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd6372dff9454ada1e2963afe8cbe5aa9';
export default node;
