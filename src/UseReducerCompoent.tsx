import { useReducer } from "react";

const initialState = {
	counter: 100,
};

type ACTIONTYPES =
	| { type: "increament"; payload: number }
	| { type: "decreament"; payload: number };

function CounterReducer(state: typeof initialState, action: ACTIONTYPES) {
	switch (action.type) {
		case "increament":
			return { ...state, counter: state.counter + action.payload };
		case "decreament":
			return { ...state, counter: state.counter - action.payload };
		default:
			throw new Error("Bad Action");
	}
}

function UseReducerComponent() {
	const [state, dispatch] = useReducer(CounterReducer, initialState);

	return (
		<div>
			<div>{state.counter}</div>
			<div>
				<button
					onClick={() =>
						dispatch({
							type: "increament",
							payload: 10,
						})
					}
				>
					increament
				</button>{" "}
				|
				<button
					onClick={() =>
						dispatch({
							type: "decreament",
							payload: 5,
						})
					}
				>
					decreament
				</button>
			</div>
		</div>
	);
}
export default UseReducerComponent;
