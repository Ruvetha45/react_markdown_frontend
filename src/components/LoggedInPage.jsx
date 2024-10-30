import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import ReactMarkdown from 'react-markdown';
import './LoggedInPage.css';

function LoggedInPage({ user, setUser, token, setToken, setIsRegistered }) {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const fetchNotes = async () => {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const response = await axios.get('https://react-markdown-backend-3jw4.onrender.com/api/notes', config);
      setNotes(response.data);
    } catch (e) {
      console.log('Error fetching notes', e);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const onLogout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    setIsRegistered(true);
  };

  const handleNoteChange = (value) => {
    setNewNote(value);
  };

  const saveNote = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    const noteObject = {
      content: newNote
    };

    try {
      if (editingNoteId !== null) {
        // Editing existing note
        await axios.put(`https://react-markdown-backend-3jw4.onrender.com/api/notes/${editingNoteId}`, noteObject, config);
        setEditingNoteId(null);
      } else {
        // Adding new note
        await axios.post('https://react-markdown-backend-3jw4.onrender.com/api/notes', noteObject, config);
      }

      setNewNote('');
      fetchNotes();
    } catch (e) {
      console.log('Error saving note', e);
    }
  };

  const deleteNote = async (noteId) => {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      await axios.delete(`https://react-markdown-backend-3jw4.onrender.com/api/notes/${noteId}`, config);
      fetchNotes();
    } catch (e) {
      console.log('Error deleting note', e);
    }
  };

  return (
    <div>
      <div className='loggedInHeader'>
        <h1 className='loggedInh1'>Markdown Live Editor and Preview</h1>
        <h2 className='loggedInh2'>Welcome, {user.name}! <button className='logout' onClick={onLogout}>logout</button></h2>
      </div>
  
      <form onSubmit={saveNote}>
        <div style={{ display: 'flex' }}>
          <div className='markdown' style={{ flex: 1 }}>
            <SimpleMDE
              className='markdown'
              value={newNote}
              onChange={handleNoteChange}
              options={{
                placeholder: 'Enter your Markdown here...',
                autofocus: true,
                spellCheck: false,
                shortcuts: {
                  'toggleFullScreen': null,
                  'drawTable': null,
                  'drawImage': null,
                  'newlineAndIndent': null,
                }
              }}
            />
          </div>
          <div className='preview' style={{ flex: 1, marginLeft: '20px' }}>
            <ReactMarkdown>{newNote}</ReactMarkdown>
          </div>
        </div>
        <button className='save' type='submit'>Save</button>
      </form>
  
      <div className="container">
        {notes.map((note) => (
          <div key={note._id} className="notes">
            <div className='markdownAndButtons'>
              <div className='markdownContent'>
                <ReactMarkdown>{note.content}</ReactMarkdown>
              </div>
              <div className='buttons'>
                <button className='edit'
                  onClick={() => {
                    setEditingNoteId(note._id);
                    setNewNote(note.content);
                  }}
                >
                  Edit
                </button>
                <button className='delete' onClick={() => deleteNote(note._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default LoggedInPage;


