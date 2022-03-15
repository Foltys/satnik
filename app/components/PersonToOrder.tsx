export default function PersonToOrder(props: {
  translator: any;
  selectedGender: any;
  handleInputChange: any;
}) {
  const { translator, selectedGender, handleInputChange } = props;
  const isKid = selectedGender == "kid";
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center">
          <img src={`${selectedGender}.svg`} alt="man" className="my-4 " />
          <span className="text-2xl font-bold group-hover:text-[#0A9DBF]">
            {translator.translate(selectedGender)}
          </span>
          <button className="font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full">
            {translator.translate("remove")}
          </button>
        </div>
      </div>
      {isKid && (
        <div className="flex">
          <div className="flex mx-3 my-6 font-bold space-x-2 text-[#0A9DBF] items-center">
            <input
              className="accent-[#0A9DBF]"
              type="radio"
              id="girl"
              name="kidgenderselector"
              value="man"
              onChange={handleInputChange("sex")}
            />
            <label htmlFor="boy">{translator.translate("boy")}</label>
            <input
              className="accent-[#0A9DBF]"
              type="radio"
              id="girl"
              name="kidgenderselector"
              value="woman"
              onChange={handleInputChange("sex")}
            />
            <label htmlFor="girl">{translator.translate("girl")}</label>
          </div>
        </div>
      )}
      <div className="flex">
        <div className="py-2 w-1/5">
          <div className="relative my-2 mx-1">
            <label
              htmlFor="name"
              className="leading-7 font-semibold text-base text-gray-600"
            >
              {translator.translate("age")}
            </label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="22"
              className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange("age")}
            />
          </div>
        </div>
        <div className="py-2 w-4/5">
          <div className="relative my-2 mx-1">
            <label
              htmlFor="name"
              className="leading-7 font-semibold text-base text-gray-600"
            >
              {translator.translate("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Aa"
              className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange("fullname")}
            />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto">
        <div className="flex flex-col md:mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font my-4 text-gray-900 ml-1">
            {translator.translate("select_clothes")}
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-2 w-full">
          <div className="relative my-2 mx-1">
            <label
              htmlFor="name"
              className="leading-7 font-semibold text-base text-gray-600"
            >
              Jaké oblečení potřebujete?
            </label>
            <textarea
              id="name"
              name="name"
              placeholder="5 ks trika, 2 ks kalhoty"
              className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange("description")}
            />
          </div>
        </div>
        <div className="flex">
          <div className="py-2 w-2/5">
            <div className="relative my-2 mx-1">
              <label
                htmlFor="name"
                className="leading-7 font-semibold text-base text-gray-600"
              >
                {translator.translate("cloth_size")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="S"
                className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleInputChange("clothing_size")}
              />
            </div>
          </div>
          <div className="py-2 w-2/5">
            <div className="relative my-2 mx-1">
              <label
                htmlFor="name"
                className="leading-7 font-semibold text-base text-gray-600"
              >
                {translator.translate("shoes_size")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="44"
                className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleInputChange("shoe_size")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
