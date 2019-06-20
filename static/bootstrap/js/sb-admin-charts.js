// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
//// -- Area Chart Example
//var ctx = document.getElementById("myAreaChart");
//var myLineChart = new Chart(ctx, {
//  type: 'line',
//  data: {
//    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
//    datasets: [{
//      label: "Sessions",
//      lineTension: 0.3,
//      backgroundColor: "rgba(2,117,216,0.2)",
//      borderColor: "rgba(2,117,216,1)",
//      pointRadius: 5,
//      pointBackgroundColor: "rgba(2,117,216,1)",
//      pointBorderColor: "rgba(255,255,255,0.8)",
//      pointHoverRadius: 5,
//      pointHoverBackgroundColor: "rgba(2,117,216,1)",
//      pointHitRadius: 20,
//      pointBorderWidth: 2,
//      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
//    }],
//  },
//  options: {
//    scales: {
//      xAxes: [{
//        time: {
//          unit: 'date'
//        },
//        gridLines: {
//          display: false
//        },
//        ticks: {
//          maxTicksLimit: 7
//        }
//      }],
//      yAxes: [{
//        ticks: {
//          min: 0,
//          max: 40000,
//          maxTicksLimit: 5
//        },
//        gridLines: {
//          color: "rgba(0, 0, 0, .125)",
//        }
//      }],
//    },
//    legend: {
//      display: false
//    }
//  }
//});
// -- Bar Chart Example

var ctx = document.getElementById("myBarChart");
var i;

//for (i=0;i<=null;i++){
  //  names[i] = document.getElementById("Ansname"+i);
//}
var names = document.getElementById("Ansname1");
var names2 = document.getElementById("Ansname2");
var names3 = document.getElementById("Ansname3");
var correct1 = document.getElementById("Correct1").value;
var correct2 = document.getElementById("Correct2").value;
var correct3 = document.getElementById("Correct3").value;
var correct4 = document.getElementById("Correct4").value;
var correct5 = document.getElementById("Correct5").value;
var correct6 = document.getElementById("Correct6").value;
var correct7 = document.getElementById("Correct7").value;
var correct8 = document.getElementById("Correct8").value;
var correct9 = document.getElementById("Correct9").value;
var correct10 = document.getElementById("Correct10").value;
var correct11 = document.getElementById("Correct11").value;
var correct12 = document.getElementById("Correct12").value;
var correct13 = document.getElementById("Correct13").value;
var correct14 = document.getElementById("Correct14").value;
var correct15 = document.getElementById("Correct15").value;
var correct16 = document.getElementById("Correct16").value;
var correct17 = document.getElementById("Correct17").value;
var correct18 = document.getElementById("Correct18").value;
var correct19 = document.getElementById("Correct19").value;
var correct20 = document.getElementById("Correct20").value;
var correct21 = document.getElementById("Correct21").value;
var correct22 = document.getElementById("Correct22").value;
var correct23 = document.getElementById("Correct23").value;
var correct24 = document.getElementById("Correct24").value;
var correct25 = document.getElementById("Correct25").value;
var correct26 = document.getElementById("Correct26").value;
var correct27 = document.getElementById("Correct27").value;
var correct28 = document.getElementById("Correct28").value;
var correct29 = document.getElementById("Correct29").value;
var correct30 = document.getElementById("Correct30").value;
var correct31 = document.getElementById("Correct31").value;
var correct32 = document.getElementById("Correct32").value;
var correct33 = document.getElementById("Correct33").value;
var correct34 = document.getElementById("Correct34").value;
var correct35 = document.getElementById("Correct35").value;
var correct36 = document.getElementById("Correct36").value;
var correct37 = document.getElementById("Correct37").value;
var correct38 = document.getElementById("Correct38").value;
var correct39 = document.getElementById("Correct39").value;
var correct40 = document.getElementById("Correct40").value;


correct1 = correct1.match(/\d/g);
correct1 = correct1.toString();
correct1 = correct1.split(",");
var c1 = correct1.slice(1);
var cr1 = c1.join("");

correct2 = correct2.match(/\d/g);
correct2 = correct2.toString();
correct2 = correct2.split(",");
var c2 = correct2.slice(1);
var cr2 = c2.join("");

correct3 = correct3.match(/\d/g);
correct3 = correct3.toString();
correct3 = correct3.split(",");
var c3 = correct3.slice(1);
var cr3 = c3.join("");

correct4 = correct4.match(/\d/g);
correct4 = correct4.toString();
correct4 = correct4.split(",");
var c4 = correct4.slice(1);
var cr4 = c4.join("");

