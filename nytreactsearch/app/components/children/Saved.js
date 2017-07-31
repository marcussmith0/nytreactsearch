import React, {Component} from 'react';


class Saved extends Component {

    constructor(props){
        super(props);

        this.state = {
            saved: []
        }

    }

    noArticles(){
        return (
            <div>
                <h1>There are no saved articles</h1>
            </div>
        )
    }

    yesArticles() {

    }

    render() {
        return (
            <div className="main">
                <div className="panel panel-default text-center">
                    <div className="panel panel-heading"><h2>Saved Articles</h2></div>
                        <div className="panel panel-body">
                            {/*// if you did save articles this should render*/}
                            
                            
                            if(!this.state.saved) {

                                noArticles()
                                    
                            } else {
                                // if you
                                yesArticles()   

                            }
                            
                                
                    </div>
                </div>
            </div>
            )

        
    }
}

export default Saved;





            