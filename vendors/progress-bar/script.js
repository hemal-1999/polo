$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 6,
        color: "orange",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        width:'200px',
        height: '200px',
        percentage: true,
    }).circularProgress('animate', 85, 3000);
});
