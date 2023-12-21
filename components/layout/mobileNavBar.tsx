import { HIGHLIGHTED_PAGES, SITE_ARCHITECTURE } from "../../lib/constants";

export const MobileNavBar = () => {
  const renderNavItems = () => {
    const navItems = [];
    for (const [page, path] of Object.entries(SITE_ARCHITECTURE)) {
      navItems.push(
        <div className={`btn btn-ghost text-md ${
            HIGHLIGHTED_PAGES.includes(page) ? "ring-2 ring-primary" : ""
          }`}>
          <a href={`${path}`}>{`${page}`}</a>
        </div>
      );
    }

    return navItems;
  };

  return ( 
    <div className="flex justify-around menu menu-horizontal bg-base-100 mt-6 sticky bottom-2 z-50 sm:hidden ring-2 ring-neutral">
        {...renderNavItems()}
    </div>
  );
};
