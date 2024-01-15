import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.css';

export default function Order({ items }) {

  const storedList = localStorage.getItem('myListProduct');
  const myListProduct = storedList ? JSON.parse(storedList) : [];
  
  const jsonProject = JSON.stringify(myListProduct);

  const { handleSubmit,control, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log("aaaaaaaaaa", data)

    try {
      const response = await fetch('http://localhost:5100/Order?fullName='+data.firstName+'&email='+data.email+'&address='+data.address, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //body: JSON.stringify(myListProduct),
      });

      const data2 = await response.json();
      console.log(data2);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="Order">
      <div style={{ backgroundColor: 'gray' }} >
        <h1>סיכום ההזמנה</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-class'>
          {/* שם פרטי */}
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'שדה חובה' }}
            render={({ field }) => (
              <input {...field} />
            )}
          />
          <label className='lable-class'>הזן שם פרטי ומשפחה</label>
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div className='form-class'>
          <Controller
            name="address"
            control={control}
            rules={{ required: 'שדה חובה' }}
            render={({ field }) => (
              <input {...field} />
            )}
          />
          <label className='lable-class'>הכנס כתובת מגורים</label>
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div className='form-class'>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'שדה חובה',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'דוא"ל אינו תקין',
              },
            }}
            render={({ field }) => (
              <input {...field}/>
            )}
          />
          <label className='lable-class'>הזן אימייל</label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='form-class'>
          <div>:המוצרים שבחרת</div>
          <list>
            <ul>
              {myListProduct.map(item => (
                <li style={{ textAlign: 'center' }} key={item.id}>{item.name}</li>
              ))}
            </ul>
          </list>
        </div>
        <button type="submit">שלח</button>
      </form>
    </div>

  );
}

