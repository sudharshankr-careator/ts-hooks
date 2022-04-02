import { createContext } from "react";
const initialState = {
	first: "sudharshan",
	last: "reddy",
};
export type UserState = typeof initialState;
const context = createContext<typeof initialState>(initialState);
export default context;
