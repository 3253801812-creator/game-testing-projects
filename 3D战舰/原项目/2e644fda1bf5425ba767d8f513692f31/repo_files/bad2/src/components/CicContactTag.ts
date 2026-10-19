/** 黑潮 CIC 专用的接触标记文案生成器。 */
export function cicContactTag(row: number, col: number, confidence = 'UNK') {
  return `CONTACT ${String.fromCharCode(65 + col)}${row + 1} / ${confidence}`;
}
