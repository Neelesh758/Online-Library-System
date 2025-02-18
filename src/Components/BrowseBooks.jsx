import React from 'react'
import './general.css'
import { Link } from 'react-router-dom'
export default function BrowseBooks({book}) {
  return (
    <>
      <div className="head1">
      <div className="mosPopular">
        <div className="imgtxt">
            <img src={book.cover} alt="" />
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
        </div>
        <Link to={`/BrowseBooksList/${book.id}`}><button>View Details</button></Link>
      </div>
      </div>
    </>
  )
}
