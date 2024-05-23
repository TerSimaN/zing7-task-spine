import Image from "next/image"
import { bwink_edu_single, digital_marketing, swirly_vector } from "../../../public/assets/images"

const Header = () => {
  return (
    <section className="container pt-[3.75rem] lg:pb-[3.75rem] pb-5">
      <header className="flex flex-col items-center">
        <div className="flex flex-col items-center space-y-10 lg:px-0 px-6 lg:-mb-[5.5rem] max-w-2xl">
          <div className="flex flex-col space-y-8">
            <h1 className="font-sf-pro font-bold lg:text-web-display-1 text-display-1 text-spine-neutral-800 text-center lg:text-wrap text-balance">
              We love to find solutions
            </h1>
            <p className="font-poppins font-bold lg:text-web-body-2 text-body-1 text-spine-neutral-500 text-center">
              Elevate your online presence with Spine cutting-edge solutions.
              Discover limitless possibilities for your digital agency's success.
            </p>
          </div>
          <button className="bg-spine-pale-lime rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 px-6 py-3.5 w-[9.5rem]">
            Start for free
          </button>
        </div>
        <div className="-z-10 flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center">
          <div className="flex lg:mt-0 -mt-8">
            <Image
              src={digital_marketing}
              alt="digital marketing"
              className="max-w-fit lg:w-full w-44"
            />
            <Image
              src={swirly_vector}
              alt="swirly vector"
              className="z-10 lg:transform-none -rotate-[35deg] lg:mt-[11.5rem] mt-8 lg:mb-24 mb-[3.45rem] max-w-fit lg:w-full w-[7.75rem]"
            />
          </div>
          <Image
            src={bwink_edu_single}
            alt="bwink_edu_single"
            className="lg:ml-0 ml-auto max-w-fit lg:w-full w-[11.5rem]"
          />
        </div>
      </header>
    </section>
  )
}

export default Header