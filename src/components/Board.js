import React from 'react';
import { cities } from '../static/cities'
import { edges } from '../static/edges'

import { GraphView } from 'react-digraph';



const regionColors = {
  northwest: '#f2bfff',
  southwest: '#42e6f5',
  texas: '#ffa699',
  midwest: '#f8ff94',
  southeast: '#9beba1',
  northeast: '#e8c87d',
}

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
    emptyEdge: {  // required to show empty edges
      shapeId: "#emptyEdge",
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
          <circle cx="25" cy="25" r="4" fill="currentColor"> </circle>
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

  render() {

    return (
      <div>
        <GraphView
          readOnly={true}
          nodeKey={NODE_KEY}
          edgeArrowSize={0}
          edgeHandleSize={300}
          showGraphControls={true}
          nodes={Object.values(cities)}
          edges={edges}
          nodeTypes={GraphConfig.NodeTypes}
          edgeTypes={GraphConfig.EdgeTypes}
          // renderNode={this.renderNode}
          renderNodeText={renderNodeText}
          // renderDefs={renderDefs}
          // renderBackground={this.renderBackground}
          initialBBox={{ x: 0, y: 0, width: 600, height: 300 }}
          //onSelectNode={node => { if (node) { this.props.selectCity(node.id) } }}
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