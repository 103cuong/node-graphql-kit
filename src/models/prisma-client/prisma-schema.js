module.exports = {
  // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  typeDefs:
    // Please don't change this file manually but run `prisma generate` to update it.
    // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

    /* GraphQL */ `
      type Account {
        id: UUID!
        username: String!
        password: String!
        role: Role!
        users(
          where: UserWhereInput
          orderBy: UserOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [User!]
        createdAt: DateTime!
        updatedAt: DateTime!
      }

      type AccountConnection {
        pageInfo: PageInfo!
        edges: [AccountEdge]!
        aggregate: AggregateAccount!
      }

      input AccountCreateInput {
        id: UUID
        username: String!
        password: String!
        role: Role
        users: UserCreateManyWithoutAccountInput
      }

      input AccountCreateOneWithoutUsersInput {
        create: AccountCreateWithoutUsersInput
        connect: AccountWhereUniqueInput
      }

      input AccountCreateWithoutUsersInput {
        id: UUID
        username: String!
        password: String!
        role: Role
      }

      type AccountEdge {
        node: Account!
        cursor: String!
      }

      enum AccountOrderByInput {
        id_ASC
        id_DESC
        username_ASC
        username_DESC
        password_ASC
        password_DESC
        role_ASC
        role_DESC
        createdAt_ASC
        createdAt_DESC
        updatedAt_ASC
        updatedAt_DESC
      }

      type AccountPreviousValues {
        id: UUID!
        username: String!
        password: String!
        role: Role!
        createdAt: DateTime!
        updatedAt: DateTime!
      }

      type AccountSubscriptionPayload {
        mutation: MutationType!
        node: Account
        updatedFields: [String!]
        previousValues: AccountPreviousValues
      }

      input AccountSubscriptionWhereInput {
        mutation_in: [MutationType!]
        updatedFields_contains: String
        updatedFields_contains_every: [String!]
        updatedFields_contains_some: [String!]
        node: AccountWhereInput
        AND: [AccountSubscriptionWhereInput!]
        OR: [AccountSubscriptionWhereInput!]
        NOT: [AccountSubscriptionWhereInput!]
      }

      input AccountUpdateInput {
        username: String
        password: String
        role: Role
        users: UserUpdateManyWithoutAccountInput
      }

      input AccountUpdateManyMutationInput {
        username: String
        password: String
        role: Role
      }

      input AccountUpdateOneRequiredWithoutUsersInput {
        create: AccountCreateWithoutUsersInput
        update: AccountUpdateWithoutUsersDataInput
        upsert: AccountUpsertWithoutUsersInput
        connect: AccountWhereUniqueInput
      }

      input AccountUpdateWithoutUsersDataInput {
        username: String
        password: String
        role: Role
      }

      input AccountUpsertWithoutUsersInput {
        update: AccountUpdateWithoutUsersDataInput!
        create: AccountCreateWithoutUsersInput!
      }

      input AccountWhereInput {
        id: UUID
        id_not: UUID
        id_in: [UUID!]
        id_not_in: [UUID!]
        id_lt: UUID
        id_lte: UUID
        id_gt: UUID
        id_gte: UUID
        id_contains: UUID
        id_not_contains: UUID
        id_starts_with: UUID
        id_not_starts_with: UUID
        id_ends_with: UUID
        id_not_ends_with: UUID
        username: String
        username_not: String
        username_in: [String!]
        username_not_in: [String!]
        username_lt: String
        username_lte: String
        username_gt: String
        username_gte: String
        username_contains: String
        username_not_contains: String
        username_starts_with: String
        username_not_starts_with: String
        username_ends_with: String
        username_not_ends_with: String
        password: String
        password_not: String
        password_in: [String!]
        password_not_in: [String!]
        password_lt: String
        password_lte: String
        password_gt: String
        password_gte: String
        password_contains: String
        password_not_contains: String
        password_starts_with: String
        password_not_starts_with: String
        password_ends_with: String
        password_not_ends_with: String
        role: Role
        role_not: Role
        role_in: [Role!]
        role_not_in: [Role!]
        users_every: UserWhereInput
        users_some: UserWhereInput
        users_none: UserWhereInput
        createdAt: DateTime
        createdAt_not: DateTime
        createdAt_in: [DateTime!]
        createdAt_not_in: [DateTime!]
        createdAt_lt: DateTime
        createdAt_lte: DateTime
        createdAt_gt: DateTime
        createdAt_gte: DateTime
        updatedAt: DateTime
        updatedAt_not: DateTime
        updatedAt_in: [DateTime!]
        updatedAt_not_in: [DateTime!]
        updatedAt_lt: DateTime
        updatedAt_lte: DateTime
        updatedAt_gt: DateTime
        updatedAt_gte: DateTime
        AND: [AccountWhereInput!]
        OR: [AccountWhereInput!]
        NOT: [AccountWhereInput!]
      }

      input AccountWhereUniqueInput {
        id: UUID
        username: String
      }

      type AggregateAccount {
        count: Int!
      }

      type AggregateUser {
        count: Int!
      }

      type BatchPayload {
        count: Long!
      }

      scalar DateTime

      scalar Long

      type Mutation {
        createAccount(data: AccountCreateInput!): Account!
        updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
        updateManyAccounts(
          data: AccountUpdateManyMutationInput!
          where: AccountWhereInput
        ): BatchPayload!
        upsertAccount(
          where: AccountWhereUniqueInput!
          create: AccountCreateInput!
          update: AccountUpdateInput!
        ): Account!
        deleteAccount(where: AccountWhereUniqueInput!): Account
        deleteManyAccounts(where: AccountWhereInput): BatchPayload!
        createUser(data: UserCreateInput!): User!
        updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
        updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
        upsertUser(
          where: UserWhereUniqueInput!
          create: UserCreateInput!
          update: UserUpdateInput!
        ): User!
        deleteUser(where: UserWhereUniqueInput!): User
        deleteManyUsers(where: UserWhereInput): BatchPayload!
      }

      enum MutationType {
        CREATED
        UPDATED
        DELETED
      }

      interface Node {
        id: ID!
      }

      type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
      }

      type Query {
        account(where: AccountWhereUniqueInput!): Account
        accounts(
          where: AccountWhereInput
          orderBy: AccountOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [Account]!
        accountsConnection(
          where: AccountWhereInput
          orderBy: AccountOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): AccountConnection!
        user(where: UserWhereUniqueInput!): User
        users(
          where: UserWhereInput
          orderBy: UserOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [User]!
        usersConnection(
          where: UserWhereInput
          orderBy: UserOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): UserConnection!
        node(id: ID!): Node
      }

      enum Role {
        ADMIN
        MANAGER
        STAFF
      }

      enum Sex {
        MALE
        FEMALE
      }

      type Subscription {
        account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
        user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
      }

      type User {
        id: UUID!
        email: String
        name: String!
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
        account: Account!
        createdAt: DateTime!
        updatedAt: DateTime!
      }

      type UserConnection {
        pageInfo: PageInfo!
        edges: [UserEdge]!
        aggregate: AggregateUser!
      }

      input UserCreateInput {
        id: UUID
        email: String
        name: String!
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
        account: AccountCreateOneWithoutUsersInput!
      }

      input UserCreateManyWithoutAccountInput {
        create: [UserCreateWithoutAccountInput!]
        connect: [UserWhereUniqueInput!]
      }

      input UserCreateWithoutAccountInput {
        id: UUID
        email: String
        name: String!
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
      }

      type UserEdge {
        node: User!
        cursor: String!
      }

      enum UserOrderByInput {
        id_ASC
        id_DESC
        email_ASC
        email_DESC
        name_ASC
        name_DESC
        phoneNumber_ASC
        phoneNumber_DESC
        address_ASC
        address_DESC
        dob_ASC
        dob_DESC
        sex_ASC
        sex_DESC
        createdAt_ASC
        createdAt_DESC
        updatedAt_ASC
        updatedAt_DESC
      }

      type UserPreviousValues {
        id: UUID!
        email: String
        name: String!
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
        createdAt: DateTime!
        updatedAt: DateTime!
      }

      input UserScalarWhereInput {
        id: UUID
        id_not: UUID
        id_in: [UUID!]
        id_not_in: [UUID!]
        id_lt: UUID
        id_lte: UUID
        id_gt: UUID
        id_gte: UUID
        id_contains: UUID
        id_not_contains: UUID
        id_starts_with: UUID
        id_not_starts_with: UUID
        id_ends_with: UUID
        id_not_ends_with: UUID
        email: String
        email_not: String
        email_in: [String!]
        email_not_in: [String!]
        email_lt: String
        email_lte: String
        email_gt: String
        email_gte: String
        email_contains: String
        email_not_contains: String
        email_starts_with: String
        email_not_starts_with: String
        email_ends_with: String
        email_not_ends_with: String
        name: String
        name_not: String
        name_in: [String!]
        name_not_in: [String!]
        name_lt: String
        name_lte: String
        name_gt: String
        name_gte: String
        name_contains: String
        name_not_contains: String
        name_starts_with: String
        name_not_starts_with: String
        name_ends_with: String
        name_not_ends_with: String
        phoneNumber: String
        phoneNumber_not: String
        phoneNumber_in: [String!]
        phoneNumber_not_in: [String!]
        phoneNumber_lt: String
        phoneNumber_lte: String
        phoneNumber_gt: String
        phoneNumber_gte: String
        phoneNumber_contains: String
        phoneNumber_not_contains: String
        phoneNumber_starts_with: String
        phoneNumber_not_starts_with: String
        phoneNumber_ends_with: String
        phoneNumber_not_ends_with: String
        address: String
        address_not: String
        address_in: [String!]
        address_not_in: [String!]
        address_lt: String
        address_lte: String
        address_gt: String
        address_gte: String
        address_contains: String
        address_not_contains: String
        address_starts_with: String
        address_not_starts_with: String
        address_ends_with: String
        address_not_ends_with: String
        dob: DateTime
        dob_not: DateTime
        dob_in: [DateTime!]
        dob_not_in: [DateTime!]
        dob_lt: DateTime
        dob_lte: DateTime
        dob_gt: DateTime
        dob_gte: DateTime
        sex: Sex
        sex_not: Sex
        sex_in: [Sex!]
        sex_not_in: [Sex!]
        createdAt: DateTime
        createdAt_not: DateTime
        createdAt_in: [DateTime!]
        createdAt_not_in: [DateTime!]
        createdAt_lt: DateTime
        createdAt_lte: DateTime
        createdAt_gt: DateTime
        createdAt_gte: DateTime
        updatedAt: DateTime
        updatedAt_not: DateTime
        updatedAt_in: [DateTime!]
        updatedAt_not_in: [DateTime!]
        updatedAt_lt: DateTime
        updatedAt_lte: DateTime
        updatedAt_gt: DateTime
        updatedAt_gte: DateTime
        AND: [UserScalarWhereInput!]
        OR: [UserScalarWhereInput!]
        NOT: [UserScalarWhereInput!]
      }

      type UserSubscriptionPayload {
        mutation: MutationType!
        node: User
        updatedFields: [String!]
        previousValues: UserPreviousValues
      }

      input UserSubscriptionWhereInput {
        mutation_in: [MutationType!]
        updatedFields_contains: String
        updatedFields_contains_every: [String!]
        updatedFields_contains_some: [String!]
        node: UserWhereInput
        AND: [UserSubscriptionWhereInput!]
        OR: [UserSubscriptionWhereInput!]
        NOT: [UserSubscriptionWhereInput!]
      }

      input UserUpdateInput {
        email: String
        name: String
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
        account: AccountUpdateOneRequiredWithoutUsersInput
      }

      input UserUpdateManyDataInput {
        email: String
        name: String
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
      }

      input UserUpdateManyMutationInput {
        email: String
        name: String
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
      }

      input UserUpdateManyWithoutAccountInput {
        create: [UserCreateWithoutAccountInput!]
        delete: [UserWhereUniqueInput!]
        connect: [UserWhereUniqueInput!]
        set: [UserWhereUniqueInput!]
        disconnect: [UserWhereUniqueInput!]
        update: [UserUpdateWithWhereUniqueWithoutAccountInput!]
        upsert: [UserUpsertWithWhereUniqueWithoutAccountInput!]
        deleteMany: [UserScalarWhereInput!]
        updateMany: [UserUpdateManyWithWhereNestedInput!]
      }

      input UserUpdateManyWithWhereNestedInput {
        where: UserScalarWhereInput!
        data: UserUpdateManyDataInput!
      }

      input UserUpdateWithoutAccountDataInput {
        email: String
        name: String
        phoneNumber: String
        address: String
        dob: DateTime
        sex: Sex
      }

      input UserUpdateWithWhereUniqueWithoutAccountInput {
        where: UserWhereUniqueInput!
        data: UserUpdateWithoutAccountDataInput!
      }

      input UserUpsertWithWhereUniqueWithoutAccountInput {
        where: UserWhereUniqueInput!
        update: UserUpdateWithoutAccountDataInput!
        create: UserCreateWithoutAccountInput!
      }

      input UserWhereInput {
        id: UUID
        id_not: UUID
        id_in: [UUID!]
        id_not_in: [UUID!]
        id_lt: UUID
        id_lte: UUID
        id_gt: UUID
        id_gte: UUID
        id_contains: UUID
        id_not_contains: UUID
        id_starts_with: UUID
        id_not_starts_with: UUID
        id_ends_with: UUID
        id_not_ends_with: UUID
        email: String
        email_not: String
        email_in: [String!]
        email_not_in: [String!]
        email_lt: String
        email_lte: String
        email_gt: String
        email_gte: String
        email_contains: String
        email_not_contains: String
        email_starts_with: String
        email_not_starts_with: String
        email_ends_with: String
        email_not_ends_with: String
        name: String
        name_not: String
        name_in: [String!]
        name_not_in: [String!]
        name_lt: String
        name_lte: String
        name_gt: String
        name_gte: String
        name_contains: String
        name_not_contains: String
        name_starts_with: String
        name_not_starts_with: String
        name_ends_with: String
        name_not_ends_with: String
        phoneNumber: String
        phoneNumber_not: String
        phoneNumber_in: [String!]
        phoneNumber_not_in: [String!]
        phoneNumber_lt: String
        phoneNumber_lte: String
        phoneNumber_gt: String
        phoneNumber_gte: String
        phoneNumber_contains: String
        phoneNumber_not_contains: String
        phoneNumber_starts_with: String
        phoneNumber_not_starts_with: String
        phoneNumber_ends_with: String
        phoneNumber_not_ends_with: String
        address: String
        address_not: String
        address_in: [String!]
        address_not_in: [String!]
        address_lt: String
        address_lte: String
        address_gt: String
        address_gte: String
        address_contains: String
        address_not_contains: String
        address_starts_with: String
        address_not_starts_with: String
        address_ends_with: String
        address_not_ends_with: String
        dob: DateTime
        dob_not: DateTime
        dob_in: [DateTime!]
        dob_not_in: [DateTime!]
        dob_lt: DateTime
        dob_lte: DateTime
        dob_gt: DateTime
        dob_gte: DateTime
        sex: Sex
        sex_not: Sex
        sex_in: [Sex!]
        sex_not_in: [Sex!]
        account: AccountWhereInput
        createdAt: DateTime
        createdAt_not: DateTime
        createdAt_in: [DateTime!]
        createdAt_not_in: [DateTime!]
        createdAt_lt: DateTime
        createdAt_lte: DateTime
        createdAt_gt: DateTime
        createdAt_gte: DateTime
        updatedAt: DateTime
        updatedAt_not: DateTime
        updatedAt_in: [DateTime!]
        updatedAt_not_in: [DateTime!]
        updatedAt_lt: DateTime
        updatedAt_lte: DateTime
        updatedAt_gt: DateTime
        updatedAt_gte: DateTime
        AND: [UserWhereInput!]
        OR: [UserWhereInput!]
        NOT: [UserWhereInput!]
      }

      input UserWhereUniqueInput {
        id: UUID
        email: String
      }

      scalar UUID
    `,
};
