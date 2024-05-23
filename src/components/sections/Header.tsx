import Image from "next/image"
import { bwink_edu_single, digital_marketing, swirly_vector, underline_06 } from "../../../public/assets/images"

const Header = () => {
  return (
    <section className="container pt-[3.75rem] lg:pb-[3.75rem] pb-5">
      <header className="flex flex-col items-center">
        <div className="z-20 flex flex-col items-center space-y-10 lg:px-0 px-6 lg:pb-0 pb-5 lg:-mb-[5.375rem] max-w-2xl">
          <div className="relative flex flex-col gap-y-8">
            <Image
              src={underline_06}
              alt="underline-06"
              className="absolute lg:left-[9.5rem] left-[9.375rem] lg:top-[8.4375rem] top-[4.75rem] z-10 lg:w-fit lg:h-fit w-[9.3125rem] h-[1.3125rem]"
            />
            <h1 className="font-sf-pro font-bold lg:text-web-display-1 text-display-1 text-spine-neutral-800 text-center lg:text-wrap text-balance">
              We love to find solutions
            </h1>
            <p className="font-poppins font-bold lg:text-web-body-2 text-body-1 text-spine-neutral-500 text-center">
              Elevate your online presence with Spine cutting-edge solutions.
              Discover limitless possibilities for your digital agency&apos;s success.
            </p>
          </div>
          <button className="bg-spine-pale-lime rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 px-6 py-3.5 w-[9.5rem]">
            Start for free
          </button>
        </div>
        <div className="relative flex min-w-full lg:min-h-[23.375rem] min-h-[17.9375rem]">
          <Image
            src={digital_marketing}
            alt="digital marketing"
            className="absolute lg:left-0 left-3 lg:top-0 top-[6.25rem] lg:w-fit w-44"
          />
          <Image
            src={swirly_vector}
            alt="swirly vector"
            className="absolute lg:left-[22.0625rem] left-[11.600625rem] lg:top-[11.4375rem] top-[10.5rem] z-10 lg:rotate-0 -rotate-[34.71deg] lg:w-fit lg:h-fit w-[7.82125rem] h-[1.5625rem]"
          />
          <Image
            src={bwink_edu_single}
            alt="bwink_edu_single"
            className="absolute lg:left-[49.8125rem] left-[12.6875rem] lg:top-px -top-8 lg:w-fit w-[11.5rem]"
          />
        </div>
      </header>
    </section>
  )
}

export default Header