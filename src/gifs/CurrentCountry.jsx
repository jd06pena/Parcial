import PropTypes from "prop-types";
import '../Card.css';

export const CurrentCountry = ({ contrys }) => {
  console.log("Datos recibidos en CurrentCountry:", contrys); // <-- Depuración

  if (!contrys || contrys.length === 0) {
    return <p>No hay países para mostrar.</p>;
  }

  return (
    <div className="div_prin" >
      {contrys.map((country, idx) => (
        <div className="gifs-container"  key={country.code || idx}>
          <ul>
            <ul>{country.name}</ul>
            <ul>{country.code}</ul>
            <ul>
              <img src={country.flag} alt={country.name} />
            </ul>
            <ul>location: {country.location ? country.location.join(", ") : "N/A"}</ul>
          </ul>
        </div>
      ))}
    </div>
  );
};

CurrentCountry.propTypes = {
  contrys: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

