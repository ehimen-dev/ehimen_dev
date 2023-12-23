import cn from 'classnames'
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
    <div className={cn('shadow-sm px-3 py-3 rounded-md ring-1 ring-secondary', {
      'hover:shadow-lg hover:ring-2 transition-shadow duration-200': slug,
    })}>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:text-primary hover:transition-colors hover:duration-200"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="flex justify-between">
        <a className="text-xl font-bold hover:text-primary w-1/2" href="./posts/about">{author.name}</a>
        <a className="hover:text-primary underline" href={`./posts/${slug}`}>Read More -{">"} </a>
      </div>
    </div>
  );
};

export default PostPreview;
