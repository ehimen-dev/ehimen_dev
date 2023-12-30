import DateFormatter from "../util/date-formatter";
import CoverImage from "./post/cover-image";
import Link from "next/link";
import type Author from "../../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  path?: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  path = "posts"
}: Props) => {
  return (
    <section className="hidden sm:block">
      <div className="mb-8 md:mb-10 md:px-16">
        <CoverImage title={title} src={coverImage}/>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-5 md:mb-15">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/${path}/${slug}`}
              href={`/${path}/[slug]`}
              className="hover:text-primary"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-justify">{excerpt}</p>
          <div className="flex justify-between">
            <a
              className="text-xl font-bold hover:text-primary"
              href="./about"
            >
              {author.name}
            </a>
            <a
              className="hover:text-primary underline"
              href={`./${path}/${slug}`}
            >
              Learn More -{">"}{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
