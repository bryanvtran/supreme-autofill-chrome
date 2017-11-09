function setInput(element, value) {
  element.focus();
  element.value = value;
  element.blur();
}

function setSelectedValue(selectObj, valueToSet) {
  for (var i = 0; i < selectObj.options.length; i++) {
    if (selectObj.options[i].text== valueToSet) {
      selectObj.focus();
      selectObj.options[i].selected = true;
      selectObj.blur();
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
      if (value){
        setInput(element, value);
      }     

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
        if (value) {
          setSelectedValue(element, value);
        } 
        
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
        if (value) {
          setSelectedValue(element, value);
        } 

        //  console.log(label_text, value);
      }
    }
  })

  // pressing checkbox, may not show as checked
  var checkbox = document.querySelector('#order_terms');
  checkbox.checked = true;

  // showing check
  checkbox.parentElement.classList.add('checked');
}

function autofillOnClick(key, info) {
  document.addEventListener("keyup", function(e) {
    if (e.key == key) {
      autofill(info);
    }
  });
}
