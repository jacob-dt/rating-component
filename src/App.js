import './App.css';

function App() {
  return (
    <div className = "card">
      
      <span className="symbol-container">
        <span className = "symbol">
          <div>
            &#9733;
          </div>
        </span>
      </span>

      <div className= "card-text">
        <h1>How did we do?</h1>
        <p>Please let us know how we did 
          with your support request. All feedback 
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="ratings-buttons">
        <ul className="ratings">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>

      <div className="submit-button">
        <button className="submit" type='submit'>SUBMIT</button>
      </div>

      </div>


  )
}

export default App;
