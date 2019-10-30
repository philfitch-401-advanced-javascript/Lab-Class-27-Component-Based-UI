import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ image, name, species }) => {
  return (
    <dl className={styles.Character}>
      <img src={image} />
      <div>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Species</dt>
        <dd>{species}</dd>
      </div>
    </dl>
  );
};

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
