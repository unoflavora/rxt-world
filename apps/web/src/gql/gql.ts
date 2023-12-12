/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query getTeamDescriptions {\n      AllTeams {\n        docs {\n          id\n          photo {\n            filename\n            url\n          }\n          description\n        }\n      }\n    }\n  ": types.GetTeamDescriptionsDocument,
    "\n    query GetAllNews {\n      allNews {\n        docs {\n          id\n          title\n          description\n          date\n          image {\n            id\n            filename\n            url\n          }\n          Url\n        }\n      }\n    }\n  ": types.GetAllNewsDocument,
    "\n  query getAllTeamMembers {\n    Members {\n      docs {\n        id\n        name\n        title\n        description\n        socials {\n          email\n          facebook\n          linkedin\n          twitter\n        }\n        image {\n          filename\n          url\n          id\n        }\n        obj {\n          url\n        }\n        mat {\n          url\n        }\n      }\n    }\n  }\n": types.GetAllTeamMembersDocument,
    "\n  query getTeamDescriptions {\n    AllTeams {\n      docs {\n        id\n        photo {\n          filename\n          url\n        }\n        description\n      }\n    }\n  }\n": types.GetTeamDescriptionsDocument,
    "\n  query getHomeVideo {\n    HomeVideos {\n      docs {\n        video {\n          url\n          filename\n          id\n        }\n      }\n    }\n  }\n": types.GetHomeVideoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTeamDescriptions {\n      AllTeams {\n        docs {\n          id\n          photo {\n            filename\n            url\n          }\n          description\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getTeamDescriptions {\n      AllTeams {\n        docs {\n          id\n          photo {\n            filename\n            url\n          }\n          description\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetAllNews {\n      allNews {\n        docs {\n          id\n          title\n          description\n          date\n          image {\n            id\n            filename\n            url\n          }\n          Url\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GetAllNews {\n      allNews {\n        docs {\n          id\n          title\n          description\n          date\n          image {\n            id\n            filename\n            url\n          }\n          Url\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllTeamMembers {\n    Members {\n      docs {\n        id\n        name\n        title\n        description\n        socials {\n          email\n          facebook\n          linkedin\n          twitter\n        }\n        image {\n          filename\n          url\n          id\n        }\n        obj {\n          url\n        }\n        mat {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllTeamMembers {\n    Members {\n      docs {\n        id\n        name\n        title\n        description\n        socials {\n          email\n          facebook\n          linkedin\n          twitter\n        }\n        image {\n          filename\n          url\n          id\n        }\n        obj {\n          url\n        }\n        mat {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTeamDescriptions {\n    AllTeams {\n      docs {\n        id\n        photo {\n          filename\n          url\n        }\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTeamDescriptions {\n    AllTeams {\n      docs {\n        id\n        photo {\n          filename\n          url\n        }\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getHomeVideo {\n    HomeVideos {\n      docs {\n        video {\n          url\n          filename\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomeVideo {\n    HomeVideos {\n      docs {\n        video {\n          url\n          filename\n          id\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;