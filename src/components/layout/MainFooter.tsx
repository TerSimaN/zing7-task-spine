import Link from "next/link"
import LogoMark from "../ui/LogoMark"
import LogoTypo from "../ui/LogoTypo"
import FacebookLogo from "../ui/FacebookLogo"
import TwitterLogo from "../ui/TwitterLogo"
import InstagramLogo from "../ui/InstagramLogo"

const menu_section_links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' }
];

const services_section_links = [
    { name: 'Web Design & Development', href: '#' },
    { name: 'Branding', href: '#' },
    { name: 'Digital Marketing', href: '#' },
    { name: 'Content Creation', href: '#' },
    { name: 'Technical Support', href: '#' }
];

const MainFooter = () => {
    return (
        <footer className="bg-spine-neutral-800">
            <div className="container lg:px-0 px-6 lg:pt-20 pt-[3.75rem]">
                <div className="flex lg:flex-row flex-col lg:space-x-[8.5rem]">
                    <div className="flex flex-col max-lg:items-center space-y-7 max-w-[23rem]">
                        <Link href={'/'} className="flex items-end gap-x-1 w-full max-w-[12.5rem]">
                            <LogoMark className="fill-spine-pale-lime w-7 h-10" />
                            <LogoTypo className="fill-white w-[5.35rem] h-8" />
                        </Link>
                        <p className="font-poppins font-bold text-web-body-3 text-spine-neutral-300 lg:text-left text-center">
                            Spine is the ultimate boost for your online presence.
                            We're here to supercharge your digital agency's journey.
                        </p>
                        <div className="flex space-x-5">
                            <Link href={'https://www.facebook.com/'}>
                                <FacebookLogo className="fill-white" />
                            </Link>
                            <Link href={'https://twitter.com/'}>
                                <TwitterLogo className="fill-white" />
                            </Link>
                            <Link href={'https://www.instagram.com/'}>
                                <InstagramLogo className="fill-white" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col max-lg:items-center lg:space-x-[3.75rem] xl:mt-0 mt-20 w-full">
                        <div className="space-y-5 w-full max-w-[9.25rem]">
                            <h1 className="font-poppins font-bold text-web-body-1 text-white">Menu</h1>
                            <ul className="space-y-3 font-poppins font-bold text-web-body-2 text-spine-neutral-300">
                                {menu_section_links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-5 md:mt-0 mt-[3.75rem] w-full max-w-[9.125rem]">
                            <h1 className="font-poppins font-bold text-web-body-1 text-white">Services</h1>
                            <ul className="space-y-2 font-poppins font-bold text-web-body-2 text-spine-neutral-300">
                                {services_section_links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-5 md:mt-0 mt-[3.75rem] w-full max-w-[15.75rem]">
                            <h1 className="font-poppins font-bold text-web-body-1 text-white lg:text-left text-center">
                                Join our newsletter
                            </h1>
                            <form className="flex flex-col lg:items-start items-center space-y-5">
                                <input
                                    className="bg-transparent border-[0.5px] border-spine-neutral-100 placeholder:font-poppins placeholder:font-bold placeholder:text-body-2 placeholder:text-spine-neutral px-3 py-3 w-full"
                                    type="email"
                                    placeholder="Enter email address"
                                />
                                <button className="bg-spine-pale-lime rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 px-6 py-3">
                                    Get Start
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center border-t border-white py-10 sm:mt-20 lg:mt-24 mt-16">
                    <span className="font-poppins font-bold text-web-body-2 text-white">
                        @2024 Spine ALL RIGHTS REVERSED
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter