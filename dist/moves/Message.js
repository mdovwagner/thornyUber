export function endMessage(G, ctx, playerID = -1) {
  console.log("End Message");
  if (playerID === -1) playerID = ctx.currentPlayer;
  G.players[playerID].message.valid = false;
}
export function startMessage(G, ctx, playerID = -1) {
  console.log("Start Message");
  if (playerID === -1) playerID = ctx.currentPlayer;
  G.players[playerID].message.valid = true;
}
export function changeMessageText(G, ctx, text, playerID = -1) {
  console.log("Change Message to ", text);
  if (playerID === -1) playerID = ctx.currentPlayer;
  G.players[playerID].message.text = text;
}
export function changeMessageType(G, ctx, type, playerID = -1) {
  console.log("Change Message type ", type);
  if (playerID === -1) playerID = ctx.currentPlayer;
  G.players[playerID].message.type = type;
}
export function changeMessage(G, ctx, M, playerID = -1) {
  console.log("Change Message to ", M);
  if (playerID === -1) playerID = ctx.currentPlayer;
  G.players[playerID].message.valid = M.valid;
  G.players[playerID].message.text = M.text;
  G.players[playerID].message.type = M.type;
}