import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Wrapper>
                <Header></Header>
                {/* Section that renders all employees from employees.json */}
            </Wrapper>
        </div>
    );
}

export default App;