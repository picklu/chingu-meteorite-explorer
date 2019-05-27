import React, { Component } from 'react';

export default class DataRow extends Component {
  render() {
    const category = this.props.category;
    const meteorite = this.props.meteorite;
    const rowNum = this.props.rowNum;

    // Beautifully format number string
    const beautify = (text, dec = 4) => {
      if (text === undefined || text === '') {
        return 'Unknown';
      }
      const regx = /(-?[0-9]*)(\.[0-9]*)?/;
      const match = text.match(regx);
      if (match && match[2] != undefined) {
        return match[1] + match[2].slice(0, dec);
      }
      return text;
    };

    return (
      <tr key={`table-body-row-${rowNum}`}>
        {category.map((el, colNum) => {
          // Sanity check of the data
          if (el === 'geolocation') {
            if (meteorite[el]) {
              meteorite[el].latitude = beautify(meteorite[el].latitude);
              meteorite[el].longitude = beautify(meteorite[el].longitude);
            } else {
              meteorite[el] = { longitude: 'Unknown', latitude: 'Unknown' };
            }
          } else if (el === 'mass') {
            meteorite[el] = beautify(meteorite[el]);
          }

          // Format the data
          const dataText =
            el === 'year'
              ? new Date(meteorite[el]).getFullYear()
              : el === 'geolocation'
              ? `(${meteorite[el].latitude}\u00b0, ${
                  meteorite[el].longitude
                }\u00b0)`
              : meteorite[el];
          return (
            <td key={`table-body-row-${rowNum}-col-${colNum + 1}`}>
              {dataText ? dataText : 'Unknown'}
            </td>
          );
        })}
      </tr>
    );
  }
}
