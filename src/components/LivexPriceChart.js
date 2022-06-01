import React, { useState, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;
import { cta } from "helpers/colorScheme";

const chart_data = [
  {
    year: "2003",
    value: 100,
    info: 0,
    value1: 100,
    info1: 0,
    value2: 100,
    info2: 0,
  },
  {
    year: "2004",
    value: 106.2,
    info: 6.25,
    value1: 107.34,
    info1: 7.34,
    value2: 103,
    info2: 3,
  },
  {
    year: "2005",
    value: 115.1,
    info: 8.36,
    value1: 136.39,
    info1: 27.07,
    value2: 112,
    info2: 8.74,
  },
  {
    year: "2006",
    value: 129.3,
    info: 12.36,
    value1: 166.37,
    info1: 21.98,
    value2: 145,
    info2: 29.46,
  },
  {
    year: "2007",
    value: 124,
    info: -4.15,
    value1: 203.46,
    info1: 22.29,
    value2: 187,
    info2: 28.97,
  },
  {
    year: "2008",
    value: 74.3,
    info: -40.09,
    value1: 121.31,
    info1: -40.37,
    value2: 186,
    info2: -0.53,
  },
  {
    year: "2009",
    value: 96.6,
    info: 30.03,
    value1: 150.24,
    info1: 23.85,
    value2: 207,
    info2: 11.29,
  },
  {
    year: "2010",
    value: 115.7,
    info: 19.76,
    value1: 174.37,
    info1: 16.06,
    value2: 254,
    info2: 22.71,
  },
  {
    year: "2011",
    value: 118,
    info: 2.04,
    value1: 148.75,
    info1: -14.69,
    value2: 253,
    info2: -0.39,
  },
  {
    year: "2012",
    value: 134.7,
    info: 14.15,
    value1: 191.98,
    info1: 29.06,
    value2: 247,
    info2: -2.37,
  },
  {
    year: "2013",
    value: 160.3,
    info: 18.99,
    value1: 240.9,
    info1: 25.48,
    value2: 255,
    info2: 3.24,
  },
  {
    year: "2014",
    value: 179.4,
    info: 11.92,
    value1: 247.29,
    info1: 2.65,
    value2: 244,
    info2: -4.31,
  },
  {
    year: "2015",
    value: 174.5,
    info: -2.74,
    value1: 270.94,
    info1: 9.56,
    value2: 245,
    info2: 0.41,
  },
  {
    year: "2016",
    value: 204.9,
    info: 17.45,
    value1: 289.55,
    info1: 6.87,
    value2: 300,
    info2: 22.45,
  },
  {
    year: "2017",
    value: 254,
    info: 23.91,
    value1: 325.78,
    info1: 12.51,
    value2: 330,
    info2: 10,
  },
  {
    year: "2018",
    value: 243.2,
    info: 4.24,
    value1: 266.29,
    info1: -18.26,
    value2: 363,
    info2: 10,
  },
  {
    year: "2019",
    value: 290.1,
    info: 19.28,
    value1: 334.14,
    info1: 25.48,
    value2: 348,
    info2: -4.13,
  },
  {
    year: "2020",
    value: 334,
    info: 15.15,
    value1: 345.98,
    info1: 3.55,
    value2: 356,
    info2: 2.3,
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
    valueAxis.renderer.labels.template.text = "{valueY}";
    valueAxis.title.text = "Index (Basis = 100)";


    categoryAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;


    // Create series # DAX
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "value1";
    series1.dataFields.dateX = "year";
    series1.strokeWidth = 1.5;
    series1.id = "price-history-series1";
    // let strokeGradient = new am4core.LinearGradient();
    // strokeGradient.addColor("#eee")
    // strokeGradient.addColor("#fff")
    series1.name = "DAX";
    series1.stroke = am4core.color("#a0b9de");
    series1.tensionX = 0.77;
    series1.tooltip.getFillFromObject = false;
    series1.tooltipText = "{valueY}";
    series1.tooltip.background.fill = am4core.color("#fff");
    series1.tooltip.label.fill = am4core.color("#a0b9de");
    series1.tooltip.label.fontSize = 17;

    // Create series # S & P 500
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value";
    series2.dataFields.dateX = "year";
    series2.strokeWidth = 1.5;
    series2.name = "S&P 500";
    series2.id = "price-history-series2";
    // let strokeGradient = new am4core.LinearGradient();
    // strokeGradient.addColor("#eee")
    // strokeGradient.addColor("#fff")
    series2.stroke = am4core.color("#dea0a0");
    series2.tensionX = 0.77;
    series2.tooltip.getFillFromObject = false;
    series2.tooltipText = "{valueY}";
    series2.tooltip.background.fill = am4core.color("#fff");
    series2.tooltip.label.fill = am4core.color("#dea0a0");
    series2.tooltip.label.fontSize = 17;

    // Create series # LIV-EX
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value2";
    series.dataFields.dateX = "year";
    series.strokeWidth = 3.1;
    series.id = "price-history-series";
    // let strokeGradient = new am4core.LinearGradient();
    // strokeGradient.addColor("#eee")
    // strokeGradient.addColor("#fff")
    series.stroke = am4core.color("#714f9b");
    series.tensionX = 0.77;
    series.tooltip.getFillFromObject = false;
    series.tooltipText = "{valueY}";
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.label.fill = am4core.color("#714f9b");
    series.tooltip.label.fontSize = 17;
    series.name = "Liv-Ex 1000 Fine Wine";



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
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";
    if (!props.mobile) {
      chart.cursor = new am4charts.XYCursor();
    }

    if (props.mode == "light") {
      valueAxis.title.fill = am4core.color("#fff");
      categoryAxis.title.fill = am4core.color("#fff");
      valueAxis.renderer.labels.template.fill = am4core.color("#fff");
      valueAxis.renderer.grid.template.stroke = am4core.color("#fff");
      categoryAxis.renderer.grid.template.stroke = am4core.color("#fff");
      categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
      chart.legend.labels.template.fill = am4core.color("#fff");
      chart.legend.valueLabels.template.fill = am4core.color("#fff");
      series.tooltip.background.fill = am4core.color(cta);
      series.stroke = am4core.color(cta);
    } else {
      valueAxis.title.fill = am4core.color("#2c2c2c");
      categoryAxis.title.fill = am4core.color("#2c2c2c");
      valueAxis.renderer.labels.template.fill = am4core.color("#2c2c2c");
      valueAxis.renderer.grid.template.stroke = am4core.color("#2c2c2c");
      categoryAxis.renderer.grid.template.stroke = am4core.color("#2c2c2c");
      categoryAxis.renderer.labels.template.fill = am4core.color("#2c2c2c");
      chart.legend.labels.template.fill = am4core.color("#2c2c2c");
      chart.legend.valueLabels.template.fill = am4core.color("#2c2c2c");
    }
    //chart.cursor.snapToSeries = [series]
  }, []);

  return (
    <>
      <div
        id={"priceChartDiv"}
        style={{ width: "100%", height: props.height }}
      ></div>
    </>
  );
};
export default LivexPriceChart;


