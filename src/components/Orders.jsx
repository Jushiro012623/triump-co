import React from 'react'
import orderImg from '../image/yspod/red.jpg'

function Orders() {
  return (
    <div className='orders'>
            <div className="order_det">
              <div className='order_img'><img src={orderImg} alt="" /></div>
              <div className="product_info">
                <div className='product'>
                  <span>product name</span>
                  <p>$90</p>
                </div>
                <div className='date-status'>
                  <h1 className='status' attr='status'>status</h1>
                  <h1 className='expect_date' attr='expected delivery'>12/20/2004</h1>
                </div>
              </div>
            </div>
          <p className="amount">Total: $91.00</p>
          <p className='note'>Please have the exact amount ready for payment upon delivery of your parcel to ensure a smooth transaction process.</p>
    </div>
  )
}

export default Orders