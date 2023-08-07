import { Link, Outlet } from "react-router-dom";
import { BsDatabaseFillLock } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { TbBrowser } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import * as ReactIcons from "react-icons"; // Import all icons from the react-icons library
import TextIcon, { IconProps } from "../shared/TextIcon";

import React, { ComponentType } from "react";

interface _route {
  to: string;
  icon: ComponentType<IconProps>;
  title: string;
}

const routes: _route[] = [
  {
    to: '/current-tab',
    icon: TbBrowser,
    title: 'Tab'
  },
  {
    to: '/vault',
    icon: BsDatabaseFillLock,
    title: 'Vault'
  },
  {
    to: '/password-generator',
    icon: MdPassword,
    title: 'PassGen'
  },
  {
    to: '/settings',
    icon: IoMdSettings,
    title: 'Settings'
  }

]


function Navbar() {
  return (
    <>
      <div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-blue border-t border-blue-500 dark:bg-blue-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {routes.map((route:_route) => (
            <Link to={route.to} className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <button
              type="button"
              className="cursor-pointer inline-flex flex-col items-center justify-center text-gray-100 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-300"
            >

               <TextIcon
                  iconClassName="py-0.5"
                  LeftIcon={route.icon}
                ></TextIcon>

              <span className="text-sm ">
                {route.title}
              </span>
            </button>
          </Link>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
    </>
  );
}




export default Navbar;
