/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInstitutionInput = {
  id?: string | null,
  name: string,
  address?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelInstitutionConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInstitutionConditionInput | null > | null,
  or?: Array< ModelInstitutionConditionInput | null > | null,
  not?: ModelInstitutionConditionInput | null,
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

export type Institution = {
  __typename: "Institution",
  id: string,
  name: string,
  address?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  users?: ModelUserConnection | null,
  courses?: ModelCourseConnection | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  name: string,
  email: string,
  role: UserRole,
  institutionID: string,
  institution?: Institution | null,
  dateOfBirth?: string | null,
  location?: string | null,
  bio?: string | null,
  coursesTaught?: ModelCourseConnection | null,
  enrollments?: ModelEnrollmentConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export enum UserRole {
  INSTRUCTOR = "INSTRUCTOR",
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
}


export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  description?: string | null,
  institutionID: string,
  institution?: Institution | null,
  instructorID: string,
  instructor?: User | null,
  materials?: ModelMaterialConnection | null,
  enrollments?: ModelEnrollmentConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMaterialConnection = {
  __typename: "ModelMaterialConnection",
  items:  Array<Material | null >,
  nextToken?: string | null,
};

export type Material = {
  __typename: "Material",
  id: string,
  name: string,
  description?: string | null,
  url: string,
  courseID: string,
  course?: Course | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelEnrollmentConnection = {
  __typename: "ModelEnrollmentConnection",
  items:  Array<Enrollment | null >,
  nextToken?: string | null,
};

export type Enrollment = {
  __typename: "Enrollment",
  id: string,
  userID: string,
  courseID: string,
  user: User,
  course: Course,
  enrollmentDate: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateInstitutionInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteInstitutionInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  name: string,
  email: string,
  role: UserRole,
  institutionID: string,
  dateOfBirth?: string | null,
  location?: string | null,
  bio?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  institutionID?: ModelIDInput | null,
  dateOfBirth?: ModelStringInput | null,
  location?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
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

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  role?: UserRole | null,
  institutionID?: string | null,
  dateOfBirth?: string | null,
  location?: string | null,
  bio?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  institutionID: string,
  instructorID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  institutionID?: ModelIDInput | null,
  instructorID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  institutionID?: string | null,
  instructorID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateMaterialInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  url: string,
  courseID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMaterialConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMaterialConditionInput | null > | null,
  or?: Array< ModelMaterialConditionInput | null > | null,
  not?: ModelMaterialConditionInput | null,
};

export type UpdateMaterialInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  url?: string | null,
  courseID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMaterialInput = {
  id: string,
};

export type CreateEnrollmentInput = {
  id?: string | null,
  userID: string,
  courseID: string,
  enrollmentDate: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelEnrollmentConditionInput = {
  userID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  enrollmentDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEnrollmentConditionInput | null > | null,
  or?: Array< ModelEnrollmentConditionInput | null > | null,
  not?: ModelEnrollmentConditionInput | null,
};

export type UpdateEnrollmentInput = {
  id: string,
  userID?: string | null,
  courseID?: string | null,
  enrollmentDate?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteEnrollmentInput = {
  id: string,
};

export type ModelInstitutionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInstitutionFilterInput | null > | null,
  or?: Array< ModelInstitutionFilterInput | null > | null,
  not?: ModelInstitutionFilterInput | null,
};

export type ModelInstitutionConnection = {
  __typename: "ModelInstitutionConnection",
  items:  Array<Institution | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  institutionID?: ModelIDInput | null,
  dateOfBirth?: ModelStringInput | null,
  location?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  institutionID?: ModelIDInput | null,
  instructorID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelMaterialFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMaterialFilterInput | null > | null,
  or?: Array< ModelMaterialFilterInput | null > | null,
  not?: ModelMaterialFilterInput | null,
};

export type ModelEnrollmentFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  enrollmentDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEnrollmentFilterInput | null > | null,
  or?: Array< ModelEnrollmentFilterInput | null > | null,
  not?: ModelEnrollmentFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionInstitutionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstitutionFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstitutionFilterInput | null > | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  institutionID?: ModelSubscriptionIDInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  institutionID?: ModelSubscriptionIDInput | null,
  instructorID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionMaterialFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMaterialFilterInput | null > | null,
  or?: Array< ModelSubscriptionMaterialFilterInput | null > | null,
};

export type ModelSubscriptionEnrollmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  enrollmentDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  userID?: ModelStringInput | null,
};

export type CreateInstitutionMutationVariables = {
  input: CreateInstitutionInput,
  condition?: ModelInstitutionConditionInput | null,
};

export type CreateInstitutionMutation = {
  createInstitution?:  {
    __typename: "Institution",
    id: string,
    name: string,
    address?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateInstitutionMutationVariables = {
  input: UpdateInstitutionInput,
  condition?: ModelInstitutionConditionInput | null,
};

export type UpdateInstitutionMutation = {
  updateInstitution?:  {
    __typename: "Institution",
    id: string,
    name: string,
    address?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteInstitutionMutationVariables = {
  input: DeleteInstitutionInput,
  condition?: ModelInstitutionConditionInput | null,
};

export type DeleteInstitutionMutation = {
  deleteInstitution?:  {
    __typename: "Institution",
    id: string,
    name: string,
    address?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    role: UserRole,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    dateOfBirth?: string | null,
    location?: string | null,
    bio?: string | null,
    coursesTaught?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    role: UserRole,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    dateOfBirth?: string | null,
    location?: string | null,
    bio?: string | null,
    coursesTaught?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    role: UserRole,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    dateOfBirth?: string | null,
    location?: string | null,
    bio?: string | null,
    coursesTaught?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    instructorID: string,
    instructor?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    instructorID: string,
    instructor?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    instructorID: string,
    instructor?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateMaterialMutationVariables = {
  input: CreateMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type CreateMaterialMutation = {
  createMaterial?:  {
    __typename: "Material",
    id: string,
    name: string,
    description?: string | null,
    url: string,
    courseID: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateMaterialMutationVariables = {
  input: UpdateMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type UpdateMaterialMutation = {
  updateMaterial?:  {
    __typename: "Material",
    id: string,
    name: string,
    description?: string | null,
    url: string,
    courseID: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteMaterialMutationVariables = {
  input: DeleteMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type DeleteMaterialMutation = {
  deleteMaterial?:  {
    __typename: "Material",
    id: string,
    name: string,
    description?: string | null,
    url: string,
    courseID: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateEnrollmentMutationVariables = {
  input: CreateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type CreateEnrollmentMutation = {
  createEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    enrollmentDate: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateEnrollmentMutationVariables = {
  input: UpdateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type UpdateEnrollmentMutation = {
  updateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    enrollmentDate: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteEnrollmentMutationVariables = {
  input: DeleteEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type DeleteEnrollmentMutation = {
  deleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    enrollmentDate: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetInstitutionQueryVariables = {
  id: string,
};

export type GetInstitutionQuery = {
  getInstitution?:  {
    __typename: "Institution",
    id: string,
    name: string,
    address?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListInstitutionsQueryVariables = {
  filter?: ModelInstitutionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstitutionsQuery = {
  listInstitutions?:  {
    __typename: "ModelInstitutionConnection",
    items:  Array< {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    role: UserRole,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    dateOfBirth?: string | null,
    location?: string | null,
    bio?: string | null,
    coursesTaught?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByUsernameQuery = {
  userByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByInstitutionQueryVariables = {
  institutionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByInstitutionQuery = {
  usersByInstitution?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    instructorID: string,
    instructor?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoursesByInstitutionQueryVariables = {
  institutionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoursesByInstitutionQuery = {
  coursesByInstitution?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoursesByInstructorQueryVariables = {
  instructorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoursesByInstructorQuery = {
  coursesByInstructor?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMaterialQueryVariables = {
  id: string,
};

export type GetMaterialQuery = {
  getMaterial?:  {
    __typename: "Material",
    id: string,
    name: string,
    description?: string | null,
    url: string,
    courseID: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListMaterialsQueryVariables = {
  filter?: ModelMaterialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMaterialsQuery = {
  listMaterials?:  {
    __typename: "ModelMaterialConnection",
    items:  Array< {
      __typename: "Material",
      id: string,
      name: string,
      description?: string | null,
      url: string,
      courseID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MaterialsByCourseQueryVariables = {
  courseID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMaterialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MaterialsByCourseQuery = {
  materialsByCourse?:  {
    __typename: "ModelMaterialConnection",
    items:  Array< {
      __typename: "Material",
      id: string,
      name: string,
      description?: string | null,
      url: string,
      courseID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnrollmentQueryVariables = {
  id: string,
};

export type GetEnrollmentQuery = {
  getEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    enrollmentDate: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListEnrollmentsQueryVariables = {
  filter?: ModelEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrollmentsQuery = {
  listEnrollments?:  {
    __typename: "ModelEnrollmentConnection",
    items:  Array< {
      __typename: "Enrollment",
      id: string,
      userID: string,
      courseID: string,
      enrollmentDate: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EnrollmentsByUserQueryVariables = {
  userID: string,
  courseID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EnrollmentsByUserQuery = {
  enrollmentsByUser?:  {
    __typename: "ModelEnrollmentConnection",
    items:  Array< {
      __typename: "Enrollment",
      id: string,
      userID: string,
      courseID: string,
      enrollmentDate: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EnrollmentsByCourseQueryVariables = {
  courseID: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EnrollmentsByCourseQuery = {
  enrollmentsByCourse?:  {
    __typename: "ModelEnrollmentConnection",
    items:  Array< {
      __typename: "Enrollment",
      id: string,
      userID: string,
      courseID: string,
      enrollmentDate: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnCreateInstitutionSubscription = {
  onCreateInstitution?:  {
    __typename: "Institution",
    id: string,
    name: string,
    address?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnUpdateInstitutionSubscription = {
  onUpdateInstitution?:  {
    __typename: "Institution",
    id: string,
    name: string,
    address?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnDeleteInstitutionSubscription = {
  onDeleteInstitution?:  {
    __typename: "Institution",
    id: string,
    name: string,
    address?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    role: UserRole,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    dateOfBirth?: string | null,
    location?: string | null,
    bio?: string | null,
    coursesTaught?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    role: UserRole,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    dateOfBirth?: string | null,
    location?: string | null,
    bio?: string | null,
    coursesTaught?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    role: UserRole,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    dateOfBirth?: string | null,
    location?: string | null,
    bio?: string | null,
    coursesTaught?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    instructorID: string,
    instructor?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    instructorID: string,
    instructor?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    institutionID: string,
    institution?:  {
      __typename: "Institution",
      id: string,
      name: string,
      address?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    instructorID: string,
    instructor?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateMaterialSubscriptionVariables = {
  filter?: ModelSubscriptionMaterialFilterInput | null,
};

export type OnCreateMaterialSubscription = {
  onCreateMaterial?:  {
    __typename: "Material",
    id: string,
    name: string,
    description?: string | null,
    url: string,
    courseID: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateMaterialSubscriptionVariables = {
  filter?: ModelSubscriptionMaterialFilterInput | null,
};

export type OnUpdateMaterialSubscription = {
  onUpdateMaterial?:  {
    __typename: "Material",
    id: string,
    name: string,
    description?: string | null,
    url: string,
    courseID: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteMaterialSubscriptionVariables = {
  filter?: ModelSubscriptionMaterialFilterInput | null,
};

export type OnDeleteMaterialSubscription = {
  onDeleteMaterial?:  {
    __typename: "Material",
    id: string,
    name: string,
    description?: string | null,
    url: string,
    courseID: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  userID?: string | null,
};

export type OnCreateEnrollmentSubscription = {
  onCreateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    enrollmentDate: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  userID?: string | null,
};

export type OnUpdateEnrollmentSubscription = {
  onUpdateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    enrollmentDate: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  userID?: string | null,
};

export type OnDeleteEnrollmentSubscription = {
  onDeleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      role: UserRole,
      institutionID: string,
      dateOfBirth?: string | null,
      location?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      institutionID: string,
      instructorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    enrollmentDate: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
