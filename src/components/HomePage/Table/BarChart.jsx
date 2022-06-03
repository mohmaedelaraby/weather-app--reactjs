import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {  
      degree:this.props.degree ,
      wind:this.props.widspeed,
      hum:this.props.humidity,
      pres:this.props.pressre 
   } 
   
  }
    componentDidUpdate() {
      this.drawChart(); 
      console.log(this.props.degree,this.props.pres,this.props.wind)
    }
      
    drawChart() {
      const data = [this.props.degree ===0?1:this.props.degree ,
        this.props.humidity===0?1:this.props.humidity
        ,this.props.pressre===0?1:this.props.pressre
        ,this.props.widspeed===0?1:this.props.widspeed]
      
      const svg = d3.select("body")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .style("margin-left", 100);
                    
      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 300 - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green")
    }
          
    render(){
      return <div >
      </div>
    }
  }
      
  export default BarChart;