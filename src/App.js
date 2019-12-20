import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import Users from './container/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./container/Pizza')
})

class App extends Componen {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>

            </div>
        )
    }
}