import React from "react";
import ValuePlayerForm from "./ValuePlayerForm";
import { IGameStatePlayer, GameEntity } from "@monopoly-money/game-state";
import "./Bank.scss";
import GiveFreeParking from "./GiveFreeParking";
import InitialiseGame from "./InitialiseGame";
import PlayerPassedGo from "./PlayerPassedGo";

interface IBankProps {
  players: IGameStatePlayer[];
  freeParkingBalance: number;
  hasATransactionBeenMade: boolean;
  proposeTransaction: (from: GameEntity, to: GameEntity, amount: number) => void;
}

const Bank: React.FC<IBankProps> = ({
  players,
  freeParkingBalance,
  hasATransactionBeenMade,
  proposeTransaction
}) => {
  return (
    <div className="bank">
      {!hasATransactionBeenMade && (
        <div className="mb-3">
          <InitialiseGame players={players} proposeTransaction={proposeTransaction} />
        </div>
      )}

      <div className="mb-4">
        <ValuePlayerForm
          label="Darle dinero a jugador"
          submitText="Enviar"
          players={players}
          onSubmit={(value: number, playerId: string) =>
            proposeTransaction("bank", playerId, value)
          }
        />
      </div>

      <div className="mb-4">
        <PlayerPassedGo
          players={players}
          onSubmit={(value: number, playerId: string) =>
            proposeTransaction("bank", playerId, value)
          }
        />
      </div>

      {/*<div className="mb-4">
        <GiveFreeParking
          players={players}
          freeParkingBalance={freeParkingBalance}
          onSubmit={(playerId: string) =>
            proposeTransaction("freeParking", playerId, freeParkingBalance)
          }
        />
        </div>*/}

      <div className="mb-4">
        <ValuePlayerForm
          label="Tomar dinero de jugador"
          submitText="Tomar"
          players={players}
          onSubmit={(value: number, playerId: string) =>
            proposeTransaction(playerId, "bank", value)
          }
        />
      </div>
    </div>
  );
};

export default Bank;
