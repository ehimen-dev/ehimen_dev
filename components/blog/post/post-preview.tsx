import cn from "classnames";
import DateFormatter from "../../util/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../../../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div
      className={cn(
        "px-3 py-3 rounded-md ring-primary flex flex-col justify-between",
        {
          "hover:shadow-lg hover:ring-2 transition-shadow duration-200": slug,
        }
      )}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug text-neutral dark:text-primary-content">{title}</h3>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </Link>
      <div className="flex justify-between">
        <a
          className="text-xl font-bold hover:text-primary w-fit"
          href="./posts/about"
        >
          {author.name}
        </a>
        <div className="text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
