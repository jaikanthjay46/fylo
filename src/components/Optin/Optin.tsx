import React from 'react';
import styles from './Optin.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";

const Optin: React.FC = () => (
  <div className={styles.Optin} data-testid="Optin">
    <div className={styles.OptinBox}>
      <Container>
        <Row>
          <Column size={12}>
            <h3 className="title">Get early access today</h3>
            <p className="lead">it only takes a minute to signup and our free starter tier is extremely generous. If you have any question, our support team would be happy to help you.</p>
          </Column>
          <Column size={{xs: 12, md:8}}>
            <input aria-label="Email Address" type="email" name="email" id="email" placeholder="email@example.com"/>
          </Column>
          <Column size={{xs: 12, md:4}}>
            <button className="btn btn-primary">Get Started For Free</button>
          </Column>

        </Row>
      </Container>
    </div>
  </div>
);

export default Optin;
