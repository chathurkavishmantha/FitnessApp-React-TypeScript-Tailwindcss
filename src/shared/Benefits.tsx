import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { BenefitType } from "./types";

export const benefitsData: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos reiciendis suscipit labore maxime eligendi similique eveniet nisi adipisci numquam odio nam eos ipsam, praesentium aperiam itaque pariatur delectus. Quia?",

    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos reiciendis suscipit labore maxime eligendi similique eveniet nisi adipisci numquam odio nam eos ipsam, praesentium aperiam itaque pariatur delectus. Quia?",

    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos reiciendis suscipit labore maxime eligendi similique eveniet nisi adipisci numquam odio nam eos ipsam, praesentium aperiam itaque pariatur delectus. Quia?",

    }
]