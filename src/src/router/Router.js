import React, { Component } from 'react';

const RouteA = () => <h1> TITULO A </h1>;
const RouteB = () => <h1> TITULO B </h1>;
const RouteC = () => <h1> TITULO C </h1>;

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {
            routes:[
                {cur:'/', component:<RouteA/>, label:'A'},
                {cur:'/a', component:<RouteB/>, label:'B'},
                {cur:'/b', component:<RouteC/>, label:'C'}
            ],
            curl: '/'
        }
        this.router = this._router.bind(this);
        this.menu = this._menu.bind(this);
    }
    _menu(i, id){
        return (
            <button className="btn btn-dark" onClick={() => this.setState({curl:i.cur})}>
                <span>{i.label}</span>
            </button>
        )
    }
    _router(i, id){
        if(this.state.curl === i.cur){
            return i.component;
        }
    }
    render(){
        return (
            <div>
                <div style={{height:'100%', width:250}}>
                    {
                        this.state.routes.map( this.menu )
                    }
                </div>
                <div style={{height:'100%', marginLeft:250}}>
                    {
                        this.state.routes.map( this.router )
                    }
                </div>
            </div>
        )
    }
}