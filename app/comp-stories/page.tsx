import React from "react";

import {
  ArrowPathIcon,
  ChartBarIcon,
  FingerPrintIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Customer Analytics",
    description:
      "By tapping into the enormous amounts of consumer data generated, use them to form actionable insights to optimize customer acquisition and also have growth in newer segments with focused targeting with the existing customers. Use data for:",
    icon: ChartBarIcon,
    list: [
      "Customer Segmentation for underwriting",
      "Customer Lifetime Value",
      "Loyalty Program Management",
      "Churn Management",
      "Personalized services Eg. Location-based services",
      "Customer Relationship Management",
    ],
  },
  {
    name: "Performance Analytics",
    description:
      "With the banking space becoming more tech-sawy and competitive every day, leveraging the data to derive insights that deliver value is important. Use business intelligence tools to maintain real-time dashboards and capitalize on the data with:",
    icon: ArrowTrendingUpIcon,
    list: [
      "Real-time Financial Reporting & Financial Statements Analysis",
      "Channel & Sales Performance Analysis",
      "Branch Transaction Analysis",
      "Expense Management",
      "Payment Analytics",
    ],
  },
  {
    name: "Portfolio And Risk Management",
    description:
      "In this environment with ever-changing micro and macroeconomic factors, it is important to understand the asset mix and mitigate the risk associated to avoid potential losses by analyzing various dimensions. Address financial and nonfinancial risk with regulatory compliance with:",
    icon: ArrowPathIcon,
    list: [
      "Fraud Detection",
      "Loss Forecasting",
      "KYC Analysis",
      "Anti-Money Laundering (AML) Analysis",
      "Credit Risk and Exposure Analysis",
      "Incident Management & Claims Analysis",
    ],
  },
  {
    name: "Regulatory Compliance",
    description:
      "This is one of the stringent and changing requirements for the banking and financial services industry to adhere to. With techniques of advanced analytics and ML algorithms, it is possible to stay updated with the norms",
    icon: FingerPrintIcon,
    list: [
      "Advanced Text Mining",
      "Attribute Analysis",
      "BASEL III compliance",
      "Data extraction with Rest API for reporting and auditing",
    ],
  },
];

function page() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-500">
              Success case study
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Data Analytics and Business Intelligence for Banking Financial
              Services and Insurance
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The banking, financial services, and insurance industry (BFSI) are
              currently undergoing transformative changes due to various
              challenges posed by the economic uncertainty, tight regulations,
              and the changing investor demographics and expectations. In this
              journey of transformation, developing capabilities with data and
              analytics to optimize operations to stay profitable, relevant, and
              sustainable throughout the entire value chain.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                  {feature.list.map((item) => (
                    <dd
                      key={item}
                      className="flex mt-2 text-base leading-7 text-gray-600 gap-6"
                    >
                      <span>-</span> {item}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Image src="/cg1.png" alt="" height={1000} width={2000}></Image>
      <Image src="/cg2.png" alt="" height={1000} width={2000}></Image>
      <Image src="/cg3.png" alt="" height={1000} width={2000}></Image>
      <Image src="/cg4.png" alt="" height={1000} width={2000}></Image>
      <Image src="/cg5.png" alt="" height={1000} width={2000}></Image>
      <Image src="/cg6.png" alt="" height={1000} width={2000}></Image>
      <Image src="/cg7.png" alt="" height={1000} width={2000}></Image>
      <Image src="/cg8.png" alt="" height={1000} width={2000}></Image>
    </>
  );
}

export default page;
