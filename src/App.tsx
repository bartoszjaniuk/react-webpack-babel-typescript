import image from "./react-logo.svg";
import "../styles/style.css";
import { Styled } from "../styles/app.styles";
import styles from "./App.module.css";

export const App = () => {
	return (
		<div className="container">
			<Styled.AppH1>App</Styled.AppH1>
			<img src={image} alt="React Logo" width={50} height={50} />
			<p className={styles.paragraph}>test</p>
		</div>
	);
};
