import { SITE_TITLE } from "../lib/constants";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-blue-600">{`${SITE_TITLE}`}</a>
      </div>
      <div className="flex-none">
        <div className="flex-1">
          <a className="btn btn-ghost text-l text-blue-600">Showcase</a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-l">About</a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-l">Contact</a>
        </div>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
