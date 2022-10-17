import {
  AreaChart,
  AreaSeries,
  TooltipArea,
  TooltipTemplate,
  ChartTooltip,
  LinearYAxis,
  LinearYAxisTickLabel,
  LinearYAxisTickSeries,
  DiscreteLegend,
  DiscreteLegendEntry,
  PointSeries,
} from "reaviz";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { useEffect } from "react";
import { primary_t50 } from "helpers/colorScheme";

// am4core.useTheme(am4themes_animated);

export const data = [
  {
    key: "Fine Wine",
    data: [
      {
        key: new Date("2003"),
        id: 0.0,
        data: 0.0,
        info: 0.0,
      },
      {
        key: new Date("2004"),
        id: 24.87,
        data: 24.87,
        info: 24.87,
      },
      {
        key: new Date("2005"),
        id: 17.5,
        data: 42.37,
        info: 17.5,
      },
      {
        key: new Date("2006"),
        id: 25.86,
        data: 68.23,
        info: 25.86,
      },
      {
        key: new Date("2007"),
        id: 26.76,
        data: 94.99,
        info: 26.76,
      },
      {
        key: new Date("2008"),
        id: -16.7,
        data: 78.29,
        info: -16.7,
      },
      {
        key: new Date("2009"),
        id: -19.29,
        data: 59.0,
        info: -19.29,
      },
      {
        key: new Date("2010"),
        id: 23.38,
        data: 82.38,
        info: 23.38,
      },
      {
        key: new Date("2011"),
        id: 6.39,
        data: 88.77,
        info: 6.39,
      },
      {
        key: new Date("2012"),
        id: 3.9,
        data: 92.67,
        info: 3.9,
      },
      {
        key: new Date("2013"),
        id: 21.28,
        data: 113.95,
        info: 21.28,
      },
      {
        key: new Date("2014"),
        id: 14.88,
        data: 128.83,
        info: 14.88,
      },
      {
        key: new Date("2015"),
        id: 14.97,
        data: 143.8,
        info: 14.97,
      },
      {
        key: new Date("2016"),
        id: -6.99,
        data: 136.81,
        info: -6.99,
      },
      {
        key: new Date("2017"),
        id: 21.96,
        data: 158.77,
        info: 21.96,
      },
      {
        key: new Date("2018"),
        id: -1.33,
        data: 157.45,
        info: -1.33,
      },
      {
        key: new Date("2019"),
        id: -1.31,
        data: 156.14,
        info: -1.31,
      },
      {
        key: new Date("2020"),
        id: 1.9,
        data: 158.04,
        info: 1.9,
      },
      {
        key: new Date("2021"),
        id: 35,
        data: 170.35,
        info: 35,
      },
      
    ],
  },
  // ,
  // {
  //   key: 'DAX',
  //   data: [
  //     {
  //       key: new Date('2004'),
  //       id: '0',
  //       data: 24.87,
  //       info: 24.87
  //     },
  //     {
  //       key: new Date('2005'),
  //       id: '1',
  //       data: 42.37,
  //       info: 17.50
  //     },
  //     {
  //       key: new Date('2006'),
  //       id: '2',
  //       data: 68.23,
  //       info: 25.86
  //     },
  //     {
  //       key: new Date('2007'),
  //       id: '3',
  //       data: 94.99,
  //       info: 26.76
  //     },
  //     {
  //       key: new Date('2008'),
  //       id: '2',
  //       data: 78.29,
  //       info: -16.70
  //     },
  //     {
  //       key: new Date('2009'),
  //       id: '2',
  //       data: 59.0,
  //       info: -19.29
  //     },
  //     {
  //       key: new Date('2010'),
  //       id: '2',
  //       data: 82.38,
  //       info: 23.38
  //     },
  //     {
  //       key: new Date('2011'),
  //       id: '2',
  //       data: 88.77,
  //       info: 6.39
  //     },
  //     {
  //       key: new Date('2012'),
  //       id: '2',
  //       data: 92.67,
  //       info: 3.90
  //     },
  //     {
  //       key: new Date('2013'),
  //       id: '2',
  //       data: 113.95,
  //       info: 21.28
  //     },
  //     {
  //       key: new Date('2014'),
  //       id: '2',
  //       data: 128.83,
  //       info: 14.88
  //     },
  //     {
  //       key: new Date('2015'),
  //       id: '2',
  //       data: 143.80,
  //       info: 14.97
  //     },
  //     {
  //       key: new Date('2016'),
  //       id: '2',
  //       data: 136.81,
  //       info: -6.99
  //     },
  //     {
  //       key: new Date('2017'),
  //       id: '2',
  //       data: 158.77,
  //       info: 21.96
  //     },
  //     {
  //       key: new Date('2018'),
  //       id: '2',
  //       data: 157.45,
  //       info: -1.33
  //     },
  //     {
  //       key: new Date('2019'),
  //       id: '2',
  //       data: 156.14,
  //       info: -1.31
  //     },
  //     {
  //       key: new Date('2020'),
  //       id: '2',
  //       data: 158.04,
  //       info: 1.90
  //     },
  //     {
  //       key: new Date('2021'),
  //       id: '2',
  //       data: 170.35,
  //       info: 35
  //     },
  //   ]
  // },
  // {
  //   key: 'S&P 500',
  //   data: [
  //     {
  //       key: new Date('2004'),
  //       id: '0',
  //       data: 24.87,
  //       info: 24.87
  //     },
  //     {
  //       key: new Date('2005'),
  //       id: '1',
  //       data: 42.37,
  //       info: 17.50
  //     },
  //     {
  //       key: new Date('2006'),
  //       id: '2',
  //       data: 68.23,
  //       info: 25.86
  //     },
  //     {
  //       key: new Date('2007'),
  //       id: '3',
  //       data: 94.99,
  //       info: 26.76
  //     },
  //     {
  //       key: new Date('2008'),
  //       id: '2',
  //       data: 78.29,
  //       info: -16.70
  //     },
  //     {
  //       key: new Date('2009'),
  //       id: '2',
  //       data: 59.0,
  //       info: -19.29
  //     },
  //     {
  //       key: new Date('2010'),
  //       id: '2',
  //       data: 82.38,
  //       info: 23.38
  //     },
  //     {
  //       key: new Date('2011'),
  //       id: '2',
  //       data: 88.77,
  //       info: 6.39
  //     },
  //     {
  //       key: new Date('2012'),
  //       id: '2',
  //       data: 92.67,
  //       info: 3.90
  //     },
  //     {
  //       key: new Date('2013'),
  //       id: '2',
  //       data: 113.95,
  //       info: 21.28
  //     },
  //     {
  //       key: new Date('2014'),
  //       id: '2',
  //       data: 128.83,
  //       info: 14.88
  //     },
  //     {
  //       key: new Date('2015'),
  //       id: '2',
  //       data: 143.80,
  //       info: 14.97
  //     },
  //     {
  //       key: new Date('2016'),
  //       id: '2',
  //       data: 136.81,
  //       info: -6.99
  //     },
  //     {
  //       key: new Date('2017'),
  //       id: '2',
  //       data: 158.77,
  //       info: 21.96
  //     },
  //     {
  //       key: new Date('2018'),
  //       id: '2',
  //       data: 157.45,
  //       info: -1.33
  //     },
  //     {
  //       key: new Date('2019'),
  //       id: '2',
  //       data: 156.14,
  //       info: -1.31
  //     },
  //     {
  //       key: new Date('2020'),
  //       id: '2',
  //       data: 158.04,
  //       info: 1.90
  //     },
  //     {
  //       key: new Date('2021'),
  //       id: '2',
  //       data: 170.35,
  //       info: 35
  //     },
  //   ]
  // }
];

