import React from 'react';
import "./Card.css";

const Card = () => {
  return (
    <div>
        <div className='head'>
        <h1> Price card </h1>
        </div>

        <div className='container'>
            <div className='cards'>
                <div className='header'>
                <p>FREE</p>
                <h1>$0/month</h1>
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
                <h1>$9/month</h1>
                </div>

                <div className='card-body'>
                <ul>
                    <li><span>&#10003;</span>5 User</li>
                    <li><span>&#10003;</span>50GB Storage</li>
                    <li><span>&#10003;</span>Unlimited Public Projects</li>
                    <li><span>&#10003;</span>Community Access</li>
                    <li><span>&#9747;</span>Unlimited Private Projects</li>
                    <li><span>&#9747;</span>Dedicated Phone Support</li>
                    <li><span>&#9747;</span>Free Subdomain</li>
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
                <h1>$49/month</h1>
                </div>

                <div className='card-body'>
                 <ul>
                    <li><span>&#10003;</span>Single User</li>
                    <li><span>&#10003;</span>50GB Storage</li>
                    <li><span>&#10003;</span>Unlimited Public Projects</li>
                    <li><span>&#10003;</span>Community Access</li>
                    <li><span>&#9747;</span>Unlimited Private Projects</li>
                    <li><span>&#9747;</span>Dedicated Phone Support</li>
                    <li><span>&#9747;</span>Free Subdomain</li>
                    <li><span>&#9747;</span>Monthly Status Reports</li>
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
