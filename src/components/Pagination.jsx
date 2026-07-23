import { useState } from "react";
import "../style/Kelas.css";

const Pagination = () => {
  const [page, setPage] = useState(1);
  let halaman = [1, 2, 3, 4, 5, 6];
  const totalPages = halaman.length;
  return (
    <div className="pagination">
      <button
        onClick={() => setPage((p) => p - 1)}
        disabled={page === 1}
        className="page-btn"
      >
        &lt;
      </button>

      {halaman.map((n) => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={`page-btn ${page === n ? "active" : ""}`}
        >
          {n}
        </button>
      ))}
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page === totalPages}
        className="page-btn"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
