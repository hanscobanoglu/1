/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateBookInput = {
    bookName: string;
    authorId?: string | null | undefined;
    categoryId?: string | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type CreateBookMutationVariables = {
    input: CreateBookInput;
};
export type CreateBookMutationResponse = {
    readonly createBook: {
        readonly book: {
            readonly id: unknown;
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
    } | null;
};
export type CreateBookMutation = {
    readonly response: CreateBookMutationResponse;
    readonly variables: CreateBookMutationVariables;
};



/*
mutation CreateBookMutation(
  $input: CreateBookInput!
) {
  createBook(input: $input) {
    book {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateBookPayload",
    "kind": "LinkedField",
    "name": "createBook",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BookType",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateBookMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateBookMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2d93a019ae153479bc43157145bb2447",
    "id": null,
    "metadata": {},
    "name": "CreateBookMutation",
    "operationKind": "mutation",
    "text": "mutation CreateBookMutation(\n  $input: CreateBookInput!\n) {\n  createBook(input: $input) {\n    book {\n      id\n      bookName\n      category {\n        id\n        categoryName\n      }\n      author {\n        id\n        authorName\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '61f7dfa5da135333dbef22dd963349a1';
export default node;
