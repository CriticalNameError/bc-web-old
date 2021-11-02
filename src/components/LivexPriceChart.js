import React, { useState, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;

const chart_data = [
  {
    year: "2003",
    id: 0.0,
    value: 0.0,
    info: 0.0,
  },
  {
    year: "2004",
    id: 24.87,
    value: 24.87,
    info: 24.87,
  },
  {
    year: "2005",
    id: 17.5,
    value: 42.37,
    info: 17.5,
  },
  {
    year: "2006",
    id: 25.86,
    value: 68.23,
    info: 25.86,
  },
  {
    year: "2007",
    id: 26.76,
    value: 94.99,
    info: 26.76,
  },
  {
    year: "2008",
    id: -16.7,
    value: 78.29,
    info: -16.7,
  },
  {
    year: "2009",
    id: -19.29,
    value: 59.0,
    info: -19.29,
  },
  {
    year: "2010",
    id: 23.38,
    value: 82.38,
    info: 23.38,
  },
  {
    year: "2011",
    id: 6.39,
    value: 88.77,
    info: 6.39,
  },
  {
    year: "2012",
    id: 3.9,
    value: 92.67,
    info: 3.9,
  },
  {
    year: "2013",
    id: 21.28,
    value: 113.95,
    info: 21.28,
  },
  {
    year: "2014",
    id: 14.88,
    value: 128.83,
    info: 14.88,
  },
  {
    year: "2015",
    id: 14.97,
    value: 143.8,
    info: 14.97,
  },
  {
    year: "2016",
    id: -6.99,
    value: 136.81,
    info: -6.99,
  },
  {
    year: "2017",
    id: 21.96,
    value: 158.77,
    info: 21.96,
  },
  {
    year: "2018",
    id: -1.33,
    value: 157.45,
    info: -1.33,
  },
  {
    year: "2019",
    id: -1.31,
    value: 156.14,
    info: -1.31,
  },
  {
    year: "2020",
    id: 1.9,
    value: 158.04,
    info: 1.9,
  },
  {
    year: "2021",
    id: 35,
    value: 170.35,
    info: 35,
  },
];

const LivexPriceChart = (props) => {
 
    useEffect(() => {
    
  
      let chart = am4core.create("priceChartDiv", am4charts.XYChart);
      
  
      chart.data = chart_data;
  
      let categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
      //categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.minGridDistance = 50;
      categoryAxis.renderer.grid.template.location = 0.5;
  
      categoryAxis.baseInterval = {
        count: 1,
        timeUnit: "year",
      };
      categoryAxis.startLocation = 0.4;
      categoryAxis.endLocation = 0.7;
      categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
      categoryAxis.title.text = "Jahr";
      categoryAxis.title.fill = am4core.color("#2c2c2c");
  
      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.baseValue = 0;
      valueAxis.renderer.labels.template.fill = am4core.color("#fff");
      valueAxis.renderer.labels.template.text = "{valueY} %";
      valueAxis.title.text = "Wertentwicklung in %";
      valueAxis.title.fill = am4core.color("#2c2c2c");
  
      // Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "year";
      series.strokeWidth = 2.1;
      series.id = "price-history-series";
      // let strokeGradient = new am4core.LinearGradient();
      // strokeGradient.addColor("#eee")
      // strokeGradient.addColor("#fff")
      series.stroke = am4core.color("#714f9b");
      series.tensionX = 0.77;
      series.tooltip.getFillFromObject = false;
      series.tooltipText = "{valueY} %";
      series.tooltip.background.fill = am4core.color("#fff");
      series.tooltip.label.fill = am4core.color("#714f9b");
      series.tooltip.label.fontSize = 17;
  
      // bullet is added because we add tooltip to a bullet for it to change color
      // let bullet = series.bullets.push(new am4charts.Bullet());
      // bullet.tooltipText = "{valueY} €";
  
      // bullet.adapter.add("fill", function (fill, target) {
      //   if (target.dataItem.valueY < 0) {
      //     return am4core.color("#FFFFFF");
      //   }
      //   return fill;
      // });
      // let range = valueAxis.createSeriesRange(series);
      // range.value = 0;
      // range.endValue = -1000;
      // range.contents.stroke = am4core.color("#FF0000");
      // range.contents.fill = range.contents.stroke;
  
      // Add scrollbar
      // let scrollbarX = new am4charts.XYChartScrollbar();
      // scrollbarX.series.push(series);
      // chart.scrollbarX = scrollbarX;
  
      chart.cursor = new am4charts.XYCursor();
      //chart.cursor.snapToSeries = [series]
    }, []);
  
    return (
      <>
        
          <div
            id={"priceChartDiv"}
            style={{ width: "100%", height: "450px" }}
          ></div>
        
      </>
    );
  };
  export default LivexPriceChart;