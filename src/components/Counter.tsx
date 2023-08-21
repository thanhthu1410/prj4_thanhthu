import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../stores/slices/counterSlice';
import { RootState } from '@/types';

const Counter = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Counter Value: {counterValue}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;