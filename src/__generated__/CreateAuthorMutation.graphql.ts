/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateAuthorInput = {
    authorName: string;
    clientMutationId?: string | null | undefined;
};
export type CreateAuthorMutationVariables = {
    input: CreateAuthorInput;
};
export type CreateAuthorMutationResponse = {
    readonly createAuthor: {
        readonly author: {
            readonly id: unknown;
            readonly authorName: string;
            readonly bookAuthor: ReadonlyArray<{
                readonly id: unknown;
            }>;
        } | null;
    } | null;
};
export type CreateAuthorMutation = {
    readonly response: CreateAuthorMutationResponse;
    readonly variables: CreateAuthorMutationVariables;
};



/*
mutation CreateAuthorMutation(
  $input: CreateAuthorInput!
) {
  createAuthor(input: $input) {
    author {
      id
      authorName
      bookAuthor {
        id
      }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateAuthorPayload",
    "kind": "LinkedField",
    "name": "createAuthor",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthorType",
        "kind": "LinkedField",
        "name": "author",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "authorName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BookType",
            "kind": "LinkedField",
            "name": "bookAuthor",
            "plural": true,
            "selections": [
              (v1/*: any*/)
            ],
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
    "name": "CreateAuthorMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateAuthorMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "635b713810d6a8b833b7da2243389b38",
    "id": null,
    "metadata": {},
    "name": "CreateAuthorMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAuthorMutation(\n  $input: CreateAuthorInput!\n) {\n  createAuthor(input: $input) {\n    author {\n      id\n      authorName\n      bookAuthor {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '451c2297f0e08cf057965cf0b903e5aa';
export default node;
