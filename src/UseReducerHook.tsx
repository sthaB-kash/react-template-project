import { useReducer } from "react";

type State = {
    names: string[],
    name: string
}

type Action = {
    type: string,
    name: string

}

function UseReducerHook() {

    const [state, dispatch] = useReducer((state: State, action: Action) => {
        switch(action.type) {
            case 'ADD_USER':
                return {
                    ...state,
                    names: [...state.names, action.name]
                }
            case 'SET_NAME': 
                return { ...state, name: action.name}
            default:
                return state;
        }
    }, {
        names: [],
        name: ''
    });

    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <div>
                { state.names.map((user: string) => (<p>{user}</p>))}
            </div>
            <div>
                <input type="text" value={state.name}
                    onChange={ e => dispatch({ type: 'SET_NAME', name: e.target.value })} 
                />
                <button onClick={ () => dispatch({ type: 'ADD_USER', name: state.name })}>Add User</button>
            </div>
        </div>
    );
}

export default UseReducerHook;