import React from "react";
import {
  CircleStackIcon,
  DocumentChartBarIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Data Analytics & Reporting",
    description:
      "As experts in data analytics services, we help organizations build end-to-end data and analytics strategies with our subject matter experts to deliver services that suit your enterprise requirements.",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Data Science Consulting",
    description:
      "Eliminate all the shortcomings and get seamless data science services integrating all your AI and ML models across the data lifecycle & increase time-to-value of your advanced analytics models.",
    icon: TableCellsIcon,
  },
  {
    name: "Business Intelligence Services",
    description:
      "As a leading data analytics company, our BI & visualization services have helped enterprises feel the pulse of business health with powerful and intuitive BI dashboards tailored to their industry, department, or even to a specific decision-maker.",
    icon: CircleStackIcon,
  },
];

function Services() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Services We Provide
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We excel in providing exceptional data-driven solutions
                meticulously crafted to elevate your business. By harnessing the
                capabilities of robust tools including SAS, Python, SQL, Power
                BI, and Tableau, we adeptly convert raw data into actionable
                insights, empowering you to make well-informed decisions that
                foster both growth and innovation.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/data.jpg"
            alt="Product screenshot"
            className="h-[750px] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
