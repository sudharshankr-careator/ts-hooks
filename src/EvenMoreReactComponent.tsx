import { ReactNode } from "react";
import { isTemplateSpan } from "typescript";

export interface HeadingProps {
	title: string;
}
export function Heading({ title }: HeadingProps) {
	return <h3>{title}</h3>;
}

export function List<ListItem>({
	items,
	render,
}: {
	items: ListItem[];
	render: (items: ListItem) => ReactNode;
}) {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>{render(item)}</li>
			))}
		</ul>
	);
}

function TestComponent() {
	return (
		<div>
			<Heading title="Hello" />

			<List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
		</div>
	);
}

export default TestComponent;
