import React, { memo, useState, useRef, useMemo } from 'react';

const Home = () => {
  let [state, setState] = useState([]);
  let [state1, setState1] = useState(0);
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
    state.push({ name: userName, email: userEmail });
    // console.log(state);
  };

  // console.log(refContainer);
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
        <Greet name={state1} />
      </form>
    </>
  );
};
export default Home;

const Greet = memo(function Greet({ j }) {
  // let i = 0;
  while (j < 1000000) {
    j++;
    // setState1(state1);
    return (
      <h3>
        Hello{j && ', '}
        {j}!
      </h3>
    );
  }
});
