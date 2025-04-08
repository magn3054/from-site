import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "../assets/fjom-logo.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {}, [useLocation().pathname]); // rerenderer headeren ved location ændring

    return (
        <header>
            <Link to="/"><img className={style.logo} src={Logo} alt="" /></Link>
            <nav>
                <ul>
                    {/* checker om location passer med linket og tilføjer en special klasse dertil, ellers tilføjes ingen */}
                    <li className={location.pathname === "/second" ? style.active : ""}>
                        <Link to="/second">Om os</Link>
                    </li>
                    <li className={location.pathname === "/third" ? style.active : ""}>
                        <Link to="/third">Hvad gør vi</Link>
                    </li>
                    <li className={location.pathname === "/fourth" ? style.active : ""}>
                        <Link to="/fourth">Ydelser</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

