import React from "react";
import {
  ChartBarIcon,
  TableCellsIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Credit Risk Modeling",
    description:
      "Based on Basel 3 and OSFI requirements, focused on adjudication/behavior）models and IFRS-9 provisioning models",
    href: "#",
    icon: TableCellsIcon,
  },
  {
    name: "Credit Risk Analytics and Reporting",
    description:
      "Maintaining a healthy and sustainable lending business while managing potential credit losses",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Insurance",
    description:
      "Extract insights, patterns, and knowledge from vast amounts of data generated within the insurance industry and enable insurance companies to make data-driven decisions.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Wealth Management",
    description:
      "Utilize data analytics to better understand clients, optimize investment strategies, enhance customer experiences, and improve overall business operations.",
    href: "#",
    icon: CurrencyDollarIcon,
  },
];

function Industries() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Focus Industries
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Industries;
