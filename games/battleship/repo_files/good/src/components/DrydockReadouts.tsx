import * as React from 'react';
import type { BattleshipEngine } from '../game/BattleshipEngine';

export function DrydockReadouts({ engine }: { engine: BattleshipEngine }) {
  return (
    <>
      <div className="fleet-status" data-testid="enemy-fleet-status">
        <div className="panel-kicker">ENEMY FLEET STATUS</div>
        {engine.enemyBoard.ships.map(ship => (
          <div className="fleet-line" key={ship.id}><span>{ship.name}</span><b>{ship.sunk ? '击沉' : '在役'}</b></div>
        ))}
        <div className="fleet-line total"><span>剩余</span><b>{engine.enemyBoard.shipsRemaining()}</b></div>
      </div>
      <div className="battle-log" data-testid="battle-log">
        <div className="panel-kicker">BATTLE LOG</div>
        {(engine.battleLog.length ? engine.battleLog.slice(-8) : [{ message: '等待交火记录…' }]).map((entry, index) => (
          <p key={`${index}-${entry.message}`}>{entry.message}</p>
        ))}
      </div>
    </>
  );
}
