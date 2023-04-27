import React, { memo, useState, useRef, useMemo } from 'react';

const UseMemo = () => {
  /* let [state, setState] = useState([]);
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
    state.push({ Name: userName, email: userEmail });
    console.log(state);
  };

  const memoCall = useMemo(() => state1, [state1]);
  console.log(refContainer); */
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
};
export default UseMemo;

/* const memo = () => {
  let i = 0;
  while (i < 1000000) {
    setState1((state1 = i));
    i++;
  }
}; */

const Greeting = memo(function Greeting({ name }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ', '}
      {name}!
    </h3>
  );
});
