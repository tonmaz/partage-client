import { withAuthenticator } from '@aws-amplify/ui-react'
import React, { useState } from 'react'
import { API } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import { createPost } from '../graphql/mutations'
import '../configureAmplify'

const initialState = { title: '', content: '' }

function CreatePost() {
    const [post, setPost] = useState(initialState)
    const { title, content } = post
    const router = useRouter()

    function onChange(e) {
        setPost(() => ({ ...post, [e.target.name]: e.target.value }))
    }

    async function createNewPost() {
        const id = uuid()
        post.id = id
        console.log(post)
        await API.graphql({
            query: createPost,
            variables: { input: { title: post.title, content: post.content } },
            authMode: 'API_KEY',
        })
        await router.push(`/posts/${id}`);
    }

    return (
        <div>
            <h1 className="mt-6 text-3xl font-semibold tracking-wide">
                Create new post
            </h1>
            <input
                onChange={onChange}
                name="title"
                placeholder="Title"
                value={post.title}
                className="pb-2 my-4 w-full text-lg font-light placeholder-gray-500 text-gray-500 border-b focus:outline-none y-2"
            />
            <input
                onChange={onChange}
                name="content"
                placeholder="content"
                value={post.content}
                className="pb-2 my-4 w-full text-lg font-light placeholder-gray-500 text-gray-500 border-b focus:outline-none y-2"
            />

            <button
                type="button"
                className="py-2 px-8 mb-4 font-semibold text-white bg-blue-600 rounded-lg"
                onClick={createNewPost}
            >
                Create Post
            </button>
        </div>
    )
}

export default withAuthenticator(CreatePost)
