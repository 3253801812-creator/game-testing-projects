/** 皇家海图室独有的海图标记格式。 */
export function chartroomBearing(row: number, col: number) {
  return `${String.fromCharCode(65 + col)}${row + 1} · BRG-${String((col * 10 + row) % 360).padStart(3, '0')}`;
}
