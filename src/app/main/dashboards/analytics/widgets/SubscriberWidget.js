import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { selectWidgets } from '../store/widgetsSlice';

function SubscriberWidget(props) {
  const widgets = useSelector(selectWidgets);
  const { series, labels, uniqueVisitors } = widgets?.newVsReturning;
  const [awaitRender, setAwaitRender] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const theme = useTheme();
  console.log(series, labels, uniqueVisitors)
  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: false,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'donut',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#3182CE', '#63B3ED'],
    labels,
    plotOptions: {
      pie: {
        customScale: 0.9,
        expandOnClick: false,
        donut: {
          size: '70%',
        },
      },
    },
    stroke: {
      colors: [theme.palette.background.paper],
    },
    series,
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      theme: 'dark',
      custom: ({ seriesIndex, w }) =>
        `<div class="flex items-center h-32 min-h-32 max-h-23 px-12">
            <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
            <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
            <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
        </div>`,
    },
  };

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }
  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          Total subscribers
        </Typography>

      </div>

      <div className="flex flex-col flex-auto mt-24 h-192">
        <ReactApexChart
          className="flex flex-auto items-center justify-center w-full h-full"
          options={chartOptions}
          series={series}
          type={chartOptions.chart.type}
          height={chartOptions.chart.height}
        />
      </div>
      <div className="mt-32">
        <div className="-my-12 divide-y">
        <div class="container">
            <div class="row">
              <div class="col">
               <Typography>Facebook  </Typography>   </div>
            </div>
            <div class="row">
              <div class="col">
               <Typography> Instagram  </Typography>  </div>
            </div>
            <div class="row">
              <div class="col">
                <Typography>E-Commerce </Typography>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col'>
              <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedOption || 'please select Month'}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <button className="dropdown-item " onClick={() => handleOptionSelect('Option 1')}>
                    Option 1
                  </button>
                </li>
                
              </ul>
              </div>
              </div>

            </div>
            
          
          </div>
          


            
        </div>
      </div>
      
    </Paper>
  );
}

export default memo(SubscriberWidget);
