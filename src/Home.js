import React, { useState, useRef } from 'react';

const Home = () => {
  let [state, setState] = useState([]);
  const refContainer = useRef({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      refContainer.current['name'].value +
        ' - ' +
        refContainer.current['email'].value
    );
    let userName = refContainer.current['name'].value;
    let userEmail = refContainer.current['email'].value;
    // let userData = [...state, { name: userName }];
    // setState((oldArray) => state[(oldArray, { name: userName })]);
    // setState((oldArray) => state[(oldArray, { email: userEmail })]);
    state.push({ Name: userName, email: userEmail });

    // Add item to it
    /*     userData.push({ name: userName });
    userData.push({ email: userEmail });

    // Set state
    this.setState({ userData }); */
    console.log(state);
  };
  console.log(refContainer);
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='user_name'
            placeholder='Enter Name'
            ref={(el) => (refContainer.current.name = el)}
          />
        </div>
        <div>
          <input
            type='text'
            name='email'
            placeholder='Enter email'
            ref={(el) => (refContainer.current.email = el)}
          />
        </div>
        <div>
          <button type='submit'>Save Values</button>
        </div>
      </form>
    </>
  );
};
export default Home;
