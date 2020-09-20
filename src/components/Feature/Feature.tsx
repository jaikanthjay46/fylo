import React from 'react';
import styles from './Feature.module.scss';
import { Column } from "react-bootstrap-grid-component/dist/Column";

type FeatureProps = {
  image: any,
  heading: string,
  message: string
}

const Feature = (props: FeatureProps) => (
    <Column horizontalAlignment="center" verticalAlignment="center" size={{xs: 12, md: 6}}>
          <img className={styles.image} src={props.image}  alt="access anywhere"></img>
          <h3 className="title">{props.heading}</h3>
          <p className={styles.lead}>{props.message}</p>
    </Column>
);

export default Feature;
