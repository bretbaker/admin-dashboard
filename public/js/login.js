document.getElementById('login-btn').addEventListener('click', e => {
  e.preventDefault();
  window.location.href = 'dashboard.html';
  // let newUser = {
  //   username: document.getElementById('login-username').value,
  //   password: document.getElementById('login-password').value,
  //   role: 'Manager'
  // };
  // console.log(newUser);

  // $.ajax('/api/users/login', {
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
