function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
}

function autofill(info) {
  var inputs = document.querySelectorAll('input:not([type=submit]):not([type=hidden])');
  inputs.forEach(function(element) {
    // get the previous sibling, use that to find the field label
    var prev_sibling = element.previousElementSibling;

    // use field label to query dict for personal info
    if (prev_sibling) {
      var label_text = prev_sibling.innerHTML.toLowerCase();

      // fill in info
      var value = info[label_text];
      element.value = value;

      // console.log(label_text, value);
    }
  });

  // setting dropdown values
  var selects = document.querySelectorAll('select');
  selects.forEach(function(element) {

    // get the previous sibling, use that to find the field label
    var prev_sibling = element.previousElementSibling;

    // use field label to query dict for personal info
    if (prev_sibling) {
      // check if prev sibling is a select
      if (prev_sibling.tagName.toLowerCase() === 'select') {
        var value = info['exp_year'];
        setSelectedValue(element, value);
      }
      else {
        var label_text = prev_sibling.innerHTML.toLowerCase();
        if (label_text === 'exp. date') {
          var value = info['exp_month'];
        }
        else {
          var value = info[label_text];
        }
        // fill in info
        setSelectedValue(element, value);

        //  console.log(label_text, value);
      }
    }
  })

  // pressing checkbox
  try {
    var terms_btn = d.getElementById('order_terms').click();
  }
  catch(err) {
    console.log("error filling out checkbox");
  }
}

function autofillOnClick(key, info) {
  document.addEventListener("keyup", function(e) {
    if (e.key == key) {
      autofill(info);
    }
  });
}