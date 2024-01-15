import React, { useState } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
import Order from './Order.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom';


function List() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { id: 1, name: 'ירקות ופירות' },
    { id: 2, name: 'מוצרי ניקיון' },
    { id: 3, name: 'מאפים' },
    { id: 4, name: 'בשר ודגים' },
    { id: 5, name: 'מוצרי חלב' },

  ];
  const [myListProduct, setMyList] = useState([
    { id: 1, name: "ענבים", kategory: "1" },
    { id: 2, name: "עגבניות", kategory: "1" },
    { id: 3, name: "סבון גוף", kategory: "2" },
    { id: 4, name: "שמפו", kategory: "2" },
    { id: 5, name: "קוטג", kategory: "5" },
    { id: 6, name: "גבינה צהובה", kategory: "5" },

  ]);
  localStorage.setItem('myListProduct', JSON.stringify(myListProduct));
  const listIds = [1, 2, 5];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    window.history.pushState(myListProduct, null, '/Order');
    window.location.reload();
  };

  const [input1, setProductName] = useState('');
  const [input2, setKategoryId] = useState('');

  const productChange = (event) => {
    setProductName(event.target.value);
  };

  const kategoryChange = (event) => {
    setKategoryId(event.target.key);
  };
  const addToList = () => {
    const newObject = { id: myListProduct.lastIndexOf.id + 1, name: input1, kategory: input2.id };
    setMyList([...myListProduct, newObject]);
    localStorage.setItem('myListProduct', JSON.stringify(myListProduct));
  };

  const containsValue = (i) => {

    return listIds.includes(i);

  }

  return (
    <div className="List">
      <div style={{ backgroundColor: 'gray' }} >
        <h1>רשימת קניות</h1>
      </div>
      <div className="table-container">
        <table className="table-container">
          <tr>
            <td>
              <text style={{ width: 50, textAlign: 'center' }}>סה"כ : {myListProduct.length} מוצרים</text>
            </td>
          </tr>
          <tr className='table-height'>
            <td>
              <button onClick={addToList}>הוסף</button>
            </td>
            <td>
              <select style={{ width: 170, textAlign: 'center', height: 21.33 }} value={selectedOption.id} onChange={handleOptionChange.id}>
                <option value="">קטגוריה</option>
                {options.map((option) => (
                  <option onChange={kategoryChange} value={input2} key={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </td>
            <td >
              <input id='product' value={input1} onChange={productChange} style={{ textAlign: 'center' }} placeholder='מוצר'></input>
            </td>

          </tr>
        </table>
        <div className="line"></div>
        <div style={{ paddingTop: 20 }}>
          <text className='text-color' style={{paddingBottom: 25}}>יש לאסוף מוצרים אלו במחלקות המתאימות</text>
        </div>
        <div className="table-container">
          {myListProduct.length>0? <table className='table-container'>
            {options.map((option)=>{ 
              return <td key={option.id}>
                <tr>{option.name}</tr>
                {myListProduct.map((prod)=>{
                  if (prod.kategory== option.id)
                  return<tr>{prod.name}</tr>
                })}
              </td>
            })}
          </table>:<div></div>}
        </div>
        <div style={{ paddingTop: 20 }}>
          <button style={{ color: 'green' }} onClick={handleClick}>סיים הזמנה</button>
        </div>
      </div>
    </div>
  );
}

export default List;
