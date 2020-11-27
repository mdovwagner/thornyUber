export const edges = [
    // Purples, Cyans
    { source: 'Manheim', target: 'Carlsruhe', type: 'edge'},
    { source: 'Carlsruhe', target: 'Freiburg', type: 'edge'},
    { source: 'Freiburg', target: 'Basel', type: 'edge'},
    { source: 'Freiburg', target: 'Zurich', type: 'edge'},
    { source: 'Basel', target: 'Zurich', type: 'edge'},
    // Limes, Greens
    { source: 'Manheim', target: 'Stuttgart', type: 'edge'},
    { source: 'Carlsruhe', target: 'Stuttgart', type: 'edge'},
    { source: 'Stuttgart', target: 'Ulm', type: 'edge'},
    { source: 'Stuttgart', target: 'Sigmaringen', type: 'edge'},
    { source: 'Ulm', target: 'Sigmaringen', type: 'edge'},
    { source: 'Sigmaringen', target: 'Freiburg', type: 'edge'},
    { source: 'Sigmaringen', target: 'Zurich', type: 'edge'},
    // Greys
    { source: 'Manheim', target: 'Wurzburg', type: 'edge'},
    { source: 'Stuttgart', target: 'Wurzburg', type: 'edge'},
    { source: 'Stuttgart', target: 'Nurnburg', type: 'edge'},
    { source: 'Stuttgart', target: 'Ingolstadt', type: 'edge'},
    { source: 'Ulm', target: 'Ingolstadt', type: 'edge'},
    { source: 'Ulm', target: 'Augsburg', type: 'edge'},
    { source: 'Ulm', target: 'Kempten', type: 'edge'},
    { source: 'Sigmaringen', target: 'Kempten', type: 'edge'},
    { source: 'Zurich', target: 'Kempten', type: 'edge'},

    { source: 'Wurzburg', target: 'Nurnburg', type: 'edge'},
    { source: 'Nurnburg', target: 'Ingolstadt', type: 'edge'},
    { source: 'Nurnburg', target: 'Regensburg', type: 'edge'},
    { source: 'Ingolstadt', target: 'Regensburg', type: 'edge'},
    { source: 'Ingolstadt', target: 'Augsburg', type: 'edge'},
    { source: 'Ingolstadt', target: 'Munchen', type: 'edge'},
    { source: 'Regensburg', target: 'Passau', type: 'edge'},
    { source: 'Regensburg', target: 'Munchen', type: 'edge'},
    { source: 'Augsburg', target: 'Kempten', type: 'edge'},
    { source: 'Augsburg', target: 'Munchen', type: 'edge'},
    { source: 'Munchen', target: 'Passau', type: 'edge'},
    // Blue
    { source: 'Kempten', target: 'Innsbruck', type: 'edge'},
    { source: 'Augsburg', target: 'Innsbruck', type: 'edge'},
    { source: 'Munchen', target: 'Innsbruck', type: 'edge'},
    // Orange, Red, Dark Grey
    { source: 'Lodz', target: 'Pilsen', type: 'edge'},
    { source: 'Pilsen', target: 'Budweis', type: 'edge'},
    { source: 'Budweis', target: 'Linz', type: 'edge'},
    { source: 'Linz', target: 'Salzburg', type: 'edge'},
    { source: 'Salzburg', target: 'Innsbruck', type: 'edge'},
    
    { source: 'Nurnburg', target: 'Pilsen', type: 'edge'},
    { source: 'Regensburg', target: 'Pilsen', type: 'edge'},
    { source: 'Passau', target: 'Linz', type: 'edge'},
    { source: 'Passau', target: 'Salzburg', type: 'edge'},
    { source: 'Munchen', target: 'Salzburg', type: 'edge'},


    
]

export function getEdgeLookup() {
    let edgeLookup = {}
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i]
        if (!(edge.source in edgeLookup)) {
            edgeLookup[edge.source] = {}
        }
        if (!(edge.target in edgeLookup)) {
            edgeLookup[edge.target] = {}
        }
        edgeLookup[edge.source][edge.target] = edge.handleText || 0
        edgeLookup[edge.target][edge.source] = edge.handleText || 0
    }
    return edgeLookup
}

export const edgeLookup = getEdgeLookup()