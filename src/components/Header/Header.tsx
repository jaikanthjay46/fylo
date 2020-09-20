import React from 'react';
import styles from './Header.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import logo from '../../assets/images/logo.svg'

const Header: React.FC = () => (
  <div className={styles.Header} data-testid="Header">
    <Container fluid={true} >
      <Row noGutters={true} verticalAlignment="center">
          <Column size={{md: 2, xs: 2}} > 
            <img src={logo} alt="Logo" className={styles.brand}></img>  
          </Column>

          <Column offset={{md: 7, xs: 1}} size={{xs: 3, md: 1}} > 
            <button className={styles.btn}>Features</button>  
          </Column>

          <Column size={{xs: 3, md: 1}} > 
            <button className={styles.btn}>Team</button>  
          </Column>

          <Column size={{xs: 3, md: 1}} > 
            <button className={styles.btn}>Sign In</button>  
          </Column>

      </Row>
    </Container>
  </div>
);

export default Header;
