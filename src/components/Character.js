import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

// const Character = ({ image, name, species }) => {
//   return (
//     <dl className={styles.Character}>
//       <img src={image} />
//       <div>
//         <dt>Name</dt>
//         <dd>{name}</dd>

//         <dt>Species</dt>
//         <dd>{species}</dd>
//       </div>
//     </dl>
//   );
// };

// Character.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   species: PropTypes.string.isRequired
// };

class Character extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  }

  render() {
    return (
      <dl className={styles.Character}>
        <img src={this.props.image} />
        <div>
          <dt>Name</dt>
          <dd>{this.props.name}</dd>

          <dt>Species</dt>
          <dd>{this.props.species}</dd>
        </div>
      </dl>
    );
  }
}


export default Character;
