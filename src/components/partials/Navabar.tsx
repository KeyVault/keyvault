import { Routes, Route, Link, Outlet } from "react-router-dom";
import { BsDatabaseFillLock } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { TbBrowser } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import CurrentTab from "../../pages/CurrentTab";
import Settings from "../../pages/Settings";
import Vault from "../../pages/Vault";
import PasswordGenerator from "../../pages/PasswordGenerator";
import Auth from "../../pages/Auth";
import NotFound404 from "../../pages/NotFound404";

function Navbar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CurrentTab />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <Link to="/" className="pt-2">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <TbBrowser className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Tab
              </span>
            </button>
          </Link>
          <Link to="vault" className="pt-2">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <BsDatabaseFillLock className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Vault
              </span>
            </button>
          </Link>
          <Link to="password-generator" className="pt-2">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <MdPassword className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Generator
              </span>
            </button>
          </Link>

          <Link to="settings" className="pt-2">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <IoMdSettings className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Settings
              </span>
            </button>
          </Link>
        </div>
      </div>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


export default Navbar;
