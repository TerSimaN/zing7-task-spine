import { service_img_1, service_img_2, service_img_3 } from "../../../public/assets/images"
import ServiceCard from "../layout/ServiceCard";
import RoundButton from "../ui/RoundButton";

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
  return (
    <div className="container flex flex-col lg:space-y-20 space-y-[3.75rem] bg-spine-neutral-100 lg:px-0 px-6 lg:pt-[7.5rem] lg:pb-20 py-[3.75rem]">
      <div className="flex lg:flex-row flex-col lg:space-x-[3.75rem] lg:space-y-0 space-y-3">
        <h1 className="font-sf-pro font-bold lg:text-web-display-2 text-display-2 text-spine-neutral-800 text-balance">
          Elevate Your Digital Presence
        </h1>
        <div className="flex flex-col lg:space-y-7 space-y-8 max-w-[28.75rem]">
          <p className="font-poppins font-bold lg:text-web-body-2 text-body-2 text-spine-neutral-600">
            Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites.
            Elevate your online identity with our cutting-edge web design and development services.
          </p>
          <button className="border border-spine-neutral-800 rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 px-6 py-3 w-[6.5rem]">
            See All
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="flex space-x-[4.5rem] overflow-x-auto max-w-[73rem]">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              imgSrc={card.imgSrc}
              imgAlt={card.imgAlt}
              header={card.header}
              text={card.text}
              btnText={card.btnText}
            />
          ))}
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <div className="border-4 border-spine-neutral-800 rounded-full w-[2.125rem]"></div>
            <div className="border-4 border-spine-neutral rounded-full"></div>
            <div className="border-4 border-spine-neutral rounded-full"></div>
            <div className="border-4 border-spine-neutral rounded-full"></div>
          </div>
          <div className="border border-spine-neutral w-full lg:max-w-[55.125rem] max-w-14"></div>
          <div className="flex items-center space-x-7">
            <button>
              <RoundButton className="hover:stroke-white hover:fill-spine-neutral-800" />
            </button>
            <button>
              <RoundButton className="rotate-180 hover:stroke-white hover:fill-spine-neutral-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service