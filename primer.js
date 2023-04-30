window.onload = function () {
    var ss = document.getElementsByTagName("p");
    ss[0].onclick = sas1;
    ss[1].onclick = sas2;
    ss[2].onclick = sas3;
    ss[3].onclick = sas4;
    ss[4].onclick = sas5;
    ss[5].onclick = sas6;
    ss[6].onclick = sas7;

}



var toGo1 = true;
var toGo2 = true;
var toGo3 = true;
var toGo4 = true;
var toGo5 = true;
var toGo6 = true;
var toGo7 = true;
var forClicks = document.getElementsByTagName("p");
let textTd = document.getElementsByClassName("sectionTable");
const textObjet = function () {
    this.fun = (a , b , c , d , e , f) => {
            var num = 8;
             if (!clicks[a].clack) {
            var te = setInterval (function () {
                if (num >= 0) {
                    textTd[a].id = "colorText" + num;
                    num--;
                } else {
                    clearInterval(te);  
                }
            } , 50); 
        } else if (!clicks[b].clack) {
            var te = setInterval (function () {
                if (num >= 0) {
                    textTd[b].id = "colorText" + num;
                    num--;
                } else {
                    clearInterval(te);  
                }
            } , 50); 
        } else if (!clicks[c].clack) {
            var te = setInterval (function () {
                if (num >= 0) {
                    textTd[c].id = "colorText" + num;
                    num--;
                } else {
                    clearInterval(te);  
                }
            } , 50); 
        } else if (!clicks[d].clack) {
            var te = setInterval (function () {
                if (num >= 0) {
                    textTd[d].id = "colorText" + num;
                    num--;
                } else {
                    clearInterval(te);  
                }
            } , 50); 
        } else if (!clicks[e].clack) {
            var te = setInterval (function () {
                if (num >= 0) {
                    textTd[e].id = "colorText" + num;
                    num--;
                } else {
                    clearInterval(te);  
                }
            } , 50); 
        } else if (!clicks[f].clack) {
            var te = setInterval (function () {
                if (num >= 0) {
                    textTd[f].id = "colorText" + num;
                    num--;
                } else {
                    clearInterval(te);  
                }
            } , 50); 
        }
    }
};

const color = function() {
this.fun = ez => {
    let i = 0;
const timer = setInterval( () => {
    if(i < 8) {
        i++;
        textTd[ez].id = "colorText" + i;
    } else {
        clearInterval(timer);
    }
} , 50);
};
};
const table = function () {
    this.fun = (a , b , c , d , e , f) => {
        var g = 155;
        if (!clicks[a].clack) {
            var igs = setInterval (function () {
                if (g > 0) {
                    forClicks[a].id = "set" + g;
                    g--;
                } else {
                    clearInterval(igs);
                    
                }
            } , 10); 
            clicks[a].clack = true;
        } else if (!clicks[b].clack) {
            var igs = setInterval (function () {
                if (g > 0) {
                    forClicks[b].id = "set" + g;
                    g--;
                } else {
                    clearInterval(igs);
                }
            } , 10); 
            clicks[b].clack = true;
                } else if (!clicks[c].clack) {
                    var igs = setInterval (function () {
                        if (g > 0) {
                            forClicks[c].id = "set" + g;
                            g--;
                        } else {
                            clearInterval(igs);
                        }
                    } , 10); 
                    clicks[c].clack = true;
                        } else if (!clicks[d].clack) {
                            var igs = setInterval (function () {
                                if (g > 0) {
                                    forClicks[d].id = "set" + g;
                                    g--;
                                } else {
                                    
                                    clearInterval(igs);
                                }
                            } , 10); 
                            clicks[d].clack = true;
                                } else if (!clicks[e].clack) {
                                    var igs = setInterval (function () {
                                        if (g > 0) {
                                            forClicks[e].id = "set" + g;
                                            g--;
                                        } else {
                                            
                                            clearInterval(igs);
                                        }
                                    } , 10); 
                                    clicks[e].clack = true;
                                        } else if (!clicks[f].clack) {
                                            var igs = setInterval (function () {
                                                if (g > 0) {
                                                    forClicks[f].id = "set" + g;
                                                    g--;
                                                } else {
                                                    
                                                    clearInterval(igs);
                                                }
                                            } , 10); 
                                            clicks[f].clack = true;
                                                }
    };
}

