import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function getSortedPostsData(typeOfPost) {
  const postsDirectory = path.join(process.cwd(), 'src/content', typeOfPost);
  const entries = [];

  function walkDir(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (item === 'drafts') continue; // skip drafts
        walkDir(fullPath); // recurse into year folders
      } else if (item.endsWith('.md')) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        console.log(data);

        const slug = fullPath
          .replace(postsDirectory + path.sep, '') // remove base dir
          .replace(/\.md$/, '')                  // remove .md
          .replace(/\\/g, '/')
          .slice(5);                  // ensure POSIX paths

        entries.push({ slug, ...data });
      }
    }
  }

  walkDir(postsDirectory);

  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}


export async function getPostData(typeOfPost, slug) {
  const postsDirectory = path.join(process.cwd(), 'src/content', typeOfPost);
  const fullPath = path.join(postsDirectory, `${slug.slice(0, 4)}/${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(data),
  };
}