const cepRegex = /^[0-9]{8}$/;

async function getAddress(postalCode) {
    let logradouro = document.getElementById('logradouro')
    let bairro = document.getElementById('bairro')
    let cep = document.getElementById('cep')
    let cidade = document.getElementById('cidade')
    let estado = document.getElementById('estado')
    const response = await fetch(`https://api.postmon.com.br/v1/cep/${postalCode}`);
    const data = await response.json();
        return data;
}

    function procurar(){
        let user= document.getElementById('usuario').value
        if (!cepRegex.test(user.trim().replace(/-/g, ''))){
            alert("CEP em Formato Inválido, tente XXXXXXXX")
            logradouro.value =  ''
            bairro.value =  ''
            cep.value =  ''
            cidade.value = ''
            estado.value =  ''
            areaKm.value = ''
            document.getElementById('usuario').value =  ''
        } else {
            getAddress(user).then(data => {
                logradouro.value =  data.logradouro
                bairro.value =  data.bairro
                cep.value =  data.cep 
                cidade.value =  data.cidade
                estado.value =  data.estado
            console.log(data);
        });
    }
}
