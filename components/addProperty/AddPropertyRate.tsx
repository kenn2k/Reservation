import { useMyContext } from "../UI/Context";

const AddPropertyRate = () => {
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
    <div className="mb-4 bg-blue-50 p-4">
      <label className="block text-gray-700 font-bold mb-2">
        Rates (Leave blank if not applicable)
      </label>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="flex items-center">
          <label htmlFor="weekly_rate" className="mr-2">
            Weekly
          </label>
          <input
            type="number"
            id="weekly_rate"
            name="rates.weekly"
            className="border rounded w-full py-2 px-3"
            value={fields.rates.weekly || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="monthly_rate" className="mr-2">
            Monthly
          </label>
          <input
            type="number"
            id="monthly_rate"
            name="rates.monthly"
            className="border rounded w-full py-2 px-3"
            value={fields.rates.monthly || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="nightly_rate" className="mr-2">
            Nightly
          </label>
          <input
            type="number"
            id="nightly_rate"
            name="rates.nightly"
            className="border rounded w-full py-2 px-3"
            value={fields.rates.nightly || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPropertyRate;
