/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type BookListQueryVariables = {};
export type BookListQueryResponse = {
    readonly allBooks: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly bookName: string;
                readonly category: {
                    readonly id: unknown;
                    readonly categoryName: string;
                } | null;
                readonly author: {
                    readonly id: unknown;
                    readonly authorName: string;
                } | null;
            } | null;
        } | null>;
    } | null;
};
export type BookListQuery = {
    readonly response: BookListQueryResponse;
    readonly variables: BookListQueryVariables;
};



/*
query BookListQuery {
  allBooks {
    edges {
      node {
        id
        bookName
        category {
          id
          categoryName
        }
        author {
          id
          authorName
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
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
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bookName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CategoryType",
                "kind": "LinkedField",
                "name": "category",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "categoryName",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AuthorType",
                "kind": "LinkedField",
                "name": "author",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BookListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BookListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2a69144a82eef957fa60f88e13bdfedd",
    "id": null,
    "metadata": {},
    "name": "BookListQuery",
    "operationKind": "query",
    "text": "query BookListQuery {\n  allBooks {\n    edges {\n      node {\n        id\n        bookName\n        category {\n          id\n          categoryName\n        }\n        author {\n          id\n          authorName\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fca91bd5bd3f80c3c7c61916b60d8c77';
export default node;
