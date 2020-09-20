import React from 'react';
import styles from './Subhero.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import productive from '../../assets/images/illustration-stay-productive.png'
import rightArrow from '../../assets/images/icon-arrow.svg'

const Hero: React.FC = () => (
  <div className={styles.Hero} data-testid="Subhero">
    <Container>
      <Row> 
        <Column size={{xs: 12, md: 6}} >
          <img className={styles.heroImage} src={productive} alt="heroImage" />
        </Column>
        <Column size={{xs: 12, md: 6}}>
          <Row>
            <Column size={12}>
              <h1 className={ styles.title  + " title"}>Stay productive, wherever you are</h1>
            </Column>
            <Column size={12}>
              <p className={styles.lead}> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
              <p className={styles.lead}> Securely share files and folders with friends, family and colleague for live collaboration. No email attachments required.</p>
            </Column>
            <Column horizontalAlignment="left">
              <button className={"btn btn-outline " + styles.btn}>See How Fylo Works <img alt="rightArrow" src={rightArrow}></img></button>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </div>
);

export default Hero;
