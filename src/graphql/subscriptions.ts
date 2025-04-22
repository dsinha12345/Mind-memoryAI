/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateInstitution = /* GraphQL */ `subscription OnCreateInstitution(
  $filter: ModelSubscriptionInstitutionFilterInput
) {
  onCreateInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInstitutionSubscriptionVariables,
  APITypes.OnCreateInstitutionSubscription
>;
export const onUpdateInstitution = /* GraphQL */ `subscription OnUpdateInstitution(
  $filter: ModelSubscriptionInstitutionFilterInput
) {
  onUpdateInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInstitutionSubscriptionVariables,
  APITypes.OnUpdateInstitutionSubscription
>;
export const onDeleteInstitution = /* GraphQL */ `subscription OnDeleteInstitution(
  $filter: ModelSubscriptionInstitutionFilterInput
) {
  onDeleteInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInstitutionSubscriptionVariables,
  APITypes.OnDeleteInstitutionSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onCreateMaterial = /* GraphQL */ `subscription OnCreateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
  onCreateMaterial(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMaterialSubscriptionVariables,
  APITypes.OnCreateMaterialSubscription
>;
export const onUpdateMaterial = /* GraphQL */ `subscription OnUpdateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
  onUpdateMaterial(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMaterialSubscriptionVariables,
  APITypes.OnUpdateMaterialSubscription
>;
export const onDeleteMaterial = /* GraphQL */ `subscription OnDeleteMaterial($filter: ModelSubscriptionMaterialFilterInput) {
  onDeleteMaterial(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMaterialSubscriptionVariables,
  APITypes.OnDeleteMaterialSubscription
>;
export const onCreateEnrollment = /* GraphQL */ `subscription OnCreateEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
  $userID: String
) {
  onCreateEnrollment(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEnrollmentSubscriptionVariables,
  APITypes.OnCreateEnrollmentSubscription
>;
export const onUpdateEnrollment = /* GraphQL */ `subscription OnUpdateEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
  $userID: String
) {
  onUpdateEnrollment(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEnrollmentSubscriptionVariables,
  APITypes.OnUpdateEnrollmentSubscription
>;
export const onDeleteEnrollment = /* GraphQL */ `subscription OnDeleteEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
  $userID: String
) {
  onDeleteEnrollment(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEnrollmentSubscriptionVariables,
  APITypes.OnDeleteEnrollmentSubscription
>;
