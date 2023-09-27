import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/actionFetchBooks';

const SearchBooks = () => {


  const [title, setTitle] = useState('');

  const state = useSelector(state => state.search);
  const dispatch = useDispatch()

  console.log(state)

  const handleSubmit = e => {
      e.preventDefault();

      dispatch(fetchBooks(title))
      console.log(state)

  }

    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className='container text-center'>
                    <h1 className='display-4'>NETBOOKS</h1>
                    <p>Indiquez le sujet du livre à rechercher sur Google API</p>

                    <form
                        className="form-inline justify-content-center"
                        onSubmit={handleSubmit}
                    >
                        <div className='form-group'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Quoi rechercher ?'
                                required
                                value={title}
                                onChange={ e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-outline-secondary ml-3'>Rechercher</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container" style={{minHeight: '200px'}}>
                <div className="accordion">
                    <div className="card mb-2">
                        <div className="card-header">
                        </div>
                        <div className="collapse" data-parent="accordion">
                            <div className="card-body">
                              {

                              }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SearchBooks
