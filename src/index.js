import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './index.css';
import data from './data'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function App() {

  const cards = data.map(item => {
    return (
      <Main
       key = {item.id}
       {...item}
      />
    )
  })

  return (
    <div>
      <h1 className='heading'>Travel Journal</h1>
      <div className='page'>
        <Navbar />
        {cards}

      </div>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

