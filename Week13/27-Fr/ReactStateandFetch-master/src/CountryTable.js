import React from "react";

const CountryTable = props => {
  const { label, country } = props;
  const infoSizes = array => {
    if (array.length > 1) {
      return (
        <>
          {array[0]} + ({array.length})
        </>
      );
    } else {
      return <>{array[0]}</>;
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {label.map(element => {
              return <th key={label.indexOf(element)}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {country.map(element => {
            return (
              <tr key={element.name}>
                <td>{element.name}</td>
                <td>{element.capital}</td>
                <td>{element.region}</td>
                <td>{element.population}</td>
                <td>{element.area}</td>
                <td>{infoSizes(element.timezones)}</td>
                <td>{infoSizes(element.borders)}</td>
                <td>{infoSizes(element.topLevelDomain)}</td>
                <td>{infoSizes(element.currencies)}</td>
                <td>{infoSizes(element.languages)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;
