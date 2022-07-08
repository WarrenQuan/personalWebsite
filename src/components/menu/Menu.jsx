import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {/* onClick is for closing menu after clicking on an option */}
                <a href="#intro">
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        Intro
                    </li>
                </a>
                <a href="#about">
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        About
                    </li>
                </a>
                <a href="#portfolio">
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                    Portfolio
                    </li>
                </a>
                <a href="#contact">
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                    Contact
                    </li>
                </a>
            </ul>

        </div>

    )
}
