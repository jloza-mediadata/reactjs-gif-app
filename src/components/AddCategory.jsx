import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({target}) => {
    setinputValue(target.value);

  };

  const onSubmit = (event) => {
    event.preventDefault();

    const cleanInputValue = inputValue.trim();
    if(cleanInputValue.length<=0){ return; }

    // setCategories( (categories) => [inputValue,...categories]);
    onNewCategory(cleanInputValue);

    setinputValue('');
  };

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange } />
    </form>
  )
}
