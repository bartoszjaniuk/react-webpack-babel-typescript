import image from "./react-logo.svg";

export const App = () => {
	return (
		<div>
			<h1>App</h1>
			<img src={image} alt="React Logo" width={50} height={50} />
		</div>
	);
};
