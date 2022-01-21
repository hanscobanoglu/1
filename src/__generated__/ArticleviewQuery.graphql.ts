/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ArticleviewQueryVariables = {};
export type ArticleviewQueryResponse = {
    readonly allBooks: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly bookName: string;
            } | null;
        } | null>;
    } | null;
};
export type ArticleviewQuery = {
    readonly response: ArticleviewQueryResponse;
    readonly variables: ArticleviewQueryVariables;
};



/*
query ArticleviewQuery {
  allBooks {
    edges {
      node {
        id
        bookName
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
    "concreteType": "BookNodeConnection",
    "kind": "LinkedField",
    "name": "allBooks",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BookNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BookNode",
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
                "name": "bookName",
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
    "name": "ArticleviewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArticleviewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "76d0b8d64b1aebf727dc2cd08760733c",
    "id": null,
    "metadata": {},
    "name": "ArticleviewQuery",
    "operationKind": "query",
    "text": "query ArticleviewQuery {\n  allBooks {\n    edges {\n      node {\n        id\n        bookName\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '25766a2ded81bdd72968cdfce75e8d78';
export default node;
