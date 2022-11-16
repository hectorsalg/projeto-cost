import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

import styles from './ProjectCard.module.css';

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.projectCard}>
            <h3>{name}</h3>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.categoryText}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.projectCardActions}>
                <Link to='/'>
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}