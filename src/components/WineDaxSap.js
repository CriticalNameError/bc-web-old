import { AreaChart, AreaSeries, LinearYAxis, LinearYAxisTickLabel, LinearYAxisTickSeries, DiscreteLegend, DiscreteLegendEntry } from 'reaviz';
import React from "react";
export const data = [
    {
      key: 'Fine Wine',
      data: [
        {
          key: new Date('2004'),
          id: '0',
          data: 24.87,
          info: 24.87
        },
        {
          key: new Date('2005'),
          id: '1',
          data: 42.37,
          info: 17.50
        },
        {
          key: new Date('2006'),
          id: '2',
          data: 68.23,
          info: 25.86
        },
        {
          key: new Date('2007'),
          id: '3',
          data: 94.99,
          info: 26.76
        },
        {
          key: new Date('2008'),
          id: '2',
          data: 78.29,
          info: -16.70
        },
        {
          key: new Date('2009'),
          id: '2',
          data: 59.0,
          info: -19.29
        },
        {
          key: new Date('2010'),
          id: '2',
          data: 82.38,
          info: 23.38
        },
        {
          key: new Date('2011'),
          id: '2',
          data: 88.77,
          info: 6.39
        },
        {
          key: new Date('2012'),
          id: '2',
          data: 92.67,
          info: 3.90
        },
        {
          key: new Date('2013'),
          id: '2',
          data: 113.95,
          info: 21.28
        },
        {
          key: new Date('2014'),
          id: '2',
          data: 128.83,
          info: 14.88
        },
        {
          key: new Date('2015'),
          id: '2',
          data: 143.80,
          info: 14.97
        },
        {
          key: new Date('2016'),
          id: '2',
          data: 136.81,
          info: -6.99
        },
        {
          key: new Date('2017'),
          id: '2',
          data: 158.77,
          info: 21.96
        },
        {
          key: new Date('2018'),
          id: '2',
          data: 157.45,
          info: -1.33
        },
        {
          key: new Date('2019'),
          id: '2',
          data: 156.14,
          info: -1.31
        },
        {
          key: new Date('2020'),
          id: '2',
          data: 158.04,
          info: 1.90
        },
        {
          key: new Date('2021'),
          id: '2',
          data: 170.35,
          info: 35
        },
      ]
    },
    {
      key: 'DAX',
      data: [
        {
          key: new Date('2004'),
          id: '0',
          data: 24.87,
          info: 24.87
        },
        {
          key: new Date('2005'),
          id: '1',
          data: 42.37,
          info: 17.50
        },
        {
          key: new Date('2006'),
          id: '2',
          data: 68.23,
          info: 25.86
        },
        {
          key: new Date('2007'),
          id: '3',
          data: 94.99,
          info: 26.76
        },
        {
          key: new Date('2008'),
          id: '2',
          data: 78.29,
          info: -16.70
        },
        {
          key: new Date('2009'),
          id: '2',
          data: 59.0,
          info: -19.29
        },
        {
          key: new Date('2010'),
          id: '2',
          data: 82.38,
          info: 23.38
        },
        {
          key: new Date('2011'),
          id: '2',
          data: 88.77,
          info: 6.39
        },
        {
          key: new Date('2012'),
          id: '2',
          data: 92.67,
          info: 3.90
        },
        {
          key: new Date('2013'),
          id: '2',
          data: 113.95,
          info: 21.28
        },
        {
          key: new Date('2014'),
          id: '2',
          data: 128.83,
          info: 14.88
        },
        {
          key: new Date('2015'),
          id: '2',
          data: 143.80,
          info: 14.97
        },
        {
          key: new Date('2016'),
          id: '2',
          data: 136.81,
          info: -6.99
        },
        {
          key: new Date('2017'),
          id: '2',
          data: 158.77,
          info: 21.96
        },
        {
          key: new Date('2018'),
          id: '2',
          data: 157.45,
          info: -1.33
        },
        {
          key: new Date('2019'),
          id: '2',
          data: 156.14,
          info: -1.31
        },
        {
          key: new Date('2020'),
          id: '2',
          data: 158.04,
          info: 1.90
        },
        {
          key: new Date('2021'),
          id: '2',
          data: 170.35,
          info: 35
        },
      ]
    },
    {
      key: 'S&P 500',
      data: [
        {
          key: new Date('2004'),
          id: '0',
          data: 24.87,
          info: 24.87
        },
        {
          key: new Date('2005'),
          id: '1',
          data: 42.37,
          info: 17.50
        },
        {
          key: new Date('2006'),
          id: '2',
          data: 68.23,
          info: 25.86
        },
        {
          key: new Date('2007'),
          id: '3',
          data: 94.99,
          info: 26.76
        },
        {
          key: new Date('2008'),
          id: '2',
          data: 78.29,
          info: -16.70
        },
        {
          key: new Date('2009'),
          id: '2',
          data: 59.0,
          info: -19.29
        },
        {
          key: new Date('2010'),
          id: '2',
          data: 82.38,
          info: 23.38
        },
        {
          key: new Date('2011'),
          id: '2',
          data: 88.77,
          info: 6.39
        },
        {
          key: new Date('2012'),
          id: '2',
          data: 92.67,
          info: 3.90
        },
        {
          key: new Date('2013'),
          id: '2',
          data: 113.95,
          info: 21.28
        },
        {
          key: new Date('2014'),
          id: '2',
          data: 128.83,
          info: 14.88
        },
        {
          key: new Date('2015'),
          id: '2',
          data: 143.80,
          info: 14.97
        },
        {
          key: new Date('2016'),
          id: '2',
          data: 136.81,
          info: -6.99
        },
        {
          key: new Date('2017'),
          id: '2',
          data: 158.77,
          info: 21.96
        },
        {
          key: new Date('2018'),
          id: '2',
          data: 157.45,
          info: -1.33
        },
        {
          key: new Date('2019'),
          id: '2',
          data: 156.14,
          info: -1.31
        },
        {
          key: new Date('2020'),
          id: '2',
          data: 158.04,
          info: 1.90
        },
        {
          key: new Date('2021'),
          id: '2',
          data: 170.35,
          info: 35
        },
      ]
    }
  ];



class WineDaxSap extends React.Component {
    state = {
      backgroundColor: "blue",
      
    };
render(){
    return(
       <div style={{ width: '100%', height: '50vh' }} className={"mx-auto"}>
            <AreaChart
            gridlines={false}
            yAxis={   <LinearYAxis
              position="end"
              axisLine={null}
              tickSeries={
                <LinearYAxisTickSeries
                  line={null}
                  label={""}
                />
              }
            />}
              data={data}
              series={<AreaSeries type="grouped" interpolation="smooth" colorScheme={["#B37870", "#805D73", "#A5B370"]}/>}
            />
            <DiscreteLegend
      orientation="horizontal"
      entries={[
        <DiscreteLegendEntry label="Fine Wine" color="#B37870" />,
        <DiscreteLegendEntry label="DAX" color="#805D73"/>,
        <DiscreteLegendEntry label="S&P 500" color="#A5B370" />
      ]}
    />
        </div>
        );
     
}
}
export default WineDaxSap;