import { useMyContext } from "../UI/Context";

const AddPropertyTitle = () => {
  const { fields, setFields } = useMyContext();
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
          htmlFor="property_type"
          className="block text-gray-700 font-bold mb-2"
        >
          Property Type
        </label>
        <select
          id="property_type"
          name="type"
          className="border rounded w-full py-2 px-3"
          required
          value={fields.type}
          onChange={handleChange}
        >
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Cabin Or Cottage">Cabin or Cottage</option>
          <option value="Room">Room</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Listing Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Somewhere where it’s beautiful..."
          required
          value={fields.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border rounded w-full py-2 px-3"
          rows={4}
          placeholder="Add an optional description of your property"
          value={fields.description}
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};

export default AddPropertyTitle;