const textBack = new textObjet();
const colorText = new color();
const tableBack = new table();

var clicks = [ 
        { clack: true } ,
        { clack: true } ,
        { clack: true } ,
        { clack: true } ,
        { clack: true } ,
        { clack: true } ,
        { clack: true }
];

function sas1 (event) {
    var ss = event.target;
    var i = 0;
    if(toGo1 && toGo2 && toGo3 && toGo4 && toGo5 && toGo6 && toGo7) {
        setTimeout(() => {
             toGo1 = true;
            toGo2 = true;
            toGo3 = true;
            toGo4 = true;
            toGo5 = true;
            toGo6 = true;
            toGo7 = true;
        } , 1500);
    }
    if(toGo1) {
        toGo1 = false;
        toGo2 = false;
        toGo3 = false;
        toGo4 = false;
        toGo5 = false;
        toGo6 = false;
        toGo7 = false;
    if(clicks[0].clack) {
        clicks[0].clack = false;
        textBack.fun(1 , 2 , 3 , 4 , 5 , 6);
    var int1 = setInterval(function () {
        if(i < 155) {
            i++;
            ss.id = "set" + i;
        } else {
            clearInterval(int1);
           colorText.fun(0);
        }
    } , 10 )
} tableBack.fun(1 , 2 , 3 , 4 , 5 , 6);
} 
}

function sas2 (event) {
    var ss = event.target;
    var i = 0;
    if(toGo1 && toGo2 && toGo3 && toGo4 && toGo5 && toGo6 && toGo7) {
        setTimeout(() => {
             toGo1 = true;
            toGo2 = true;
            toGo3 = true;
            toGo4 = true;
            toGo5 = true;
            toGo6 = true;
            toGo7 = true;
        } , 1500);
    }
    if(toGo2) {
        toGo1 = false;
        toGo2 = false;
        toGo3 = false;
        toGo4 = false;
        toGo5 = false;
        toGo6 = false;
        toGo7 = false;
    if (clicks[1].clack) {
        clicks[1].clack = false;
        textBack.fun(0 , 2 , 3 , 4 , 5 , 6);
    var int2 = setInterval(function () {
        if(i < 155) {
            i++;
            ss.id = "set" + i;
        } else {
            clearInterval(int2);
            colorText.fun(1);
        }
    } , 10 )
} tableBack.fun(0 , 2 , 3 , 4 , 5 , 6);
    } 
}

function sas3 (event) {
    var ss = event.target;
    var i = 0;
    if(toGo1 && toGo2 && toGo3 && toGo4 && toGo5 && toGo6 && toGo7) {
        setTimeout(() => {
             toGo1 = true;
            toGo2 = true;
            toGo3 = true;
            toGo4 = true;
            toGo5 = true;
            toGo6 = true;
            toGo7 = true;
        } , 1500);
    }
    if(toGo3) {
        toGo1 = false;
        toGo2 = false;
        toGo3 = false;
        toGo4 = false;
        toGo5 = false;
        toGo6 = false;
        toGo7 = false;
    if (clicks[2].clack) {
        clicks[2].clack = false;
        textBack.fun(0 , 1 , 3 , 4 , 5 , 6);
    var int3 = setInterval(function () {
        if(i < 155) {
            i++;
            ss.id = "set" + i;
        } else {
            clearInterval(int3);
            colorText.fun(2);
        }
    } , 10 )
} tableBack.fun(0 , 1 , 3 , 4 , 5 , 6);
} 
}
function sas4 (event) {
    var ss = event.target;
    var i = 0;
    if(toGo1 && toGo2 && toGo3 && toGo4 && toGo5 && toGo6 && toGo7) {
        setTimeout(() => {
             toGo1 = true;
            toGo2 = true;
            toGo3 = true;
            toGo4 = true;
            toGo5 = true;
            toGo6 = true;
            toGo7 = true;
        } , 1500);
    }
    if(toGo4) {
        toGo1 = false;
        toGo2 = false;
        toGo3 = false;
        toGo4 = false;
        toGo5 = false;
        toGo6 = false;
        toGo7 = false;
    if(clicks[3].clack) {
        clicks[3].clack = false;
        textBack.fun(0 , 1 , 2 , 4 , 5 , 6);
    var int4 = setInterval(function () {
        if(i < 155) {
            i++;
            ss.id = "set" + i;
        } else {
            clearInterval(int4);
            colorText.fun(3);
        }
    } , 10 )
} tableBack.fun(0 , 1 , 2 , 4 , 5 , 6);
} 
}

