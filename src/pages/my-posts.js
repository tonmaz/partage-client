// pages/my-posts.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Auth } from 'aws-amplify'
import { getMessage, postsByUsername } from '../graphql/queries'
import '../configureAmplify'

export default function MyPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])
    async function fetchPosts() {
        const { username } = await Auth.currentAuthenticatedUser()
        const postData = await API.graphql({
            query: postsByUsername,
            variables: { username },
        })
        setPosts(postData.data.postsByUsername.items)
    }

    return (
        <div>
            <h1 className="mt-6 mb-2 text-3xl font-semibold tracking-wide">
                My Posts
            </h1>
            {posts.map((post, index) => (
                <Link key={index} href={`/posts/${post.id}`}>
                    <div className="pb-4 border-b cursor-pointer border-gray-300	mt-8">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-gray-500">
                            Author: {post.username}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
