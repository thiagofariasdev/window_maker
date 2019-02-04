import React, { Component } from 'react';
import './css/sidebar.css';
import { connect } from 'react-redux';
import { actions, states } from './../lib/storage';

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
class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <div>
                    <div style={{padding:30,display:'flex', width:'100%', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <img 
                            height="50" 
                            width="50" 
                            style={{borderRadius:25}} 
                            src={this.props.user.avatar}
                        />
                        <span style={{color:'#fff'}}>{this.props.user.name}</span>
                    </div>
                </div>
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

export default connect(states, actions)(Sidebar)