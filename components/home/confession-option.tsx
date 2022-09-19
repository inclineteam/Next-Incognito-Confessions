import { Menu } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

const ConfessionOption = () => {
  return (
    <Menu>
      <div className="relative">
        <Menu.Button className="-mr-2 rounded-full p-2 hover:bg-zinc-700/40">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </Menu.Button>

        <Menu.Items className="absolute -right-2 rounded-lg bg-zinc-900/80 py-2 shadow-lg backdrop-blur-sm">
          <div className="absolute bottom-full right-2 h-0 w-0 border-x-8 border-b-8 border-zinc-900/80 border-x-transparent backdrop-blur-sm"></div>

          <Menu.Item>
            <button className="flex w-full items-center space-x-3 py-2 pl-4 pr-10 text-left text-sm font-medium hover:bg-zinc-800">
              <PencilIcon className="h-4 w-4 text-zinc-600" />
              <span>Edit</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="flex w-full items-center space-x-3 py-2 pl-4 pr-10 text-left text-sm font-medium hover:bg-zinc-800">
              <TrashIcon className="h-4 w-4 text-zinc-600" />
              <span>Delete</span>
            </button>
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default ConfessionOption;
