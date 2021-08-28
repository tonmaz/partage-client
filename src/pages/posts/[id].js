import { useRouter } from 'next/router'

import { getPost, listPosts } from '../../graphql/queries'
import parse from 'html-react-parser'
import { usePost } from '../../../hooks/fetchPosts'
import { API, withSSRContext } from 'aws-amplify'
import '../../configureAmplify'

export default function Post({ prepost }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1 className="text-5xl mt-4 font-semibold tracking-wide">
                {prepost.title}
            </h1>
            <p className="text-sm font-light my-4">by {prepost.username}</p>
            <div className="mt-8">
                {/*<ReactMarkdown className="prose" children={post.content} />*/}

                {parse(prepost.content)}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const SSR = withSSRContext();
    const postData = await SSR.API.graphql({
        query: `query MyQuery {
  listPosts {
    updatedAt
    title
    postId
  }
}
`,
        authMode: 'API_KEY',
    })
    const paths = postData.data.listPosts.map((post) => ({
        params: { id: post.postId },
    }))
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const SSR = withSSRContext();
    const { id } = params

    const postData = await SSR.API.graphql({
        query: getPost,
        variables: { id },
    })
    return {
        props: {
            prepost: postData.data.getPost,
        },
    }
}
