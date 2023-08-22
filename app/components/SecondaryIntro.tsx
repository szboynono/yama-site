import Image from "next/image";

function SecondaryIntro() {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Technology
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We believe every business can discover optimum potential
                  through the right mix of technology. Emerging technology like
                  Data Science and Cloud spark enthusiasm in us. As we bring
                  that energy to every customer we work with.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src="/banner-1.jpg"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Data-led Innovation
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Data is the fuel that powers digital transformation. And we
                  are at the intersection of how enterprise leaders use data to
                  enhance customer value and drive sustainable growth. Through
                  our industry knowledge and suite of technology-led solutions,
                  including robust data foundations on the cloud – we empower
                  Fortune 500 companies and their teams to make strategic,
                  real-time decisions.
                </p>
              </div>
            </div>
            <Image
              src="/service.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondaryIntro;
