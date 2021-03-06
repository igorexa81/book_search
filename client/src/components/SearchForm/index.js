import React from 'react';
import './style.css';
function SearchForm(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="book-search">
                  Search:
                </label>
                
                <input type="text"
                       value={props.search}
                       onChange={props.handleInputChange}
                       className="form-control"
                       id="book-search"/>
                       
                       
              </div>
              <br>
              </br>
              <button type="submit"
                      className="btn btn btn-primary"
                      onClick={props.handleFormSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;