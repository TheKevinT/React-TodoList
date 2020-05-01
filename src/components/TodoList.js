import React, { Component } from 'react';
import TodoItem from './TodoItem';
import  { Fragment } from 'react';

export default class TodoList extends Component {
    render() {
        return (
           <Fragment>
               <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">LISTA DE COSAS</h3>
                    <TodoItem/>

                    <button type="submit" className="btn btn-danger btn-block text-capitalize mt-5">LIMPIA LISTA</button>
               </ul>

           </Fragment>
        )
    }
}
