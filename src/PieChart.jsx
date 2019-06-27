import React from "react"

function PieChart(props){
	return(<svg height="20" width="20" viewBox="0 0 20 20">
  <circle r="10" cx="10" cy="10" fill="white" />
  <circle r="5" cx="10" cy="10" fill="transparent"
          stroke="tomato"
          stroke-width="10"
          stroke-dasharray="calc(35 * 31.4 / 100) 31.4"
          transform="rotate(-90) translate(-20)" />
</svg>)
}

export default PieChart