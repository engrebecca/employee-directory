import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Footer from "./components/Footer";
import AlbumImg from "./components/Album";
import albums from "./albums.json";

class App extends Component {
    // Setting this.state.albums to the albums json array
    // this.state.clicked is a set that keeps track of what albums have been clicked
    // this.state.highScore keeps track of the high score
    state = {
        albums: albums,
        clicked: new Set(),
        message: "Test your memory and click images no more than once!",
        highScore: 0
    };

    validateClick = id => {
        // Finds the album with specific id in this.state.albums
        const selectAlbum = this.state.albums.find(album => album.id === id);
        // Set this.state.clicked set includes the selected album, end game since it has been selected before
        if (this.state.clicked.has(selectAlbum)) {
            // End game and set this.state to include a new set that is empty to start a new game
            // Set message to display you guessed incorrect
            this.setState(state => ({
                ...state,
                clicked: new Set(),
                message: "You guessed incorrect!"
            }))
        } else {
            // If this.state.clicked doesn't include the slected album, add the album to the clicked set 
            // Update high score to reflect either the number of correct albums selected or the existing high score, whichever is larger
            // Set mesage to display you guessed correct
            this.setState(state => ({
                ...state,
                albums: this.shuffleAlbums(state.albums),
                clicked: state.clicked.add(selectAlbum),
                highScore: Math.max(state.clicked.size, state.highScore),
                message: "You guesed correct!"
            }))
        }
    };

    shuffleAlbums = (albums) => {
        for (let i = albums.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = albums[i];
            albums[i] = albums[j];
            albums[j] = temp;
        }
        return albums
    }

    // Render navbar with title, message, score, and high score based this.state
    // Map over this.state.album and render a album image component for each album object
    render() {
        return (
            <Wrapper>
                <Navbar title="Music Album Memory Game" message={this.state.message} score={this.state.clicked.size} highScore={this.state.highScore} />
                <Jumbotron>Jumbotron</Jumbotron>
                <Container>
                    {this.state.albums.map(album => (
                        <AlbumImg
                            key={album.id}
                            name={album.name}
                            image={album.image}
                            onClick={() => this.validateClick(album.id)}
                        />
                    ))}
                </Container>
                <Footer text="Music Album Memory Game"></Footer>
            </Wrapper>
        );
    }
}

export default App;
