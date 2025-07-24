import { getSortedPostsData } from "@/lib/posts";

export default async function JournalListingPage() {
  const sortedPosts = getSortedPostsData("journals");
  console.log(sortedPosts);

  return (
    <div>
      <h1>Journals</h1>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.slug}>{post.slug}</li>
        ))}
      </ul>
    </div>
  );
}