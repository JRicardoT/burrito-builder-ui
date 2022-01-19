import React, { Component, useState } from 'react';

// class OrderForm extends Component {
  // constructor(props) {
  //   super();
  //   this.props = props;
  //   this.state = {
  //     name: '',
  //     ingredients: []
  //   };
  // }
const OrderForm = () => {

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  const handleIngredientChange = e => {
    e.preventDefault();
    const newIngredient = e.target.name;
    if(!ingredients.includes(newIngredient)) {
      setIngredients([...ingredients, newIngredient])
    }
  }

  const clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  // render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        { ingredientButtons }

        <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  // }
}

export default OrderForm;
