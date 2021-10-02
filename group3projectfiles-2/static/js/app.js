d3.json("/plot").then(
    function(data) {
        console.log(data)

        var xValues1 = []
        var yValues1 = []
        var xValues2 = []
        var yValues2 = []

        for (key in data["Violent Crime rate"]) {
            xValues1.push(key)
            yValues1.push(data["Violent Crime rate"][key])
        }

        for (key in data["Property crime rate"]) {
            xValues2.push(key)
            yValues2.push(data["Property crime rate"][key])
        }

        console.log(xValues1)
        console.log(yValues1)
        console.log(xValues2)
        console.log(yValues2)



        var plotData = {
            x: xValues1,
            y: yValues1,
            name: "Violent Crime Rate",
            type: 'line'
        }

        var plotData2 = {
            x: xValues2,
            y: yValues2,
            name: "Property Crime Rate",
            type: "line"
        }

        Plotly.newPlot('plot1', [plotData, plotData2])
    }
)

d3.json('/plot2').then(
    function(data) {
        var xValues = []
        var yValues = []

        for (key in data) {
            xValues.push(key)
            yValues.push(data[key])
        }

        var plotData = {
            x: xValues,
            y: yValues,
            type: 'bar'
        }
        Plotly.newPlot('plot2', [plotData])
    }
)