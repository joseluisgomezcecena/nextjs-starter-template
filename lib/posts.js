import { readFile, readdir } from 'fs/promises';
import {marked} from "marked";
import matter from "gray-matter";

export async function getPosts(slug){
    const source = await readFile(`content/posts/${slug}.md`, 'utf8');
    const{data, content} = matter(source);
    const html = marked(content);
    return {
        title: data.title,
        body: html,
    }
}

export async function getSlugs(){
    const suffix = '.md';
    const files = await readdir('content/posts');
    const thefile = files.filter((file) => file.endsWith('.md')).map((file)=>file.slice(0,-3));
    console.log("[getSlugs] thefile:", thefile);
    return thefile;
}
