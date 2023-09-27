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
  }

  const displayFetchedBooks = state.isloading ? (
      <div className="d-flex justify-content-center">
          <div className='spinner-border text-info' role="status">
              <span className='sr-only'>Loading...</span>
          </div>
      </div>
  )
  : state.error !== '' ?  (
      <p>{state.error}</p>
  )
  :
  (
    state.fetchedBooks.map( data => {
        return (
          <div className="card mb-2" key={data.id}>
              <div className="card-header">
                  <h5 className="mb-0">
                      <button className='btn btn-link collapsed'
                      data-toggle="collapse"
                      data-target={`#${data.id}`}
                      aria-expanded="false"
                      >
                      { data.volumeInfo.title }
                      </button>
                  </h5>
              </div>
              <div id={ data.id } className="collapse" data-parent="#accordion">
                  <div className="card-body">
                      {
                        data.volumeInfo.hasOwnProperty('imageLinks') &&
                        <img src={ data.volumeInfo.imageLinks.thumbnail } alt={ data.volumeInfo.title } />
                      }

                      <br />
                      <h4 className="card-title">{ data.volumeInfo.title }</h4>
                      <h5 className="card-title">Auteurs: { data.volumeInfo.authors }</h5>
                      <p className="card-text">Description:{ data.volumeInfo.description }</p>
                      <a
                        className="btn btn-outline-secondary"
                        target="_blank" rel="noopener noreferrer"
                        href={ data.volumeInfo.previewLink }
                        >Plus d'infos</a>
                      <button className="btn btn-outline-secondary">Enregistrer</button>
                  </div>
              </div>
          </div>
        )
    })
  )

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
                <div id="accordion">
                    { displayFetchedBooks }
                </div>
            </div>
        </main>
    )
}

export default SearchBooks
