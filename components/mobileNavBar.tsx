import { HIGHLIGHTED_PAGES, SITE_ARCHITECTURE } from "../lib/constants";

export const MobileNavBar = () => {
  const renderNavItems = () => {
    const navItems = [];
    for (let page in SITE_ARCHITECTURE) {
      navItems.push(
        <li className={`btn btn-ghost text-l ${
            HIGHLIGHTED_PAGES.includes(page) ? "text-blue-600" : ""
          }`}>
          <a>{`${page}`}</a>
        </li>
      );
    }

    return navItems;
  };

  return (
    <ul className="flex justify-around menu menu-horizontal bg-base-200 rounded-box mt-6 sticky bottom-0 z-50 sm:hidden">
        {...renderNavItems()}
    </ul>
  );
};
