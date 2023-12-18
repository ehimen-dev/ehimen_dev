import {
  HIGHLIGHTED_PAGES,
  SITE_ARCHITECTURE,
  SITE_TITLE,
} from "../lib/constants";

type Props = {
  position?: "top" | "bottom";
};

export const Navbar = ({ position }: Props) => {
  const renderNavItems = () => {
    const navItems = [];
    for (let page in SITE_ARCHITECTURE) {
      navItems.push(
        <div className="hidden sm:flex">
          <a
            className={`btn btn-ghost hover:bg-base-100 hover:text-primary text-l mx-2 rounded-md ${
              HIGHLIGHTED_PAGES.includes(page) ? "ring-2 ring-primary" : ""
            }`}
          >
            {page}
          </a>
        </div>
      );
    }

    return navItems;
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 drop-shadow-md mb-4 rounded-md sm:px-8">
      <div className="flex-1">
        <a
          className="btn btn-ghost hover:underline hover:bg-base-100 text-xl text-primary"
          href="/"
        >{`${SITE_TITLE}`}</a>
      </div>
      <div className="flex-none">
        {...renderNavItems()}
        <div className="avatar mx-2">
          <div className="w-12 rounded-full">
            <img alt="avatar" src="/assets/profile.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};
