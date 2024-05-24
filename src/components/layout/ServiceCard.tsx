import Image from "next/image"
import { arrow_east } from "../../../public/assets/icons"
import Button from "../ui/Button"

const ServiceCard = (props: {
    imgSrc: string,
    imgAlt: string,
    header: string,
    text: string,
    btnText: string,
    isVisible: boolean
}) => {
    return (
        <div className={`${props.isVisible ? `` : `hidden`} flex lg:flex-row flex-col items-center lg:space-x-[3.75rem] lg:space-y-0 space-y-10 lg:min-w-[73.125rem] min-w-full`}>
            <div className="bg-white rounded-[1.75rem] lg:w-[25.5rem] w-[21rem] lg:h-[25.5rem] h-[21rem]">
                <Image
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    className="object-scale-down object-center w-full h-full"
                />
            </div>
            <div className="flex flex-col space-y-8 max-w-[44rem]">
                <div className="flex flex-col space-y-5 border-b border-spine-neutral-300 pb-8">
                    <h1 className="font-sf-pro font-bold lg:text-web-display-4 text-display-2 text-spine-neutral-800">{props.header}</h1>
                    <p className="font-poppins font-bold lg:text-web-body-2 text-body-1 text-spine-neutral-600">{props.text}</p>
                </div>
                <Button
                    btnText={props.btnText}
                    btnHasIcon={true}
                    btnIcon={{ btnIconSrc: arrow_east, btnIconAlt: "arrow east" }}
                    className="bg-spine-neutral-800 hover:bg-spine-neutral-600 rounded-xl font-poppins font-bold text-button-2 text-white px-6 py-3 w-32"
                />
            </div>
        </div>
    )
}

export default ServiceCard