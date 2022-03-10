import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "remix";
import PersonOnOrder from "~/components/PersonOnOrder";
import PersonToOrder from "~/components/PersonToOrder";
import GenderSelector from "~/components/GenderSelector";



/*
- show already added people
- if no people added, show gender select to add 1 person
- if click on add new person, validate inputs and add the person to added people and show gender select again
- after click on gender select, show empty form
*/

export default function NewOrder() {
  const { translator, order, addPersonToOrder } = useOutletContext();
  const [selectedGender, selectGender] = useState();
  const [newPersonInfo, setNewPersonInfo] = useState({});
  const [editingPerson, setEditingPerson] = useState(null);

  const handleInputChange = (fieldName) => (e) => {
    console.log(fieldName);
    newPersonInfo[fieldName] = e.target.value;
    setNewPersonInfo(newPersonInfo);
  };

  const navigate = useNavigate();
  const pickGender = (gender) => (e) => {
    e.preventDefault();
    selectGender(gender);
    // newPersonInfo["gender"] = gender;
    if (gender == "kid") {
      newPersonInfo.adult = false;
      newPersonInfo.sex = "man";
    } else {
      newPersonInfo.adult = true;
      newPersonInfo.sex = gender;
    }
    setNewPersonInfo(newPersonInfo);
  };

  const nextForm = () => {
    console.log(order);
  };

  const addNextPerson = (event) => {
    event.preventDefault();
    // if (!validatePerson(newPersonInfo)) {
    //   console.log(validatePerson.errors);
    // }
    addPersonToOrder(newPersonInfo, editingPerson);
    cleanPersonForm();
  };

  const cleanPersonForm = () => {
    selectGender(null);
    setEditingPerson(null);
    setNewPersonInfo({});
  };

  useEffect(() => {
    console.log(editingPerson);
  }, [editingPerson]);

  return (
    <div className="flex flex-col">
      <div className="w-full mx-auto">
        <div className="flex items-center md:mb-12">
          <button
            onClick={() => navigate('/')}
            className="items-center ml-1 mt-1 text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06] fill-[#0A9DBF] hover:fill-[#F8EBDB]"
          >
            <svg width="16" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m.293 8.293 4-4a1 1 0 1 1 1.414 1.414L3.415 8H15a1 1 0 1 1 0 2H3.415l2.294 2.294a1 1 0 1 1-1.414 1.414l-4-4a.997.997 0 0 1-.002-1.414Z" /></svg>
          </button>
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 ml-5">
            {translator.translate("order")}
          </h1>
        </div>
      </div>
      {order.persons && order.persons.length ? (
        order.persons.map((item, key) => {
          return (
            <PersonOnOrder
              key={key}
              details={item}
              editItem={() => setEditingPerson(key)}
              translator={translator}
            />
          );
        })
      ) : (
        <div className="text-[#0A9DBF] font-medium my-5">
          {translator.translate("who_is_wearing")}
        </div>
      )}
      {!selectedGender ? (
        <GenderSelector translator={translator} selectGender={pickGender} />
      ) : (
        <PersonToOrder
          translator={translator}
          selectedGender={selectedGender}
          handleInputChange={handleInputChange}
        />
      )}
      <div className="py-2 my-10 mx-2 w-full md:w-1/2">
        <button
          onClick={addNextPerson}
          className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]"
        >
          {translator.translate("add_person")}
        </button>
      </div>
      <hr className="w-full my-4 border border-[#957D5E] opacity-20" />
      <div className="py-2 my-10 mx-2 w-full md:w-1/2">
        <button
          onClick={nextForm}
          className="items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
        >
          {translator.translate("continue")}
        </button>
      </div>
    </div>
  );
}
