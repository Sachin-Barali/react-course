import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Cart = () => {
  return (
    <>
      <Navbar/>
        <h3 className='text-center'>Cart Items</h3>
        <hr />
        <table className="table text-center">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Product Image</th>
                    <th>Product Details</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <img src="https://cdn.mos.cms.futurecdn.net/q3NVYX9QB7AUY3WE483VoY-1200-80.jpg" alt="no source found" style={{"height":"150px"}}/>
                    </td>
                </tr>
            </thead>
        </table>
      <Footer/>
    </>
  )
}

export default Cart
