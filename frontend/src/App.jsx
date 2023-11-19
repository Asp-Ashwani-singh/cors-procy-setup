import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [customers, setCutomers] = useState([]);
  const [filterCustomers, setFilterCutomers] = useState([]);
  const BASE_URL = "http://localhost:3001";
  const url = `${BASE_URL}/api/v1/demo/demodata`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setCutomers(res.data);
        setFilterCutomers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCutomers]);

  const inputHandler = (e) => {
    const filtercutomer = customers.filter((customer) =>
      customer?.first_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(e.target.value.toLowerCase());
    setFilterCutomers(filtercutomer);
  };

  return (
    <>
      Total count {filterCustomers.length}
      <input placeholder="search" onChange={inputHandler} />
      <ul style={{ listStyle: "none" }}>
        {filterCustomers.map((customer) => (
          <li key={customer.id}>
            {customer.id}--
            {customer.email}--
            {customer.first_name}--
            {customer.gender}--
            {customer.ip_address}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
