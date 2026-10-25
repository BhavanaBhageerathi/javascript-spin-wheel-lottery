
var spin=function(event){
    document.getElementById("spinwheel").style.display = "inline";
    document.getElementById("spin").style.backgroundColor = "green";
    startLottery();
    
}

var spinagain=function(event){
    document.getElementById("spinwheel").style.display = "inline";
    document.getElementById("winner").style.display = "none";
    document.getElementById("spinagain").style.backgroundColor = "green";
    startLottery();
    
}




//promise
function lotteryPromise() {
    return new Promise(function(myresolve, myreject) {


        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 90000) + 10000;
            myresolve(randomNum);
        }, 10000);
    });

}

// Get the result using .then()
function startLottery(){
lotteryPromise().then(function(myresult) {
    document.getElementById("spinwheel").style.display = "none";
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner").innerHTML = "The winner is!!! " + myresult;
    document.getElementById("spin").style.display="none";
    document.getElementById("spinagain").style.display="inline";
    document.getElementById("spinagain").style.backgroundColor = "red";


});
}

