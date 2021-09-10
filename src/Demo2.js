import React from 'react'
import CityWeather from './CityWeather';
const citys = ['Sydney','Melbourne','Perth','Adelaide','Brisbane','Canberra','Darwin']

class Demo2 extends React.Component{
    constructor(props) {
        super(props);
        };
 
   render(){
        return(
            <div>      
                {citys.map(i => (
                	<CityWeather key={i} city={i} />
                ))}
            </div>
        );
    }
}
 

export default Demo2;