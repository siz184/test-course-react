import React from 'react';
import { DevTools } from './utils';

export default class App extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                {process.env.NODE_ENV !== 'production' ? <DevTools /> : null}
                <p>123</p>
            </div>
        );
    }
    
}
