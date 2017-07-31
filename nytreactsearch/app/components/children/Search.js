import React, {Component} from 'react';


class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: '',
            startYear: '',
            endYear: ''
        }

        this.topicChange = this.topicChange.bind(this);
        this.startYearChange = this.startYearChange.bind(this);
        this.endYearChange = this.endYearChange.bind(this);
    }

    topicChange(event) {
        this.setState({topic: event.target.value});
    }

    startYearChange(event) {
        this.setState({startYear: event.target.value});
    }
    
    endYearChange(event) {
        this.setState({endYear: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.setSearchParams(this.state.topic, this.state.startYear, this.state.endYear);
    }

    render() {
        return (
            <div>
                <div className="panel panel-default text-center">
                    <div className="panel panel-heading"><h2>Search</h2></div>
                    <div className="panel panel-body">
                        <div className="text-center"> 
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <h3>Topic:</h3>
                                <input onChange={this.topicChange} className="form-control" required/>
                                <h3>Start Year:</h3>
                                <input onChange={this.startYearChange} className="form-control" required/>
                                <h3>End Year:</h3>
                                <input onChange={this.endYearChange} className="form-control"  required/>
                                <button type="submit" className="search">Search</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Search;