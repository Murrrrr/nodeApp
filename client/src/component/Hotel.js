import React, {useState} from 'react';
import axios from 'axios';

const Hotels = () => {
    const [hotelName, setHotelName] = useState('');

    const handleSearch = (e) => {
        setHotelName(e.value);
        fetchHotelName();
    }

    const fetchHotelName = async() => {
        const response = await axios('http://localhost:3001/text', {
            name: hotelName
        });
    
        console.log(response.data);
    };

    return (
        <div>
          <h1>호텔 검색</h1>
          <select id="hotels-select" onClick={handleSearch}>
            <option value="호텔1" selected>
              호텔1
            </option>
            <option value="호텔2">호텔2</option>
            <option value="호텔3">호텔3</option>
          </select>
          <button id="hotels-search">검색</button>
        </div>
      );

}
export default Hotels;

