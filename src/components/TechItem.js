import React from "react";

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

export default TechItem;
