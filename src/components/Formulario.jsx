import "./Formulario.css";
import { useState } from "react";

export function Formulario({ setUser }) {
    const [usuario, setUsuario] = useState("");
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario === "" || password === "") {
            setError("Debes completar todos los campos");
            return;
        }
        setError(null);

        setUser([usuario]);
    }

    return (
        <section>
            <h1>Login</h1>
            <form className="formulario"
                onSubmit={handleSubmit}>
                <label for="name">Nombre</label>
                <input type="text" placeholder="Nombre"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <label for="email">Gmail</label>
                <input type="email" name="email" placeholder="Gmail" pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$" 
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)} />

                <label for="password">Contraseña</label>
                <input type="password" placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Iniciar sesion</button>
                <br /><br /><br />
            </form>
            {error && <p>{error}</p>}
        </section>
    )
}
