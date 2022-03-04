import { useState, useEffect } from "react";
import { useOutletContext, useNavigate, useSubmit, Link } from "remix";

export default function Index() {
  const { translator, setOrderItem, switchLanguage } = useOutletContext();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(true);

  const handleDelivery = (e) => {
    setDelivery(!delivery);
  };

  const handleChange = (identificator) => {
    return (event) => {
      setOrderItem([identificator], event.target.value);
    };
  };

  const nextForm = (e) => {
    e.preventDefault();
    navigate("/genderselect", { replace: false });
  };

  useEffect(() => {
    setOrderItem("delivery_type", delivery ? "delivery" : "pickup");
  }, [delivery, setOrderItem]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <header className="text-gray-600 body-font sticky top-0 bg-[#F8EBDB] z-10 pb-2">
        <div className="container mx-auto flex flex-wrap flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 ml-5 md:ml-0"
            to="/"
          >
            <img
              src="red.svg"
              className="w-16 h-16 md:w-32 md:h-32"
              alt="Šatník Praha"
            />
            <span className="ml-3 text-xl hidden">Šatník</span>
          </Link>
          <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 hidden" href="/">
              First Link
            </a>
          </nav>
          <button onClick={(e) => {
            translator.switch()
          }} className="inline-flex items-center text-[#0A9DBF] font-semibold  border-0 py-2 px-5 focus:outline-[#eb2f06] outline outline-offset-2 outline-[#0A9DBF] rounded-full text-base mr-5 hover:outline-[#eb2f06]">
            <svg fill="none" className="w-4 h-4 mr-1" viewBox="0 0 24 24">
              <rect width="24" height="12" fill="#005BBB" />
              <rect width="24" height="12" y="12" fill="#FFD500" />
            </svg>
            <span className="hidden md:flex">{translator.translate("language")}</span>
          </button>
        </div>
      </header>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative">
            <div className="flex flex-col">
              <div className="w-full mx-auto">
                <div className="flex flex-col md:mb-12">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">
                    {translator.translate("contact")}
                  </h1>
                </div>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full">
                    <div className="relative my-2 mx-1">
                      <label
                        htmlFor="name"
                        className="leading-7 font-semibold text-base text-gray-600"
                      >
                        {translator.translate("name_and_surname")}
                      </label>
                      <input
                        onChange={handleChange("fullname")}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Aa"
                        className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative my-2 mx-1">
                      <label
                        htmlFor="phone"
                        className="leading-7 font-semibold text-base text-gray-600"
                      >
                        {translator.translate("phone")}
                      </label>
                      <input
                        onChange={handleChange("phone")}
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+380 111 111 111"
                        className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="text-sm flex  text-[#957D5E]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {translator.translate("phone_to_find_you")}
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative my-2 mx-1">
                      <div className="flex">
                        <label
                          htmlFor="email"
                          className="leading-7 grow font-semibold text-base text-gray-600"
                        >
                          {translator.translate("email")}
                        </label>
                        <span className="text-[#957D5E] font-bold text-sm">
                          {translator.translate("optional")}
                        </span>
                      </div>
                      <input
                        onChange={handleChange("email")}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="@"
                        className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*adresa*/}
              <div className="w-full mx-auto mt-14">
                <div className="flex flex-col md:mb-12">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">
                    {translator.translate("delivery_address")}
                  </h1>
                </div>
                <div className="flex flex-wrap -m-2">
                  <div className="flex mx-3 my-5 font-bold space-x-2 text-[#0A9DBF]">
                    <input
                      className="accent-[#0A9DBF]"
                      type="radio"
                      id="radiodelivery"
                      name="radioselector"
                      value="radiodelivery"
                      checked={delivery == true}
                      onChange={handleDelivery}
                    />
                    <label htmlFor="radiodelivery">{translator.translate("deliver_to_adress")}</label>
                    <input
                      className="accent-[#0A9DBF]"
                      type="radio"
                      id="radiopickup"
                      name="radioselector"
                      value="radiopickup"
                      checked={delivery == false}
                      onChange={handleDelivery}
                    />
                    <label htmlFor="radiopickup">{translator.translate("pickup")}</label>
                  </div>
                  {delivery == true ? (
                    <>
                      <div className="p-2 w-full">
                        <div className="relative my-2 mx-1">
                          <label
                            htmlFor="name"
                            className="leading-7 font-semibold text-base text-gray-600"
                          >
                            {translator.translate("name_and_surname")}
                          </label>
                          <input
                            onChange={handleChange("delivery_fullname")}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Aa"
                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                        <div className="text-sm flex  text-[#957D5E]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {translator.translate("picker_name")}
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative my-2 mx-1">
                          <label
                            htmlFor="street"
                            className="leading-7 font-semibold text-base text-gray-600"
                          >
                            {translator.translate("street_and_number")}
                          </label>
                          <input
                            onChange={handleChange("delivery_street")}
                            type="text"
                            id="street"
                            name="street"
                            placeholder="Strašnická 12"
                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative my-2 mx-1">
                          <label
                            htmlFor="city"
                            className="leading-7 font-semibold text-base text-gray-600"
                          >
                            {translator.translate("city")}
                          </label>
                          <input
                            onChange={handleChange("delivery_city")}
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Praha"
                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative my-2 mx-1">
                          <label
                            htmlFor="city"
                            className="leading-7 font-semibold text-base text-gray-600"
                          >
                            {translator.translate("zip")}
                          </label>
                          <input
                            onChange={handleChange("delivery_zip")}
                            type="text"
                            id="psc"
                            name="psc"
                            placeholder="14000"
                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative my-2 mx-1">
                          <div className="flex">
                            <label
                              htmlFor="phone2"
                              className="leading-7 grow font-semibold text-base text-gray-600"
                            >
                              {translator.translate("phone")}
                            </label>
                            <span className="text-[#957D5E] font-bold text-sm">
                              {translator.translate("optional")}
                            </span>
                          </div>
                          <input
                            onChange={handleChange("delivery_phone")}
                            type="tel"
                            id="phone2"
                            name="phone2"
                            placeholder="+380 111 111 111"
                            className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                        <div className="text-sm flex  text-[#957D5E]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mx-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {translator.translate("phone_if_other")}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-2 w-full">
                      <div className="relative my-2 mx-1 bg-[#0A9DBF] text-xl flex flex-col text-[#F8EBDB] font-semibold p-5 md:w-2/3 ">
                        <span>Hala 13 v Pražské tržnici</span>
                        <span>Bubenské nábřeží 306</span>
                        <span>170 00 Praha 7</span>

                        <a className="mt-5" href="tel:+420737597070">
                          Mobil: 737 59 70 70
                        </a>
                        <a href="mailto:info@satnikpraha.cz">
                          E-mail: info@satnikpraha.cz
                        </a>
                        <a
                          href="https://goo.gl/maps/o6Z8qzkG6pnTRs7P8"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="w-44 text-base mt-10 text-[#F8EBDB] border-0 py-2 px-3 focus:outline-none outline  outline-[#F8EBDB] rounded-full  hover:text-[#eb2f06] hover:bg-[#F8EBDB]  hover:outline-[#F8EBDB] font-semibold">
                            {translator.translate("show_on_map")}
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="p-2 my-10 mx-2 w-full md:w-1/2">

                    <button
                      onClick={nextForm}
                      className="inline-flex items-center w-full  text-[#0A9DBF] border-0 py-4 px-6 focus:outline-none outline  outline-[#0A9DBF] rounded-full text-xl hover:bg-[#eb2f06] hover:text-white hover:outline-[#eb2f06]"
                    >
                      {translator.translate("continue_to_cloth_selection")}
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
    </div>
  );
}
