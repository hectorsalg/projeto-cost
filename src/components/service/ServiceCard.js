import styles from "../project/ProjectCard.module.css";

import { BsFillTrashFill } from "react-icons/bs";

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove,
}) {
  const remove = (e) => {};
  return (
    <div className={styles.projectCard}>
      <h3>{name}</h3>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.projectCardActions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}
