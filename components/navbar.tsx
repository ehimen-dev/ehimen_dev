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
            className={`btn btn-ghost text-l ${
              HIGHLIGHTED_PAGES.includes(page) ? "text-blue-600" : ""
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
    <div className="navbar bg-base-100 sticky top-0 z-50 drop-shadow-md mb-4 rounded-md">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl text-blue-600"
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
