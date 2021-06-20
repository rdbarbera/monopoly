import React, { useRef } from "react";
import { useClipboard } from "use-clipboard-copy";
import { Overlay, Tooltip } from "react-bootstrap";

interface IGameCodeProps {
  gameId: string;
  isBanker: boolean;
}

const GameCode: React.FC<IGameCodeProps> = ({ gameId, isBanker }) => {
  const clipboard = useClipboard({
    copiedTimeout: 1000
  });
  const copyTooltipTarget = useRef<HTMLHeadingElement>(null);

  const gameIdClicked = () => {
    clipboard.copy(gameId);
  };

  return (
    <div className="text-center">
      <h1 ref={copyTooltipTarget} onClick={gameIdClicked}>
        {gameId}
      </h1>
      <Overlay target={copyTooltipTarget.current} show={clipboard.copied} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Copied to clipboard
          </Tooltip>
        )}
      </Overlay>
      {isBanker && (
        <small className="text-muted">Utilice este codigo para unirse al juego</small>
      )}
      <hr />
    </div>
  );
};

export default GameCode;
