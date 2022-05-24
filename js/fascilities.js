
    
    Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height :'120px'
    },
    colors: [' #43E0B0 ', '  #18C2E7'],
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: '50%',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },
    series: [{
        // dataLabels: {
        //     enabled: true,
        //     formatter: function () {
        //         return Math.round(this.percentage * 100) / 100 + ' %';
        //     },
        //     distance: 10,
        //     color: 'white'
        // },
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '',
            y: 62,
            sliced: false,
            selected: true
        }, {
            name: '',
            y: 38
        }]
    }]
});
  
