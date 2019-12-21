window.onload = () => {
  $.get('/api/users', (data, status) => {
    console.log(data);
  })
    .then(r => {
      for (let i = 0; i < r.length; i++) {
        let row = $('<tr>');
        let col1 = $('<td>');
        let col2 = $('<td>');
        col1.text(i + 1);
        col2.text(r[i].username);
        $('tbody').append(row, col1, col2);
      }
    })
    .catch(err => {
      throw err;
    });
};
