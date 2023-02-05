import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState("");

  //Función
  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  };

  //Función
  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;

    //setCategories((categories) => [ inputValue, ...categories ])
    setInputValue("");
    onNewCategory( inputValue.trim() );
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>

  )
};
