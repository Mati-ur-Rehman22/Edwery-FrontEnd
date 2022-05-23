
	
    Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    colors: ['#34BB49 ', '  #AEAEAE'],
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
            innerSize: '70%',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
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
            name: 'Published',
            y: 61.41,
            sliced: false,
            selected: true
        }, {
            name: 'Draft',
            y: 11.84
        }]
    }]
});
  

	
    Highcharts.chart('content', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
        colors: ['#42A4DF ', ' #FFBC11'],
    title: {
        text: '`'
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
            innerSize: '0%',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        color:{}
    },


    legend: {
        layout: 'vertical',
        align: 'bottom',
        // verticalAlign: 'end',
        // itemMarginTop: 1,
        // itemMarginBottom: 1
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
            name: 'By admin',
            y: 61.41,
            sliced: false,
            selected: true

        }, {
            name: 'By manager',
            y: 11.84
        }]
    }]
});
  
