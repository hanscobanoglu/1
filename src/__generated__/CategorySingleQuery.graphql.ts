/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CategorySingleQueryVariables = {
    id: string;
};
export type CategorySingleQueryResponse = {
    readonly category: {
        readonly id: string;
        readonly categoryName: string;
    } | null;
};
export type CategorySingleQuery = {
    readonly response: CategorySingleQueryResponse;
    readonly variables: CategorySingleQueryVariables;
};



/*
query CategorySingleQuery(
  $id: ID!
) {
  category(id: $id) {
    id
    categoryName
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
    "concreteType": "CategoryNode",
    "kind": "LinkedField",
    "name": "category",
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
        "name": "categoryName",
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
    "name": "CategorySingleQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategorySingleQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b181e2979d1591fdba1965cb225a74c2",
    "id": null,
    "metadata": {},
    "name": "CategorySingleQuery",
    "operationKind": "query",
    "text": "query CategorySingleQuery(\n  $id: ID!\n) {\n  category(id: $id) {\n    id\n    categoryName\n  }\n}\n"
  }
};
})();
(node as any).hash = '0a65af5aa5a1cd4bb3cc2c854147b4b7';
export default node;
