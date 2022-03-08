import { useState, useEffect } from "react";
import { useOutletContext, useNavigate, useSubmit, Link } from "remix";
import ContactInfo from "~/components/ContactInfo";
import DeliveryInfo from "~/components/DeliveryInfo";

export default function Index() {
  const { translator, setOrderItem, order } = useOutletContext();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(order.delivery == "delivery");

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
    navigate("/newOrder", { replace: false });
  };

  useEffect(() => {
    setOrderItem("delivery_type", delivery ? "delivery" : "pickup");
  }, [delivery, setOrderItem]);

  return (
    <div className="flex flex-col">
      <ContactInfo
        translator={translator}
        order={order}
        handleChange={handleChange}
      />
      <DeliveryInfo
        translator={translator}
        handleDelivery={handleDelivery}
        handleChange={handleChange}
        order={order}
        delivery={delivery}
        nextForm={nextForm}
      />
    </div>
  );
}
