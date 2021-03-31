import { AreaChart, AreaSeries, TooltipArea, TooltipTemplate, ChartTooltip, LinearYAxis, LinearYAxisTickLabel, LinearYAxisTickSeries, DiscreteLegend, DiscreteLegendEntry, PointSeries } from 'reaviz';
import React from "react";
import { primary_t50 } from 'helpers/colorScheme';
export const data = [
    {
      key: 'Fine Wine',
      data: [
        {
          key: new Date('2004'),
          id: 24.87,
          data: 24.87,
          info: 24.87
        },
        {
          key: new Date('2005'),
          id: 17.50,
          data: 42.37,
          info: 17.50
        },
        {
          key: new Date('2006'),
          id: 25.86,
          data: 68.23,
          info: 25.86
        },
        {
          key: new Date('2007'),
          id: 26.76,
          data: 94.99,
          info: 26.76
        },
        {
          key: new Date('2008'),
          id: -16.70,
          data: 78.29,
          info: -16.70
        },
        {
          key: new Date('2009'),
          id: -19.29,
          data: 59.0,
          info: -19.29
        },
        {
          key: new Date('2010'),
          id: 23.38,
          data: 82.38,
          info: 23.38
        },
        {
          key: new Date('2011'),
          id: 6.39,
          data: 88.77,
          info: 6.39
        },
        {
          key: new Date('2012'),
          id: 3.90,
          data: 92.67,
          info: 3.90
        },
        {
          key: new Date('2013'),
          id: 21.28,
          data: 113.95,
          info: 21.28
        },
        {
          key: new Date('2014'),
          id: 14.88,
          data: 128.83,
          info: 14.88
        },
        {
          key: new Date('2015'),
          id: 14.97,
          data: 143.80,
          info: 14.97
        },
        {
          key: new Date('2016'),
          id: -6.99,
          data: 136.81,
          info: -6.99
        },
        {
          key: new Date('2017'),
          id: 21.96,
          data: 158.77,
          info: 21.96
        },
        {
          key: new Date('2018'),
          id: -1.33,
          data: 157.45,
          info: -1.33
        },
        {
          key: new Date('2019'),
          id: -1.31,
          data: 156.14,
          info: -1.31
        },
        {
          key: new Date('2020'),
          id: 1.90,
          data: 158.04,
          info: 1.90
        },
        {
          key: new Date('2021'),
          id: 35,
          data: 170.35,
          info: 35
        },
      ]
    }
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



class WineDaxSap extends React.Component {
    state = {
      backgroundColor: "blue",
      
    };
render(){
    return(
       <div style={{ width: '100%', height: '60vh' }} className={"mx-auto"}>
            {/* <AreaChart
            gridlines={false}
            yAxis={   <LinearYAxis
              position="end"
              axisLine={null}
              tickSeries={
                <LinearYAxisTickSeries
                  line={null}
                  label={"Zuwachs in %"}
                />
              }
            />}
            data={[
              { key: new Date('11/29/2019'), data: 13 },
              { key: new Date('11/30/2019'), data: 13 },
              { key: new Date('12/1/2019'), data: 13 },
            ]}
              // series={<AreaSeries interpolation="smooth" colorScheme={["#B37870"]}/>}
            />
            <DiscreteLegend
      orientation="horizontal"
      entries={[
        <DiscreteLegendEntry label="Fine Wine" color="#B37870" />
      ]}
    /> */}


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
    />
  }
  series={<AreaSeries 
    tooltip={
      <TooltipArea
        tooltip={
          <ChartTooltip
            followCursor={false}
            modifiers={{
              offset: '5px, -5px'
            }}
            content={(data, color) => (
              <>
             <b>{String(data.key.getFullYear())}</b><br/>
             {data.id >= 0?
             <span style={{color: "green"}}>{"+"+String(data.id)+"%*"}</span>:
             <span style={{color: "red"}}>{String(data.id)+"%*"}</span>
             }
             </>
            )}
          />
        }
      />
    }
    animated={true} symbols={<PointSeries/>}interpolation="smooth" colorScheme={[primary_t50]}/>}
    data={data[0].data}



  />

        </div>
        );
     
}
}
export default WineDaxSap;