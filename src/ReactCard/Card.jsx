import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div>
        <div className='head'>
        <h1> Price card </h1>
        </div>

        <div className='container'>
            <div className='cards'>
                <div className='header'>
                <p>FREE</p>
                <h1>{props.priceZero}/month</h1>
                </div>

                <div className='card-body'>
                <ul>
                    <li><span>&#10003;</span>Single User</li>
                    <li><span>&#10003;</span>50GB Storage</li>
                    <li><span>&#10003;</span>Unlimited Public Projects</li>
                    <li><span>&#10003;</span>Community Access</li>
                    <li className='headerSpan'><span>&#9747;</span>Unlimited Private Projects</li>
                    <li className='headerSpan'><span>&#9747;</span>Dedicated Phone Support</li>
                    <li className='headerSpan'><span>&#9747;</span>Free Subdomain</li>
                    <li className='headerSpan'><span>&#9747;</span>Monthly Status Reports</li>
                </ul>
                </div>
                <div className='btn'>
                <button>BUTTON</button>
                </div>               
            </div>

               <div className='cards'>
                <div className='header'>
                <p>PLUS</p>
                <h1>{props.priceNine}/month</h1>
                </div>

                <div className='card-body'>
                <ul>
                    <li><span>&#10003;</span>5 User</li>
                    <li><span>&#10003;</span>50GB Storage</li>
                    <li><span>&#10003;</span>Unlimited Public Projects</li>
                    <li><span>&#10003;</span>Community Access</li>
                    <li><span>&#10003;</span>Unlimited Private Projects</li>
                    <li><span>&#10003;</span>Dedicated Phone Support</li>
                    <li><span>&#10003;</span>Free Subdomain</li>
                    <li className='headerSpan'><span>&#9747;</span>Monthly Status Reports</li>
                </ul>
                </div>
                <div className='btn'>
                <button>BUTTON</button>
                </div>
                            </div>

               <div className='cards'>
                <div className='header'>
                <p>PRO</p>
                <h1>{props.priceForty}/month</h1>
                </div>

                <div className='card-body'>
                 <ul>
                    <li><span>&#10003;</span>Single User</li>
                    <li><span>&#10003;</span>50GB Storage</li>
                    <li><span>&#10003;</span>Unlimited Public Projects</li>
                    <li><span>&#10003;</span>Community Access</li>
                    <li><span>&#10003;</span>Unlimited Private Projects</li>
                    <li><span>&#10003;</span>Dedicated Phone Support</li>
                    <li><span>&#10003;</span>Free Subdomain</li>
                    <li><span>&#10003;</span>Monthly Status Reports</li>
                </ul>
                </div>
                <div className='btn'>
                <button>BUTTON</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
