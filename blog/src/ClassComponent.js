import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Class Componenet used!</h1>
            </div>
        )
    }
}

/*
*
    This both lines works same and need either one of them 
    export default class ClassComponent extends Component
    export default ClassComponent;
*/