// import { datas } from "../../controllers/landing.js";
// import models from "../../models";
var chartDom = document.getElementById("myChart");
var myChart = echarts.init(chartDom);
var option;
var chartDom1 = document.getElementById("myChart1");
var myChart1 = echarts.init(chartDom1);
var chartDom2 = document.getElementById("myChart2");
var myChart2 = echarts.init(chartDom2);

// const models1 = require("../../models/moc_data");

option = {
  series: [
    {
      type: "gauge",
      center: ["50%", "60%"],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 100,
      splitNumber: 10,
      itemStyle: {
        color: "#389967",
      },
      progress: {
        show: true,
        width: 30,
      },

      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 30,
        },
      },
      axisTick: {
        distance: -45,
        splitNumber: 5,
        lineStyle: {
          width: 2,
          color: "#999",
        },
      },
      splitLine: {
        distance: -52,
        length: 14,
        lineStyle: {
          width: 3,
          color: "#999",
        },
      },
      axisLabel: {
        distance: -20,
        color: "#999",
        fontSize: 20,
      },
      anchor: {
        show: false,
      },
      title: {
        show: false,
      },
      detail: {
        valueAnimation: true,
        width: "60%",
        lineHeight: 40,
        height: "15%",
        borderRadius: 8,
        offsetCenter: [0, "-15%"],
        fontSize: 36,
        fontWeight: "normal",
        formatter: "{value}",
        color: "auto",
      },
      data: [
        {
          value: 20,
        },
      ],
    },

    // {
    //   type: "gauge",
    //   center: ["50%", "60%"],
    //   startAngle: 200,
    //   endAngle: -20,
    //   min: 0,
    //   max: 0,

    //   progress: {
    //     show: true,
    //     width: 8,
    //   },

    //   pointer: {
    //     show: false,
    //   },
    //   axisLine: {
    //     show: false,
    //   },
    //   axisTick: {
    //     show: false,
    //   },
    //   splitLine: {
    //     show: false,
    //   },
    //   axisLabel: {
    //     show: false,
    //   },
    //   detail: {
    //     show: false,
    //   },
    //   data: [
    //     {
    //       value: 20,
    //     },
    //   ],
    // },
  ],
};

const ss = (model) => {
  console.log("model = ", model);
};

// setInterval(
//   // ss(model),
//   //   models1
//   //     .findAll({
//   //       limit: 1,
//   //       order: [["id", "DESC"]],
//   //     })
//   //     .then((datas) => {
//   //       console.log("data", datas);
//   //       data = datas;
//   //     });

//   //   let random = (Math.random() * 60).toFixed(2) - 0;
//   // console.log("before call ajax");
//   // $.ajax({
//   //   url: "/dashboard2",
//   //   // contentType: "application/json; charset=utf-8",
//   //   type: "GET",
//   //   data: "",
//   //   success: (res) => {
//   //     // Replace follow button with unfollow.
//   //     console.log("Result: ", res);
//   //     // $("#" + leadId).remove();
//   //   },
//   //   error: (error) => {
//   //     console.log("Error:", error);
//   //   },
//   // });
//   // console.log("after call ajax:");
//   //PH
//   // option.series[0].data[0].value = 123;
//   // //   option.series[1].data[0].value = random;
//   // myChart.setOption(option, true);

//   // //EC
//   // option.series[0].data[0].value = 456;
//   // //   option.series[1].data[0].value = 44;
//   // myChart1.setOption(option, true);

//   // //TEMP
//   // option.series[0].data[0].value = 666;
//   // //   option.series[1].data[0].value = 66;
//   // myChart2.setOption(option, true);
//   // }

//   2000
// );

option && myChart.setOption(option);
option && myChart1.setOption(option);
option && myChart2.setOption(option);
