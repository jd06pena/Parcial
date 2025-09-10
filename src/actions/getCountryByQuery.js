import axios from "axios";

export const getCountryByQuery = async (query) => {
  const url = `https://restcountries.com/v3.1/name/${query}`;
  const response = await axios.get(url);
  const data = response.data;


  const responseMap = data.map((country) => {
    return {
      name: country.name.common,
      code: country.cca2,
      flag: country.flags.svg,
      
    };
  });
  return responseMap;
};
