import React, { Component } from 'react';
//cuando usas mucho codigo HTML
import  { Fragment } from 'react';
//importamos
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//para que genere un id unico debemos instalra  npm i react-uuid
import uuid from 'react-uuid'


class App extends Component {

 state={
    items:[],
    id: uuid(),
    item: '',
    editItem:false
  }

  //funcion que se llama todo el rato para actualizarse los valores
 handleChange = e =>{
    this.setState({
      item:e.target.value
    });
  }

 handleSumit =(e) =>{
  e.preventDefault();

//CREAR UN ITEM
const newItem={
  id:this.state.id,
  title:this.state.item
}


const updateItems = [...this.state.items, newItem];

this.setState({
  items:updateItems,
  item:'',
  id: uuid(),
  editItem:false
});
}

clearList = ()=>{
this.setState({
  items:[]
})  
}
 
handleDelete = (id)=>{
  const filteredItems = this.state.items.filter(item => item.id !== id);
  this.setState({
    items: filteredItems
  });
};

handleEdit = id=>{
  //borra el termino para editarlo....es el mismo metodo de arriba
  const filteredItems = this.state.items.filter(item => item.id !== id);
  
  //se pasa a la caja donde se ingrresa un item
  const selectedItem = this.state.items.find(item => item.id === id);


  this.setState({
    items: filteredItems,
    item: selectedItem.title,
    editItem: true,
    id:id

  })
}


render() {
  return (
    <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
    
                <h3 className="text-capitalize text-center">
                  COSAS POR HACER
    
                </h3>
            <TodoInput 
              item= {this.state.item}
              handleChange={this.handleChange}
              handleSumit={this.handleSumit}
              editItem={this.state.editItem}
              
              />
            <TodoList 
              items ={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
    
            </div>
          </div>
        </div>
    </Fragment>
      );
  }
}

export default App;
