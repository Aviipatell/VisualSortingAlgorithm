var arraySize = 10;
var randomArray = [];

$(document).ready(function(){

    // generate default/base size 10 unsorted array
    updateArray();
    
    // add event listener to array size option
    $('input[type=radio][name=size]').on('change', function(){

        // assign value of selected radio button to arraySize
        arraySize = $(this).val();

        // proceed to update the array
        updateArray();

    })

    // show the size10 radio button as clicked
    $("#size10").prop('checked', true);

    // add event listener to the bubble sort button and call the function 
    // bubbleSort on click
    $("#bubbleSort").on('click', bubbleSort);

    // add an event listener to the selection sort button and call the 
    // function selectionSort on click
    $("#selectionSort").on('click', selectionSort2);

    // add an event listener to the insertion sort button and call the 
    // function insertionSort on click
    $("#insertionSort").on('click', insertionSort2);

});

function updateArray(){

    // update the numbers within random array
    for (var i = 0; i < arraySize; i++){
        randomArray[i] = Math.floor(Math.random() * 50) + 1; 
    }

    // regulate the size of the random array
    randomArray = randomArray.slice(0, arraySize);

    // print array
    printArray();

}

function printArray(){

    // print the array in the console
    console.log(randomArray);

    // **** display the random array within the .visual div ****

    // empty the .visual container to prevent extra bars being generated
    $(".visual").empty();

    // recurse through the randomArray and create divs with the class .bar 
    // to represent the random elements within the randomArray 
    for (var i = 0; i < arraySize; i++){

        var newHeight = randomArray[i] * 5;
        // create a new div element and assign it to new bar
        var newBar = $(document.createElement('div')).addClass('bar').css({
            height: newHeight.toString() + "px",
            backgroundColor: "lightBlue",
            top: ($(".visual").innerHeight() - newHeight + 1).toString() + "px"
        });

        // append that new element to the .visual div
        $(".visual").append(newBar);
    }

}

// declare variables
var bsn = 0;
var bsi = 0;
var bsj = 0;
var bsInterval = 0;

function bubbleSort(){

    // declare variables
    bsn = arraySize;
    bsi = 0;
    bsj = 1;

    // create an setInterval function assigned to an ID and use it to mimic 
    // the funcitionality of a while loop but with a short delay between each 
    // iteration. 
    bsInterval = setInterval(function(){

        // check if the value of the element at the current index > the value 
        // of the element at the very next index. If so, swap the two values.
        if (randomArray[bsi] > randomArray[bsj]){
            var iVal = randomArray[bsi];
            randomArray[bsi] = randomArray[bsj];
            randomArray[bsj] = iVal;
        }

        // display new (potentially swapped) array
        printArray();

        // increment values of bsi and bsj
        bsi++;
        bsj++;

        // check if bsi is equal to bsn - 1. if so, reset bsi and bsj values 
        // and decrement bsn.
        if (bsi == (bsn - 1)){
            bsi = 0;
            bsj = 1;
            bsn--;
        }

        // check if bsn is equal to one. If so, call the stopInterval function 
        // to end this interval.
        if (bsn == 1){
            stopInterval(bsInterval);
        }

    }, 200);

    // display final sorted array
    printArray();

}

// function to stop any interval based on the intervalID passed in
function stopInterval(intervalID){
    clearInterval(intervalID);
}

var ssn = 0;
var ssi = 0;
var swapIndex = 0;
var minVal = 0;
var ssInterval = 0;
    
function selectionSort(){

    // set minVal equal to the value of the element at the first index
    minVal = randomArray[ssn];

    // create a loop which keeps running as long as ssn is less than the
    // array size
    while (ssn < arraySize){

        // check to see if the current value in the array is less than the
        // value of the array at the index ssn. 
        if (minVal > randomArray[ssi]){
            
            // if condition is true, set the swap index equal to the current 
            // index and minVal equal to the value at that index.
            swapIndex = ssi;
            minVal = randomArray[ssi];
        }

        // increment ssi
        ssi++;

        // check if the value of ssi is equal to the size of the array
        if (ssi == arraySize){

            // if condition is true, swap the value at ssn with the minVal found
            // within the rest of the array.
            randomArray[swapIndex] = randomArray[ssn];
            randomArray[ssn] = minVal;

            // increment ssn and reset ssi, swapIndex and minVal
            ssn++;
            ssi = ssn;
            swapIndex = ssn;
            minVal = randomArray[ssn];
        }

    }

    // display array
    printArray();

}

function selectionSort2(){

    // set minVal equal to the value of the element at the first index
    minVal = randomArray[ssn];

    // create a loop which keeps running as long as ssn is less than the
    // array size

    ssInterval = setInterval(function(){

        // check to see if the current value in the array is less than the
        // value of the array at the index ssn. 
        if (minVal > randomArray[ssi]){
            
            // if condition is true, set the swap index equal to the current 
            // index and minVal equal to the value at that index.
            swapIndex = ssi;
            minVal = randomArray[ssi];
        }

        // increment ssi
        ssi++;

        // check if the value of ssi is equal to the size of the array
        if (ssi == arraySize){

            // if condition is true, swap the value at ssn with the minVal found
            // within the rest of the array.
            randomArray[swapIndex] = randomArray[ssn];
            randomArray[ssn] = minVal;

            // increment ssn and reset ssi, swapIndex and minVal
            ssn++;
            ssi = ssn;
            swapIndex = ssn;
            minVal = randomArray[ssn];

            printArray();
        }

        if (ssn == arraySize){
            stopInterval(ssInterval);
        }

    }, 100);

    // display array
    printArray();

    ssn = 0;
    ssi = 0;
    swapIndex = 0;
    minVal = 0;
    ssInterval = 0;

}

var isn = 0;
var isInterval = 0;

function insertionSort(){

    isn = 1;

    while (!(isn > arraySize)){

        if (randomArray[isn] >= randomArray[isn-1]){
            isn++;
        }
        else {
            insertElem(isn-1, randomArray[isn]);
            isn++;
        }

        printArray();
    }


}

function insertionSort2(){

    // set the value of isn to 1 to start checking the second value onwards
    isn = 1;

    // set the interval for insertionSort
    var isInterval = setInterval(function(){

        // check if the current element is larger than the pervious element
        if (randomArray[isn] >= randomArray[isn-1]){
            
            // if condition is true, simply increment isn
            isn++;
        }
        else {

            // if current element is not larger than the previous one, call insertElem
            // to insert it into the sorted array (which is the sub array prior to this
            // index of isn) and then increment isn.
            insertElem(isn-1, randomArray[isn]);
            isn++;
        }

        // print out the array
        printArray();

        // check if isn is greater than the length of the array. if so, end interval.
        if (isn > arraySize){
            stopInterval(isInterval);
        }

    }, 200);

    // print final array
    printArray();

}

function insertElem(isn, value){

    // for loop which recurses through the array from indexes isn to 0
    // to find out where to insert the current value
    for (i = isn; i >= 0; i--){

        // check if the value of the current element is greater than value
        // that needs to be inserted
        if (randomArray[i] > value){

            // if condition is true, that means value comes before it, and so
            // swap the two values.
            randomArray[i+1] = randomArray[i];
            randomArray[i] = value; 
        }
        else{
            // if condition false, that means value comes after current element
            // so leave everything as is and break out of the loop.
            break;
        }

        // print array
        printArray();

    }

}



