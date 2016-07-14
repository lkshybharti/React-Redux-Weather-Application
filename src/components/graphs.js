import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots ,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash'


    
export default (props) =>{

 const givemean=(data)=>{
        return  _.round(_.sum(data)/data.length);
    }

    return(
        <div>
        <Sparklines height={props.height} width={160} data={props.data}>
                            <SparklinesLine color={props.color} />
                            <SparklinesReferenceLine type="mean" />
        </Sparklines>
        {givemean(props.data)}  {props.unit}
                      </div>
        )
}
