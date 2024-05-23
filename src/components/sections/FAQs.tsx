'use client';

import Image from "next/image"
import { arrow_caret_down, arrow_caret_up, faq_icon } from "../../../public/assets/icons"
import { useState } from "react";
import { underline_06 } from "../../../public/assets/images";

const questions = [
  {
    title: "What is Spine?",
    body: `Spine is a cutting-edge platform designed to elevate your digital agency's online presence. 
    It combines impressive design with intuitive features, empowering you to tell your agency's story in a way that captivates clients.`
  },
  {
    title: "How can Spine enhance my digital agency's narrative?",
    body: `Add text here`
  },
  {
    title: "What makes Spine different from other website solutions?",
    body: `Add text here`
  },
  {
    title: "Is Spine suitable for agencies of all sizes?",
    body: `Add text here`
  },
  {
    title: "How can Spine help improve my agency's creativity?",
    body: `Add text here`
  }
];

const FAQs = () => {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="container lg:px-0 px-6 lg:pt-40 pt-[3.75rem] lg:pb-20 pb-10">
      <div className="flex flex-col lg:space-y-[3.75rem] space-y-10">
        <div className="relative flex flex-col gap-y-5 lg:mx-[6.25rem]">
          <Image
            src={underline_06}
            alt="underline-06"
            className="absolute lg:left-11 left-[6.5625rem] lg:top-[7.125rem] top-[1.125rem] z-10 lg:w-[14.8125rem] lg:h-[2.0625rem] w-[7.8125rem] h-[1.0625rem]"
          />
          <h1 className="font-sf-pro font-bold lg:text-web-display-2 text-display-2 text-spine-neutral-800">
            Got Questions? We've Got Answers!
          </h1>
          <div className="flex space-x-3">
            <Image
              src={faq_icon}
              alt="faq icon"
            />
            <span className="font-poppins font-bold lg:text-web-body-2 text-body-1 text-spine-neutral-800">
              Check out the services
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-5 lg:mx-[6.25rem]">
          {questions.map((question, index) => (
            <div key={index}>
              <button className={
                `flex items-center justify-between 
                ${open === index ? `bg-spine-pale-lime` : `bg-spine-anti-flash-white`}
               rounded-xl p-5 w-full`
              } onClick={() => setOpen(index)}>
                <h1 className="font-sf-pro font-bold lg:text-web-display-5 text-display-4 text-spine-neutral-800 text-left">
                  {question.title}
                </h1>
                <Image
                  src={arrow_caret_up}
                  alt="arrow caret up"
                  className={`${open === index ? `` : `hidden`}`}
                />
                <Image
                  src={arrow_caret_down}
                  alt="arrow caret down"
                  className={`${open === index ? `hidden` : ``}`}
                />
              </button>
              <p className={
                `${open === index ? `` : `hidden`} 
              bg-spine-anti-flash-white rounded-xl font-poppins font-bold lg:text-web-body-1 text-body-2 text-spine-neutral-500 px-5 pt-5 lg:pb-8 pb-5 mt-5 w-full`
              }>
                {question.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs