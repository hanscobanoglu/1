/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteAuthorInput = {
    id: string;
    clientMutationId?: string | null | undefined;
};
export type AuthorDeleteMutationVariables = {
    input: DeleteAuthorInput;
};
export type AuthorDeleteMutationResponse = {
    readonly deleteAuthor: {
        readonly deletedAuthorId: string;
    } | null;
};
export type AuthorDeleteMutation = {
    readonly response: AuthorDeleteMutationResponse;
    readonly variables: AuthorDeleteMutationVariables;
};



/*
mutation AuthorDeleteMutation(
  $input: DeleteAuthorInput!
) {
  deleteAuthor(input: $input) {
    deletedAuthorId
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
    "concreteType": "DeleteAuthorPayload",
    "kind": "LinkedField",
    "name": "deleteAuthor",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedAuthorId",
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
    "name": "AuthorDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2430e1a6f69af6a35289be4f61dda1e6",
    "id": null,
    "metadata": {},
    "name": "AuthorDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation AuthorDeleteMutation(\n  $input: DeleteAuthorInput!\n) {\n  deleteAuthor(input: $input) {\n    deletedAuthorId\n  }\n}\n"
  }
};
})();
(node as any).hash = '1519752c0fb4b2fb789ebf82cd4e4f8a';
export default node;
