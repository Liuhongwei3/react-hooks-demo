import React, { useReducer, useEffect, useMemo } from "react";

const reducer = (state, action) => {
    switch (action) {
        case 'change':
            return state = "tadm1"
        case 'add':
            return state + 1
        case 'sub':
            return state - 1
        default:
            return state
    }
}

function UseReducer() {
    const [name, dispatch1] = useReducer(reducer, "tadm", undefined);
    const [count, dispatch2] = useReducer(reducer, 0, undefined);

    function getName() {
        console.log('getName触发')
        return name
    }

    useEffect(() => {
        console.log('name effect 触发')
    }, [name])

    useEffect(() => {
        console.log('count effect 触发')
    }, [count])

    // memo化的name属性
    const memo_name = useMemo(() => {
        console.log('name memo 触发')
        return name + "---memo"
    }, [name])

    return ( <
        div >
        <
        h2 > The name is { getName() } < /h2> <
        h2 > memo name { memo_name } < /h2> <
        h2 > The count is { count } < /h2> <
        button onClick = {
            () => dispatch1('change') } > change < /button> <
        button onClick = {
            () => dispatch2('add') } > Increment < /button> <
        button onClick = {
            () => dispatch2('sub') } > Decrement < /button> <
        /div>
    )
}

export default UseReducer;