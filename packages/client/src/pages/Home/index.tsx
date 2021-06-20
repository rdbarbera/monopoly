import React from "react";
import bannerImage from "../../img/banner.png";
import { Button, Card, Badge } from "react-bootstrap";
import { navigate } from "hookrouter";
import useStoredGames from "../../hooks/useStoredGames";
import "./Home.scss";
import { DateTime } from "luxon";
import { formatCurrency } from "../../utils";
import Screenshot1Image from "../../img/screenshots/screenshot-1.png";
import Screenshot2Image from "../../img/screenshots/screenshot-2.png";
import Screenshot3Image from "../../img/screenshots/screenshot-3.png";
import Screenshot4Image from "../../img/screenshots/screenshot-4.png";

interface IHomeProps {
  onGameSetup: (gameId: string, userToken: string, playerId: string) => void;
}

const Home: React.FC<IHomeProps> = ({ onGameSetup }) => {
  const { storedGames } = useStoredGames();

  const newGame = () => navigate("/new-game");
  const joinGame = () => navigate("/join");

  return (
    <div className="home text-center">
      <h1 className="sr-only">Monopoly Money</h1>
      <img src={bannerImage} className="banner" alt="Monopoly Money Banner" />

      <p className="lead mt-2">
        Juguemos Monopoly manejando las finanzas digitales.
      </p>

      <div className="new-join-button-wrapper mt-4">
        <Button size="lg" onClick={newGame}>
          Nuevo Juego
        </Button>
        <Button size="lg" onClick={joinGame}>
          Unirse a Juego
        </Button>
      </div>

      <div className="mt-4">
        <h2>Mis Juegos Activos</h2>
        {storedGames.length > 0 ? (
          <div className="active-game-cards">
            {storedGames
              .sort((a, b) => (a.time > b.time ? -1 : 1))
              .map(({ gameId, userToken, playerId, status, time }) => (
                <Card key={gameId} className="mb-1">
                  <Card.Body className="p-2">
                    <div className="text-left">
                      Juego {gameId}
                      <small style={{ float: "right" }}>
                        {DateTime.fromISO(time).toFormat("DD h:mm a")}
                      </small>
                    </div>
                    <div>
                      {status?.players
                        .sort((p1, p2) => (p1.playerId === playerId ? -1 : 0))
                        .map((player) => (
                          <Badge
                            key={player.playerId}
                            variant={
                              player.playerId === playerId
                                ? "dark"
                                : player.banker
                                  ? "info"
                                  : "success"
                            }
                            className="mr-1"
                          >
                            {player.name}: {formatCurrency(player.balance)}
                          </Badge>
                        ))}
                      {/*status !== null && (
                        <Badge variant="warning">
                          Free Parking: {formatCurrency(status.freeParkingBalance)}
                        </Badge>
                      )*/}
                    </div>
                    <Button
                      block
                      size="sm"
                      variant="outline-primary"
                      onClick={() => onGameSetup(gameId, userToken, playerId)}
                      className="mt-2"
                    >
                      Unirse
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </div>
        ) : (
            <div>No tienes juegos activos, inicia uno nuevo o unete</div>
          )}
      </div>

      <hr />

      <div>
        <h2>Que es Monopoly Money?</h2>
        <p>
          Es un webapp que permite manejar el dinero de manera digital por medio de transferencias
          entre usuario y el banco.
        </p>
        <p>
          En lugar de utilizar el dinero que ya incluye el juego de mesa, puede jugar desde su telefono de manera digital,
          mucho mas r?pido.
        </p>
        <p>
          Para jugar, quien vaya a ser el "banco" solo debe hacer clic en "Nuevo Juego", esto generar? un id que es que debe introducir
          en el boton "Unirse a Juego" los demas juegadores.
        </p>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: 6 }}
          className="mt-5"
        >
          <img src={Screenshot1Image} alt="Funds page with game id" className="w-100" />
          <img src={Screenshot2Image} alt="Transfering funds" className="w-100" />
          <img src={Screenshot3Image} alt="Game history" className="w-100" />
          <img src={Screenshot4Image} alt="Bankers actions page" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
