/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AuthorListQueryVariables = {};
export type AuthorListQueryResponse = {
    readonly allAuthor: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly authorName: string;
            } | null;
        } | null>;
    } | null;
};
export type AuthorListQuery = {
    readonly response: AuthorListQueryResponse;
    readonly variables: AuthorListQueryVariables;
};



/*
query AuthorListQuery {
  allAuthor {
    edges {
      node {
        id
        authorName
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
    "concreteType": "AuthorNodeConnection",
    "kind": "LinkedField",
    "name": "allAuthor",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthorNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AuthorNode",
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
                "name": "authorName",
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
    "name": "AuthorListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthorListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3faf7990f386e9dbc7aec0e267adaac1",
    "id": null,
    "metadata": {},
    "name": "AuthorListQuery",
    "operationKind": "query",
    "text": "query AuthorListQuery {\n  allAuthor {\n    edges {\n      node {\n        id\n        authorName\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5a17732b66967bbf9bf01416b1c7ced1';
export default node;
