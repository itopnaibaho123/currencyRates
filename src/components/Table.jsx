import React, {useEffect, useState} from "react"
import axios from 'axios'
function Table(){
    const[currency, setCurrency] = useState({
        'CAD' : '',
        'EUR' : '',
        'IDR' : '',
        'JPY' : '',
        'CHF' : '',
        'GBP' : ''
    })
    async function fetchAPI(){
        try{
            const res = await axios('https://api.currencyfreaks.com/latest?apikey=d6628ff3c8284a989490ee22dd77f952')
            setCurrency({
                'CAD' : (res.data.rates['CAD']),
                'EUR' : (res.data.rates['EUR']),
                'IDR' : (res.data.rates['IDR']),
                'JPY' : (res.data.rates['JPY']),
                'CHF' : (res.data.rates['CHF']),
                'GBP' : (res.data.rates['GBP'])
            })

            
        } catch (error){
            console.log(error)
        }
    }
    useEffect( () => {       
        fetchAPI()
    
    },)

    return (
        <div className="currTable">
            <table>
                <thead>
                    <tr>
                        <th>
                            Currency
                        </th>
                        <th>
                            We Buy
                        </th>
                        <th>
                            Exchange Rates
                        </th>
                        <th>
                            We Sell
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(currency).map((key, index)=>(
                            <tr key={key}>
                                <td>
                                    {key}
                                </td>
                                <td>
                                    {Number(Number(currency[key]) + Number(5/100*currency[key])).toFixed(4)}  
                                </td>
                                <td>
                                    {Number(currency[key]).toFixed(4)}
                                </td>
                                <td>
                                    {Number(currency[key] - (5/100*currency[key])).toFixed(4)}
                                </td>
                            </tr>
                            
                        ))
                        
                    }
                </tbody>
            </table>
            
        </div>
    )

}

export default Table