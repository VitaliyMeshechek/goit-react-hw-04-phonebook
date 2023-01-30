import { Button } from "./ContactList.styled";
import { Data } from "./ContactList.styled";

export const ContactItem = ({contact: {id, name, number}, onDelete}) => {
  return (
    <>
      <Data>
        {name} : {number}
      </Data>
      <Button onClick={() => onDelete(id)} type="button" name="delte">
        delete
      </Button>
    </>
  );
}
