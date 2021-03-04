import { Link } from "react-router-dom";

let Button = ({ text, link }) => {
    return (
        <Link to={link}>
            <button>
                {text}
            </button>
        </Link>
    )
}

export default Button;