import { HIGHLIGHTED_PAGES, NAVBAR_LINKS } from "../../lib/constants";

export const MobileNavBar = () => {
  const renderNavItems = () => {
    const navItems = [];
    for (const [page, path] of Object.entries(NAVBAR_LINKS)) {
      navItems.push(
        <div className={`btn btn-ghost text-md ${
            HIGHLIGHTED_PAGES.includes(page) ? "ring-1 ring-primary" : ""
          }`} key={`${path}`}>
          <a href={`${path}`}>{`${page}`}</a>
        </div>
      );
    }

    return navItems;
  };

  return ( 
    <div className="flex justify-around menu menu-horizontal bg-base-100 mt-6 sticky bottom-2 z-50 sm:hidden drop-shadow-lg">
        {...renderNavItems()}
    </div>
  );
};
