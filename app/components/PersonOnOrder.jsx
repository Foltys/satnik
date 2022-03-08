export default function PersonOnOrder({ translator, details, editItem }) {
  return (
    <div className="flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]">
      <img src="woman.svg" alt="man" className="my-4 mx-2" />
      <div className=" flex flex-col justify-center mx-4">
        <span className="text-2xl font-bold">{details.fullname}</span>
        <span className="py-2">{details.description}</span>
        <button
          onClick={editItem}
          className="font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
        >
          {translator.translate("edit")}
        </button>
      </div>
    </div>
  );
}
