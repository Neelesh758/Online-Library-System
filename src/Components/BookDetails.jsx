import React from 'react'
import { useParams } from 'react-router-dom'
import Books from './utils/data';
import './general.css'
import { Link } from 'react-router-dom';
export default function BookDetails() {
    const {id} = useParams();
    const book = Books.find((b) => b.id.toString() === id); //I use this as it runns a loop over each element and stops after match
  return (
    <>
      <div className="main">
        <img src={book.cover} alt="" />
        <div className="textsection">
            <div className="textsubsection">
               <h1>{book.name}</h1>
               <h3>By - {book.author}</h3>
               <h3>Rating - ⭐ {book.rating}</h3>
            </div>
            <p>{book.Description}</p>
        </div>
        <Link to='/BrowseBooksList'><button className='browsebutton'>Go To Browse Books</button></Link>
      </div>
    </>
  )
}
