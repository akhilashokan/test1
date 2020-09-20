import React,{useState} from 'react';
import './App.css';


function Test(){
  const [item,setItem]=useState('');
  const [list,setList]=useState([]);
  var itemList=[];
  itemList=list.map((t)=><li key={t.name} >{t}</li>);

  function handleChange(e){
    setItem(e.target.value);
  }
  function handleSubmit(e) {
    setList(list=>[...list,item]);
    setItem('');
    console.log(list);
    console.log(itemList);
    e.preventDefault();

  }
  
  return(
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={item}/> 
        <input type='submit' value='submit'/>
        </form>
            <ul> {itemList} </ul>
    </div>
  )
}



function App() {

  return (
    <div className="App">
      <Test/>
    </div>
  );
}

export default App;
