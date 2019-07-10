import React from "react";
import PropTypes from "prop-types";

// Como não estamos manipulando nenhuma infrmação, podemos criar em forma de função
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      {/* <button onClick={() => this.handleDelete(tech)} type="button">
        Remover
      </button> */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};

TechItem.propTypes = {
  // tech: PropTypes.string.isRequired
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
