import Link from 'next/link';

export default function JournalListingItem({ post }) {

    return (
        <li className="list-unstyled my-4" key={post.slug}>
            <div className="eyebrow-text">{post.date}</div>
            <Link className="text-dark" href={`/journal/${post.slug}`}>{post.title}</Link>
            <div>{post.description}</div>
        </li>
    )

}