function sas5 (event) {
    var ss = event.target;
    var i = 0;
    if(toGo1 && toGo2 && toGo3 && toGo4 && toGo5 && toGo6 && toGo7) {
        setTimeout(() => {
             toGo1 = true;
            toGo2 = true;
            toGo3 = true;
            toGo4 = true;
            toGo5 = true;
            toGo6 = true;
            toGo7 = true;
        } , 1500);
    }
    if(toGo5) {
        toGo1 = false;
        toGo2 = false;
        toGo3 = false;
        toGo4 = false;
        toGo5 = false;
        toGo6 = false;
        toGo7 = false;
    if(clicks[4].clack) {
        clicks[4].clack = false;
        textBack.fun(0 , 1 , 2 , 3 , 5 , 6);
    var int5 = setInterval(function () {
        if(i < 155) {
            i++;
            ss.id = "set" + i;
        } else {
            clearInterval(int5);
            colorText.fun(4);
        }
    } , 10 )
} tableBack.fun(0 , 1 , 2 , 3 , 5 , 6);
} 
}

function sas6 (event) {
    var ss = event.target;
    var i = 0;
    if(toGo1 && toGo2 && toGo3 && toGo4 && toGo5 && toGo6 && toGo7) {
        setTimeout(() => {
             toGo1 = true;
            toGo2 = true;
            toGo3 = true;
            toGo4 = true;
            toGo5 = true;
            toGo6 = true;
            toGo7 = true;
        } , 1500);
    }
    if(toGo6) {
        toGo1 = false;
        toGo2 = false;
        toGo3 = false;
        toGo4 = false;
        toGo5 = false;
        toGo6 = false;
        toGo7 = false;
    if(clicks[5].clack) {
        clicks[5].clack = false;
        textBack.fun(0 , 1 , 2 , 3 , 4 , 6);
    var int6 = setInterval(function () {
        if(i < 155) {
            i++;
            ss.id = "set" + i;
        } else {
            clearInterval(int6);
            colorText.fun(5);
        }
    } , 10 )
} tableBack.fun(0 , 1 , 2 , 3 , 4 , 6);
} 
}

function sas7 (event) {
    var ss = event.target;
    var i = 0;
    if(toGo1 && toGo2 && toGo3 && toGo4 && toGo5 && toGo6 && toGo7) {
        setTimeout(() => {
             toGo1 = true;
            toGo2 = true;
            toGo3 = true;
            toGo4 = true;
            toGo5 = true;
            toGo6 = true;
            toGo7 = true;
        } , 1500);
    }
    if(toGo7) {
        toGo1 = false;
        toGo2 = false;
        toGo3 = false;
        toGo4 = false;
        toGo5 = false;
        toGo6 = false;
        toGo7 = false;
    if(clicks[6].clack) {
        clicks[6].clack = false;
        textBack.fun(0 , 1 , 2 , 3 , 4 , 5);
    var int7 = setInterval(function () {
        if(i < 155) {
            i++;
            ss.id = "set" + i;
        } else {
            clearInterval(int7);
            colorText.fun(6);
        }
    } , 10 )
} tableBack.fun(0 , 1 , 2 , 3 , 4 , 5);
} 
}

                                                                                                                    
