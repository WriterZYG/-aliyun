window.onload = function() {
    draw_chart1();
    draw_chart2();
    draw_chart3();
};



function draw_chart1() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('chart1'));
    var emotionIndexChartOption = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [{
            name: '情绪指数',
            type: 'gauge',
            min: -100,
            max: 100,
            startAngle: 220,
            endAngle: -40,
            splitNumber: 4,
            center: ['50%', '60%'],
            radius: 90,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 0,
                    //                    百分之25之前是红色  百分之25之后到百分之75之前是黄色  百分之75之后到百分之100之前是黄色
                    color: [
                        [0.25, '#50edb3'],
                        [0.89, '#ea8cdb'],
                        [1, '#393a5a']
                    ]
                }
            },
            axisTick: { // 坐标轴小标记
                length: 10, // 属性length控制线长
                splitNumber: 10,
                inside: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'auto',
                    width: 2,
                    //                    color:'red'
                    //                    color: [[0.09, 'red'],[0.82, 'yellow'],[1, 'blue']]
                }
            },
            splitLine: { // 主分隔线
                length: 10, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto',
                }
            },
            axisLabel: { //坐标轴文本 数值
                textStyle: {
                    color: '#6ad0c5'
                },
            },
            //                指针宽度
            pointer: {
                width: 0,
                length: '90%',
                color: '#6ad0c5'
            },

            //            标题 正能量
            title: {
                show: true,
                textStyle: {
                    color: '#6ad0c5',
                    fontSize: 16
                },
                offsetCenter: [0, '-10%'],

            },
            detail: {
                textStyle: {
                    color: '#6ad0c5',
                    fontSize: 20
                },
                offsetCenter: [0, '20%'],
                //加上百分比
                // formatter:'{value}%'
            },
            data: [{
                value: 78,
                name: '情感值'
            }]
        }]

    };

    myChart.setOption(emotionIndexChartOption);
}

function draw_chart2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('chart2'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['正面', '中性', '负面'],
            textStyle:{color:'#4de4ad'}
        },
        grid: {
            x: 60,
            y: 60,
            x2: 70,
            y2: 70,
            borderColor: '#e5e5e5'
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12, //刻度大小
                    color: "#6ad0c5",
                },
                margin: 20,
            },
            axisLine: {
                lineStyle: {
                    color: "#093f50",
                    width: 2,
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#17172a'],
                }
            },
        }],
        yAxis: [{
            type: 'value',
            name: '转载量',
            nameTextStyle: {
                fontSize: 12,
                color: '#6ad0c5',
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12, //刻度大小
                    color: "#6ad0c5",
                },
                margin: 20,
            },
            axisLine: {
                lineStyle: {
                    color: "#093f50",
                    width: 2,
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#17172a'],
                }
            },
        }],
        series: [{
                name: '正面',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default',
                            color: 'rgba(106,208,197,0.3)', //填充色
                        }
                    }
                },
                data: [1000, 1250, 800, 1500, 1950, 1600, 2300, 1050]
            },
            {
                name: '中性',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default', color: 'rgba(214,136,97,0.2)', } } },
                data: [700, 800, 500, 900, 800, 900, 1300, 600]
            },
            {
                name: '负面',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [450, 550, 250, 400, 550, 450, 570, 400]
            }
        ]
    };

    myChart.setOption(option);
}

function draw_chart3() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('chart3'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['正面'],
            textStyle:{color:'#9191e4'}
        },
        grid: {
            x: 60,
            y: 60,
            x2: 30,
            y2: 50,
            borderColor: '#e5e5e5'
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12, //刻度大小
                    color: "#6ad0c5",
                },
                margin: 20,
            },
            axisLine: {
                lineStyle: {
                    color: "#093f50",
                    width: 2,
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#17172a'],
                }
            },
        }],
        yAxis: [{
            type: 'value',
            name: '转载量',
            nameTextStyle: {
                fontSize: 12,
                color: '#6ad0c5',
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12, //刻度大小
                    color: "#6ad0c5",
                },
                margin: 20,
            },
            axisLine: {
                lineStyle: {
                    color: "#093f50",
                    width: 2,
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#17172a'],
                }
            },
        }],
        series: [{
            name: '正面',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color:'#9191e4',
                    areaStyle: {
                        type: 'default',
                        color: 'rgba(43,44,76,0.4)' //填充色
                        //color: '#313153', //填充色
                    }
                }
            },
            data: [1000, 1250, 800, 1500, 1950, 1600, 2300, 1050]
        }
        ]
    };
    myChart.setOption(option);
}