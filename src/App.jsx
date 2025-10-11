import { useState } from "react";

const App = () => {
    const [names, setNames] = useState({maleName: "", femaleName: ""});

    const checkFlames = (e) => {
        e.preventDefault();
        console.log(names);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNames((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    return (
        <>
        <h1>Flames App <span className="red">&hearts;</span></h1>
        <form onSubmit={checkFlames}>
            <label htmlFor="male-name">Male name:</label>
            <input type="text" id="male-name" placeholder="Isaac" onChange={handleChange} />
            <label htmlFor="female-name">Female Name:</label>
            <input type="text" id="female-name" placeholder="Chidi" onChange={handleChange} />
            <button type="submit">Check</button>
        </form>
        </>
    )
}

export default App;
