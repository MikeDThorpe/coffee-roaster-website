import { Link } from "react-router-dom";

let Button = ({ text, link, disabled }) => {
    return (
        <Link to={link}>
            <button disabled={disabled}>
                {text}
            </button>
        </Link>
    )
}

export default Button;