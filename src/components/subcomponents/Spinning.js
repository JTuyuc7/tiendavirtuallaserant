import React from 'react';
import LoadingSpin from 'react-loading-spin';

const Spinning = (props) => {
    return(
        <div>
            <LoadingSpin 
                size={props.size}
                width={props.width}
                primaryColor={props.primaryColor}
                secondaryColor={props.secondary}
                animationDirection={props.direction}
                animationTimingFunction={props.animateTiming}
                numberOfRotationsInAnimation={props.rotation}
            />
        </div>
    )
}

export default Spinning;