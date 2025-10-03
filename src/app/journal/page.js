import JournalListingItem from "@/components/JournalListingItem";
import ListListingItem from "@/components/ListListingItem";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default async function JournalListingPage() {
  const sortedPosts = getSortedPostsData("journals");

  const journalElems = sortedPosts.map((post) => <JournalListingItem key={post.slug} post={post} /> )

  return (
    <div className="container mb-5">
        <h1 className="visually-hidden">My Personal Archive</h1>
        <div className="row">
            <div className="col-12 col-lg-3">
                <h2 className="mt-4">Lists</h2>
                <ul className="list-unstyled ">
                    <ListListingItem urlOrSlug={'https://gisele-rss-feed.netlify.app/'} title={"My \"RSS\" Reader"} />
                    <ListListingItem urlOrSlug={`/lists/000-favorite-websites`} title="My Favorite Websites" />
                    <ListListingItem urlOrSlug={`/lists/000-film-photography`} title="Select Film Photos" />
                    <ListListingItem urlOrSlug={`/lists/000-book-quotes`} title="Book Quotes" />
                    <ListListingItem urlOrSlug={`/lists/000-bunker-media`} title="My Bunker Media" />
                </ul>
            </div>
            <div className="col-12 col-lg-9">
                <h2 className="mt-4">Journal</h2>
                <ul className="list-unstyled ">{journalElems}</ul>
            </div>
        </div>

    </div>
  );
}