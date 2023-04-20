import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)"); {/* chack whene the currunt web resolution is 1060px or above */ }
    const navbarBackground = isTopOfPage ? `` : `bg-primary-100 drop-shadow`;
    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween}  fixed top-0 p-2 z-30 w-full`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LIFT */}
                        <img alt="logo" src={Logo} />

                        {/* RIGHT */}
                        {isAboveMediumScreens
                            ?
                            (
                                <div className={`${flexBetween} w-full`}>
                                    <div className={`${flexBetween} gap-8 text-sm`}>
                                        <Link
                                            page="Home"
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                        <Link
                                            page="Benefit"
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                        <Link
                                            page="Our Classes"
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                        <Link
                                            page="Contact Us"
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    </div>
                                    <div className={`${flexBetween} gap-8`}>
                                        <p>Sign In</p>

                                        <ActionButton
                                            setSelectedPage={setSelectedPage}
                                        >
                                            become a member
                                        </ActionButton>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <button
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-white" />

                                </button>
                            )

                        }
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODEL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => { setIsMenuToggled(!isMenuToggled) }}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 text-2xl ml-[33%]">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefit"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar