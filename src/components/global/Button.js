import { Link } from "react-router-dom";

let Button = ({ text, link, disabled, onClick }) => {
    return (
        <Link to={link}>
            <button disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </Link>
    )
}

export default Button;