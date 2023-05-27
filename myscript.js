function generateCode() {
    var name = document.getElementById('nameInput').value;
    
    if (name.trim() === '') {
      alert('Please enter the platform you want to reset the password.');
      return;
    }
    
    var code = generateRandomCode();
    var codeElement = document.getElementById('code');
    codeElement.textContent = name + ' - ' + code;
  }
  
  function generateRandomCode() {
    var code = '';
    for (var i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }
  