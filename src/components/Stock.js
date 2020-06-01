import React, { Component } from 'react';
import axios from 'axios';

export default class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        axios({
            'method': 'GET',
            'url': 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?comparisons=%255EGDAXI%252C%255EFCHI&region=US&lang=en&symbol=HYDR.ME&interval=5m&range=1d',
            'headers': {
                'content-type': 'application/json',
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>

            </div>
        );
    }

}