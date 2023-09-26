import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions/actionAddBooks';

const AddBooks = ({ libraryData, addBook }) => {

  console.log(libraryData)

  const initialState = {
    title: '',
    author: ''
  }

  const [newData, setNewData] = useState(initialState)


  const handleSubmit = (e) => {
      e.preventDefault();
      addBook(newData)

      //empty input
      setNewData(initialState)
  }

  return (
    <main role="main">
        <div className="jumbotron jumbotron-fluid">
            <div className='container text-center'>
                <h1 className='display-4'>NETBOOKS</h1>
                <p>Ajouter un liver à votre bibliothèque</p>

                <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            value={newData.title}
                            type="text"
                            className='form-control'
                            placeholder='Titre'
                            required
                            onChange={ e => setNewData({...newData, title: e.target.value})}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            value={newData.author}
                            type="text"
                            className='form-control ml-3'
                            placeholder='Auteur'
                            required
                            onChange={ e => setNewData({...newData, author: e.target.value})}
                        />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-outline-secondary ml-3'>Ajouter un livre</button>
                    </div>
                </form>
            </div>
        </div>

        <div className='container' style={{minHeight: '200px'}}>

            <div className="row">
                <div className='col-md-12'>
                    <ul className='list-group'>
                        <li className='list-group-item list-group-item d-flex justify-content-between'>
                            livre enregistrés ici
                        </li>
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger mt-4 mb-5'>Effacer tous les livres</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

const addStateToProps = state => {
    return {
        libraryData: state.library
    }
}

const addDispatchToProps = dispatch => {
    return {
        addBook: param => dispatch(addBook(param))
    }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks)
