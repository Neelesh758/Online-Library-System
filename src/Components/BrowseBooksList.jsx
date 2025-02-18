import React, { useState } from 'react'
import Books from './utils/data'
import BrowseBooks from './BrowseBooks'
import './general.css'
import Searchbar from './Searchbar'
export default function BrowseBooksList() {
    const [searchTerm , setSearchTerm] = useState('');
    
    const filteredBooks = Books.filter((Book) =>
    Book.name.toLocaleLowerCase().includes(searchTerm)
    )
    return(
  <>
    <Searchbar setSearchTerm={setSearchTerm} />
    <div className='Bookslist01'>
        {filteredBooks?.length>0?(
            filteredBooks.map((Book)=>(
                <BrowseBooks key={Book.id} book={Book} />
            ))
        ):(
            <p>No Books Found</p>
        )}
    </div>
  </>
    )
}
