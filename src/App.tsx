import image from "./react-logo.svg";
import "../styles/style.css";
import { Styled } from "../styles/app.styles";
import styles from "./App.module.scss";
import "../styles/styles.scss";

export const App = () => {
	return (
		<>
			<div className="container">
				<Styled.AppH1>App</Styled.AppH1>
				<img src={image} alt="React Logo" width={50} height={50} />
				<p className={styles.paragraph}>test</p>
			</div>
			<div className="sass">
				<div className="sass__container">
					<h1>App</h1>
					<img src={image} alt="React Logo" width={50} height={50} />
					<p className={styles.paragraph}>test</p>
				</div>
			</div>
		</>
	);
};
