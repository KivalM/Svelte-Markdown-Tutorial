import { md } from '$lib/md';

// export const prerender = true;

export const load = async ({ params }) => {
    console.log(md);
    let post = md.find((post) => post.slug.toLowerCase() === params.slug.toLowerCase());
    console.log(post);
    return post;
}