correct5 = correct5.match(/\d/g);
correct5 = correct5.toString();
correct5 = correct5.split(",");
var c5 = correct5.slice(1);
var cr5 = c5.join("");

correct6 = correct6.match(/\d/g);
correct6 = correct6.toString();
correct6 = correct6.split(",");
var c6 = correct6.slice(1);
var cr6 = c6.join("");

correct7 = correct7.match(/\d/g);
correct7 = correct7.toString();
correct7 = correct7.split(",");
var c7 = correct7.slice(1);
var cr7 = c7.join("");

correct8 = correct8.match(/\d/g);
correct8 = correct8.toString();
correct8 = correct8.split(",");
var c8 = correct8.slice(1);
var cr8 = c8.join("");

correct9 = correct9.match(/\d/g);
correct9 = correct9.toString();
correct9 = correct9.split(",");
var c9 = correct9.slice(1);
var cr9 = c9.join("");

correct10 = correct10.match(/\d/g);
correct10 = correct10.toString();
correct10 = correct10.split(",");
var c10 = correct10.slice(2);
var cr10 = c10.join("");

correct11 = correct11.match(/\d/g);
correct11 = correct11.toString();
correct11 = correct11.split(",");
var c11 = correct11.slice(2);
var cr11 = c11.join("");

correct12 = correct12.match(/\d/g);
correct12 = correct12.toString();
correct12 = correct12.split(",");
var c12 = correct12.slice(2);
var cr12 = c12.join("");

correct13 = correct13.match(/\d/g);
correct13 = correct13.toString();
correct13 = correct13.split(",");
var c13 = correct13.slice(2);
var cr13 = c13.join("");

correct14 = correct14.match(/\d/g);
correct14 = correct14.toString();
correct14 = correct14.split(",");
var c14 = correct14.slice(2);
var cr14 = c14.join("");

correct15 = correct15.match(/\d/g);
correct15 = correct15.toString();
correct15 = correct15.split(",");
var c15 = correct15.slice(2);
var cr15 = c15.join("");

correct16 = correct16.match(/\d/g);
correct16 = correct16.toString();
correct16 = correct16.split(",");
var c16 = correct16.slice(2);
var cr16 = c16.join("");

correct17 = correct17.match(/\d/g);
correct17 = correct17.toString();
correct17 = correct17.split(",");
var c17 = correct17.slice(2);
var cr17 = c17.join("");

correct18 = correct18.match(/\d/g);
correct18 = correct18.toString();
correct18 = correct18.split(",");
var c18 = correct18.slice(2);
var cr18 = c18.join("");

correct19 = correct19.match(/\d/g);
correct19 = correct19.toString();
correct19 = correct19.split(",");
var c19 = correct19.slice(2);
var cr19 = c19.join("");

correct20 = correct20.match(/\d/g);
correct20 = correct20.toString();
correct20 = correct20.split(",");
var c20 = correct20.slice(2);
var cr20 = c20.join("");

correct21 = correct21.match(/\d/g);
correct21 = correct21.toString();
correct21 = correct21.split(",");
var c21 = correct21.slice(2);
var cr21 = c21.join("");

correct22 = correct22.match(/\d/g);
correct22 = correct22.toString();
correct22 = correct22.split(",");
var c22 = correct22.slice(2);
var cr22 = c22.join("");

correct23 = correct23.match(/\d/g);
correct23 = correct23.toString();
correct23 = correct23.split(",");
var c23 = correct23.slice(2);
var cr23 = c23.join("");

correct24 = correct24.match(/\d/g);
correct24 = correct24.toString();
correct24 = correct24.split(",");
var c24 = correct24.slice(2);
var cr24 = c24.join("");

correct25 = correct25.match(/\d/g);
correct25 = correct25.toString();
correct25 = correct25.split(",");
var c25 = correct25.slice(2);
var cr25 = c25.join("");

correct26 = correct26.match(/\d/g);
correct26 = correct26.toString();
correct26 = correct26.split(",");
var c26 = correct26.slice(2);
var cr26 = c26.join("");

correct27 = correct27.match(/\d/g);
correct27 = correct27.toString();
correct27 = correct27.split(",");
var c27 = correct27.slice(2);
var cr27 = c27.join("");

correct28 = correct28.match(/\d/g);
correct28 = correct28.toString();
correct28 = correct28.split(",");
var c28 = correct28.slice(2);
var cr28 = c28.join("");

