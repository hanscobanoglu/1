/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CategoryListQueryVariables = {};
export type CategoryListQueryResponse = {
    readonly allCategories: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly categoryName: string;
            } | null;
        } | null>;
    } | null;
};
export type CategoryListQuery = {
    readonly response: CategoryListQueryResponse;
    readonly variables: CategoryListQueryVariables;
};



/*
query CategoryListQuery {
  allCategories {
    edges {
      node {
        id
        categoryName
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CategoryNodeConnection",
    "kind": "LinkedField",
    "name": "allCategories",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CategoryNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CategoryNode",
            "kind": "LinkedField",
            "name": "node",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CategoryListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d35c4c0dbe59bcdcbfc74799484b1459",
    "id": null,
    "metadata": {},
    "name": "CategoryListQuery",
    "operationKind": "query",
    "text": "query CategoryListQuery {\n  allCategories {\n    edges {\n      node {\n        id\n        categoryName\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1450f372b2a2bbb438f4a088c201d6a8';
export default node;
