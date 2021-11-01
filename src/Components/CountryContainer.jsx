import React from "react";
import Country from "./Country";
import Germany from "../images/Germany.png"
import EEUU from "../images/EEUU.png"
import Brazil from "../images/Brazil.png"



class CountryContainer extends React.Component{
    render(){
        return(
            <>
                <Country pais="Germany" bandera={Germany} Population="52251"/>
                <Country pais="United States" bandera={EEUU} Population="323000000"/>
                <Country pais="Brazil" bandera={Brazil} Population="20600000"/>
            </>

        )
    }
}
export default CountryContainer;