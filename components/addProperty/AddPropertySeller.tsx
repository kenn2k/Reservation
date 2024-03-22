import { useMyContext } from "../UI/Context";

const AddPropertySeller = () => {
  const { fields, setFields } = useMyContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");
      console.log(outerKey, innerKey);
      setFields((prevFields: any) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="seller_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Name
        </label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name"
          className="border rounded w-full py-2 px-3"
          placeholder="Name"
          value={fields.seller_info.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_email"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Email
        </label>
        <input
          type="email"
          id="seller_email"
          name="seller_info.email"
          className="border rounded w-full py-2 px-3"
          placeholder="Email address"
          required
          value={fields.seller_info.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_phone"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Phone
        </label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          className="border rounded w-full py-2 px-3"
          placeholder="Phone"
          value={fields.seller_info.phone}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default AddPropertySeller;
