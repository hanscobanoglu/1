/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateBookInput = {
    id?: string | null | undefined;
    bookName?: string | null | undefined;
    authorId?: string | null | undefined;
    categoryId?: string | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type BookUpdateMutationVariables = {
    input: UpdateBookInput;
};
export type BookUpdateMutationResponse = {
    readonly updateBook: {
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
    } | null;
};
export type BookUpdateMutation = {
    readonly response: BookUpdateMutationResponse;
    readonly variables: BookUpdateMutationVariables;
};



/*
mutation BookUpdateMutation(
  $input: UpdateBookInput!
) {
  updateBook(input: $input) {
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
    "concreteType": "UpdateBookPayload",
    "kind": "LinkedField",
    "name": "updateBook",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5302e9dc63790ac4cbb8d0cb8b4b9d36",
    "id": null,
    "metadata": {},
    "name": "BookUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation BookUpdateMutation(\n  $input: UpdateBookInput!\n) {\n  updateBook(input: $input) {\n    book {\n      id\n      bookName\n      category {\n        id\n        categoryName\n      }\n      author {\n        id\n        authorName\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd837466051dd9de85795a47756afdd90';
export default node;
