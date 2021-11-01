import React, { Component } from 'react'

export default class Country extends Component {

    

    render(props) {
        return (
            <>
                <img src={this.props.bandera} alt="Imagen bandera"/>
                <h1>{this.props.pais}</h1>
                <label>Population: {this.props.Population}</label>
                <hr/>
            </>
        )
    }
}

