import React from 'react';
//cuando usas mucho codigo HTML
import  { Fragment } from 'react';
//importamos
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";

function App() {
  return (
<Fragment>
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">

            <h3 className="text-capitalize text-center">
              COSAS POR HACER

            </h3>
        <TodoInput/>
        <TodoList/>

        </div>
      </div>
    </div>
</Fragment>
  );
}

export default App;
