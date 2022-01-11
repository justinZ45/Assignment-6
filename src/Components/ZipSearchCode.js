import React, { Component } from 'react'
import './ZipSearchCode.css';  //imports, including css file



export class ZipSearchCode extends Component {

    constructor()
    {
        super();
        this.state = {  //constructor to initialize values
            zipCode: null,
            cityList: [],
            noZipFound: " ",
        };
    }


    handleZipChange = event => 
    {
        this.setState({zipCode: event.target.value});  //set zip code to target value
    }

  
    collectData = async () => 
    {
        try{
            
            let apiRespond = await fetch("https://ctp-zip-api.herokuapp.com/zip/" + this.state.zipCode) //collect and receive data from API
            
            
            let data = await apiRespond.json();

            this.setState({
                cityList: data, 
                noZipFound: " " 
            });
        }

        catch(error)
        {
            this.setState({  //if error is caught
                cityList: [],
                noZipFound: "No Cities Found"
            });
        }
    }    

    render()  //render, what will be displayed on screen and returned 
    {
        return (
            <div>
                <header>
                <h1 id = "search-Title">Search for a City using a Zip Code</h1>
                </header>
                <div id="search-area">
                    <label>
                        Zip Code:
                    </label>
                    <input 
                        id="zip-code-input"  
                        type="text" 
                        Default="Enter a zip"
                        onChange={this.handleZipChange}
                    />
                    <button id="zip-submit" onClick={()=>{this.collectData()}}>Submit search</button>
                </div>
                <div>
                    <p id ="no-zip">{this.state.noZipFound}</p>    
                </div>

                
                {this.state.cityList.map(city=>
                {

                    return (

                        <div id="info">
                            <h2>{city.LocationText}</h2>
                        </div>
                    )
                })}
            
            </div>
        )
    }
}

export default ZipSearchCode