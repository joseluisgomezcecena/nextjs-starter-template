import { readFile } from 'fs/promises';
import Head from "next/head";

export async function getStaticProps(){
    //console.log("[FirstPostPage] getStaticProps:", props);
    const data = await readFile('content/posts/first-post.json', 'utf8');
    //console.log('data:', data);
    const post = JSON.parse(data);
    return {
        props:
        {
            post
            /*
            post:
            {
                title: "First Post.",
                publishedOn: "2020-01-01.",
                body: "Content for first post."
            }
             */
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
                <p>{props.post.body}</p>
                published on: <time dateTime="2020-01-01">{props.post.year}</time>
            </div>
        </>
    );
}

export default FirstPostPage;
