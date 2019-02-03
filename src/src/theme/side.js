import React, { Component } from 'react';
import './css/sidebar.css';

class Item extends Component {
    render(){
        return(
            <li className={" " + this.props.active()}>
                <a href="javascript:;" onClick={()=>this.props.onChangeItem(this.props.cur)}>
                    <i className={"fas fa-" +this.props.icon}></i>
                    <span style={{fontSize:12}}> {this.props.title}</span>
                    {
                        this.props.badge ? (
                            <span className="badge badge-primary badge-pill">0</span>
                        ) : (null)
                    }
                </a>
            </li>
        )
    }
}
export default class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    {
                        this.props.routes.map((i, id)=>{
                            return (<Item
                                key={id}
                                {...i}
                                onChangeItem={(e)=>this.props.onChangeItem(e)}
                                active={()=>{
                                    if(this.props.curl == i.cur) return('active');
                                    else return('');
                                }}
                            />)
                        })
                    }
                </ul>
            </div>
        )
    }
}
