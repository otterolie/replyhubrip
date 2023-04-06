import React from 'react';

interface Props {
  title: string;
}

const MyComponent: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default MyComponent;
