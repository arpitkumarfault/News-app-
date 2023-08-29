import React, { Component } from 'react'
import Loader from './Loader.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center d-flex justify-content-center' >
    <img style={{height: `40px`,display: `flex`,alignItems:`center`,justifyContent:`center`}} src= {Loader} alt="Loader" />
      </div>
    )
  }
}
