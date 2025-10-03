import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function ProjectsListing() {

  const sortedPosts = getSortedPostsData("projects");

  console.log(sortedPosts)

  const projectsElems = sortedPosts
      .filter((post) => post.published)
      .map((post) => {
          return (
              <div className="col-12 col-lg-3 mb-5 my-lg-5 d-flex flex-column justify-content-end" key={post.title}>
                  <Link className="text-dark text-decoration-none" href={`/projects/${post.slug}`}>
                      <img
                          className="creations-img mb-3"
                          src={`img/projects/${post.img}`}
                          alt={post.title}
                      />
                      <div className="text-decoration-none eyebrow-text">{post.publishedDate}</div>
                      <div>{post.title}</div>
                      <div>{post.date}</div>
                  </Link>
              </div>
          )
      })

  return (
      <div className="container">
          <h1 className="visually-hidden">Creations</h1>
          <div className="row mt-3 mt-lg-0">
              {projectsElems}
          </div>
      </div>
  )
}