import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch } from 'react-redux';
import useDishesGraph from '../hooks/useDishesGraph';
import { getAllDishesAction } from '../../services/dishesServices';

const GraphicPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDishesAction())
    }, [])
    const { prices, quantities } = useDishesGraph();
    
    const stateChartQuantity = {
        options: {
            chart: {
                id: 'Dishes graphic',
            },
            xaxis: {
                categories: ['Drink', 'Breakfast', 'Food', 'Dessert', 'Dinner']
            },
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    distributed: true,
                    //rangeBarOverlap: false,
                    rangeBarGroupRows: true,
                    dataLabels: {
                        position: 'center'
                    }
                }
            },
        },
        series: [
            {
                name: 'Dishes Graphic',
                data: quantities
            }
        ]
    }

    const stateChartPrices = {
        options: {
            chart: {
                id: 'Dishes price graphic',
            },
            xaxis: {
                categories: ['Drink', 'Breakfast', 'Food', 'Dessert', 'Dinner']
            },
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    distributed: true,
                    ranges: [{

                    }],
                    dataLabels: {
                        position: 'center'
                    },
                    
                },
            },
            dataLabels: {
                formatter: function(val){
                    return `${val} Q`
                }
            }
        },
        series: [
            {
                name: 'Dishes Graphic',
                data: prices
            }
        ]
    }

    return(
        <>
            <div className=' min-h-screen flex flex-col p-5'>
                <div>
                    <p className='text-black shadow-sm text-3xl font-bold text-center uppercase'>Dishes Graphic</p>
                
                    <div className='flex justify-center flex-col items-center rounded-md p-4 mt-3'>

                        <h2 className='text-black uppercase font-bold'>Total amount of dishes added by category</h2>
                        <div className='mt-6 max-w-7xl' >
                            <Chart 
                                options={stateChartQuantity.options}
                                series={stateChartQuantity.series}
                                type='bar'
                                width='500'
                            />
                        </div>
                    </div>

                    <div className='flex justify-center flex-col items-center rounded-md p-4 mt-3'>
                        <h2 className='text-black uppercase font-bold'> Total Price by all - dishes </h2>
                        <div className='mt-6 max-w-7xl'>
                            <Chart 
                                options={stateChartPrices.options}
                                series={stateChartPrices.series}
                                type='bar'
                                width='500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GraphicPage;

/*

plotOptions: {
                bar: {
                    // dataLables: {
                    //     position: 'top',
                    //     maxitems: 100,
                    //     hideOverflowingLabels: true,
                    //     orientation: 'horizontal'
                    // },
                    colors: {
                        // ranges: [
                        //     {
                        //         from: 10,
                        //         to: 15,
                        //         color: '#000'
                        //     }
                        // ],
                        //backgroundBarColors:[ '#000', '#fff', "#e1e1e1", 'yellow', 'black'  ]
                    }
                }
            }
*/