/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteCategoryInput = {
    id: string;
    clientMutationId?: string | null | undefined;
};
export type CategoryDeleteMutationVariables = {
    input: DeleteCategoryInput;
};
export type CategoryDeleteMutationResponse = {
    readonly deleteCategory: {
        readonly deletedCategoryId: string;
    } | null;
};
export type CategoryDeleteMutation = {
    readonly response: CategoryDeleteMutationResponse;
    readonly variables: CategoryDeleteMutationVariables;
};



/*
mutation CategoryDeleteMutation(
  $input: DeleteCategoryInput!
) {
  deleteCategory(input: $input) {
    deletedCategoryId
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
    "concreteType": "DeleteCategoryPayload",
    "kind": "LinkedField",
    "name": "deleteCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedCategoryId",
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
    "name": "CategoryDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategoryDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a97a22a2130bae7683aa685b51fb46cc",
    "id": null,
    "metadata": {},
    "name": "CategoryDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryDeleteMutation(\n  $input: DeleteCategoryInput!\n) {\n  deleteCategory(input: $input) {\n    deletedCategoryId\n  }\n}\n"
  }
};
})();
(node as any).hash = '8e2b4f41826edb068a2435d1c92c5498';
export default node;
