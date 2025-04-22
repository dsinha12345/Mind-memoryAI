/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInstitution = /* GraphQL */ `query GetInstitution($id: ID!) {
  getInstitution(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInstitutionQueryVariables,
  APITypes.GetInstitutionQuery
>;
export const listInstitutions = /* GraphQL */ `query ListInstitutions(
  $filter: ModelInstitutionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstitutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstitutionsQueryVariables,
  APITypes.ListInstitutionsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const userByUsername = /* GraphQL */ `query UserByUsername(
  $username: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  userByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserByUsernameQueryVariables,
  APITypes.UserByUsernameQuery
>;
export const usersByInstitution = /* GraphQL */ `query UsersByInstitution(
  $institutionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByInstitution(
    institutionID: $institutionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByInstitutionQueryVariables,
  APITypes.UsersByInstitutionQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const coursesByInstitution = /* GraphQL */ `query CoursesByInstitution(
  $institutionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesByInstitution(
    institutionID: $institutionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesByInstitutionQueryVariables,
  APITypes.CoursesByInstitutionQuery
>;
export const coursesByInstructor = /* GraphQL */ `query CoursesByInstructor(
  $instructorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesByInstructor(
    instructorID: $instructorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      institutionID
      instructorID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesByInstructorQueryVariables,
  APITypes.CoursesByInstructorQuery
>;
export const getMaterial = /* GraphQL */ `query GetMaterial($id: ID!) {
  getMaterial(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMaterialQueryVariables,
  APITypes.GetMaterialQuery
>;
export const listMaterials = /* GraphQL */ `query ListMaterials(
  $filter: ModelMaterialFilterInput
  $limit: Int
  $nextToken: String
) {
  listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      url
      courseID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMaterialsQueryVariables,
  APITypes.ListMaterialsQuery
>;
export const materialsByCourse = /* GraphQL */ `query MaterialsByCourse(
  $courseID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMaterialFilterInput
  $limit: Int
  $nextToken: String
) {
  materialsByCourse(
    courseID: $courseID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      url
      courseID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MaterialsByCourseQueryVariables,
  APITypes.MaterialsByCourseQuery
>;
export const getEnrollment = /* GraphQL */ `query GetEnrollment($id: ID!) {
  getEnrollment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEnrollmentQueryVariables,
  APITypes.GetEnrollmentQuery
>;
export const listEnrollments = /* GraphQL */ `query ListEnrollments(
  $filter: ModelEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnrollments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      courseID
      enrollmentDate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEnrollmentsQueryVariables,
  APITypes.ListEnrollmentsQuery
>;
export const enrollmentsByUser = /* GraphQL */ `query EnrollmentsByUser(
  $userID: ID!
  $courseID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  enrollmentsByUser(
    userID: $userID
    courseID: $courseID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      courseID
      enrollmentDate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EnrollmentsByUserQueryVariables,
  APITypes.EnrollmentsByUserQuery
>;
export const enrollmentsByCourse = /* GraphQL */ `query EnrollmentsByCourse(
  $courseID: ID!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  enrollmentsByCourse(
    courseID: $courseID
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      courseID
      enrollmentDate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EnrollmentsByCourseQueryVariables,
  APITypes.EnrollmentsByCourseQuery
>;
