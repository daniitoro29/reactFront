import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorTitle}>404</div>
      <div className={styles.errorDescription}>
        Upsss, parece que esta ruta no existe
      </div>
      <Link to="/" className={styles.backButton}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
