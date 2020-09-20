import React from 'react';
import styles from './CircleIcon.module.scss';

type IconProps = {
  icon?: string
  padding?: string
}

const CircleIcon = (props: IconProps) => (
  <div className={styles.CircleIcon} data-testid="CircleIcon">
    <i style={{'paddingLeft': props.padding, 'paddingRight': props.padding}} className={props.icon}></i>
  </div>
);

export default CircleIcon;
