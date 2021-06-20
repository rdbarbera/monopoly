import React, { useState } from "react";
import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import { IGameStatePlayer } from "@monopoly-money/game-state";
import { formatCurrency } from "../../utils";

interface IGiveFreeParkingProps {
  players: IGameStatePlayer[];
  freeParkingBalance: number;
  onSubmit: (playerId: string) => void;
}

const GiveFreeParking: React.FC<IGiveFreeParkingProps> = ({
  players,
  freeParkingBalance,
  onSubmit
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState<IGameStatePlayer | null>(null);

  const valid = selectedPlayer !== null;

  const submit = () => {
    if (selectedPlayer !== null) {
      onSubmit(selectedPlayer.playerId);
      setSelectedPlayer(null);
    }
  };

  return (
    <>
      <label htmlFor="free-parking-player" className="mb-1">
        Enviar free parking ({formatCurrency(freeParkingBalance)})
      </label>

      <ButtonGroup className="mt-1 player-and-submit-group">
        <DropdownButton
          as={ButtonGroup}
          variant="outline-secondary"
          id="free-parking-player"
          title={selectedPlayer?.name ?? "Selecionar Jugador"}
        >
          {players.map((player) => (
            <Dropdown.Item key={player.playerId} onClick={() => setSelectedPlayer(player)}>
              {player.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <Button variant="outline-secondary" onClick={submit} disabled={!valid}>
          Enviar
        </Button>
      </ButtonGroup>
    </>
  );
};

export default GiveFreeParking;
