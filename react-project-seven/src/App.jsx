
import './App.css'

function App() {
  function handleClick() {
    alert("I am Clicked");
  }
  function handleMouse() {

    let text = document.body.style;
    text.color = 'red';
    text.fontSize = '20px';

  };

  function handleOnchange(e) {
    console.log("value hai", e.target.value)

  }
  function handleSubmit(e) {
    e.preventDefault();
    // I am writting my custom behaviour down
    alert("Form Submit kedu kya");

  }



  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnchange} />
        <button type='submit'>Submit</button>
      </form> */}




      <p onMouseOver={handleMouse}>I am para</p>
      <button onClick={handleClick}>
        Click me
      </button>

    </div>
  )
}

export default App
