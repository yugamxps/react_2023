import React from 'react';
import { useContext, useEffect } from 'react';
import noteContext from './context/notes/noteContext';
const Dashboard = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    return () => {
      console.log('test');
    };
  }, []);
  return (
    <div>
      <h1> This is about {a.state.name}</h1>
    </div>
  );
};
export default Dashboard;
