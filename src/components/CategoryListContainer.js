import React from 'react'
import CategoryList from './CategoryList'
import { useParams } from 'react-router-dom'

function CategoryListContainer() {

  let param = useParams()
  console.log(param.id)

  return ( 
    <div className='container mx-auto md flex'>
      <CategoryList param={param}/>
    </div>
  )
}

export default CategoryListContainer