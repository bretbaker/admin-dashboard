document.getElementById('save-new-user').addEventListener('click', e => {
  e.preventDefault();
  let newUser = {
    username: document.getElementById('register-username').value,
    password: document.getElementById('register-password').value,
    role: 'Manager'
  };
  console.log(newUser);

  $.ajax('/api/users/register/manager', {
    method: 'POST',
    data: newUser
  })
    .then(() => {
      console.log('success');
    })
    .then(() => {
      location.reload();
    })
    .catch(err => {
      throw err;
    });
});