correct29 = correct29.match(/\d/g);
correct29 = correct29.toString();
correct29 = correct29.split(",");
var c29 = correct29.slice(2);
var cr29 = c29.join("");

correct30 = correct30.match(/\d/g);
correct30 = correct30.toString();
correct30 = correct30.split(",");
var c30 = correct30.slice(2);
var cr30 = c30.join("");

correct31 = correct31.match(/\d/g);
correct31 = correct31.toString();
correct31 = correct31.split(",");
var c31 = correct31.slice(2);
var cr31 = c31.join("");

correct32 = correct32.match(/\d/g);
correct32 = correct32.toString();
correct32 = correct32.split(",");
var c32 = correct32.slice(2);
var cr32 = c32.join("");

correct33 = correct33.match(/\d/g);
correct33 = correct33.toString();
correct33 = correct33.split(",");
var c33 = correct33.slice(2);
var cr33 = c33.join("");

correct34 = correct34.match(/\d/g);
correct34 = correct34.toString();
correct34 = correct34.split(",");
var c34 = correct34.slice(2);
var cr34 = c34.join("");

correct35 = correct35.match(/\d/g);
correct35 = correct35.toString();
correct35 = correct35.split(",");
var c35 = correct35.slice(2);
var cr35 = c35.join("");

correct36 = correct36.match(/\d/g);
correct36 = correct36.toString();
correct36 = correct36.split(",");
var c36 = correct36.slice(2);
var cr36 = c36.join("");

correct37 = correct37.match(/\d/g);
correct37 = correct37.toString();
correct37 = correct37.split(",");
var c37 = correct37.slice(2);
var cr37 = c37.join("");

correct38 = correct38.match(/\d/g);
correct38 = correct38.toString();
correct38 = correct38.split(",");
var c38 = correct38.slice(2);
var cr38 = c38.join("");

correct39 = correct39.match(/\d/g);
correct39 = correct39.toString();
correct39 = correct39.split(",");
var c39 = correct39.slice(2);
var cr39 = c39.join("");

correct40 = correct40.match(/\d/g);
correct40 = correct40.toString();
correct40 = correct40.split(",");
var c40 = correct40.slice(2);
var cr40 = c40.join("");

var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6", "Track 7", "Track 8", "Track 9", "Track 10", "Track 11", "Track 12", "Track 13", "Track 14", "Track 15", "Track 16", "Track 17", "Track 18", "Track 19", "Track 20", "Track 21", "Track 22", "Track 23", "Track 24", "Track 25", "Track 26", "Track 27", "Track 28", "Track 29", "Track 30", "Track 31", "Track 32", "Track 33", "Track 34", "Track 35", "Track 36", "Track 37", "Track 38", "Track 39", "Track 40"],
    datasets: [{
      label: "Correct",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
               data: [cr1, cr2, cr3, cr4, cr5, cr6, cr7, cr8, cr9, cr10, cr11, cr12, cr13, cr14, cr15, cr16, cr17, cr18, cr19, cr20, cr21, cr22, cr23, cr24, cr25, cr26, cr27, cr28, cr29, cr30, cr31, cr32, cr33, cr34, cr35, cr36, cr37, cr38, cr39, cr40]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
          maxTicksLimit: 40
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var dj_count = document.getElementById("dj_count");
dj_count = dj_count.value;
var piano_count = document.getElementById("piano_count");
piano_count = piano_count.value;
var guitar_count = document.getElementById("guitar_count");
guitar_count = guitar_count.value;
var bass_count = document.getElementById("bass_count");
bass_count = bass_count.value;
var drum_count = document.getElementById("drum_count");
drum_count = drum_count.value;
var brass_count = document.getElementById("brass_count");
brass_count = brass_count.value;
var strings_count = document.getElementById("strings_count");
strings_count = strings_count.value;
var dance_count = document.getElementById("dance_count");
dance_count = dance_count.value;
var others_count = document.getElementById("others_count");
others_count = others_count.value;
var noex_count = document.getElementById("noex_count");
noex_count = noex_count.value;
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["DJ", "Piano/Keybord", "Guitar", "Bass", "Drum", "Brass", "Strings", "Dance", "Others", "No Music Experience"],
    datasets: [{
      data: [dj_count, piano_count, guitar_count, bass_count, drum_count, brass_count, strings_count, dance_count, others_count, noex_count],
               backgroundColor: ['#ffcc66', '#00ff00', '#6699ff', '#00ffff', '#cc99ff', '#ffff00', '#640000', '#006400', '#bbbbbb', '#000033'],
    }],
  },
});
