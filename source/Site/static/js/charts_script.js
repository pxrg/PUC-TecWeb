$(function(){
    line_chart();
    radar_chart();
    polar_chart();
});

function line_chart() {
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",

            // Boolean - if true fill the area under the line
            fill: false,

            // Tension - bezier curve tension of the line. Set to 0 to draw straight lines connecting points
            // Used to be called "tension" but was renamed for consistency. The old option name continues to work for compatibility.
            lineTension: 0.1,

            // String - the color to fill the area under the line with if fill is true
            backgroundColor: "rgba(75,192,192,0.4)",

            // String - Line color
            borderColor: "rgba(75,192,192,1)",

            // String - cap style of the line. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
            borderCapStyle: 'butt',

            // Array - Length and spacing of dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
            borderDash: [],

            // Number - Offset for line dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
            borderDashOffset: 0.0,

            // String - line join style. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
            borderJoinStyle: 'miter',

            // The properties below allow an array to be specified to change the value of the item at the given index

            // String or Array - Point stroke color
            pointBorderColor: "rgba(75,192,192,1)",

            // String or Array - Point fill color
            pointBackgroundColor: "#fff",

            // Number or Array - Stroke width of point border
            pointBorderWidth: 1,

            // Number or Array - Radius of point when hovered
            pointHoverRadius: 5,

            // String or Array - point background color when hovered
            pointHoverBackgroundColor: "rgba(75,192,192,1)",

            // String or Array - Point border color when hovered
            pointHoverBorderColor: "rgba(220,220,220,1)",

            // Number or Array - border width of point when hovered
            pointHoverBorderWidth: 2,

            // Number or Array - the pixel size of the point shape. Can be set to 0 to not render a circle over the point
            // Used to be called "radius" but was renamed for consistency. The old option name continues to work for compatibility.
            pointRadius: 1,

            // Number or Array - the pixel size of the non-displayed point that reacts to mouse hover events
            //
            // Used to be called "hitRadius" but was renamed for consistency. The old option name continues to work for compatibility.
            pointHitRadius: 10,

            // The actual data
            data: [65, 59, 80, 81, 56, 55, 40],

            // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used. First id is y-axis-0
            yAxisID: "y-axis-0",
        },
        {
            label: "My Second dataset",
            fill: false,
            backgroundColor: "rgba(255,205,86,0.4)",
            borderColor: "rgba(255,205,86,1)",
            pointBorderColor: "rgba(255,205,86,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,205,86,1)",
            pointHoverBorderColor: "rgba(255,205,86,1)",
            pointHoverBorderWidth: 2,
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
    var options = {
        //Number - Width of the grid lines
        scaleGridLineWidth : 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - Whether the line is curved between points
        bezierCurve : true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension : 0.4,
        //Boolean - Whether to show a dot for each point
        pointDot : true,
        //Number - Radius of each point dot in pixels
        pointDotRadius : 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };
    var ctx = $("#line");
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

function radar_chart() {
    var data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
    };
    new Chart($("#radar"), {
        type: "radar",
        data: data,
        options: {
                scale: {
                    reverse: true,
                    ticks: {
                        beginAtZero: true
                    }
                }
        }
    });
}

function polar_chart() {
    var data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };
    new Chart($('#polar'), {
        data: data,
        type: 'polarArea',
        options: {
            elements: {
                arc: {
                    borderColor: "#000000"
                }
            }
        }
    });
}
