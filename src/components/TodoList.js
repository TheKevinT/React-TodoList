import React, { Component } from 'react';
import TodoItem from './TodoItem';
import  { Fragment } from 'react';

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
           <Fragment>
               <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">LISTA DE COSAS</h3>

{
    items.map(item=>{
        return (
            <TodoItem 
            
                key={item.id} 
                title={item.title}
                handleDelete={()=>handleDelete(item.id)}
                handleEdit={()=>handleEdit(item.id)}
             />
        )
    })
}
                   
                    <button type="submit" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>LIMPIAR LISTA</button>
               </ul>

           </Fragment>
        )
    }
}
