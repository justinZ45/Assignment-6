import React, {Component} from 'react'
import './CitySearchCode.css';  //imports, including css file

export class CitySearchCode extends Component {

    constructor()
    {
        super();
        this.state = {   //constructor to initialize values
            city: null,
            zipList: [],
            noCity: " ",
        };
    }

    handleCityChange = event => 
    {
        this.setState({city: event.target.value.toUpperCase()}); //target value city to uppercase
    }

    collectData = async () => 
    {
        try{

            let apiRespond = await fetch("http://ctp-zip-api.herokuapp.com/city/" + this.state.city); //receive data from API
            
            let data = await apiRespond.json();

            this.setState({
                zipList: data, 
                noCity: " " 
            });

        }

        catch(error)
        {
            console.log(error);  //if error is caught
            this.setState({
                zipList: [],
                noCity: "City Zips Not Found"
            });
        }
    }    

    render(){  //render, what will be displayed on screen and returned
        return (
            <div>
                <header>
                    <h1 id = "city-head">Search for a List of Zip Codes by Entering a City Name </h1> 
                </header>
                <div id="search-area">
                    <label>City Name:</label>
                    <input 
                        id="city-name-input"  
                        type="text" 
                        Default="Enter City (ALL CAPS)"
                        onChange={this.handleCityChange}
                    />
                    <button id="city-submit" onClick={()=>{this.collectData()}}>Submit Search</button>
                </div>
                <div>
                    <p id ="no-city">{this.state.noCity}</p>     
                </div>
                
                {this.state.zipList.map(zipCode=>{
                    return(
                        <div id ="info">
                            <ul id="zip-list">
                                <li id="zip">{zipCode}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
    
}

export default CitySearchCode
