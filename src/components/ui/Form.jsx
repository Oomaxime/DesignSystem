import PropTypes from "prop-types";
import Text from "./Text";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const defaultClasses = "form";

export default function Form({
  children,
  onSubmit,
  h1 = "Title",
  h2 = "",
  buttonText = "Submit",
  link = null,
  path = "/",
}) {
  const navigate = useNavigate();

  return (
    <form onSubmit={onSubmit} className={defaultClasses}>
      <div className="flex flex-col gap-3">
        <h1>
          <Text type="main-title">{h1}</Text>
        </h1>
        {h2 && (
          <h2 className="text-center">
            <Text type="tagline">{h2}</Text>
          </h2>
        )}
      </div>

      {children}

      <div className="flex flex-col gap-3">
        <Button type="submit" active={true} onClick={() => navigate(path)}>
          <Text className="text-button">{buttonText}</Text>
        </Button>

        {link && (
          <p className={`text-${link.align || "end"}`}>
            {link.pretext}
            <Link
              to={link.url}
              className="text-blue-500 hover:underline text-end"
            >
              {link.text}
            </Link>
          </p>
        )}
      </div>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  h1: PropTypes.string,
  h2: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  path: PropTypes.string,
};
