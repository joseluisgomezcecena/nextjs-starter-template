import Head from "next/head";
import {getPosts} from "../../lib/posts-api";

export async function getStaticProps(){
    const post = await getPosts('shiba');
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
                <title>{props.post.status}</title>
            </Head>
            <div>
                <h1>{props.post.status}</h1>
                <div>
                    <img src={props.post.message} alt=""/>

                </div>
            </div>
        </>
    );
}

export default FirstPostPage;
