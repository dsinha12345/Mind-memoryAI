/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMemory = /* GraphQL */ `query GetMemory($id: ID!) {
  getMemory(id: $id) {
    id
    title
    content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMemoryQueryVariables, APITypes.GetMemoryQuery>;
export const listMemories = /* GraphQL */ `query ListMemories(
  $filter: ModelMemoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMemoriesQueryVariables,
  APITypes.ListMemoriesQuery
>;
