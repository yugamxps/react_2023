import React, { useState, useEffect } from 'react';

const Home = () => {
  let [state, setState] = useState(1);
  const handler = (e) => {
    console.log('counter');
    setState(state++);
  };

  useEffect(() => {
    return () => {
      console.log('unmounted');
    };
  });
  return (
    <div>
      {state}
      <button onClick={(e) => setState(state++)}>Increment</button>
    </div>
  );
};
export default Home;
