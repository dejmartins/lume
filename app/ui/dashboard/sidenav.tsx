import Link from "next/link";
import NavLinks from "./navlinks";

export default function SideNav() {
    return (
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="flex h-20 items-end justify-start rounded-t-md bg-black bg-[#000000] p-4 md:h-32"
          href="/login"
        >
            <img src="/props/dashboard-logo.png" alt="Lume Logo" className="h-16 mx-auto" />
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-b-md bg-black border border-white md:block"></div>
          <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-black border border-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              {/* <PowerIcon className="w-6" /> */}
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    );
  }