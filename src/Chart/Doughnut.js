// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts

import './Doughnut.css';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Doughnut({data}) {
    const chartConfigs = {
        type: "doughnut2d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: "Stars Per Language",
            subCaption: "Created By @Shatishdesai202",
            decimals:0,
            doughnutRadius:'45%',
            //Set the chart subcaption
            // subCaption: "In MMbbl = One Million barrels",
            //Set the x-axis name
            // xAxisName: "Country",
            //Set the y-axis name
            // yAxisName: "Reserves (MMbbl)",
            // numberSuffix: "K",
            //Set the theme for your chart
            showPercentValues:0,
            theme: "candy"
          },
          // Chart Data
          data
        }
      };
      return <div className="pie3d"> <ReactFC {...chartConfigs} /> </div>
}

export default Doughnut
