import React, { Component } from 'react'
import  { Fragment } from 'react';

export default class TodoInput extends Component {
    render() {
        return (
        <Fragment>
            
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                               <div className="input-group-text bg-primary text-white">
                                    <i className="fa fa-book"></i>

                                </div>
                        </div>

                    <input type ="text "className="form-control text-capitalize" placeholder="Añadir a la lista"></input>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3" >AÑADIR</button>
                </form>
            </div>

        </Fragment>
        )
    }
}
