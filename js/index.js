const form = document.querySelector("form");

const addEmail = async (e) => {
  e.preventDefault();

  const doc = {
    email: form.email.value
  }

  if (doc.email != ""){
    await fetch('http://localhost:3000/emails', {
      method: 'POST',
      body: JSON.stringify(doc),
      headers: {'Content-Type':'application/json'}
    });
    window.location.replace('/index.html');
  }


}

form.addEventListener('submit', addEmail);