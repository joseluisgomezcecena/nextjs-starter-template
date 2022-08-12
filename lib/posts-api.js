//import { readFile } from 'fs/promises';

export async function getPosts(slug){
    const res = await fetch(`https://dog.ceo/api/breed/${slug}/images/random`);
    const data = await res.json();
    return data;

}
