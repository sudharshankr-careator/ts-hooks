import { useContext, useState } from "react";
import UserContext, { UserState } from "./Store";

function ConsumerComponent() {
	const user = useContext<UserState>(UserContext);
	return (
		<div>
			<div>First: {user.first}</div>
			<div>Last: {user.last}</div>
		</div>
	);
}
function UseContextComponent() {
	const [user, userSet] = useState<UserState>({
		first: "Vineeth",
		last: "Kumar",
	});
	return (
		<div>
			<UserContext.Provider value={user}>
				<ConsumerComponent />
				<button
					onClick={() =>
						userSet({
							first: "sudharshan",
							last: "reddy",
						})
					}
				>
					Change Context
				</button>
			</UserContext.Provider>
		</div>
	);
}
export default UseContextComponent;
