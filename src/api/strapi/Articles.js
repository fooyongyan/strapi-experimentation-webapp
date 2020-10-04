/* eslint-disable no-throw-literal */
import axios from 'axios';
import {api} from './Config';

function toArticle ( e ) {
    return {
        id: e.id,
        title: e.title,
        userId: e.user ? e.user.id : null, 
        username: e.user ? e.user.username : null,
        document: e.document,
        comments: e.comments.map ( c => toComment(c))
    }
}

function toComment ( c ) {
    return {
        id: c.id,
        articleId: c.article,
        comment: c.comment,
        created_at: c.created_at,
        userId: c.user
    };
}


async function getArticles () {
    const url = `${api}/Articles`;
    try {
        const response = await axios.get( url );
        return response.data.map( e => toArticle(e) );
    } catch ( exception ) {
        //console.log(exception);
        return "Error";
    }
}


async function getArticle (id) {
    const url = `${api}/Articles/${id}`;
    try {
        const response = await axios.get( url );
        return toArticle(response.data);
    } catch ( exception ) {
        //console.log(exception.response);
        console.log( {
            status: exception.response.status,
            message: exception.response.statusText
        });
        throw `${exception.response.statusText} [${exception.response.status}]`;
    }
}

export default { getArticles, getArticle}; 