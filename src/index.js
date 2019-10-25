import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
import registerServiceWorker from './sw';


// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));

