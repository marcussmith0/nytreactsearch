import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router';

import Search from './children/Search';
import Results from './children/Results';
import Saved from './children/Saved';
import helper from './utils/helper';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerms: {
                topic: "",
                startYear: "",
                endYear: ""
            },
            apiResponse: [],
            updateResults: [],
            searchHappend: false
        }

        this.setSearchParams = this.setSearchParams.bind(this);
        this.searchedTrue = this.searchedTrue.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {


        if(this.state.searchTerms !== prevState.searchTerms) {

            helper.getArticles(this.state.searchTerms.topic, this.state.searchTerms.startYear, this.state.searchTerms.endYear).then((articles) => {

            console.log("Topic", this.state.searchTerms.topic);
            console.log("StartYear", this.state.searchTerms.startYear);
            console.log("EndYear", this.state.searchTerms.endYear);
            console.log("+++++++++++++++++++++++++++++++++++++++++++++")    
            console.log(articles);

            if(articles !== this.state.apiResponse) {
                this.setState({apiResponse: articles});
                this.searchedTrue();
            }

            this.setState({apiResponse: articles});
            
        });
        }
    }

    setSearchParams(topic, startYear, endYear) {
        this.setState({
            searchTerms: {
                topic,
                startYear,
                endYear,
            }     
        });
    }

    searchedTrue() {
        this.setState({
            searchHappend: true
        });
    }

    showResults() {
        if(this.state.searchHappend) {
            return (
                <Results articles={this.state.apiResponse} />
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="text-center">
                        <h1>NYT News Searcher</h1>
                        <hr/>
                        <h3><i>Where news searching happens</i></h3>
                    </div>
                    <Link to="/saved"><span className="float-right btn btn-primary">Saved Articles</span></Link>
                </div>
                <div className="row">

                    <Search setSearchParams={this.setSearchParams}/>

                </div>
                <div className="row">

                    {this.showResults()}

                </div>
                {/*<div className="row">

                    <Saved />

                </div>*/}
            </div>
        );
    }

}

export default Main;