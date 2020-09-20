import React from 'react';
import styles from './Testimonials.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import profile1 from "../../assets/images/profile-1.jpg"


const getTestimonials = () => {
  let items = []
  for (let i=0; i < 3; i++) {
    items.push(
      <Column size={{xs: 12, md: 4}}>
          <div className={styles.TestimonialBox}>
            <p>Fylo has improved our team's productivity by order of a magnitude.Since making the switch or team has become well-oiled collaboration</p>
            <div className={styles.info}>
                <img className=".img-responsive" src={profile1} alt="testimonial1"/>
                <h3>Harsh Patel</h3>
                <p>Founder & Ceo</p>
            </div>
          </div>
        </Column>
    )
  }
  return items;
}

const Testimonials: React.FC = () => (
  <div className={styles.Testimonials} data-testid="Testimonials">
    <Container>
      <Row>
        {getTestimonials()}
      </Row>
    </Container>
  </div>
)

export default Testimonials;
