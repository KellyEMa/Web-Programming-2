import './App.css'
//import HelloWorld from './Components/HelloWorld';
import Card from './Components/Card';


function App() {
  return (
  <div className='main-div'>
    <h1>Diamond World</h1>
    <div className='main-container'>
      <Card image="src\assets\images\1.jpg" name ="Princess" price="$1,350"/>
      <Card image="src\assets\images\2.jpg" name ="Swan" price ="$900" sale={true}/>
      <Card image="src\assets\images\3.jpg" name ="Collection" price="1,100" sale={true}/>
    </div>
  </div>
  );
}

export default App
