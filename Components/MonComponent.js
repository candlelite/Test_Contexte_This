import React from 'react'
import { View } from 'react-native'

class MonComponent extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = "Star wars"
    }

    _maFonction() {
        console.log("Log 2 | searchText : " + this.searchedText)
    }

    render() {
        console.log("Log 1 | searchText : " + this.searchedText)
        this._maFonction()
        return ( <View></View> )
    }
}

export default MonComponent
