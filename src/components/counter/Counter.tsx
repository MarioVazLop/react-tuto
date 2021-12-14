import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './conter-style';
const Counter = () => {
    const [count, setCount] = useState(0);
    const classes = useStyles();

    const onIncrementCount = () => {
        setCount(count + 1);
    };
    const onDecrementCount = () => {
        setCount(count - 1);
    };
    return (
        <div className={classes.container}>
            <Button onClick={onDecrementCount} disabled={count === 0} className={classes.tamanho} >-</Button>
            <Typography>Current value: {count}</Typography>
            <Button onClick={onIncrementCount} className={classes.tamanho}>+</Button>
        </div>
    );
};

export default Counter;