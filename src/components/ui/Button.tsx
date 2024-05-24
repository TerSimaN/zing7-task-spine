import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { no_icon } from "../../../public/assets/icons";

const Button = (props: {
    className: string,
    btnText: string,
    btnHasIcon: boolean,
    btnIcon?: {
        btnIconSrc: string | StaticImport,
        btnIconAlt: string
    }
}) => {
    return (
        <button className={`${props.btnHasIcon ? `flex items-center justify-between` : ``} ${props.className}`}>
            {props.btnText}
            <Image
                src={props.btnIcon?.btnIconSrc ?? no_icon}
                alt={props.btnIcon?.btnIconAlt ?? 'no icon'}
                className={`${props.btnHasIcon ? `` : `hidden`}`}
            />
        </button>
    )
}

export default Button