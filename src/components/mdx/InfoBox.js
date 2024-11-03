import React from 'react';

const InfoBox = ({ children, type = 'info' }) => {
  const styles = {
    tip: 'bg-green-50 border-l-4 border-green-500',
    info: 'bg-blue-50 border-l-4 border-blue-500',
    warning: 'bg-yellow-50 border-l-4 border-yellow-500'
  };

  return (
    <div className={`${styles[type]} p-4 my-6 rounded-r-lg`}>
      {children}
    </div>
  );
};

export default InfoBox;