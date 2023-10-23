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
          is appreciated to help us imporve our offering!
        </p>
      </div>

      <div className="buttons">
        <ul className="ratings">
          <li><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
          <li><button>4</button></li>
          <li><button>5</button></li>
        </ul>
        <button className="submit" type='submit'>Sumbit</button>
      </div>

    </div>
  )
}

export default App;
