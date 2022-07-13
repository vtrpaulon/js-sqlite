window.addEventListener('load', carregar);

  var db = openDatabase("myDB","1.0","Banco exemplo", 2 * 1024 * 1024);
db.transaction(function(tx){
  tx.executeSql("CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, nome TEXT, senha TEXT, email TEXT");
});
  mostrar();

function carregar(){
  document.getElementById('btn-salvar').addEventListener('click', salvar);
  document.getElementById('btn-deletar'). addEventListener('click',deletar);

}

function salvar(){
  var id = document.getElementById('id').value;
  var nome = document.getElementById('name').value;
  var senha = document.getElementById('senha').value;
  var email = document.getElementById('email').value;

  db.transaction(function(tx){
    if(id){
      tx.executeSql('UPDATE mytable SET nome=?, senha=?, email=? WHERE id=?', [nome, senha, email, id],null);
    }else{
      tx.executeSql('INSERT INTO myTable (nome, senha, email) VALUES (?,?,?)',[nome, senha, email]);
    }
  });  
  mostrar();
  limpaCampo();
  inputShow(false);
}

function mostrar(){
  var table = document.getElementById('tbody-register');

  db.transaction(function(tx){
    tx.executeSql('SELECT * myTable', [], function(tx, resultado){
      var rows = resultado.rows;
      var tr = '';
      for(var i = 0; i < rows.length; i++){
        tr += '<tr>';
        tr += '<td onClick="atualizar('+ rows[i].id +')">' + rows[i].nome + '</td>';
        tr += '<td>' + rows[i].senha + '</td>';
        tr += '<td>' + rows[i].email + '</td>';
        tr += '</tr>';
      }
      table.innerHTML = tr;
    },null);
  });  
}
function atualizar(_id) {
  var id = document.getElementById('id');
  var nome = document.getElementById('name');
  var senha = document.getElementById('senha');
  var email = document.getElementById('email');

  id.value = _id;

  db.transaction(function(tx){
    tx.executeSql('SELECT * FROM myTable WHERE id=?', [_id], function(tx, resultado){
      var rows = resultado.rows[0];

      nome.value = rows.nome;
      senha.value = rows.senha;
      email.value = rows.email;
    });
  });
}

function deletar(){
  var id = document.getElementById(id).value;
  
  db.transaction(function(tx){
    tx.executeSql('DELETE FROM myTable WHERE id=?',[id]);
  });
  mostrar();
  limpaCampo();
  inputShow(false);
}