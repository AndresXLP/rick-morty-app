import "./characters.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Chars() {
  const { id } = useParams();
  const characterId = `https://rickandmortyapi.com/api/character/${id}`;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [planet, setPlanet] = useState("");
  const [location, setLocation] = useState("");
  const [episode, setEpisode] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [character, setCharacter] = useState([]);

  /*
  Pendiente por terminar
  */
  useEffect(() => {
    const loadCharacter = async () => {
      const res = await fetch(characterId);
      const data = await res.json();
      setCharacter(data);
      setPlanet(data.origin);
      setLocation(data.location);
      setEpisodes(data.episode);
    };
    loadCharacter();
  }, [characterId]);

  useEffect(() => {
    const loadEpisodeForCharacter = async () => {
      let epi = [];
      for (let i = 1; i < 4; i++) {
        const res = await fetch(
          `https://rickandmortyapi.com/api/episode?page=${i}`
        );
        const data = await res.json();
        const charsByEpisode = data.results;
        charsByEpisode.map((charsByEpis, i) => {
          return charsByEpis.characters.map((charInEpisode) => {
            if (charInEpisode === characterId) {
              epi.push(charsByEpis.name);
            }
            return epi;
          });
        });
        setEpisode(epi);
      }
    };
    loadEpisodeForCharacter();
  }, [characterId]);
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
                  <div className="list-group-item">
                    Status: {character.status}
                  </div>
                  <div className="list-group-item">
                    Species: {character.species}
                  </div>
                  <div className="list-group-item">
                    Gender: {character.gender}
                  </div>
                  <div className="list-group-item">Origin: {planet.name}</div>
                  <div className="list-group-item">
                    Actual Location: {location.name}
                  </div>
                  <div className="list-group-item">
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      className="me-2 position-relative"
                    >
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {episodes.length}
                        <span className="visually-hidden">unread messages</span>
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
                        <ul className="list-group">
                          {episodes.map((ep, i) => (
                            <div key={i} className="list-group-item">
                              {episode[i]}
                            </div>
                          ))}
                        </ul>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
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
