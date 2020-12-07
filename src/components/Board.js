import React from 'react';
import { cities } from '../static/cities'
import { edges } from '../static/edges'
import { playerColors } from '../static/playerColors'

import { GraphView } from 'react-digraph';



const regionColors = {
  northwest: '#f2bfff',
  southwest: '#42e6f5',
  texas: '#ffa699',
  midwest: '#f8ff94',
  southeast: '#9beba1',
  northeast: '#e8c87d',
}

function City() {
  const cityPosition = {
    10: { x: 50, y: 22 },
    15: { x: 22, y: 50 },
    20: { x: 78, y: 50 },
    3: { x: 50, y: 78 }
  }

  const innerRadius = 18

  const houseClip = "polygon(50% 15%, 80% 33%, 80% 75%, 20% 75%, 20% 33%)"

  return (
    <symbol viewBox="0 0 100 100" id="city" key="0" height="100" width="100">
      <circle cx="50" cy="50" r="50" style={{ fill: "var(--region-color)" }}></circle>
      <circle cx={cityPosition[10]['x']} cy={cityPosition[10]['y']} r={innerRadius} fill="lightgrey" stroke="black"></circle>
      <circle cx={cityPosition[15]['x']} cy={cityPosition[15]['y']} r={innerRadius} fill="lightgrey" stroke="black"></circle>
      <circle cx={cityPosition[20]['x']} cy={cityPosition[20]['y']} r={innerRadius} fill="lightgrey" stroke="black"></circle>
      <circle cx={cityPosition[3]['x']} cy={cityPosition[3]['y']} r={innerRadius} fill="lightgrey" stroke="black"></circle>

      <circle
        cx={cityPosition[10]['x']}
        cy={cityPosition[10]['y']}
        r={innerRadius}
        clipPath={houseClip}
        style={{ display: "var(--house-0-display)", fill: "var(--house-0-color" }}
      ></circle>
      <circle
        cx={cityPosition[15]['x']}
        cy={cityPosition[15]['y']}
        r={innerRadius}
        clipPath={houseClip}
        style={{ display: "var(--house-1-display)", fill: "var(--house-1-color" }}
      ></circle>
      <circle
        cx={cityPosition[20]['x']}
        cy={cityPosition[20]['y']}
        r={innerRadius}
        clipPath={houseClip}
        style={{ display: "var(--house-2-display)", fill: "var(--house-2-color" }}
      ></circle>
      <circle
        cx={cityPosition[3]['x']}
        cy={cityPosition[3]['y']}
        r={innerRadius}
        clipPath={houseClip}
        style={{ display: "var(--house-3-display)", fill: "var(--house-3-color" }}
      ></circle>
    </symbol>
  )
}

const renderDefs = () => <defs><City></City></defs>

const EdgeTypes = {
  edge: {
    shapeId: "#edge",
    shape: (
      <symbol viewBox="0 0 50 50" id="edge" key="0">
        <circle cx="25" cy="25" r="4" stroke="lightgrey" fill="currentColor"> </circle>
      </symbol>
    )
  }
}

const GraphConfig = {
  NodeTypes: {
    empty: { // required to show empty nodes
      typeText: "City",
      shapeId: "#empty", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="empty" key="0">
          <circle cx="50" cy="50" r="8"></circle>
        </symbol>
      )
    }
  },
  NodeSubtypes: {},
  EdgeTypes: {
    edge: {
      shapeId: "#edge",
      shape: (
        <symbol viewBox="0 0 50 50" id="edge" key="0">
        </symbol>
      )
    }
  }
}

const NODE_KEY = "id"       // Allows D3 to correctly update DOM

const renderNodeText = (data, id, isSelected) => {
  return (
    <text textAnchor="middle">
      <tspan x="0" dy="0" fontSize="12">{data.id}</tspan>
    </text>
  )
}


export class ThornyUbersBoard extends React.Component {

  constructor(props) {
    super(props);
    this.renderNode = this.renderNode.bind(this)
    // this.renderBackground = this.renderBackground.bind(this)
    this.graphView = React.createRef()
    this.state = { layoutEngineType: 0 }
  }

  renderNode(nodeRef, data, index, selected, hovered) {
    const stage = (this.props.ctx.activePlayers !== null) ? this.props.ctx.activePlayers[this.props.ctx.currentPlayer]: null;
    let style = { '--region-color': data.region }
    if (stage === "place") {
      style = { '--region-color': this.props.tableau.includes(data.id) ? data.region : 'white'}
    }
    const citySelected = this.props.selectedCities.includes(data.id);
    if (citySelected) {
      style['outline'] = '5px solid orangered'
    }
    
    if (selected) {
      style['outline'] = '5px solid orangered'
    }
    for (let i = 0; i < 4; i++) {
      // Total houses is 4 which is the max num players
      if (i < this.props.numPlayers) {
        const houseExists = this.props.cityStatus[data.id][i]
        const houseColor = (playerColors[i] || {}).houseBackground
        style['--house-' + i + '-display'] = (houseExists) ? 'default' : 'none'
        style['--house-' + i + '-color'] = houseColor
      } else {
        style['--house-' + i + '-display'] = 'none'
      }
    }

    return (
      <use
        x="-50"
        y="-50"
        xlinkHref="#city"
        // className={'node' + (usePointer ? ' city-selectable' : '')}
        style={style}
        cursor="pointer"
      />
    )
  }

  render() {

    return (
      <div name="board" className="graph">
        <GraphView
          readOnly={true}
          nodeKey={NODE_KEY}
          edgeArrowSize={0}
          edgeHandleSize={300}
          showGraphControls={true}
          gridDotSize={0}
          nodes={Object.values(cities)}
          edges={edges}
          nodeTypes={GraphConfig.NodeTypes}
          edgeTypes={GraphConfig.EdgeTypes}
          renderNode={this.renderNode}
          renderNodeText={renderNodeText}
          renderDefs={renderDefs}
          // renderBackground={this.renderBackground}
          initialBBox={{ x: 0, y: 0, width: 600, height: 300 }}
          onSelectNode={node => { if (node) { this.props.selectCity(node.id) } }}
          ref={this.graphView}

          // Not needed
          selected={{}}
          nodeSubtypes={{}}
        // onUpdateNode={doNothing}
        // onDeleteNode={doNothing}
        // onSelectEdge={doNothing}
        // onCreateEdge={doNothing}
        // onSwapEdge={doNothing}
        // onDeleteEdge={doNothing}
        />
      </div>
    );
  }
}