import * as d3 from "d3";

// set the dimensions and margins of the graph
const MARGIN = { TOP: 40, BOTTOM: 40, LEFT: 40, RIGHT: 40 };
const WIDTH = 450 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 450 - MARGIN.TOP - MARGIN.BOTTOM;

export default class PieChart {
  constructor(element, data) {
    let vis = this;
    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    vis.radius = Math.min(WIDTH, HEIGHT) / 2 - 40;

    // append the svg object to the div called 'my_dataviz'
    vis.g = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT)
      .append("g")
      .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");

    // set the color scale
    vis.color = d3.scaleOrdinal().range(
      data.map((item, index) => {
  
        return d3.interpolateRdYlBu(index / (data.length *2));
      })
    );
    // Compute the position of each group on the pie:
    vis.pie = d3.pie().value(function(d) {
      return d.value;
    });
    // Generate the arcs
    vis.arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(vis.radius);

    this.update(data);
  }
  update(data) {
    let vis = this;
    vis.data = data;
    vis.color.domain(vis.data.map(item => item.name));
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    vis.g
      .selectAll("arc")
      .data(vis.pie(data))
      .enter()
      .append("path")
      .attr("d", vis.arc)
      .attr("fill", function(d) {
        console.log("color", vis.color(d.name), d);
        return vis.color(d.data.name);
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);
  }
}