const WineDaxSap = (props) => {

    return (
      <div style={{ width: "100%", height: "60vh" }} className={"mx-auto p-3"}>
        <span
          className={"pull-left ml-n2 pb-3"}
          style={{ color: "rgb(143, 151, 159)" }}
        >
          Wertsteigerung in %
        </span>
      
        <span className={"pull-right"}>
          <DiscreteLegend
            orientation="horizontal"
            position="end"
            entries={[
              <DiscreteLegendEntry
                label="Liv-ex Fine Wine 1000 Index"
                color={primary_t50}
              />,
            ]}
          />
        </span>

        <AreaChart
          gridlines={false}
          yAxis={
            <LinearYAxis
              position="start"
              axisLine={null}
              tickSeries={
                <LinearYAxisTickSeries
                  line={null}
                  label={
                    <LinearYAxisTickLabel
                      padding={5}
                      position="start"
                      right={150}
                      tickFormat={(v) => (v + " %")}
                    />
                  }
                />
              }
            />
          }
          series={
            <AreaSeries
              tooltip={
                <TooltipArea
                  tooltip={
                    <ChartTooltip
                      followCursor={false}
                      modifiers={{
                        offset: "5px, -5px",
                      }}
                      content={(data, color) => (
                        <span className={"card p-2"}>
                          {String(data.key.getFullYear())}
                          <br />
                          {data.id >= 0 ? (
                            <span style={{ color: "green" }}>
                              {"+" + String(data.id) + "% p.a."}
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>
                              {String(data.id) + "% p.a."}
                            </span>
                          )}
                        </span>
                      )}
                    />
                  }
                />
              }
              animated={true}
              symbols={<PointSeries />}
              interpolation="smooth"
              colorScheme={[primary_t50]}
            />
          }
          data={data[0].data}
        />
      </div>
    );
  
}
export default WineDaxSap;
