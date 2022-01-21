/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateAuthorInput = {
    id?: string | null | undefined;
    authorName?: string | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type AuthorUptadeMutationVariables = {
    input: UpdateAuthorInput;
};
export type AuthorUptadeMutationResponse = {
    readonly uptadeAuthor: {
        readonly author: {
            readonly id: string;
            readonly authorName: string;
        } | null;
    } | null;
};
export type AuthorUptadeMutation = {
    readonly response: AuthorUptadeMutationResponse;
    readonly variables: AuthorUptadeMutationVariables;
};



/*
mutation AuthorUptadeMutation(
  $input: UpdateAuthorInput!
) {
  uptadeAuthor(input: $input) {
    author {
      id
      authorName
    }
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
    "concreteType": "UpdateAuthorPayload",
    "kind": "LinkedField",
    "name": "uptadeAuthor",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthorNode",
        "kind": "LinkedField",
        "name": "author",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "authorName",
            "storageKey": null
          }
        ],
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
    "name": "AuthorUptadeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorUptadeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "973a44c7a57a112add34d909e2fd812d",
    "id": null,
    "metadata": {},
    "name": "AuthorUptadeMutation",
    "operationKind": "mutation",
    "text": "mutation AuthorUptadeMutation(\n  $input: UpdateAuthorInput!\n) {\n  uptadeAuthor(input: $input) {\n    author {\n      id\n      authorName\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f3c197bc8233dc1a8cecd3d760e3cc7c';
export default node;