export const LiveData = (props) => {
  useEffect(() => {
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;

    chart.padding(0, 0, 0, 0);

    chart.zoomOutButton.disabled = true;

    var data = [];
    var visits = 10;
    var i = 0;

    for (i = 0; i <= 30; i++) {
      visits -= Math.round(
        (Math.random() + 0.28 < 0.5 ? 1 : -1) * Math.random() * 5
      );
      data.push({ date: new Date().setSeconds(i - 30), value: visits });
    }

    chart.data = data;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.dateFormats.setKey("second", "ss");
    // dateAxis.periodChangeDateFormats.setKey("second", "[bold]h:mm a");
    // dateAxis.periodChangeDateFormats.setKey("minute", "[bold]h:mm a");
    // dateAxis.periodChangeDateFormats.setKey("hour", "[bold]h:mm a");
    dateAxis.renderer.inside = true;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.interpolationDuration = 500;
    valueAxis.rangeChangeDuration = 500;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.minLabelPosition = 0.05;
    valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.interpolationDuration = 500;
    series.defaultState.transitionDuration = 0;
    series.tensionX = 0.8;

    chart.events.on("datavalidated", function () {
      dateAxis.zoom({ start: 1 / 15, end: 1.2 }, false, true);
    });

    dateAxis.interpolationDuration = 500;
    dateAxis.rangeChangeDuration = 500;

    dateAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;

   



    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.hidden) {
          if (interval) {
            clearInterval(interval);
          }
        } else {
          startInterval();
        }
      },
      false
    );

    // add data
    var interval;
    function startInterval() {
      interval = setInterval(function () {
        visits =
          visits +
          Math.round(
            (Math.random() - 0.1 < 0.5 ? 1 : -1) * Math.random() * 2.9
          );
        var lastdataItem = series.dataItems.getIndex(
          series.dataItems.length - 1
        );
        chart.addData(
          {
            date: new Date(lastdataItem.dateX.getTime() + 1000),
            value: visits,
          },
          1
        );
      }, 1300);
    }

    startInterval();

    // all the below is optional, makes some fancy effects
    // gradient fill of the series
    // series.fillOpacity = 1;
    // var gradient = new am4core.LinearGradient();
    // gradient.addColor(am4core.color("rgba(0,0,0,0)"));
    // gradient.addColor(am4core.color("rgba(113,79,155,0.5)"));

    // series.fill = gradient;

    // this makes date axis labels to fade out
    dateAxis.renderer.labels.template.adapter.add(
      "fillOpacity",
      function (fillOpacity, target) {
        var dataItem = target.dataItem;
        return dataItem.position;
      }
    );

    // need to set this, otherwise fillOpacity is not changed and not set
    dateAxis.events.on("validated", function () {
      am4core.iter.each(dateAxis.renderer.labels.iterator(), function (label) {
        label.fillOpacity = label.fillOpacity;
      });
    });

    // this makes date axis labels which are at equal minutes to be rotated
    dateAxis.renderer.labels.template.adapter.add(
      "rotation",
      function (rotation, target) {
        var dataItem = target.dataItem;
        if (
          dataItem.date.getTime() ==
          am4core.time
            .round(new Date(dataItem.date.getTime()), "minute")
            .getTime()
        ) {
          target.verticalCenter = "middle";
          target.horizontalCenter = "left";
          return -90;
        } else {
          target.verticalCenter = "bottom";
          target.horizontalCenter = "middle";
          return 0;
        }
      }
    );

    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    // bullet at the front of the line
    var bullet = series.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 0;
    bullet.fillOpacity = 1;
    bullet.fill = am4core.color("#ccbb98");
    bullet.isMeasured = false;

    series.events.on("validated", function () {
      bullet.moveTo(series.dataItems.last.point);
      bullet.validatePosition();
    });
    series.strokeWidth = 2.1;

    series.stroke = am4core.color("#ccbb98");
  });
  return (
    <div
      className={"p-2 bg-cta-gradient"}
      id="chartdiv"
      style={{
        zIndex: "-1",
        borderRadius: "0.25rem",
        position: "absolute",
        top: 0,
        left: 0,
        textAlign: "center",
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};
