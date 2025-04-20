/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMemoryInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  createdAt?: string | null,
};

export type ModelMemoryConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMemoryConditionInput | null > | null,
  or?: Array< ModelMemoryConditionInput | null > | null,
  not?: ModelMemoryConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Memory = {
  __typename: "Memory",
  id: string,
  title: string,
  content?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateMemoryInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type DeleteMemoryInput = {
  id: string,
};

export type ModelMemoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMemoryFilterInput | null > | null,
  or?: Array< ModelMemoryFilterInput | null > | null,
  not?: ModelMemoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMemoryConnection = {
  __typename: "ModelMemoryConnection",
  items:  Array<Memory | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMemoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateMemoryMutationVariables = {
  input: CreateMemoryInput,
  condition?: ModelMemoryConditionInput | null,
};

export type CreateMemoryMutation = {
  createMemory?:  {
    __typename: "Memory",
    id: string,
    title: string,
    content?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateMemoryMutationVariables = {
  input: UpdateMemoryInput,
  condition?: ModelMemoryConditionInput | null,
};

export type UpdateMemoryMutation = {
  updateMemory?:  {
    __typename: "Memory",
    id: string,
    title: string,
    content?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteMemoryMutationVariables = {
  input: DeleteMemoryInput,
  condition?: ModelMemoryConditionInput | null,
};

export type DeleteMemoryMutation = {
  deleteMemory?:  {
    __typename: "Memory",
    id: string,
    title: string,
    content?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetMemoryQueryVariables = {
  id: string,
};

export type GetMemoryQuery = {
  getMemory?:  {
    __typename: "Memory",
    id: string,
    title: string,
    content?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListMemoriesQueryVariables = {
  filter?: ModelMemoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemoriesQuery = {
  listMemories?:  {
    __typename: "ModelMemoryConnection",
    items:  Array< {
      __typename: "Memory",
      id: string,
      title: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMemorySubscriptionVariables = {
  filter?: ModelSubscriptionMemoryFilterInput | null,
};

export type OnCreateMemorySubscription = {
  onCreateMemory?:  {
    __typename: "Memory",
    id: string,
    title: string,
    content?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemorySubscriptionVariables = {
  filter?: ModelSubscriptionMemoryFilterInput | null,
};

export type OnUpdateMemorySubscription = {
  onUpdateMemory?:  {
    __typename: "Memory",
    id: string,
    title: string,
    content?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemorySubscriptionVariables = {
  filter?: ModelSubscriptionMemoryFilterInput | null,
};

export type OnDeleteMemorySubscription = {
  onDeleteMemory?:  {
    __typename: "Memory",
    id: string,
    title: string,
    content?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};
