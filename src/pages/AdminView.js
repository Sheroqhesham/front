import React from 'react';
//import Card from '../UI/card/Card';
//import CardBody from '../UI/card/CardBody';

const Adminview = () => {
  return (
  <div class="parentseif">
    <div class="box">
        <h1>Users</h1>
        <div>
          <a href="/viewusers">
            <button class="buttonseif"><h2>View</h2></button>
          </a>
        </div>
    </div>
    <div class="boxtwo">
        <h1>Properties</h1>
        <div>
          <a href="/viewproperties">
            <button class="buttonseif"><h2>View</h2></button>
          </a>
        </div>
    </div>
  </div>
   
  );
};

export default Adminview;
