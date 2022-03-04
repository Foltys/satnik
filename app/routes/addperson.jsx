import { useState } from "react";
import { useOutletContext, useNavigate, Link } from "remix";

export default function AddPerson() {
  const { translator, setOrderItem } = useOutletContext();
  const navigate = useNavigate();
  const nextForm = (e) => {
    e.preventDefault();
    //    setOrderItem("něco");
    navigate("/orderone", { replace: false });
  };

  const editItem = (e) => {
    e.preventDefault();
    //nevim, mock
    navigate("/orderone", { replace: false });
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative">
          <div className="flex flex-col">
            <div className="w-full mx-auto">
              <div className="flex flex-col md:mb-12">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">
                  Objednávka
                </h1>
              </div>
            </div>
            <div className="flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]">
              <img src="woman.svg" alt="man" className="my-4 mx-2" />
              <div className=" flex flex-col justify-center mx-4">
                <span className="text-2xl font-bold">Olena Kyashenko</span>
                <span className="py-2">
                  Svrchní oblečení (Vel. M - 2 ks trika, 2 ks mikina, 1ks svetr)
                </span>
                <button
                  onClick={editItem}
                  className="font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
                >
                  Upravit
                </button>
              </div>
            </div>
            <div className="w-full mx-auto">
              <div className="flex flex-col md:mb-12">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 mt-12 text-gray-900 ml-1">
                  Přidat další osobu
                </h1>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={nextForm}
                className="rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
              >
                <img src="woman.svg" alt="man" className="my-4 " />
                <span className="text-2xl font-bold">Žena</span>
                <span className="text-[#0A9DBF] font-semibold mt-4">
                  Vybrat
                </span>
              </button>
              <button
                onClick={nextForm}
                className="rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
              >
                <img src="man.svg" alt="man" className="my-4 " />
                <span className="text-2xl font-bold">Muž</span>
                <span className="text-[#0A9DBF] font-semibold mt-4">
                  Vybrat
                </span>
              </button>
              <button
                onClick={nextForm}
                className="rounded-2xl group bg-white w-1/3 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
              >
                <img src="kid.svg" alt="man" className="my-4 " />
                <span className="text-2xl font-bold">Dítě</span>
                <span className="text-[#0A9DBF] font-semibold mt-4">
                  Vybrat
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            className="rounded-lg w-full object-cover object-center"
            alt="illustration"
          />
        </div>
      </div>
    </section>
  );
}
