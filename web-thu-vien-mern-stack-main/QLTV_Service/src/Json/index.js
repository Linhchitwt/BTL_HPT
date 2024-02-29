import React from 'react';

const JsonDisplay = ({ jsonData }) => {
  return (
    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
  );
};

export default JsonDisplay;
