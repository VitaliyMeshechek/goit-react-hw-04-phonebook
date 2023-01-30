import { nanoid } from 'nanoid';
import PropTypes from "prop-types";

import React from "react";
import { ContactItem} from 'components/ContactList/ContactItem';
import { List, Item } from './ContactList.styled';

export const ContactList = ({onDelete, items}) => {
  return (
    <List>
      {items.map((item) => (
        <Item key={nanoid()}>
       <ContactItem contact={item} onDelete={onDelete}/>
        </Item>
       ))}

    </List>
  );
}

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
  })),
}

