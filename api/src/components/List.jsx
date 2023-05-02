import React, { Component } from 'react';
import Avatar from './user.jpg'
const  List = ({user}) => {
 
    return ( <>
    <div className="card mt-20" >
  <div className="avatar">
  <img width="100px" src={{Avatar}+ Math.floor(Math.random() * 9)+".png"}/>
  </div>
  <div className="title">
      {console.log(user)}
    <h2>{user.name}</h2>
  </div>
  <div className="description">
  {user.email}
  </div>
  <div>
  <h4>Phone Number : </h4>{user.phone}
  </div>
  <div>
  <h4>Company Name: : </h4>{user.company.name}
  </div>
</div>


    </> );
}
 
export default  List;