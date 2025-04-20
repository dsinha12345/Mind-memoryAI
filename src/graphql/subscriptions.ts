/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMemory = /* GraphQL */ `subscription OnCreateMemory($filter: ModelSubscriptionMemoryFilterInput) {
  onCreateMemory(filter: $filter) {
    id
    title
    content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMemorySubscriptionVariables,
  APITypes.OnCreateMemorySubscription
>;
export const onUpdateMemory = /* GraphQL */ `subscription OnUpdateMemory($filter: ModelSubscriptionMemoryFilterInput) {
  onUpdateMemory(filter: $filter) {
    id
    title
    content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMemorySubscriptionVariables,
  APITypes.OnUpdateMemorySubscription
>;
export const onDeleteMemory = /* GraphQL */ `subscription OnDeleteMemory($filter: ModelSubscriptionMemoryFilterInput) {
  onDeleteMemory(filter: $filter) {
    id
    title
    content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMemorySubscriptionVariables,
  APITypes.OnDeleteMemorySubscription
>;
