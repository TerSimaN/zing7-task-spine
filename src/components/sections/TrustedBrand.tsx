import Image from "next/image"
import { logoipsum_1, logoipsum_2, logoipsum_3, logoipsum_4, logoipsum_5 } from "../../../public/assets/logos"

const TrustedBrand = () => {
  return (
    <div className="container lg:py-20 py-9">
      <div className="border-y lg:py-7 py-3 overflow-hidden max-w-fit">
        <div className="flex items-center lg:space-x-20 space-x-9 sm:animate-none motion-safe:animate-slide">
          <Image
            src={logoipsum_1}
            alt="logoipsum_1"
            className="max-lg:h-4"
          />
          <Image
            src={logoipsum_2}
            alt="logoipsum_2"
            className="max-lg:h-4"
          />
          <Image
            src={logoipsum_3}
            alt="logoipsum_3"
            className="max-lg:h-4"
          />
          <Image
            src={logoipsum_4}
            alt="logoipsum_4"
            className="max-lg:h-4"
          />
          <Image
            src={logoipsum_5}
            alt="logoipsum_5"
            className="max-lg:h-4"
          />
        </div>
      </div>
    </div>
  )
}

export default TrustedBrand