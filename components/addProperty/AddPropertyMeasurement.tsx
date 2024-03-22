import { useMyContext } from "../UI/Context";

const AddPropertyMeasurement = () => {
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
    <div className="mb-4 flex flex-wrap">
      <div className="w-full sm:w-1/3 pr-2">
        <label htmlFor="beds" className="block text-gray-700 font-bold mb-2">
          Beds
        </label>
        <input
          type="number"
          id="beds"
          name="beds"
          className="border rounded w-full py-2 px-3"
          required
          value={fields.beds}
          onChange={handleChange}
        />
      </div>
      <div className="w-full sm:w-1/3 px-2">
        <label htmlFor="baths" className="block text-gray-700 font-bold mb-2">
          Baths
        </label>
        <input
          type="number"
          id="baths"
          name="baths"
          className="border rounded w-full py-2 px-3"
          required
          value={fields.baths}
          onChange={handleChange}
        />
      </div>
      <div className="w-full sm:w-1/3 pl-2">
        <label
          htmlFor="square_feet"
          className="block text-gray-700 font-bold mb-2"
        >
          Square Feet
        </label>
        <input
          type="number"
          id="square_feet"
          name="square_feet"
          className="border rounded w-full py-2 px-3"
          required
          value={fields.square_feet}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddPropertyMeasurement;
