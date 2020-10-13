import React from 'react';
import './random-quote.css';
import ServiceApi from './service-api';

export default class RandomQuote extends React.Component {
    serviceApi = new ServiceApi();

    state ={
        author: null,
        quote: null,
        series: null
    }
    constructor(){
        super();
        this.updateQuote();
    }
    updateQuote(){
        this.serviceApi.getRandomQuote()
        .then((body)=>{
            this.setState({
                author: body[0].author,
                quote: body[0].quote,
                series: body[0].series
            });
        });
        
    }

    render(){
        const {author, quote, series} = this.state;

        return(
            <blockquote className="blockquote text-center">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author} <cite title="Series">{series}</cite></footer>
            </blockquote>
        )
    }

}

