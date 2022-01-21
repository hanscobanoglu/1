/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateCategoryInput = {
    id?: string | null | undefined;
    categoryName?: string | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type CategoryUpdateMutationVariables = {
    input: UpdateCategoryInput;
};
export type CategoryUpdateMutationResponse = {
    readonly updateCategory: {
        readonly category: {
            readonly id: string;
            readonly categoryName: string;
        } | null;
    } | null;
};
export type CategoryUpdateMutation = {
    readonly response: CategoryUpdateMutationResponse;
    readonly variables: CategoryUpdateMutationVariables;
};



/*
mutation CategoryUpdateMutation(
  $input: UpdateCategoryInput!
) {
  updateCategory(input: $input) {
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
    "concreteType": "UpdateCategoryPayload",
    "kind": "LinkedField",
    "name": "updateCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategoryUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "00071597ff15ec8781d309d1212253ad",
    "id": null,
    "metadata": {},
    "name": "CategoryUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryUpdateMutation(\n  $input: UpdateCategoryInput!\n) {\n  updateCategory(input: $input) {\n    category {\n      id\n      categoryName\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '08a6e1e027032aa2b3a6bb9e9fcd0a72';
export default node;
