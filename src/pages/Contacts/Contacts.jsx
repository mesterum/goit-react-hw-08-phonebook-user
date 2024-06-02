import React from "react";
import Section from "../../components/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/FilterContacts/FilterContacts";
import ContactList from "../../components/ContactList/ContactList";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import styles from './Contacts.module.css'

const Contacts = () => {
    const users = useSelector(selectContacts);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts()).then(response => console.log('Fetched contacts:', response));
    
      }, [dispatch])
    
 return(
    <Section title="PhoneBook" className={styles.sectionHome}>
<ContactForm />
<Filter />
{isLoading && !isError ? (
  <b className={styles.loading}>Request in progress...</b>
) : (
  <>
    <ContactList />
    {!users.length ? (
      <h3>Your phonebook is empty. Add your first contact</h3>
    ) : (
      <h4>Your phonebook has {users.length} contacts</h4>
    )}
  </>
)}
</Section>
 )  
}

export default Contacts;

