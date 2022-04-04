import CustomHookComponent from "./CustomHookComponent";
import TestComponent from "./EvenMoreReactComponent";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseReducerComponent from "./UseReducerCompoent";
import UseRefComponent from "./UseRefComponent";
import UseStateComponent from "./UseStateComponent";
function App() {
	return (
		<div>
			<h1>UseState</h1>
			<UseStateComponent />
			<h1>UseEffect</h1>
			<UseEffectComponent />
			<h1>useContext</h1>
			<UseContextComponent />
			<h1>useReducer</h1>
			<UseReducerComponent />
			<h1>useRef</h1>
			<UseRefComponent />
			<h1>CustomHook</h1>
			<CustomHookComponent />
			<h1>EvenMoreReactComponent</h1>
			<TestComponent />
		</div>
	);
}

export default App;
