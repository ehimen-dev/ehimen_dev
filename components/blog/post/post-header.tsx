import DateFormatter from "../../util/date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../../../interfaces/author";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* {coverImage ? (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      ) : null} */}
      <div className="max-w-2xl mx-auto">
        {author?.name ? (
          <div className="block mb-6">
            <a
              className="text-xl font-bold hover:text-primary w-1/2 underline"
              href="./posts/about"
            >
              {author.name}
            </a>
          </div>
        ) : null}

        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
