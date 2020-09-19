import React from 'react';
import './App.css';

class Listform extends React.Component{
  
  constructor(){
    super()
    this.state={
      placeHolder:'Enter any text',
      value:'',
      list:[],  
    }
    this.handleChange=this.handleChange.bind(this); 
    this.handleSubmit=this.handleSubmit.bind(this);  
  }

  handleChange(e){
    this.setState({value:e.target.value})
  }


  handleSubmit(e){
    const tempList=this.state.list.concat();
    tempList.push(this.state.value);
    this.setState({list:tempList});
    //alert(this.state.list);
    e.preventDefault();
    }


    render(){
      const listitems=this.state.list.map((t)=> <li key={t.name} >{t}</li> )
      return(
        <div class="box">
            <form  onSubmit={this.handleSubmit} class='form'>
                <input type="text" placeholder={this.state.placeHolder}  onChange={this.handleChange}/>
                <input type="submit" value ="submit"/>
            </form>
            <h1> {listitems}</h1>
        </div>
      )
    }


}

function App() {
  return (
    <div className="App">
      <Listform/>
    </div>
  );
}

export default App;
