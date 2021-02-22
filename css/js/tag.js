const colors = {
  p:'#388e3c', 
  div: '#e53935',
  span: '#1565c0',
  section: '#f67809',
  ul: '#5e35b1',
  ol: 'fbc02d',
  header: '#d81b60',
  nav: '#64dd17',
  main: '#656849',
  footer: '#185247',
  form: '#985874',
  body: '#656565',
  padrao: '#616161',
  get(tag) {
      return this[tag] ? this[tag] : this.padrao
  }
}
 
 
 
 document.querySelectorAll('.tag').forEach((box) => {
  const tagName = box.tagName.toLowerCase();
  box.style.borderColor = colors.get(tagName);

  if (!box.classList.contains("nolabel")) {
    const label = document.createElement("label");
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName;
    box.insertBefore(label, box.childNodes[0]);
  }
});
