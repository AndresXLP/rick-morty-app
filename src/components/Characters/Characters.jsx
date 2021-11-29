import "./characters.css";
import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { Link } from "react-router-dom";

export default function Characters() {
  const [pageCount, setPageCount] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  useEffect(() => {
    const url = currentPageUrl;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setPageCount(Math.ceil(data.info.pages));
        // alert(data.results.length);
      });
  }, [currentPageUrl]);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPageUrl(
      e.selected === 0
        ? "https://rickandmortyapi.com/api/character"
        : `https://rickandmortyapi.com/api/character?page=${selectedPage + 1}`
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item bg-black"
          pageLinkClassName="page-link bg-black"
          previousClassName="page-item bg-black"
          previousLinkClassName="page-link bg-black"
          nextClassName="page-item bg-black"
          nextLinkClassName="page-link bg-black"
          breakLabel={"..."}
          breakClassName={"page-item bg-black"}
          breakLinkClassName="page-link bg-black"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination bg-black"}
          subContainerClassName={"pages pagination bg-black"}
          activeClassName={"active "}
        />
        <table className="table table-success table-striped table-bordered table-wrapper-scroll-y my-custom-scrollbar border-dark align-middle">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Status</th>
              <th scope="col">Planet</th>
              <th scope="col">Photo</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr key={character.id}>
                <td>
                  <Link to={`/chars/${character.id}`}>{character.name}</Link>
                </td>

                <td>{character.gender}</td>
                <td>{character.status}</td>
                <td>{character.origin.name}</td>
                <td>
                  <img
                    className="rounded w-25"
                    src={character.image}
                    alt={`Character`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}
