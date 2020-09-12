import * as $ from 'jquery';
import Post from '@models/Post';
import json from './assets/json';
import WebPackLogo from './assets/icon.png';
import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import './babel.js';

const post = new Post('Webpack post title', WebPackLogo);

$('pre').html(post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr></hr>
        <div className="logo"></div>
        <hr></hr>
        <pre></pre>
        <hr></hr>
        <div className="box">
            <h2>less</h2>
        </div>
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
);

render(<App />, document.getElementById('app'));

console.log('Post to string', post.toString());

console.log('JSON:', json);