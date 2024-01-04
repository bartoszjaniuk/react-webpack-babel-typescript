import { lazy, Suspense } from 'react'; // Must be imported for webpack to work

import { Styled } from '../styles/app.styles';

import image from './react-logo.svg';
import styles from './App.module.scss';

import '../styles/styles.scss';
import '../styles/style.css';

// eslint-disable-next-line import/no-unresolved, @typescript-eslint/no-unused-vars
const Layout = lazy(() => import('SharedLayout/Layout'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Layout>
          <div className="container">
            <Styled.AppH1>This is only for stage test</Styled.AppH1>
            <img src={image} alt="React Logo" width={50} height={50} />
            <p className={styles.paragraph}>CSS Module Paragraph</p>
          </div>
          <div className="sass">
            <div className="sass__container">
              <h1>SCSS H1 TAG</h1>
              <img src={image} alt="React Logo" width={50} height={50} />
              <p className={styles.paragraph}>SCSS Module Paragraph</p>
            </div>
          </div>
        </Layout>
      </Suspense>
    </>
  );
};
