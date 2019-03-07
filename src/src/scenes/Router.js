import React, { Component } from 'react';
import Sidebar from '../theme/side';
import FindUser from './find/user_finder';

const RouteB = () => <h1> TITULO B </h1>;
const RouteC = () => <h1> TITULO C </h1>;
const RouteD = () => <h1> TITULO D </h1>;
const RouteE = () => <h1> TITULO E </h1>;
const RouteF = () => <h1> TITULO F </h1>;

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {
            routes:[
                {cur:'/', component:<RouteB/>, title: ' Seu dashboard', icon: 'tachometer-alt'},
                {cur:'/a', component:<FindUser/>, title: ' Encontre usuários', icon: 'user'},
                {cur:'/b', component:<RouteC/>, title: ' Monitore o crescimento', icon: 'chart-line'},
                {cur:'/c', component:<RouteD/>, title: ' Nosso blog', icon: 'blog'},
                {cur:'/d', component:<RouteE/>, title: 'Tickets de usuário', icon:'clipboard-list'}
            ],
            curl: '/',
            wrap:'toggled'
        }
    }
    render(){
        return (
            <div id="wrapper" className={this.state.wrap}>
                <Sidebar curl={this.state.curl} routes={this.state.routes} onChangeItem={(i)=>this.setState({curl:i})}/>
                <div style={{height:'100%', width:'100%'}}>
                    <div className="navbar navbar-light bg-light">
                        <button 
                            className="btn btn-default" 
                            onClick={()=>this.setState({wrap:this.state.wrap=='toggled'?'':'toggled'})}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div>
                            <span>{this.state.routes.find(i=>i.cur==this.state.curl).title}</span>
                            <button></button>
                        </div>
                    </div>
                    {
                        this.state.routes.map((i, id)=>{
                            if(i.cur === this.state.curl)
                                return i.component;
                        })
                    }
                </div>
            </div>
        )
    }
}