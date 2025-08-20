import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

function App() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;