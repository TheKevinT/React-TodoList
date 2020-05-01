import React, { Component } from 'react'
import  { Fragment } from 'react';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSumit, editItem} = this.props;
        return (
        <Fragment>
            
            <div className="card card-body my-3">
                <form onSubmit={handleSumit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                               <div className="input-group-text bg-primary text-white">
                                    <i className="fa fa-book"></i>

                                </div>
                        </div>

                    <input type ="text " className="form-control text-capitalize" placeholder="Añadir a la lista" value={item} onChange={handleChange}></input>
                    </div>
        <button type="submit" 
        className={ 
            editItem 
            ? "btn btn-block btn-success mt-3"
            : "btn btn-block btn-primary mt-3"
            } > {editItem ? "EDITAR" : "AÑADIR"}</button>
                </form>
            </div>

        </Fragment>
        )
    }
}
