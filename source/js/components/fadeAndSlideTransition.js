import React from 'react';
import {Transition} from 'react-transition-group';

function FadeAndSlideTransition ({children, duration, in: inProp}) {

    const defaultStyle = {
        transition: `${duration}ms ease-in`,
        transitionProperty: 'opacity, transform'
    };
    const transitionStyles = {
        entering: {
            opacity: 0,
            transform: 'translate(0, -100%)'
        },
        entered: {
            opacity: 1,
            transform: 'translate(0, 0)'
        },
        exiting: {
            opacity: 0,
            transform: 'translate(0, 0)'
        }
    };

    return (
        <Transition in={inProp} timeout={{
            enter: 0,
            exit: duration
        }}>
            {
                (status) => {
                    console.log(status);
                    debugger;
                    if (status === 'exited') {
                        return null
                    }
                    const currentStyles = transitionStyles[status];
                    return React.cloneElement(children, {
                        style: Object.assign({}, defaultStyle, currentStyles)
                    })
                }
            }
        </Transition>
    )
}

export default FadeAndSlideTransition;