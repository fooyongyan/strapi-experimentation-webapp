import { cleanup } from '@testing-library/react';
import React from 'react';
import './ArticleList.css';
import ArticleApi from '../../api/strapi/Articles';
import ArticleCard from './Article/ArticleCard';
export default function ArticleList ( props ) {

    const [articles, setArticles] = React.useState();
    React.useEffect ( () => {
        console.log("ArticleList::useEffect");
        if ( !articles ) {
            ArticleApi.getArticles()
            .then ( results => {
                setArticles(results);
                console.log(results);
            }).catch ( error => {
                console.log(error);
            });
        } else {
            console.log("Weird")
        }
        //TODO : Start Filling things up
        return () => {
            console.log("ArticleList::cleanUp");
        };
    })

    function renderArticles () {
        return articles ? articles.map( e => <ArticleCard key = {e.id} id={e.id} author = {e.username} title = {e.title} body = {e.document} /> ) : <p> "There are no articles" </p>
    }
    
    return (
    <div className = "ArticleList">
        <h1> Articles </h1>
        <div className = "ArticleList__Cards"> 
            {renderArticles()}       
        </div>
    </div>
    )
}