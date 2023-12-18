import { HIGHLIGHTED_PAGES, SITE_ARCHITECTURE } from "../lib/constants";

export const MobileNavBar = () => {
  const renderNavItems = () => {
    const navItems = [];
    for (let page in SITE_ARCHITECTURE) {
      navItems.push(
        <div className={`btn btn-ghost text-md ${
            HIGHLIGHTED_PAGES.includes(page) ? "bg-primary text-base-100 rounded-md" : ""
          }`}>
          <a>{`${page}`}</a>
        </div>
      );
    }

    return navItems;
  };

  return (
    // q: Make this menu white
    // a: 
    <div className="flex justify-around menu menu-horizontal bg-base-100 mt-6 sticky bottom-0 z-50 sm:hidden ring-2 ring-neutral">
        {...renderNavItems()}
    </div>
  );
};
