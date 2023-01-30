import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Form, Label, Input, Button } from './ContactForm.styled';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit= event => {
    event.preventDefault();

    this.reset();

    this.props.onProps({ ...this.state });
  }

  reset = () => {
    this.setState({ name: '', number: '' })
  }

  render() {
    const {name, number} = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Namber
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
    );
  }
}

ContactForm.propTypes = {
  onProps: PropTypes.func.isRequired,
};

// export const ContactForm = ({ onSubmit, onReset }) => {
//   const handleSubmit = event => {
//     event.preventDefault();
//     const {name, number} = event.target.elements;
//     onSubmit(name.value, number.value);
//     // this.reset();
//     // this.setState({ [name]: value });
//   }

//     return (
//       <form onSubmit={handleSubmit}>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           // value={name}
//           // onchange={this.handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label>
//         Namber
//         <input
//           type="tel"
//           name="number"
//           // value={number}
//           // onchange={this.handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>

//       <button type="submit">Add contact</button>
//     </form>
//     );
// }


