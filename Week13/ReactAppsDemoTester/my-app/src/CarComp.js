import React from 'react';
export class CarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: props.cars };
  }
  render() {
    return (<div>
      <table border='1'>
        <thead>
          <tr>
            <th>Car Model</th>
            <th>Car Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.cars.map(car => <tr>
            <td> {car.name} </td>
            <td> {car.price} </td>
          </tr>)}
        </tbody>
      </table>
      <br></br>
    </div>);
  }
  ;
}
;
export const CarCompFunc = props => {
  return (
  <div>
    <table border='1'>
    <thead>
        <tr>
            <th>Car Model</th>
            <th>Car Price</th>
        </tr>
    </thead>
    <tbody>
        {props.cars.map(car => 
            <tr>
                <td>{car.name}</td>
                <td>{car.price}</td>
            </tr>)}
        </tbody>
    </table>
    <br></br>
  </div>
  );
};
