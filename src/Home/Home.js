import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
class Home extends React.Component {
  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      DataisLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
      })
  }

  render() {
    const { DataisLoaded, items } = this.state
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{' '}
        </div>
      )

    return (
      <div className="App">
        <h1>Total Cart Item : </h1>
        <h1> Products Available in market </h1>
        
        
        <div>
        <table class="table" border={1} >
        <thead>
            <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Add To Cart</th>
            </tr>
        </thead>
        <tbody>
        {items.map((item) => (
            <tr>
                <td scope="row">{item.id}</td>
                <td scope="row">
                    <img src={item.image} alt="photo" width="100" height="100" />
                </td>
                <td scope="row">{item.title}</td>
                <td scope="row">{item.price}</td>
                <td scope="row">
                <button>Add To Cart</button>  
                </td>
            
            </tr>
        ))}
        </tbody>
        </table>
    </div>
      </div>
    )
  }
}
export default Home
