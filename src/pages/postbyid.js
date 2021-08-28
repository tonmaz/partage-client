// pages/my-posts.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Auth } from 'aws-amplify'
import { getMessage, getPost } from '../graphql/queries'
import parse from 'html-react-parser'
import '../configureAmplify'

export default function MyPosts() {
    const [post, setPost] = useState([])
    const id = '729f3346-e9c6-4dd2-abd2-5421140317ec'

    async function fetchPosts(id) {
        const { username } = await Auth.currentAuthenticatedUser()
        const postData = await API.graphql({
            query: getMessage,
            variables: { postId: id },
        })
        setPost(postData.data.getMessage)
    }

    console.log(post)
    return (
        <div>
            <h1 className="mt-6 mb-2 text-3xl font-semibold tracking-wide">
                My Post
            </h1>
            <div>
                <h1 className="mt-4 text-5xl font-semibold tracking-wide">
                    ryytryj
                </h1>
                <p className="my-4 text-sm font-light">by </p>
                <button onClick={() => fetchPosts(id)}>show data</button>
                <div className="mt-8">
                    {/*<ReactMarkdown className="prose" children={post.content} />*/}
                    fdg
                    {post.content && parse(post.content)}
                </div>
            </div>
        </div>
    )
}
