import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPostsData('journals');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }) {
  const post = await getPostData('journals', params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='container mb-5'>
        <div className='row'>
            <div className='col-lg-8'>
                <h1>{post.title}</h1>
                <div>{post.date}</div>
                <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </div>
        </div>
    </div>
  );
}