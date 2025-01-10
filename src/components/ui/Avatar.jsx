import Text from './Text';
import imgDefault from "../../assets/images/bg.avif";
import imgWebpDefault from "../../assets/images/bg.webp";
import { Link } from "react-router-dom";

export default function Avatar({ pseudo, img, imgWebp }) {
  return (
    <div className="w-full flex flex-col items-center">
        <picture className="avatar">
            <source srcSet={img || imgDefault} type="image/avif" />
            <source srcSet={imgWebp || imgWebpDefault} type="image/webp" />
            <img
                src={img || imgDefault}
                alt="Illustration du formulaire"
                className="rounded-full w-[96px] h-[96px] object-cover"
            />
        </picture>
        <p className="pt-3 md:py-3">
        <Text type="text-accent" className="font-bold py-2">
            {pseudo || "John Doe"}
        </Text>
        </p>
        <Link to="/logout" className="underline">
            Logout
        </Link>
    </div>
  )
}
