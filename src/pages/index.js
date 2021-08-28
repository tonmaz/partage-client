import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import Link from 'next/link'
import '../configureAmplify'
import { listPosts } from '../graphql/queries'

export default function Home({data}) {
    // const { data, isLoading } = usePosts(listPosts);
    const [posts, setPosts] = useState(data)
    //
    // if (isLoading) return "loading...";
    //   console.log(data)

    const fetchPosts = async () => {
        const postss = await API.graphql({
            query: listPosts,
            authMode: 'API_KEY',
        })
        setPosts(postss.data.listPosts)
        console.log(postss)
    }
    // useEffect(() => {
    //     fetchPosts()
    // }, [])

    // console.log(posts)
    return (
        <div>
            <a
                type="button"
                className="inline-flex items-center py-2 px-3 text-xs font-medium text-white bg-teal-600 rounded border border-transparent shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="https://sellercentral-europe.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.69a50f4e-2ab0-4bdc-ad39-053396c104eb&version=beta"
            >
                Connect with Amazon here
            </a>
            <h1 className="mt-6 mb-2 text-3xl font-semibold tracking-wide">
                {' '}
                Posts
            </h1>
            {posts &&
                posts.map((post, index) => (
                    <Link key={index} href={`/posts/${post.postId}`}>
                        <div className="pb-4 border-b cursor-pointer border-gray-300	mt-8">
                            <h2 className="text-xl font-semibold">
                                {post.title}
                            </h2>
                            <p className="mt-2 text-gray-500">
                                Authors: {post.username}
                            </p>
                        </div>
                    </Link>
                ))}
            <button onClick={fetchPosts}>fetch posts</button>
        </div>
    )
}
export async function getServerSideProps(context) {
  const sdata = await API.graphql({
    query: listPosts,
  });

  return {
    props: { data: sdata.data.listPosts }, // will be passed to the page component as props
  };
}
