import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ id, handleSearch, setId, handleAllCharacters }) => {
  return (
    <>
      <nav className={`navbar  bg-body-tertiary ${styles.prueba}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={styles.search}>
              <input
                value={id}
                className="form-control w-25"
                type="search"
                placeholder="ID"
                aria-label="ID"
                onChange={(e) => setId(e.target.value)}
              />
              <button
                className="btn btn-outline-info"
                type="submit"
                onClick={handleSearch}
              >
                Buscar un personaje por id
              </button>
            </div>
            <button
              className="btn btn-outline-info ms-2"
              onClick={handleAllCharacters}
            >
              Ver todos los personajes
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
