import {useState} from 'react'
import {AddCategory} from './components/AddCategory'

export const GiftExpertApp = () => {

  const[categories, setCategories]= useState(['one Punch', 'Dragon', 'melo']);

  const onAddCategory = (newCategory) => {
    categories.push(newCategory);

    //setCategories([...categories,'Valorant'])
  }

  return (
    <div>
      {/** titulo */}
      <h1 className='text-pink-500'>HOla</h1>
 {/**input */}
 <AddCategory
 onNewCategory={(event) => onAddCategory(event)}
 //setCategories={setCategories}
 />
      {/** Listadod De gift */}

    <ol>
          {
            categories.map(category => {
              return <li key={category}>{category}</li>
            })
          }
         </ol>
      {/**Gift Item */}


    </div>
  )
}
