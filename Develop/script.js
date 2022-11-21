
var description1 = document.getElementById("91");
var description2 = document.getElementById("101");
var description3 = document.getElementById("111");
var description4 = document.getElementById("121");
var description5 = document.getElementById("131");
var description6 = document.getElementById("141");
var description7 = document.getElementById("151");
var description8 = document.getElementById("161");
var description9 = document.getElementById("171");
var saveButton = document.getElementsByClassName('saveBtn');
saveButton[0].addEventListener("click", function (event) {
  event.preventDefault();
  savethis();
});
function savethis() {
  var storage1 = {
    description1: description.value
  };
  localStorage.setItem("storage1", JSON.stringify(storage1));
}
function renderLastGrade() {
  var storage1 = JSON.parse(localStorage.getItem("storage1"));
  if (storage1 !== null) {
    description1.textContent = storage1.description;
  }
};
saveButton[1].addEventListener("click", function (event) {
  event.preventDefault();
  savethis1();
});
function savethis1() {
  var storage2 = {
    description2: description2.value
  };
  localStorage.setItem("storage2", JSON.stringify(storage2));
}
function renderLastGrade1() {
  var storage2 = JSON.parse(localStorage.getItem("storage2"));
  if (storage2 !== null) {
    description2.textContent = storage2.description2;
  }
};

saveButton[2].addEventListener("click", function (event) {
  event.preventDefault();
  savethis2();
});
function savethis2() {
  var storage3 = {
    description3: description3.value
  };
  localStorage.setItem("storage3", JSON.stringify(storage3));
}
function renderLastGrade2() {
  var storage3 = JSON.parse(localStorage.getItem("storage3"));
  if (storage3 !== null) {
    description3.textContent = storage3.description3;
  }
};

saveButton[3].addEventListener("click", function (event) {
  event.preventDefault();
  savethis3();
});
function savethis3() {
  var storage4 = {
    description4: description4.value
  };
  localStorage.setItem("storage4", JSON.stringify(storage4));
}
function renderLastGrade3() {
  var storage4 = JSON.parse(localStorage.getItem("storage4"));
  if (storage4 !== null) {
    description4.textContent = storage4.description4;
  }
};

saveButton[4].addEventListener("click", function (event) {
  event.preventDefault();
  savethis4();
});
function savethis4() {
  var storage5 = {
    description5: description5.value
  };
  localStorage.setItem("storage5", JSON.stringify(storage5));
}
function renderLastGrade4() {
  var storage5 = JSON.parse(localStorage.getItem("storage5"));
  if (storage5 !== null) {
    description5.textContent = storage5.description5;
  }
};

saveButton[5].addEventListener("click", function (event) {
  event.preventDefault();
  savethis5();
});
function savethis5() {
  var storage6 = {
    description6: description6.value
  };
  localStorage.setItem("storage6", JSON.stringify(storage6));
}
function renderLastGrade5() {
  var storage6 = JSON.parse(localStorage.getItem("storage6"));
  if (storage6 !== null) {
    description6.textContent = storage6.description6;
  }
};

saveButton[6].addEventListener("click", function (event) {
  event.preventDefault();
  savethis6();
});
function savethis6() {
  var storage7 = {
    description7: description7.value
  };
  localStorage.setItem("storage7", JSON.stringify(storage7));
}
function renderLastGrade6() {
  var storage7 = JSON.parse(localStorage.getItem("storage7"));
  if (storage7 !== null) {
    description7.textContent = storage7.description7;
  }
};

saveButton[7].addEventListener("click", function (event) {
  event.preventDefault();
  savethis7();
});
function savethis7() {
  var storage8 = {
    description8: description8.value
  };
  localStorage.setItem("storage8", JSON.stringify(storage8));
}
function renderLastGrade7() {
  var storage8 = JSON.parse(localStorage.getItem("storage8"));
  if (storage8 !== null) {
    description8.textContent = storage8.description8;
  }
};

saveButton[8].addEventListener("click", function (event) {
  event.preventDefault();
  savethis8();
});
function savethis8() {
  var storage9 = {
    description9: description9.value
  };
  localStorage.setItem("storage9", JSON.stringify(storage9));
}
function renderLastGrade8() {
  var storage9 = JSON.parse(localStorage.getItem("storage9"));
  if (storage9 !== null) {
    description9.textContent = storage9.description9;
  }
};


//sets and splays current time 
var time1 = dayjs().format('MMMM  dddd ');
var time2 = dayjs().format('DD ');
$('#currentDay').text(time1 + "the " + time2);

$(document).ready(readyFn);
function readyFn(jQuery) {
  var hour = dayjs().format('HH');
  if (hour < 9) {
    $('#9').css({ 'background-color': '#77dd77' });
  } if (hour === 9) {
    $('#9').css({ 'background-color': '#ff6961' });
  } if (hour > 9) {
    $('#9').css({ 'background-color': '#d3d3d3' });
  } if (hour < 10) {
    $('#10').css({ 'background-color': '#77dd77' });
  } if (hour === 10) {
    $('#10').css({ 'background-color': '#ff6961' });
  } if (hour > 10) {
    $('#10').css({ 'background-color': '#d3d3d3' });
  } if (hour < 11) {
    $('#11').css({ 'background-color': '#77dd77' });
  } if (hour === 11) {
    $('#11').css({ 'background-color': '#ff6961' });
  } if (hour > 11) {
    $('#11').css({ 'background-color': '#d3d3d3' });
  } if (hour < 12) {
    $('#12').css({ 'background-color': '#77dd77' });
  } if (hour === 12) {
    $('#12').css({ 'background-color': '#ff6961' });
  } if (hour > 12) {
    $('#12').css({ 'background-color': '#d3d3d3' });
  } if (hour < 13) {
    $('#13').css({ 'background-color': '#77dd77' });
  } if (hour === 13) {
    $('#13').css({ 'background-color': '#ff6961' });
  } if (hour > 13) {
    $('#13').css({ 'background-color': '#d3d3d3' });
  } if (hour < 14) {
    $('#14').css({ 'background-color': '#77dd77' });
  } if (hour === 14) {
    $('#14').css({ 'background-color': '#ff6961' });
  } if (hour > 14) {
    $('#14').css({ 'background-color': '#d3d3d3' });
  } if (hour < 15) {
    $('#15').css({ 'background-color': '#77dd77' });
  } if (hour === 15) {
    $('#15').css({ 'background-color': '#ff6961' });
  } if (hour > 15) {
    $('#15').css({ 'background-color': '#d3d3d3' });
  } if (hour < 16) {
    $('#16').css({ 'background-color': '#77dd77' });
  } if (hour === 16) {
    $('#16').css({ 'background-color': '#ff6961' });
  } if (hour > 16) {
    $('#16').css({ 'background-color': '#d3d3d3' });
  } if (hour < 17) {
    $('#17').css({ 'background-color': '#77dd77' });
  } if (hour === 17) {
    $('#17').css({ 'background-color': '#ff6961' });
  } if (hour > 17) {
    $('#17').css({ 'background-color': '#d3d3d3' });
  }
}
renderLastGrade();
renderLastGrade1();
renderLastGrade2();
renderLastGrade3();
renderLastGrade4();
renderLastGrade5();
renderLastGrade6();
renderLastGrade7();
renderLastGrade8();

