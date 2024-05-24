'use client';

import Image from "next/image";
import { service_img_1, service_img_2, service_img_3, underline_06 } from "../../../public/assets/images";
import ServiceCard from "../layout/ServiceCard";
import ButtonRoundLeft from "../ui/ButtonRoundLeft";
import ButtonRoundRight from "../ui/ButtonRoundRight";
import { useState } from "react";
import Button from "../ui/Button";

const cards = [
  {
    imgSrc: service_img_1,
    imgAlt: 'service img 1',
    header: 'Web Design and Development',
    text: `Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites.
    Elevate your online identity with our cutting-edge web design and development services.`,
    btnText: 'See All'
  },
  {
    imgSrc: service_img_2,
    imgAlt: 'service img 2',
    header: 'Graphic Design and Branding',
    text: `Make a lasting impression with captivating visuals and a strong brand identity.
    Our graphic design and branding services ensure that your digital presence reflects the uniqueness of your agency.`,
    btnText: 'See All'
  },
  {
    imgSrc: service_img_3,
    imgAlt: 'service img 3',
    header: 'Digital Marketing Solutions',
    text: `Drive traffic, engagement, and conversions with our comprehensive digital marketing strategies.
    From SEO optimization to social media management, we're your partners in achieving online visibility and success.`,
    btnText: 'See All'
  },
];

const Service = () => {
  const [visible, setVisible] = useState(0);
  let currentlyVisible: number = 0;
  let isVisible: boolean = false;

  return (
    <section id="services" className="container lg:px-0 px-6 lg:pt-[7.5rem] lg:pb-20 py-[3.75rem]">
      <div className="flex flex-col lg:space-y-20 space-y-[3.75rem]">
        <div className="relative flex lg:flex-row flex-col lg:gap-x-[3.75rem] lg:space-y-0 space-y-3">
          <Image
            src={underline_06}
            alt="underline-06"
            className="absolute lg:left-0 left-2 lg:top-[7.125rem] top-[4.375rem] z-10 lg:w-fit lg:h-fit w-[6.4375rem] h-[0.8125rem]"
          />
          <h1 className="font-sf-pro font-bold lg:text-web-display-2 text-display-2 text-spine-neutral-800 text-balance">
            Elevate Your Digital Presence
          </h1>
          <div className="flex flex-col items-start lg:space-y-7 space-y-8 max-w-[28.75rem]">
            <p className="font-poppins font-bold lg:text-web-body-2 text-body-2 text-spine-neutral-600">
              Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites.
              Elevate your online identity with our cutting-edge web design and development services.
            </p>
            <Button
              btnText="See All"
              btnHasIcon={false}
              className="hover:bg-transparent/5 border border-spine-neutral-800 rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 px-6 py-3"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex overflow-x-hidden">
            {cards.map((card, index) => {
              if (visible === index) {
                isVisible = true;
                currentlyVisible = index;
              }

              return (
                <ServiceCard
                  key={index}
                  imgSrc={card.imgSrc}
                  imgAlt={card.imgAlt}
                  header={card.header}
                  text={card.text}
                  btnText={card.btnText}
                  isVisible={isVisible}
                />
              )
            })}
          </div>
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-2">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`border-4 rounded-full ${currentlyVisible === cards.indexOf(card) ? `border-spine-neutral-800 w-[2.125rem]` : `border-spine-neutral`}`}
                ></div>
              ))}
              <div className="border-4 rounded-full border-spine-neutral"></div>
            </div>
            <div className="border border-spine-neutral w-full lg:max-w-full max-w-14"></div>
            <div className="flex items-center space-x-7">
              <button onClick={() => {
                let newValue = visible - 1;
                if ((newValue > -1) && (newValue < cards.length)) {
                  setVisible(newValue);
                }
              }}>
                <ButtonRoundLeft className="hover:fill-transparent/5" />
              </button>
              <button onClick={() => {
                let newValue = visible + 1;
                if ((newValue > -1) && (newValue < cards.length)) {
                  setVisible(newValue);
                }
              }}>
                <ButtonRoundRight className="hover:fill-spine-neutral-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service