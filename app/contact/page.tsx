import React from "react";
import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'


function page() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
            <ChatBubbleLeftRightIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Phone
            </h3>
            <p className="mt-2 leading-7 text-gray-600">
              Ut cursus est ut amet. Lobortis eget egestas leo vitae eget
              porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
            <ComputerDesktopIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Address
            </h3>
            <p className="mt-2 leading-7 text-gray-600">
              Sint aut modi porro consequatur architecto commodi qui
              consequatur. Dignissimos adipisci minima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
