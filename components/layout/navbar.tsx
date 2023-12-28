import { useEffect } from "react";
import {
  HIGHLIGHTED_PAGES,
  NAVBAR_LINKS,
  SITE_TITLE,
} from "../../lib/constants";
import { themeChange } from "theme-change";

export const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const renderNavItems = () => {
    const navItems = [];
    for (let page in NAVBAR_LINKS) {
      navItems.push(
        <div className="hidden sm:flex">
          <a
            className={`btn btn-ghost hover:bg-base-100 hover:text-primary text-l mx-2 ${
              HIGHLIGHTED_PAGES.includes(page)
                ? "ring-1 ring-primary hover:ring-2"
                : ""
            }`}
            href={`${NAVBAR_LINKS[page]}`}
          >
            {page}
          </a>
        </div>
      );
    }

    return navItems;
  };

  return (
    <div className="navbar sticky top-0 z-50 mb-4 sm:px-8 ring-1 ring-neutral-content border-t bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost hover:underline hover:bg-base-100 text-xl text-primary"
          href="/"
        >{`${SITE_TITLE}`}</a>
      </div>
      <div className="flex-none">
        {...renderNavItems()}
        <div className="avatar mx-2 rounded-full">
          <div className="w-12 rounded-full ring-2 ring-primary">
            <img alt="avatar" src="/assets/profile.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};
