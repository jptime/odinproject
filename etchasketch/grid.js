$(document).ready(function () {
    //put in the reset button

    $('body').append('<div id="center"></div>');
    $('#center').css("text-align","center")
    $('#center').append('<button class="reset" type="button">Clear Grid</button>');
    $('.reset').css({
        "background-color": "red",
            "margin-bottom": "10px"
    });

    //setup the grid
    //default 16 square side
    var squareside = 16

        function makeGrid(n) {
            var newGrid = Math.pow(n, 2);
            $('body').append('<div class="container"></div>');
            $('.container').css({
                "width": "960px",
                    "margin": "auto",
                    "border": "2px solid black"
            });
            console.log(newGrid)
            for (var i = 1; i <= newGrid; i++) {
                $('.container').append('<div class="square"></div>');
               
            }
             $('.square').css({
                    "height": 960 / n + "px",
                        "width": 960 / n + "px",
                        "display": "inline-block",
                        "margin": "0"
                });
        };

    makeGrid(squareside);

    var highColor = "blue";

    function highlight() {
        $('.square').mouseenter(function () {
            $(this).css("background-color", highColor)

        });
    };

    highlight();

    //clear grid button function
    function clearGrid() {
        var squareside = prompt("How many squares per side?", 16);
        $('.container').remove();
        makeGrid(squareside);
        highlight();
        console.log(squareside)
    };
    //event for onclick
    $('.reset').click(clearGrid);



});