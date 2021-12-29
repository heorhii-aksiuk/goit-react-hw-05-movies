import React, { useState, useEffect } from 'react';
import Spinner from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
  const [loaderTimeOut, setLoaderTimeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderTimeOut(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={s.container}>
      {loaderTimeOut && (
        <Spinner type="Oval" color="#00BFFF" height={150} width={150} />
      )}
    </div>
  );
}

export default Loader;
