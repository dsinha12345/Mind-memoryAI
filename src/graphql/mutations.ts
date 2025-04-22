/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createInstitution = /* GraphQL */ `mutation CreateInstitution(
  $input: CreateInstitutionInput!
  $condition: ModelInstitutionConditionInput
) {
  createInstitution(input: $input, condition: $condition) {
    id
    name
    address
    createdAt
    updatedAt
    users {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInstitutionMutationVariables,
  APITypes.CreateInstitutionMutation
>;
export const updateInstitution = /* GraphQL */ `mutation UpdateInstitution(
  $input: UpdateInstitutionInput!
  $condition: ModelInstitutionConditionInput
) {
  updateInstitution(input: $input, condition: $condition) {
    id
    name
    address
    createdAt
    updatedAt
    users {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInstitutionMutationVariables,
  APITypes.UpdateInstitutionMutation
>;
export const deleteInstitution = /* GraphQL */ `mutation DeleteInstitution(
  $input: DeleteInstitutionInput!
  $condition: ModelInstitutionConditionInput
) {
  deleteInstitution(input: $input, condition: $condition) {
    id
    name
    address
    createdAt
    updatedAt
    users {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInstitutionMutationVariables,
  APITypes.DeleteInstitutionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    name
    email
    role
    institutionID
    institution {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
    dateOfBirth
    location
    bio
    coursesTaught {
      nextToken
      __typename
    }
    enrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    name
    email
    role
    institutionID
    institution {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
    dateOfBirth
    location
    bio
    coursesTaught {
      nextToken
      __typename
    }
    enrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    name
    email
    role
    institutionID
    institution {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
    dateOfBirth
    location
    bio
    coursesTaught {
      nextToken
      __typename
    }
    enrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $input: CreateCourseInput!
  $condition: ModelCourseConditionInput
) {
  createCourse(input: $input, condition: $condition) {
    id
    name
    description
    institutionID
    institution {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
    instructorID
    instructor {
      id
      username
      name
      email
      role
      institutionID
      dateOfBirth
      location
      bio
      createdAt
      updatedAt
      owner
      __typename
    }
    materials {
      nextToken
      __typename
    }
    enrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $input: UpdateCourseInput!
  $condition: ModelCourseConditionInput
) {
  updateCourse(input: $input, condition: $condition) {
    id
    name
    description
    institutionID
    institution {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
    instructorID
    instructor {
      id
      username
      name
      email
      role
      institutionID
      dateOfBirth
      location
      bio
      createdAt
      updatedAt
      owner
      __typename
    }
    materials {
      nextToken
      __typename
    }
    enrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $input: DeleteCourseInput!
  $condition: ModelCourseConditionInput
) {
  deleteCourse(input: $input, condition: $condition) {
    id
    name
    description
    institutionID
    institution {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
    instructorID
    instructor {
      id
      username
      name
      email
      role
      institutionID
      dateOfBirth
      location
      bio
      createdAt
      updatedAt
      owner
      __typename
    }
    materials {
      nextToken
      __typename
    }
    enrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const createMaterial = /* GraphQL */ `mutation CreateMaterial(
  $input: CreateMaterialInput!
  $condition: ModelMaterialConditionInput
) {
  createMaterial(input: $input, condition: $condition) {
    id
    name
    description
    url
    courseID
    course {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMaterialMutationVariables,
  APITypes.CreateMaterialMutation
>;
export const updateMaterial = /* GraphQL */ `mutation UpdateMaterial(
  $input: UpdateMaterialInput!
  $condition: ModelMaterialConditionInput
) {
  updateMaterial(input: $input, condition: $condition) {
    id
    name
    description
    url
    courseID
    course {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMaterialMutationVariables,
  APITypes.UpdateMaterialMutation
>;
export const deleteMaterial = /* GraphQL */ `mutation DeleteMaterial(
  $input: DeleteMaterialInput!
  $condition: ModelMaterialConditionInput
) {
  deleteMaterial(input: $input, condition: $condition) {
    id
    name
    description
    url
    courseID
    course {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMaterialMutationVariables,
  APITypes.DeleteMaterialMutation
>;
export const createEnrollment = /* GraphQL */ `mutation CreateEnrollment(
  $input: CreateEnrollmentInput!
  $condition: ModelEnrollmentConditionInput
) {
  createEnrollment(input: $input, condition: $condition) {
    id
    userID
    courseID
    user {
      id
      username
      name
      email
      role
      institutionID
      dateOfBirth
      location
      bio
      createdAt
      updatedAt
      owner
      __typename
    }
    course {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    enrollmentDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEnrollmentMutationVariables,
  APITypes.CreateEnrollmentMutation
>;
export const updateEnrollment = /* GraphQL */ `mutation UpdateEnrollment(
  $input: UpdateEnrollmentInput!
  $condition: ModelEnrollmentConditionInput
) {
  updateEnrollment(input: $input, condition: $condition) {
    id
    userID
    courseID
    user {
      id
      username
      name
      email
      role
      institutionID
      dateOfBirth
      location
      bio
      createdAt
      updatedAt
      owner
      __typename
    }
    course {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    enrollmentDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEnrollmentMutationVariables,
  APITypes.UpdateEnrollmentMutation
>;
export const deleteEnrollment = /* GraphQL */ `mutation DeleteEnrollment(
  $input: DeleteEnrollmentInput!
  $condition: ModelEnrollmentConditionInput
) {
  deleteEnrollment(input: $input, condition: $condition) {
    id
    userID
    courseID
    user {
      id
      username
      name
      email
      role
      institutionID
      dateOfBirth
      location
      bio
      createdAt
      updatedAt
      owner
      __typename
    }
    course {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    enrollmentDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEnrollmentMutationVariables,
  APITypes.DeleteEnrollmentMutation
>;
