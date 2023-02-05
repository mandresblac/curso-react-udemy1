import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

const [ categories, setCategories ] = useState(["One Punch"]);

//Función
const onAddCategory = ( newCategory ) => {

  if ( categories.includes(newCategory) ) return;

  // Forma 1
  setCategories([ newCategory, ...categories ]);
  //Forma 2
  //setCategories( cat => [ ...cat, "Valorant" ] );
}

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory
        onNewCategory={ (value) => onAddCategory(value) }
      />
      
      { 
        categories.map( ( category ) => (
          <GifGrid
            key={ category }
            category={ category }
          />
        ))
      }

    </>
  )
}
