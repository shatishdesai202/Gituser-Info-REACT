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
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts

import './Spline.css';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Spline({data}) {
    const chartConfigs = {
        type: "column3d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            "caption": "Most Popular",
            "subCaption": "Created By @Shatishdesai202",
            "xAxisName": "Repo Name",
            "yAxisName": "Popularity",
            "theme": "fusion"
          },
          // Chart Data
          data
        }
      };
    return <div className="spline"> <ReactFC {...chartConfigs} /> </div>
}

export default Spline