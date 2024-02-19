import { useState } from "react";

interface Props {
  cities: string[];
  country: string;
  setCity: (city: string) => void;
  children: React.ReactNode;
}

const Cities = ({ country, cities, setCity, children }: Props) => {
  return (
    <>
      <h2>Country: {country}</h2>
      <h3>Cities:</h3>
      <ul>
        {cities.map((city) => (
          <li key={city} onClick={() => setCity(city)}>
            {city}
          </li>
        ))}
      </ul>
      { children }
    </>
  );
};


const PassingPropsExample = () => {
  const cities = ["Kathmandu", "Pokhara", "Chitwan"];
  const country = "Nepal";
  const [selectedCity, setCity] = useState("");

  const handleClick = (city: string) => {
    setCity(city);
  };
  return (
    <>
      <h1>Props Passing Example</h1>
      <Cities country={country} cities={cities} setCity={handleClick}>
        <h5>Click on one of the cities to display below</h5>
      </Cities>
      <p>Selected: {selectedCity}</p>
      <hr />
    </>
  );
};

export default PassingPropsExample;
