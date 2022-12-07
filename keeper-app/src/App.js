import { useState } from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import Form from './components/Form';
import Footer from './components/Footer';
import {connect} from 'react-redux';
import './App.css';
// import { addNote } from './redux/action';

function App({noteData}) {
  const [showForm, setShowForm]= useState(false);
  // log
  // console.log("logg",noteData);
  return (
    <div className="App">
      <Header
        setShowForm={setShowForm}
      />
      <div className='main-container'>
        {noteData.map(noteItem =>( 
            <Notes
              key={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
            />
          ))}
      </div>
      {showForm && <Form setShowForm={setShowForm} /> }
      
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noteData: state.noteReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    // addNote: (data)=>{dispatch(addNote(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);