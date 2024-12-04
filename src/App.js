import logo from './logo.svg';
import './App.css';
import react,{useState,useMemo} from 'react'

function App() {
  const [count,setCount]=useState(0)
  const [item,setItem]=useState(10)
  const multiCountMemo=useMemo(function multiCount(){
    console.warn("multiCount")
    return count*2
  },[count])
  return (
    <div className="App">
      <h2>count:{count}</h2>
      <h2>item:{item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item*5)}>Update Item</button>

    </div>
  );
}

export default App;
