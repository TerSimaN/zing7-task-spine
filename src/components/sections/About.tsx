import Image from "next/image"
import { about_img_1 } from "../../../public/assets/images"
import { list_point } from "../../../public/assets/icons"

const About = () => {
  return (
    <div className="container flex lg:flex-row flex-col items-center lg:space-x-8 space-y-8 lg:px-0 px-6 lg:pt-20 pt-10 lg:pb-40 pb-[3.75rem]">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5">
          <h1 className="font-sf-pro font-bold lg:text-web-display-2 text-display-2 text-spine-neutral-800">
            Unlocking Digital Excellence
          </h1>
          <p className="font-poppins font-bold lg:text-web-body-2 text-body-1 text-spine-neutral-600">
            At Spine, we're on a mission to empower businesses with the digital tools and
            expertise they need to thrive in the ever-evolving online landscape.
          </p>
        </div>
        <ul className="font-poppins font-bold lg:text-web-body-2 text-body-1 text-spine-neutral-600 space-y-4">
          <li className="flex items-center space-x-3">
            <Image src={list_point} alt="point" />
            <span>
              <span className="text-spine-neutral-800">Our Team:</span> Introduce the core members of your team, their expertise, and their commitment to your clients' success.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <Image src={list_point} alt="point" />
            <span>
              <span className="text-spine-neutral-800">Core Values:</span> Share your company's core values and the principles that guide your work.О
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <Image src={list_point} alt="point" />
            <span>
              <span className="text-spine-neutral-800">Client-Centric Approach:</span> Emphasize your dedication to delivering outstanding service and results for your clients.
            </span>
          </li>
        </ul>
        <button className="bg-spine-pale-lime rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 px-6 py-3 w-[7.75rem]">
          About Us
        </button>
      </div>
      <Image
        src={about_img_1}
        alt="about img 1"
      />
    </div>
  )
}

export default About