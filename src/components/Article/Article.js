import React from 'react';
import './Article.css';
import ArticleApi from '../../api/strapi/Articles';
import {useParams, useHistory} from 'react-router-dom';
import Showdown from 'showdown';
import MarkdownView from 'react-showdown';
export default function Article ( props ) {

    const history = useHistory();
    const params = useParams();
    //console.log(params);
    const [ article, setArticle ] = React.useState();
    React.useEffect( () => {
        console.log("Article::useEffect")
        if ( !article ) {
            ArticleApi.getArticle(params.id)
            .then( result => {
                setArticle(result);
            }).catch ( error => {
                console.log(error);
            });
        }
    });

    function renderDetails () {
        if ( article ) {
            //console.log(article);
             return (<div>
                <h3>
                    {article.title} by {article.username ? article.username : "Unknown" }
                </h3>
                <MarkdownView markdown={article.document} />
            </div>);
        } 
        return <div> <h3> Article Not Found</h3></div>;
    }

    return <div> {renderDetails()} </div>;
}
