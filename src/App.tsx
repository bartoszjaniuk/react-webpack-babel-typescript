import { Styled } from '../styles/app.styles';

import image from './react-logo.svg';
import styles from './App.module.scss';
import '../styles/styles.scss';
import '../styles/style.css';

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
