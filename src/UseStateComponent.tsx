import { useState } from "react";
function UseStateComponent() {
	const [arr, setArr] = useState<number[]>([]);
	const [name, setName] = useState<string | null>(null);
	return (
		<div>
			<div>
				<button
					onClick={(e: any) => setArr((prev: any) => [...prev, arr.length + 1])}
				>
					Click
				</button>
				{JSON.stringify(arr)}
			</div>
			<div>
				<button onClick={(e) => setName("jack")}>Set Name</button>
				{JSON.stringify(name)}
			</div>
		</div>
	);
}
export default UseStateComponent;
