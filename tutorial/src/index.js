/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always return JSX

// caps the first letter because this function is special to react
// you can still use arrow functions if you want but this is the same

function BookList() {
  return (
    <section>
      <Book job='developer'/>
      <Book/>
      </section>
    
  ) 
}

const Book = (props) => {
  console.log(props);
  const title = 'Biloxi Boys'
  const author = 'John Grisham'


  return (
    <article>
      <img src="https://m.media-amazon.com/images/I/71N1ryT6iGL._AC_UL640_FMwebp_QL65_.jpg"></img>
      <h1>{title}</h1>
      <h3 style={{color:'#617d98'}}>{author}</h3>
    </article>
  )
}

// what and where
ReactDOM.render(<BookList/>, document.getElementById('root'))