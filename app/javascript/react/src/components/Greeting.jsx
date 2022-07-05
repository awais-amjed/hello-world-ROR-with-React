import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from "../redux/randomGreeting";

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.randomGreeting);

    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);

    return (<p>{greeting === '' ? '....loading' : greeting}</p>)
}

export default Greeting