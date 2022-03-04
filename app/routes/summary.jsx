import { useState } from "react";
import { useOutletContext, useNavigate, Link } from "remix";

export default function Summary() {
    const { translator, setOrderItem } = useOutletContext();
    const submitForm = (e) => {
        e.preventDefault();
        //    odeslat data na server
        //    pokud se to podarilo, zobrazit /confirmation
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
                            <div className="w-full mx-auto">
                                <div className="flex flex-col md:mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">Objednávka</h1>
                                </div>
                            </div>
                            <div className="flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]">
                                <img src="woman.svg" alt="man" className="my-4 mx-2" />
                                <div className=" flex flex-col justify-center mx-4">
                                    <span className="text-2xl font-bold">Olena Kyashenko</span>
                                    <span className="py-2">Svrchní oblečení (Vel. M - 2 ks trika, 2 ks mikina, 1ks svetr)</span>
                                    <button className="font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full">Upravit</button>
                                </div>
                            </div>
                            <div className="py-2 my-10 mx-2 w-full md:w-1/2">
                                <button
                                    className="items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
                                >
                                    Přidat další osobu
                                </button>
                            </div>
                            <hr className="w-full my-4 border border-[#957D5E] opacity-20" />
                            <div className="w-full mx-auto">
                                <div className="flex flex-col md:mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 mt-12 text-gray-900 ml-1">Shrnutí objednávky</h1>
                                </div>
                            </div>
                            <Link to="/?edit" className="text-[#0A9DBF] font-semibold ml-1 underline">Upravit kontaktní údaje</Link>
                            <div className="flex">
                                <div className="flex flex-col w-1/2 px-1">
                                    <span className="font-semibold mt-4">Objednávající</span>
                                    <span >Olena Kyashenko</span>
                                    <span >+38 0503 20 20 46</span>
                                    <span>Olena.K@gmail.com</span>
                                    <span className="font-semibold mt-4">Doručovací adresa</span>
                                    <span>Jakub Hertl</span>
                                    <span>U Uranie 27, Praha 7</span>
                                    <span>17000</span>
                                    <span>+420 776 764 221</span>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <span className="font-semibold mt-4">Pro koho a co objednáváte</span>
                                    <span>Olena Kyiaskho</span>
                                    <span>Svrchní oblečení (Vel. M - 2 ks trika, 2 ks mikina, 1ks svetr)</span>
                                </div>
                            </div>

                            <hr className="w-full my-10 border border-[#957D5E] opacity-20" />
                            <div className="py-2 mx-2 w-full md:w-1/2">
                                <button
                                    onClick={submitForm}
                                    className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
                                >
                                    Objednat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}