/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type BookSingleQueryVariables = {
    id: string;
};
export type BookSingleQueryResponse = {
    readonly book: {
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
};
export type BookSingleQuery = {
    readonly response: BookSingleQueryResponse;
    readonly variables: BookSingleQueryVariables;
};



/*
query BookSingleQuery(
  $id: ID!
) {
  book(id: $id) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "BookNode",
    "kind": "LinkedField",
    "name": "book",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
          (v1/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookSingleQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookSingleQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "27a9a03af1b86b7786ff2b5759d082ee",
    "id": null,
    "metadata": {},
    "name": "BookSingleQuery",
    "operationKind": "query",
    "text": "query BookSingleQuery(\n  $id: ID!\n) {\n  book(id: $id) {\n    id\n    bookName\n    category {\n      id\n      categoryName\n    }\n    author {\n      id\n      authorName\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cd21d497e285a4b0941364e3703f2fb3';
export default node;
