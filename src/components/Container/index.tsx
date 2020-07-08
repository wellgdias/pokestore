import React from 'react';
import './style.css';

export default function Conatiner(props: any) {
  return <div className="container"> {props.children}</div>;
}
