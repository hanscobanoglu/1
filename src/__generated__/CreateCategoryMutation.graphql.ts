/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateCategoryInput = {
    categoryName: string;
    clientMutationId?: string | null | undefined;
};
export type CreateCategoryMutationVariables = {
    input: CreateCategoryInput;
};
export type CreateCategoryMutationResponse = {
    readonly createCategory: {
        readonly category: {
            readonly id: unknown;
            readonly categoryName: string;
        } | null;
    } | null;
};
export type CreateCategoryMutation = {
    readonly response: CreateCategoryMutationResponse;
    readonly variables: CreateCategoryMutationVariables;
};



/*
mutation CreateCategoryMutation(
  $input: CreateCategoryInput!
) {
  createCategory(input: $input) {
    category {
      id
      categoryName
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
    "concreteType": "CreateCategoryPayload",
    "kind": "LinkedField",
    "name": "createCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CategoryType",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCategoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCategoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cac551c37d69adfe104519c205f38074",
    "id": null,
    "metadata": {},
    "name": "CreateCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCategoryMutation(\n  $input: CreateCategoryInput!\n) {\n  createCategory(input: $input) {\n    category {\n      id\n      categoryName\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '078782536fb0f97bb2f6368190d04376';
export default node;
