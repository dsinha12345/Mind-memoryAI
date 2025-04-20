/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMemory = /* GraphQL */ `mutation CreateMemory(
  $input: CreateMemoryInput!
  $condition: ModelMemoryConditionInput
) {
  createMemory(input: $input, condition: $condition) {
    id
    title
    content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMemoryMutationVariables,
  APITypes.CreateMemoryMutation
>;
export const updateMemory = /* GraphQL */ `mutation UpdateMemory(
  $input: UpdateMemoryInput!
  $condition: ModelMemoryConditionInput
) {
  updateMemory(input: $input, condition: $condition) {
    id
    title
    content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMemoryMutationVariables,
  APITypes.UpdateMemoryMutation
>;
export const deleteMemory = /* GraphQL */ `mutation DeleteMemory(
  $input: DeleteMemoryInput!
  $condition: ModelMemoryConditionInput
) {
  deleteMemory(input: $input, condition: $condition) {
    id
    title
    content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMemoryMutationVariables,
  APITypes.DeleteMemoryMutation
>;
