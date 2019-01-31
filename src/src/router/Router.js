import React, { Component } from 'react';

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {
            routes:[
                {name:'Home', component:(()=>{return <h1>TEXTO</h1>})}
            ]
        }
    }
    changeRoute(){

    }
    render(){
        return (
            <div>
                <div style={{height:'100%', width:200}}>
                    <button className="btn">
                        Show Rota 1
                    </button>
                    <button className="btn">
                        Show Rota 2
                    </button>
                </div>
                <div style={{height:'100%', marginLeft:200}}>
                    {
                        this.state.routes.map((i, id)=>{
                            return(
                                i.component
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}