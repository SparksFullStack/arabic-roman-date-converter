import React from 'react'

class Converter extends React.Component {
    state = {
        inputVal: '',
        result: ''
    }

    handleButtonClick = () => {
        const num = this.state.inputVal
        let finalResult

        this.setState({ result: finalResult })
    }

    toRome4 = (num) => {

    }

    toRome3 = (num) => {

    }

    toRome2 = (num) => {

    }

    toRome1 = (num) => {

    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Enter an Arabic Number from AD1-299</h1>
                <h2>Result: {this.state.result}</h2> 
                <input 
                    onChange={(e) => this.setState({ inputVal: e.target.value })}
                />
                <br />
                <button onClick={this.handleButtonClick}>Calculate!</button>
            </div>
        )
    }
}

export default Converter