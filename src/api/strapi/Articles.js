import axios from 'axios';
import {api} from './Config';


async function getArticles () {
    const url = `${api}/Articles`;
    try {
        const response = await axios.get( url );
        console.log(response.data);
        return response.data.map( e => {
            return {
                id: e.id,
                comments: e.comments,
                title: e.title,
                userId: e.user ? e.user.id : null, 
                username: e.user ? e.user.username : null,
                document: e.document
            }
        });
    } catch ( exception ) {
        console.log(exception);
        return "Error";
    }
}


async function getArticle (id) {
    const url = `${api}/Articles/${id}`;
    try {
        const response = await axios.get( url );
        const e = response.data;
        const results =  {
            id: e.id,
            title: e.title,
            userId: e.user ? e.user.id : null, 
            username: e.user ? e.user.username : null,
            document: e.document,
            comments: e.comments
        };
        return results;
    } catch ( exception ) {
        //console.log(exception.response);
        throw  {
            status: exception.response.status,
            message: exception.response.statusText
        };
    }
}

export default { getArticles, getArticle}; 