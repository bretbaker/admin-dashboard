document.getElementById('register-btn').addEventListener('click', e => {
  e.preventDefault();
  window.location.href = 'dashboard.html';
  // let newUser = {
  //   username: document.getElementById('register-username').value,
  //   password: document.getElementById('register-password').value,
  //   role: 'Manager'
  // };
  // console.log(newUser);

  // $.ajax('/api/users/register/manager', {
  //   method: 'POST',
  //   data: newUser
  // })
  //   .then(() => {
  //     console.log('success');
  //   })
  //   .then(() => {
  //     window.location.href = 'dashboard.html';
  //   })
  //   .catch(err => {
  //     throw err;
  //   });
});
