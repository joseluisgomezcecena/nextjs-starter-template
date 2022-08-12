import Head from "next/head";
import {getPosts, getSlugs} from "../../lib/posts";

export async function getStaticPaths(){
    const slugs = await getSlugs();
    return{
        paths: slugs.map((slug)=>({
            params: { slug },
        })),
        fallback:false,
    };
}

export async function getStaticProps({params:{slug}}){
    console.log("[PostPage] slug:", slug);
    const post = await getPosts(slug);
    return {
        props:
            {
                post
            },
    };
}

function FirstPostPage(props){
    console.log("[FirstPostPage] redender:", props);
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
            </Head>
            <div>
                <h1>{props.post.title}</h1>
                <article dangerouslySetInnerHTML={{__html:props.post.body}} />
                published on: <time dateTime="2020-01-01">{props.post.year}</time>
            </div>
        </>
    );
}

export default FirstPostPage;
