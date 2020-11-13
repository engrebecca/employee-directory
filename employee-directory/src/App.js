import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
    return (
        <Wrapper>
            <Navbar></Navbar>
            <Container>
                <Header></Header>
            </Container>
        </Wrapper>
    );
}

export default App;