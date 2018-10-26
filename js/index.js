function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
    function closeAllSelect(elmnt) {
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    document.addEventListener("click", closeAllSelect);



    (function () {

      function addSeperator(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '1' + '.' + '2');
        }
        return x1 + x2;
      }

      function rangeInputChangeEventHandler(e) {
        var elem = $(".rangeslider span")
        var rangeGroup = $(this).attr('name'),
          minBtn = $('.min'),
          maxBtn = $('.max'),
          range_min = $('.range_min'),
          range_max = $('.range_max'),
          minVal = parseInt($(minBtn).val()),
          maxVal = parseInt($(maxBtn).val()),
          origin = $(this).context.className;

        if (origin === 'min' && minVal > maxVal - 5) {
          $(minBtn).val(maxVal - 5);
        }
        var minVal = parseInt($(minBtn).val());
        $(range_min).html(addSeperator(minVal * 1));
        $('#range__from').text(addSeperator(minVal * 1))
        if (origin === 'max' && maxVal - 5 < minVal) {
          $(maxBtn).val(1 + minVal);
        }
        var maxVal = parseInt($(maxBtn).val());
        $(range_max).html(addSeperator(maxVal * 1));
        $('#range__to').text(addSeperator(maxVal * 1))
        elem.css("display", "block");;
      }

      $('.rangeslider input[type="range"]').on('input', rangeInputChangeEventHandler);
    })();

$(function () {
  $('.w300').select2();
});


$(function drawSector() {
  var activeBorder = $("#activeBorder");
  var prec = activeBorder.children().children().text();
  if (prec > 100)
    prec = 100;
  var deg = prec * 3.6;
  if (deg <= 180) {
    activeBorder.css('background-image', 'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
  }
  else {
    activeBorder.css('background-image', 'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #d2d4d8 50%, transparent 50%)');
  }
  var activeBorder2 = $("#activeBorder2");
  var prec2 = activeBorder2.children().children().text();
  if (prec2 > 100)
    prec2 = 100;
  var deg2 = prec2 * 3.6;
  if (deg2 <= 180) {
    activeBorder2.css('background-image', 'linear-gradient(' + (90 + deg2) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
  }
  else {
    activeBorder2.css('background-image', 'linear-gradient(' + (deg2 - 90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #d2d4d8 50%, transparent 50%)');
  }
  var activeBorder3 = $("#activeBorder3");
  var prec3 = activeBorder3.children().children().text();
  if (prec3 > 100)
    prec3 = 100;
  var deg3 = prec3 * 3.6;
  if (deg3 <= 180) {
    activeBorder3.css('background-image', 'linear-gradient(' + (90 + deg3) + 'deg, transparent 50%, #d2d4d8 50%),linear-gradient(90deg, #d2d4d8 50%, transparent 50%)');
  }
  else {
    activeBorder3.css('background-image', 'linear-gradient(' + (deg3 - 90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #d2d4d8 50%, transparent 50%)');
  }
});

(function () {
  var currentTab = 0;
  var nextBtn = document.getElementById("first")
  var currBtn = document.getElementById("second")
  var prevBtn = document.getElementById("third")
  nextBtn.addEventListener("click", function () { nextPrev(1) })
  currBtn.addEventListener("click", function () { nextPrev(0) })
  prevBtn.addEventListener("click", function () { nextPrev(2) })

  function showTab(n) {
    var x = document.getElementsByClassName("tab");
    console.log(n)
    x[n].style.display = "block";
  }

  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = n;
    if (currentTab >= x.length) {
      return false;
    }
    showTab(currentTab);
  }
  showTab(currentTab);
}());


var header = document.getElementById("buttons");
var btns = header.getElementsByClassName("btn-tab");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(current)
  });
}