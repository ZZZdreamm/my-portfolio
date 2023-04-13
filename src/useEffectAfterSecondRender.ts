import React, { useEffect, useRef } from 'react';

const useEffectAfterSecondRender = (func:any, deps:any) => {
    const didMount = useRef(false);
    const numberOfRenders = 1
    let rendersDone = 0
    useEffect(() => {
        if (didMount.current) {
            func()
        }
        else{
            rendersDone += 1
            if(rendersDone == numberOfRenders){
                didMount.current = true
            }
        };
    }, deps);
}

export default useEffectAfterSecondRender;