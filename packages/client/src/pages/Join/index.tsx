import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createGame, joinGame } from "../../api";
import useStoredGames from "../../hooks/useStoredGames";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import Config from "../../config";

interface IJoinProps {
  newGame: boolean;
  onGameSetup: (gameId: string, userToken: string, playerId: string) => void;
}

const Join: React.FC<IJoinProps> = ({ newGame, onGameSetup }) => {
  const title = newGame ? "Nuevo Juego" : "Unirse al Juego";

  const { storedGames } = useStoredGames(false);
  const [loading, setLoading] = useState(false);
  const [gameId, setGameId] = useState("");
  const [name, setName] = useState("");
  const [gameError, setGameError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [hasServerError, setHasServerError] = useState(false);

  // If the game is already stored, join with what we have
  const isAStoredGame = storedGames.map((g) => g.gameId).indexOf(gameId) !== -1;

  const onSubmit = () => {
    if (isAStoredGame) {
      const storedGame = storedGames.find((g) => g.gameId === gameId)!;
      onGameSetup(storedGame.gameId, storedGame.userToken, storedGame.playerId);
    } else if (newGame) {
      // Validity check
      if (name === "") {
        setNameError("Por favor ingresa tu nombre");
        return;
      }
      setNameError(null);

      // Create game
      setLoading(true);
      createGame(name)
        .then((result) => {
          onGameSetup(result.gameId, result.userToken, result.playerId);
        })
        .catch((error) => {
          console.log(error);
          setHasServerError(true);
        })
        .finally(() => setLoading(false));
    } else {
      // Validity check
      if (gameId === "") {
        setGameError("Por favor ingresa el ID del juego");
        return;
      }
      setGameError(null);
      if (name === "") {
        setNameError("Por favor ingresa tu nombre");
        return;
      }
      setNameError(null);

      // Join game
      setLoading(true);
      joinGame(gameId, name)
        .then((result) => {
          if (result === "DoesNotExist") {
            setGameError("El juego no existe");
          } else if (result === "NotOpen") {
            setGameError("El juego no se encuentra abierto, pidele al usuario 'banco' que lo abra para nuevos usuarios en 'Conf.'.");
          } else {
            onGameSetup(result.gameId, result.userToken, result.playerId);
          }
        })
        .catch((error) => {
          console.log(error);
          setHasServerError(true);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="text-center">
      <h1>{title}</h1>

      {!newGame && (
        <Form.Group>
          <Form.Label>Game Id</Form.Label>
          <NumberFormat
            allowNegative={false}
            format="######"
            placeholder="123456"
            value={gameId}
            onValueChange={({ value }: NumberFormatValues) => setGameId(value)}
            className="form-control text-center"
            autoComplete="off"
            inputMode="decimal"
          />
          <Form.Text style={{ color: "var(--danger)" }}>{gameError}</Form.Text>
        </Form.Group>
      )}

      {isAStoredGame ? (
        <p>
          <em>Ya te encuentras en el juego, nombre no es necesario.</em>
        </p>
      ) : (
          <Form.Group>
            <Form.Label>Tu nombre</Form.Label>
            <Form.Control
              placeholder="Nombre"
              value={name}
              className="text-center"
              onChange={(e) => setName(e.currentTarget.value)}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                event.key === "Enter" && onSubmit()
              }
              autoComplete="on"
            />
            <Form.Text style={{ color: "var(--danger)" }}>{nameError}</Form.Text>
          </Form.Group>
        )}

      <Button block variant="primary" onClick={onSubmit} disabled={loading}>
        {newGame ? "Crear" : "Unirse"}
      </Button>

      {hasServerError && (
        <p style={{ color: "var(--danger)" }} className="mt-2">
          {Config.api.unreachableErrorMessage.split("\n").map((line, i, arr) => (
            <React.Fragment key={line}>
              {line}
              {i !== arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
};

export default Join;
