import React from 'react'
import Maindiv from './maindiv'
import './general.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Maindiv />
      <div className="typeCard">
        <div className="card1">Fiction</div>
        <div className="card2">Non-Fiction</div>
        <div className="card3">Si-Fi</div>
      </div>
      <div className="mosthead">
      <div className="mosPopular">
        <div className="imgtxt">
            <img src="https://images1.penguinrandomhouse.com/cover/9780593489277" alt="" />
            <h3>The Life Impossible</h3>
            <h4>By-Matt Haig</h4>
        </div>
        <Link to='/BrowseBooksList/6'><button>View Details</button></Link>
      </div>
      <div className="mosPopular">
        <div className="imgtxt">
            <img src="https://images4.penguinrandomhouse.com/cover/9780451491336" alt="" />
            <h3>The Travelling Cat Chronicles</h3>
            <h4>By-Hiro Arikawa</h4>
        </div>
        <Link to='/BrowseBooksList/10'><button>View Details</button></Link>
      </div>
      <div className="mosPopular">
        <div className="imgtxt">
            <img src="https://images4.penguinrandomhouse.com/cover/9780385486804" alt="" />
            <h3>Into The Wild</h3>
            <h4>By-Jon Krakauer</h4>
        </div>
        <Link to='/BrowseBooksList/1'><button>View Details</button></Link>
      </div>
      </div>
    </>
  )
}
