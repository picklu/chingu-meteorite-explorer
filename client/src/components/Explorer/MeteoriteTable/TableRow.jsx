import React, { Component } from 'react';

export default class TableRow extends Component {
  render() {
    const categories = this.props.categories;
    const meteorite = this.props.meteorite;
    const rowNum = this.props.rowNum;
    const unknown = 'Unknown';

    // Beautifully format number string
    const beautifyNumber = (text, dec = 3) => {
      if (text === undefined || text === '') {
        return unknown;
      }
      const regx = /(-?[0-9]*)(\.[0-9]*)?/;
      const match = text.match(regx);
      if (match && match[2] != undefined) {
        return match[1] + match[2].slice(0, dec);
      }
      return text;
    };

    // format data
    const data = {};
    for (let category of categories) {
      switch (category) {
        case 'mass':
          data.mass = beautifyNumber(meteorite.mass);
          break;
        case 'year':
          data.year = new Date(meteorite.year).getFullYear() || unknown;
          break;
        case 'geolocation':
          meteorite.geolocation = meteorite.geolocation || {
            longitude: '',
            latitude: ''
          };
          const latitude = beautifyNumber(meteorite.geolocation.latitude);
          const longitude = beautifyNumber(meteorite.geolocation.longitude);
          data.geolocation = `(${latitude}\u00b0, ${longitude}\u00b0)`;
          break;
        default:
          data[category] = meteorite[category];
          break;
      }
    }

    return (
      <tr key={`tbody-row-${rowNum}`}>
        {categories.map((category, colNum) => {
          return (
            <td
              className={`td-col-${colNum + 1}`}
              key={`td-row-${rowNum}-col-${colNum + 1}`}
            >
              {data[category]}
            </td>
          );
        })}
      </tr>
    );
  }
}
