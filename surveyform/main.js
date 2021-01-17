function onSurveySubmit(e) {
  e.preventDefault();
  console.log('Prevented default behavior');
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});