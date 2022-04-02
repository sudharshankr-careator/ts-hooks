import { useRef } from "react";

export default function UseRefComponent() {
	const inputRef = useRef(null);
	return (
		<div>
			<input type="text" ref={inputRef} />
		</div>
	);
}
