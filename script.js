window.addEventListener('load',carrega);

function carrega(){
    document.getElementById('name').addEventListener('blur', leave);
    document.getElementById('senha').addEventListener('blur', leave);
    document.getElementById('email').addEventListener('blur', leave);   
}
function leave(){
    if(this.value != ''){
        this.offsetParent.className += " ativo";
    }else{
        this.offsetParent.className = 'box';
    }
}

function inputSHOW(_show){
    if(_show){
        document.getElementById('name').offsetParent.className += " ativo";
        document.getElementById('senha').offsetParent.className += " ativo";
        document.getElementById('email').offsetParent.className += " ativo";
        document.getElementById('btn-deletar').style.display = 'block';
    }else{
        
        document.getElementById('name').offsetParent.className = 'box';
        document.getElementById('senha').offsetParent.className = 'box';
        document.getElementById('email').offsetParent.className = 'box';
        //document.getElementById('btn-deletar').style.display = 'none';
    }
}

function limpaCampo(){
    
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('email').value = '';
}