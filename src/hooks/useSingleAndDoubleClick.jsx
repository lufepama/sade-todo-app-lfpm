import { useState, useEffect } from 'react';

export const useSingleAndDoubleClick = (actionSimpleClick, actionDoubleClick, delay = 260) => {

    const [click, setClick] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Tiggers simple click
            if (click === 1) actionSimpleClick();
            setClick(0);
        }, delay);

        // The duration between this click and the previous one
        // is less than the value of delay = double-click
        if (click === 2) actionDoubleClick();

        return () => clearTimeout(timer);

    }, [click]);

    return () => setClick(prev => prev + 1);
}
