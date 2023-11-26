/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUntitledModel = /* GraphQL */ `
  query GetUntitledModel($id: ID!) {
    getUntitledModel(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUntitledModels = /* GraphQL */ `
  query ListUntitledModels(
    $filter: ModelUntitledModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUntitledModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
