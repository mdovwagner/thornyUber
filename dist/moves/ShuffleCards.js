export function shuffleCards(G, ctx) {
  // Take card from tableau/supply and add it to the hand
  if (G.supply.length === 0) {
    console.log("Reshuffle Deck");

    while (G.discard.length > 0) {
      G.supply.push(G.discard.pop());
    }

    G.supply = ctx.random.Shuffle(G.supply);
  }
}