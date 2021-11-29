import "./characters.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Chars() {
  const { id } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const [currentEpisodesUrl, setCurrentEpisodesUrl] = useState(
    `https://rickandmortyapi.com/api/episode/`
  );
  const [planet, setPlanet] = useState("");
  const [location, setLocation] = useState("");
  const [episode, setEpisode] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const url = currentPageUrl;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setPlanet(data.origin);
        setLocation(data.location);
        setEpisode(data.episode);
      });
  }, [currentPageUrl]);
  useEffect(() => {
    const urlEp = currentEpisodesUrl;
    fetch(urlEp)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
      });
  }, []);

  // console.log(episodes[0].name);

  function goHome(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="App d-flex column">
      <div className="card w-50">
        <div className="row g-0">
          <div className="col-md card-hv">
            <img
              src={character.image}
              className="img-thumbnail rounded p-3 "
              alt="..."
            />
          </div>
          <div className="col-md">
            <div className="card-body card-hv">
              <h5 className="card-title">{character.name}</h5>
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item">
                  <li className="list-group-item">
                    Status: {character.status}
                  </li>
                  <li className="list-group-item">
                    Species: {character.species}
                  </li>
                  <li className="list-group-item">
                    Gender: {character.gender}
                  </li>
                  <li className="list-group-item">Origin: {planet.name}</li>
                  <li className="list-group-item">
                    Acutal Location: {location.name}
                  </li>
                  <li className="list-group-item">
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      className="me-2 position-relative"
                    >
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {episode.length}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                      Episode List
                    </Button>
                    <Offcanvas
                      show={show}
                      onHide={handleClose}
                      placement={"end"}
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Episodes</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <ul class="list-group">
                          {episode.map((ep, i) => (
                            // (<li class="list-group-item">{ep.url}</li>)
                            <li class="list-group-item">{ep}</li>
                          ))}
                        </ul>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </li>
                </li>
              </ul>
              <div>
                <Button
                  variant="primary"
                  onClick={goHome}
                  className="me-2 position-relative"
                >
                  Regresar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
