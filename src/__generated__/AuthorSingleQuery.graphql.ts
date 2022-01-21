/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AuthorSingleQueryVariables = {
    id: string;
};
export type AuthorSingleQueryResponse = {
    readonly author: {
        readonly id: string;
        readonly authorName: string;
    } | null;
};
export type AuthorSingleQuery = {
    readonly response: AuthorSingleQueryResponse;
    readonly variables: AuthorSingleQueryVariables;
};



/*
query AuthorSingleQuery(
  $id: ID!
) {
  author(id: $id) {
    id
    authorName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorSingleQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorSingleQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "98f43b172a9ebe3dff1de56687588bbd",
    "id": null,
    "metadata": {},
    "name": "AuthorSingleQuery",
    "operationKind": "query",
    "text": "query AuthorSingleQuery(\n  $id: ID!\n) {\n  author(id: $id) {\n    id\n    authorName\n  }\n}\n"
  }
};
})();
(node as any).hash = '76e361daa9dfdb7a6799bddd6e1dab44';
export default node;
