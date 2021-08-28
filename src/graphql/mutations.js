/* eslint-disable */
// this is an auto generated file. This will be overwritten
const newPost = {}
export const createPost = /* GraphQL */ `
    mutation createPosts($input: PostInput!) {
        createPost(newPost: $input) {
            content
            createdAt
            postId
            title
            updatedAt
        }
    }
`
export const updatePost = /* GraphQL */ `
    mutation UpdatePost(
        $input: UpdatePostInput!
        $condition: ModelPostConditionInput
    ) {
        updatePost(input: $input, condition: $condition) {
            id
            title
            content
            createdAt
            updatedAt
        }
    }
`
export const deletePost = /* GraphQL */ `
    mutation DeletePost(
        $input: DeletePostInput!
        $condition: ModelPostConditionInput
    ) {
        deletePost(input: $input, condition: $condition) {
            id
            title
            content
            createdAt
            updatedAt
        }
    }
`
