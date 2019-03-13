import React, { Component } from 'react';
import Sidebar from './../res/theme/side';
import { FindUser, Ticket, Blog, Charts, Dash, Create, Event } from './scenes';

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                { cur: '/dash', component: Dash, title: ' Seu dashboard', icon: 'tachometer-alt' },
                { cur: '/find', component: FindUser, title: ' Encontre usuários', icon: 'user' },
                { cur: '/chart', component: Charts, title: ' Monitore o crescimento', icon: 'chart-line' },
                { cur: '/blog', component: Blog, title: ' Nosso blog', icon: 'blog' },
                { cur: '/ticket', component: Ticket, title: 'Tickets de usuário', icon: 'clipboard-list' },
                { cur: '/addEvent', component: Event, title: 'Eventos', subroutes: [], icon: 'calendar-alt' }
            ],
            curl: '/dash',
            wrap: 'toggled'
        }
    }
    render() {
        return (
            <div id="wrapper" className={this.state.wrap}>
                <Sidebar curl={this.state.curl} routes={this.state.routes} onChangeItem={(i) => this.setState({ curl: i })} />
                <div style={{ height: '100%', width: '100%' }}>
                    <div className="navbar navbar-light bg-light">
                        <button
                            className="btn btn-default"
                            onClick={() => this.setState({ wrap: this.state.wrap == 'toggled' ? '' : 'toggled' })}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div>
                            <span>{this.state.routes.find(i => i.cur == this.state.curl).title}</span>
                            <button></button>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.routes.map((i, id) => {
                                if (i.cur === this.state.curl)
                                    return <i.component key={id} />;
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}