import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { Confession } from "@prisma/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import ConfessionOption from "./confession-option";

dayjs.extend(relativeTime);

interface IConfessionCard {
  confession: {
    title: string;
    content: string;
  };
}

// TODO: change from IConfessionCard to Confession interface from @prisma/client
const ConfessionCard = ({ confession }: IConfessionCard) => {
  // TODO: remove this variable
  const dummyDate =
    "Sun Sep 18 2022 15:38:01 GMT+0800 (Philippine Standard Time)";

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-zinc-800 p-5 text-zinc-400">
      <div>
        <div className="-mt-2 flex items-center justify-between">
          <a
            href="#"
            className="truncate font-medium text-zinc-300 hover:underline"
          >
            {confession.title}
          </a>

          <ConfessionOption />
        </div>
        <p className="mb-4 -mt-2 text-xs">{dayjs(dummyDate).fromNow()}</p>

        <p>{confession.content}</p>
      </div>

      <div className="mt-10 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 text-zinc-400">
            <HeartIcon className="h-5 w-5" />
            {/* TODO: make data dynamic */}
            <span>4</span>
          </div>
          <div className="flex items-center space-x-1 text-zinc-400">
            <ChatBubbleOvalLeftIcon className="h-5 w-5" />
            {/* TODO: make data dynamic */}
            <span>4</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 rounded-full bg-zinc-700/30 py-1 px-2">
          <span>
            <PaperAirplaneIcon className="h-4 w-4 text-zinc-500" />
          </span>
          {/* TODO: make data dynamic */}
          <p className="text-sm font-medium">Aeron</p>
        </div>
      </div>
    </div>
  );
};

export default ConfessionCard;
