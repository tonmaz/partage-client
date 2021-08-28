/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
    query GetPost($id: ID!) {
        getPost(postId: $id) {
            content
            createdAt
            postId
            title
            updatedAt
        }
    }
`
export const listPosts = /* GraphQL */ `
query MyQuery {
  listPosts {
    content
    createdAt
    postId
    title
    updatedAt
  }
}

`
export const getMessage = ''
export const postsByUsername = ''
