import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import Service from './service';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

const service = new Service();

service.getData('/src/db.json').then((body) => {console.log(body)});