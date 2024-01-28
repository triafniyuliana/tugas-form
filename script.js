document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = document.getElementById('nama').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('pesan').value;
  
      if (!nama || !email || !pesan) {
          alert('Please fill out all the required fields.');
          return;
      }
  
      document.getElementById('thankYouMessage').style.display = 'block';
  });