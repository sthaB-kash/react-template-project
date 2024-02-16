import { useReducer } from "react";

type State = {
    names: string[],
    name: string
}

type Action = {
    type: string,
    name: string

}

const UserForm = () => {
    const [state, dispatch] = useReducer((state: any, action:any) => {
        return { ...state, ...action }
    }, {firstName: '', lastName: ''});

    return (
        <div>
            <h2>User Form</h2>
            <div>
                <p>First Name: <input type="text" onChange={ e => dispatch({firstName: e.target.value })}/></p>
                <p>Last Name: <input type="text" onChange={ e => dispatch({lastName: e.target.value }) }/></p>
                <p>email: <input type="text" onChange={ e => dispatch({email: e.target.value }) }/></p>
            </div>
            <div>
                <h2>Form details:</h2>
                {Object.entries(state).map(([key, val])=> (<p key={key}>{`${key}: ${val}`}</p>))}
            </div>
        </div>
    )
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
            <UserForm/>
            <hr/>
            <div>
                { state.names.map((user: string) => (<p key={user}>{user}</p>))}
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