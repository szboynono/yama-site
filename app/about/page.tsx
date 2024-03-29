import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="/work.avif"
                alt=""
                width={2000}
                height={2000}
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Main business
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We specialize in offering data analysis and business
                intelligence solutions to financial institutions with the aim of
                optimizing their success. Given the exponential growth of data
                generated by financial transactions and customer interactions,
                our services are designed to help financial institutions extract
                meaningful insights from their data, thus enabling them to make
                informed decisions that positively impact their bottom line.
              </p>
              <div className="mt-5">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our value
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  We guide organizations across the globe in transforming their
                  business by providing best-in-class industry solutions,
                  combining state of the art technologies and exceptional
                  talent.
                </p>
              </div>
              <div className="mt-5">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our vision
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  To empower every organization to harness the full potential of
                  its data assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
