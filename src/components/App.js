import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

const App = () => (
  <React.Fragment>
    <Header />
    <Character image='https://rickandmortyapi.com/api/character/avatar/1.jpeg' name='Rick Sanchez' species='Human' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/2.jpeg' name='Morty Smith' species='Human' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/24.jpeg' name='Armagheadon' species='Alien, Cromulon' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/50.jpeg' name='Blim Blam' species='Alien, Korblock' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/121.jpeg' name='Eyehole Man' species='Alien' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/230.jpeg' name='Morty Jr.' species='Humanoid, Human Gazorpian' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/340.jpeg' name='Supernova' species='Human, Superhuman' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/369.jpeg' name='Tusked Assassin' species='Alien, Tuskfish' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/426.jpeg' name='Greasy Grandma' species='Human, Grandma' />
    <Character image='https://rickandmortyapi.com/api/character/avatar/443.jpeg' name='Tank Top Jerry' species='Human' />
    <Footer />
  </React.Fragment>
);

export default App;
