import { useMyContext } from "../UI/Context";

const AddPropertyAmenities = () => {
  const { fields, setFields } = useMyContext();
  const handleChangeAmenities = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;

    // Clone the current amenities array
    const updatedAmenities = [...fields.amenities];

    if (checked) {
      // If the checkbox is checked, add the value to the array
      updatedAmenities.push(value);
    } else {
      // If the checkbox is unchecked, remove the value from the array
      const index = updatedAmenities.indexOf(value);
      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }

    // Update the state with the updated array of amenities
    setFields((prevFields) => ({
      ...prevFields,
      amenities: updatedAmenities,
    }));
  };
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Amenities</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div>
          <input
            type="checkbox"
            id="amenity_wifi"
            name="amenities"
            value="Wifi"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Wifi")}
          />
          <label htmlFor="amenity_wifi">Wifi</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_kitchen"
            name="amenities"
            value="Full Kitchen"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Full Kitchen")}
          />
          <label htmlFor="amenity_kitchen">Full kitchen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_washer_dryer"
            name="amenities"
            value="Washer & Dryer"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Washer & Dryer")}
          />
          <label htmlFor="amenity_washer_dryer">Washer & Dryer</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_free_parking"
            name="amenities"
            value="Free Parking"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Free Parking")}
          />
          <label htmlFor="amenity_free_parking">Free Parking</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_pool"
            name="amenities"
            value="Swimming Pool"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Swimming Pool")}
          />
          <label htmlFor="amenity_pool">Swimming Pool</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_hot_tub"
            name="amenities"
            value="Hot Tub"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Hot Tub")}
          />
          <label htmlFor="amenity_hot_tub">Hot Tub</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_24_7_security"
            name="amenities"
            value="24/7 Security"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("24/7 Security")}
          />
          <label htmlFor="amenity_24_7_security">24/7 Security</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_wheelchair_accessible"
            name="amenities"
            value="Wheelchair Accessible"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Wheelchair Accessible")}
          />
          <label htmlFor="amenity_wheelchair_accessible">
            Wheelchair Accessible
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_elevator_access"
            name="amenities"
            value="Elevator Access"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Elevator Access")}
          />
          <label htmlFor="amenity_elevator_access">Elevator Access</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_dishwasher"
            name="amenities"
            value="Dishwasher"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Dishwasher")}
          />
          <label htmlFor="amenity_dishwasher">Dishwasher</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_gym_fitness_center"
            name="amenities"
            value="Gym/Fitness Center"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Gym/Fitness Center")}
          />
          <label htmlFor="amenity_gym_fitness_center">Gym/Fitness Center</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_air_conditioning"
            name="amenities"
            value="Air Conditioning"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Air Conditioning")}
          />
          <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_balcony_patio"
            name="amenities"
            value="Balcony/Patio"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Balcony/Patio")}
          />
          <label htmlFor="amenity_balcony_patio">Balcony/Patio</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_smart_tv"
            name="amenities"
            value="Smart TV"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Smart TV")}
          />
          <label htmlFor="amenity_smart_tv">Smart TV</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_coffee_maker"
            name="amenities"
            value="Coffee Maker"
            className="mr-2"
            onChange={handleChangeAmenities}
            checked={fields.amenities.includes("Coffee Maker")}
          />
          <label htmlFor="amenity_coffee_maker">Coffee Maker</label>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyAmenities;
