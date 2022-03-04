import { useState } from "react";
import { useOutletContext, useNavigate, Link } from "remix";

export default function Confirmation() {
    const { translator, setOrderItem } = useOutletContext();
    const submitForm = (e) => {
        e.preventDefault();
    };
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <header className="text-gray-600 body-font sticky top-0 bg-[#F8EBDB] z-10 pb-2">
                <div className="container mx-auto flex flex-wrap flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 ml-5 md:ml-0" to="/">
                        <img src="red.svg" className="w-16 h-16 md:w-32 md:h-32" alt="Šatník Praha" />
                        <span className="ml-3 text-xl hidden">Šatník</span>
                    </Link>
                    <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 hidden" href="/">First Link</a>
                    </nav>
                    <button className="inline-flex items-center text-[#0A9DBF] font-semibold  border-0 py-2 px-5 focus:outline-[#eb2f06] outline outline-offset-2 outline-[#0A9DBF] rounded-full text-base mr-5 hover:outline-[#eb2f06]">
                        <svg fill="none" className="w-4 h-4 mr-1" viewBox="0 0 24 24">
                            <rect width="24" height="12" fill="#005BBB" />
                            <rect width="24" height="12" y="12" fill="#FFD500" />
                        </svg><span className="hidden md:flex">{translator.translate("language")}</span>
                    </button>
                </div>
            </header>

            <section className="text-gray-600 body-font relative">

                <div className="container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative">
                        <div className="flex flex-col">
                            <img className="flex rounded-2xl w-full h-72 p-2 " src="https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="delivery" />
                            <div className="w-full mx-auto">
                                <div className="flex flex-col md:mb-12">
                                    <h1 className="sm:text-5xl  text-5xl font-bold title-font my-12 text-[#eb2f06] ml-1">Úspěšně jste si objednali oblečení</h1>
                                </div>
                            </div>
                            <div className="w-full mx-auto text-lg font-semibold text-[#eb2f06] ml-1 ">
                                Dobrovolnící dělají, co můžou, aby k vám
                                objednané oblečení co nejdříve dorazilo.
                            </div>
                            <div className="w-full mx-auto text-xl my-12 mb-6 bg-[#eb2f06] text-[#F8EBDB] py-6 px-4 ml-1">
                                Vyčkejte na e-mail s dalšími informacemi.
                            </div>
                            <div className="py-2 my-10 mx-2 w-full md:w-1/2">
                                <button
                                    className="items-center flex ml-1 text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
                                >
                                    Dát o Šatníku vědět ostatním
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}