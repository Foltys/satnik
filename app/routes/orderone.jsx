import { useState } from "react";
import { useOutletContext, useNavigate } from "remix";

export default function OrderOne() {
    const { translate, setOrderItem } = useOutletContext();
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
                            <div className="flex">
                                <div className="rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center">
                                    <img src="woman.svg" alt="man" className="my-4 " />
                                    <span className="text-2xl font-bold group-hover:text-[#0A9DBF]">Žena</span>
                                    <button className="font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full">Odebrat</button>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="p-2 w-1/5">
                                    <div className="relative my-2 mx-1">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 font-semibold text-base text-gray-600"
                                        >
                                            Věk
                                        </label>
                                        <input

                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="22"
                                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-4/5">
                                    <div className="relative my-2 mx-1">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 font-semibold text-base text-gray-600"
                                        >
                                            Jméno
                                        </label>
                                        <input

                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Aa"
                                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mx-auto">
                                <div className="flex flex-col md:mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">Výběr oblečení</h1>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="p-2 w-full">
                                    <div className="relative my-2 mx-1">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 font-semibold text-base text-gray-600"
                                        >
                                            Jaké oblečení potřebujete?
                                        </label>
                                        <textarea
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="5 ks trika, 2 ks kalhoty"
                                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="p-2 w-2/5">
                                        <div className="relative my-2 mx-1">
                                            <label
                                                htmlFor="name"
                                                className="leading-7 font-semibold text-base text-gray-600"
                                            >
                                                Velikost oblečení
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="S"
                                                className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-2/5">
                                        <div className="relative my-2 mx-1">
                                            <label
                                                htmlFor="name"
                                                className="leading-7 font-semibold text-base text-gray-600"
                                            >
                                                Velikost bot
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="44"
                                                className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 my-10 mx-2 w-full md:w-1/2">
                                <button
                                    className="items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-white hover:outline-[#eb2f06]"
                                >
                                    Přidat další osobu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}