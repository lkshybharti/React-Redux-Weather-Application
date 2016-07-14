import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchweather} from  '../actions/index'


class SearchBar extends Component{
    
    constructor(props)
    {
        super(props) 
        this.state={term: ''}
        
        this.onInputChange=this.onInputChange.bind(this);
        this.formSubmit=this.formSubmit.bind(this);
    }
    
    onInputChange(event)
    {   
        this.setState({term: event.target.value})
    }
    
    formSubmit(event)
    {
        event.preventDefault();
        this.props.fetchweather(this.state.term)
        this.setState({term : ''})
        
    }
    
    render(){
        
        return(
            <form className = "input" onSubmit={this.formSubmit}>
                <input placeholder="Enter Indian city " value={this.state.term} className="form-control" onChange={this.onInputChange}/>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
    
}

const mapDispatchToProps=(dispatch)=>
{
   return bindActionCreators( {fetchweather}, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)