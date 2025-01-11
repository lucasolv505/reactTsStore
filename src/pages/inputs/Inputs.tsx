import Footer from "@/components/Footer";
import Topo from "@/components/Topo";
import { useTheme } from "@/Context/ThemeContext";
import { useEffect, useState } from "react";

interface ErrorsType {
  name?: string;
  email?: string;
  city?: string;
  nationality?: string;
}

function Inputs() {
  const { theme } = useTheme();
  const [countriesNames, setCountriesNames] = useState([]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [shipInfo, setShipInfo] = useState<React.ReactNode>(null);

  const [errors, setErrors] = useState<ErrorsType>({});

  async function loadCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const countriesNames = data.map((country: any) => country.name.common);
      setCountriesNames(countriesNames);
    } catch (error) {
      console.error("could not load countries", error);
    }
  }

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (shipInfo) {
      const infoContainer = document.querySelector(".ship-info-container")as HTMLElement
      if (infoContainer) {
        infoContainer.style.color = `var(--${theme === "dark" ? "lightestColor" : "bluedark"})`
      }
    }
  }, [theme])

  function sendInfo() {
    const newErrors: ErrorsType = {};

    if (!name) {
      newErrors.name = "Fill in the name field";
    }

    if (!email) {
      newErrors.email = "Fill the email field";
    }

    if (!city) {
      newErrors.city = "Fill the city field";
    }

    if (!nationality) {
      newErrors.nationality = "Choose the country";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Send Successfully")

    setErrors({})
    createInfo()
  }

  function createInfo() {
    setShipInfo(
      <div className="shipInfoContainer flex border-4 border-green-700 p-4">
        <div
          className="shipInfo flex justify-center flex-col"
          style={{
            color: `var(--${theme === "dark" ? "lightestColor" : "bluedark"})`,
          }}
        >
          <div>PACKAGE SENT TO:</div>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>City: {city}</div>
          <div>Country: {nationality}</div>
        </div>
        <div>
          <img className="w-40" src="/box.png" alt="box" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Topo />

      <div className="flex items-center justify-center">{shipInfo && shipInfo}</div>

      <div className={`fieldForm ${theme === "dark" && "dark"}`}>
        <h1 id="ship">Ship to:</h1>
        <label>Name</label>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          style={{ border: errors.name && "2px solid red" }}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>

      <div className={`fieldForm ${theme === "dark" && "dark"}`}>
        <label>Email</label>
        <input
          value={email}
          type="text"
          placeholder="State"
          onChange={(e) => setEmail(e.target.value)}
          style={{ border: errors.email && "2px solid red" }}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div className={`fieldForm ${theme === "dark" && "dark"}`}>
        <label>City</label>
        <input
          value={city}
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          style={{ border: errors.city && "2px solid red" }}
        />
        {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
      </div>

      <div className={`fieldForm ${theme === "dark" && "dark"}`}>
        <label>Country</label>
        <select
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          style={{ border: errors.nationality && "2px solid red" }}
        >
          <option value=""></option>
          {countriesNames.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.nationality && <span style={{ color: "red" }}>{errors.nationality}</span>}
      </div>

      <div className="flex justify-center">
        <button className="btnDefault w-32 mt-8 mb-5" onClick={sendInfo}>
          Send
        </button>
      </div>

      <Footer/>
    </div>
  )
}

export default Inputs;
