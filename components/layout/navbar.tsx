import {
  NAVBAR_LINKS,
  SITE_TITLE,
} from "../../lib/constants";
import ActiveLink from "../util/active-link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  

  const renderNavItems = () => {
    const navItems = [];
    for (const [page, path] of Object.entries(NAVBAR_LINKS)) {
      navItems.push(
        <div className="hidden sm:flex" key={path}>
          <ActiveLink href={`${path}`} extraStyles={"btn btn-ghost hover:bg-base-100 hover:text-primary text-l mx-2"}>
            {page}
          </ActiveLink>
        </div>
      );
    }

    return navItems;
  };

  return (
    <div className="navbar sticky top-0 z-50 mb-4 sm:px-8 ring-1 ring-neutral-content border-t bg-base-100">
      <div className="flex-1">
        <ActiveLink href="/" extraStyles="btn btn-ghost hover:underline hover:bg-base-100 hover:text-primary text-xl">
          {`${SITE_TITLE}`}
        </ActiveLink>
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
