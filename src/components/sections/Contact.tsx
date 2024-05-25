import Button from "../ui/Button"

const Contact = () => {
  return (
    <section id="contact" className="container lg:px-0 px-6 lg:pt-20 lg:pb-40 py-[3.75rem]">
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between lg:space-x-[6.875rem] lg:space-y-0 space-y-20">
        <div className="flex flex-col lg:space-y-[3.75rem] space-y-10 max-w-[33.125rem]">
          <div className="flex flex-col lg:space-y-8 space-y-5">
            <h1 className="font-sf-pro font-bold lg:text-web-display-4 text-display-2 text-spine-neutral-800 lg:text-left text-center">
              Get in Touch with Spine
            </h1>
            <p className="font-poppins font-bold lg:text-web-body-2 text-web-body-2 text-spine-neutral-500 lg:text-left text-center">
              Whether you have questions about our services,
              want to discuss a potential collaboration,
              or just feel like saying hello, we&apos;d love to hear from you.
            </p>
          </div>
          <div className="flex flex-col lg:items-start items-center lg:space-y-5 space-y-4">
            <div className="flex items-center lg:space-x-5 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-8 size-6 stroke-spine-neutral-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="font-poppins font-bold lg:text-web-body-1 text-web-body-2 text-spine-neutral-600">
                Plovdiv, K. Riacho 95, Bulgaria
              </span>
            </div>
            <div className="flex items-center lg:space-x-5 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-8 size-6 stroke-spine-neutral-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span className="font-poppins font-bold lg:text-web-body-1 text-web-body-2 text-spine-neutral-600">
                +359 884 77 77 777
              </span>
            </div>
            <div className="flex items-center lg:space-x-5 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-8 size-6 stroke-spine-neutral-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span className="font-poppins font-bold lg:text-web-body-1 text-web-body-2 text-spine-neutral-600">
                j.borisov@spine.com
              </span>
            </div>
          </div>
        </div>
        <form action={'#'} method="POST" className="flex flex-col space-y-5 w-full max-w-[33.125rem]">
          <div className="flex flex-col space-y-2">
            <label className="font-poppins font-bold text-web-body-2 text-spine-neutral-800 select-none" htmlFor="first-name">
              Name <span className="font-raleway font-bold text-[1.375rem] text-spine-pale-red">⁕</span>
            </label>
            <div className="flex space-x-5">
              <input className="bg-spine-anti-flash-white rounded-xl placeholder:font-poppins placeholder:font-bold placeholder:text-body-1 placeholder:text-spine-neutral-400 px-5 py-4 w-full" type="text" placeholder="First Name" name="first-name" id="first-name" required={true} />
              <input className="bg-spine-anti-flash-white rounded-xl placeholder:font-poppins placeholder:font-bold placeholder:text-body-1 placeholder:text-spine-neutral-400 px-5 py-4 w-full" type="text" placeholder="Last Name" name="last-name" id="last-name" required={true} />
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-poppins font-bold text-web-body-2 text-spine-neutral-800 select-none" htmlFor="email">
                Email <span className="font-raleway font-bold text-[1.375rem] text-spine-pale-red">⁕</span>
              </label>
              <input className="bg-spine-anti-flash-white rounded-xl placeholder:font-poppins placeholder:font-bold placeholder:text-body-1 placeholder:text-spine-neutral-400 px-5 py-4 w-full" type="email" placeholder="company@gmail.com" name="email" id="email" required={true} />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-poppins font-bold text-web-body-2 text-spine-neutral-800 select-none" htmlFor="phone-number">
                Phone <span className="font-raleway font-bold text-[1.375rem] text-spine-pale-red">⁕</span>
              </label>
              <input className="bg-spine-anti-flash-white rounded-xl placeholder:font-poppins placeholder:font-bold placeholder:text-body-1 placeholder:text-spine-neutral-400 px-5 py-4 w-full" type="tel" placeholder="+359 000 000 000" name="phone-number" id="phone-number" required={true} />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label className="font-poppins font-bold text-web-body-2 text-spine-neutral-800 select-none" htmlFor="message">
              Comment or Message
            </label>
            <textarea className="bg-spine-anti-flash-white rounded-xl resize-none px-6 py-4 h-[11.875rem]" name="message" id="message"></textarea>
          </div>
          <Button
            btnText="Send Message"
            className="bg-spine-pale-lime hover:bg-spine-pale-lime/80 rounded-xl font-inter font-bold text-button-3 text-spine-neutral-800 px-8 py-4"
          />
        </form>
      </div>
    </section>
  )
}

export default Contact