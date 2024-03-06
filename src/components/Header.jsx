export function Header() {
    return (
        <div id="header">
            <button onClick={() => {window.scroll(0, 0)}}>About Me</button>
            <button onClick={() => {window.scroll(0, document.getElementById("projects").offsetTop)}}>Projects</button>
            <button onClick={() => {window.scroll(0, document.getElementById("contact").offsetTop)}}>Contact</button>
        </div>
    )
}