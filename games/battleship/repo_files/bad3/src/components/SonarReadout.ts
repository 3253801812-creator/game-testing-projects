/** 深渊声呐界面独有的读数格式，不与其他产品共享。 */
export function sonarReadout(ping: number, echo: number) {
  return `PING ${String(ping).padStart(2, '0')} · ECHO ${Math.max(0, Math.round(echo))}m`;
}
