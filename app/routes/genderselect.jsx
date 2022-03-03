import { useOutletContext } from "remix";
import { useState } from "react";

export default function GenderSelect() {
    const [translate] = useOutletContext();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <header className="text-gray-600 body-font sticky top-0 bg-[#F8EBDB] z-10 pb-2">
                <div className="container mx-auto flex flex-wrap flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 ml-5 md:ml-0" href="/">
                        <img src="red.svg" className="w-16 h-16 md:w-32 md:h-32" alt="Šatník Praha" />
                        <span className="ml-3 text-xl hidden">Šatník</span>
                    </a>
                    <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 hidden" href="/">First Link</a>
                    </nav>
                    <button className="inline-flex items-center text-[#0A9DBF] font-semibold  border-0 py-2 px-5 focus:outline-[#eb2f06] outline outline-offset-2 outline-[#0A9DBF] rounded-full text-base mr-5 hover:outline-[#eb2f06]">
                        <svg fill="none" className="w-4 h-4 mr-1" viewBox="0 0 24 24">
                            <rect width="24" height="12" fill="#005BBB" />
                            <rect width="24" height="12" y="12" fill="#FFD500" />
                        </svg><span className="hidden md:flex">{translate("language")}</span>
                    </button>
                </div>
            </header>

            <section className="text-gray-600 body-font relative">

                <div className="container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative">
                        <div className="flex flex-col">
                            <div className="w-full mx-auto">
                                <div className="flex flex-col md:mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">Objednávka</h1>
                                </div>
                                <div className="text-[#0A9DBF] font-medium my-5">Kdo bude oblečení nosit?
                                    V dalších krocích můžete objednat oblečení i pro další osoby.
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <div className="rounded-2xl bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center">
                                    <img src="woman.svg" alt="man" className="my-4" />
                                    <span className="text-2xl font-bold">Žena</span>
                                    <button className="text-[#0A9DBF] font-semibold mt-4">Vybrat</button>

                                </div>
                                <div className="rounded-lg bg-white w-1/3 h-80 p-8 border border-[#957D5E] ">
                                    AAA
                                </div>
                                <div className="rounded-lg bg-white w-1/3 h-80 p-8 border border-[#957D5E] ">
                                    AAA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}