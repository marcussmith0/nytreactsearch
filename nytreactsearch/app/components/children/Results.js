import React, {Component} from 'react';


class Results extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            articlesList: [],
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            articlesList: props.articles
        });
    }

    render() {
        return (
            <div>
                <div className="panel panel-default text-center">
                    <div className="panel panel-heading"><h2>Results</h2></div>
                    <div className="panel panel-body">
                        <ul>
                        {this.state.articlesList.map(function(article) {
                            return (
                                 <li key={article._id}>
                                    <a href={article.web_url} target="blank">
                                         {article.abstract}
                                    </a>
                                    <span className="btn btn-default" >Save</span> 
                                </li>
                            );     
                         })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;