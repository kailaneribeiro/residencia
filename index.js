const prompt = require('prompt-sync')();

const listarResidencias = require('./listar');
const adicionarResidencia = require('./adicionar');
const atualizarResidencia = require('./atualizar');
const removerResidencia = require('./excluir');

function menu(){
    console.log(`
    1. Listar residencias
    2. adicionar residencias
    3. atualizar residencia
    4. excluir residencia 
    5. sair 
    `)
    
let opção = prompt('Escolha uma opção: ')
let index;
    switch(opção){
        case '1':
            listarResidencias();
            menu();
            break;
        case '2':
            const bairro = prompt('bairro: ');
            const rua = prompt('Rua: ');
            const numero = prompt('Numero: ');
            const moradores = prompt('Morador: ');
            adicionarResidencia({ bairro, rua, numero, moradores });
            console.log('Residencia adiciionada com sucesso!');
            menu();
            break;
        case '3':
            listarResidencias();
            index = prompt('qual elemento deseja: ') - 1
            const novoBairro = prompt('Novo bairro: ');
            const novaRua = prompt('Nova rua: ');
            const novoNumero = prompt('Novo numero: ');
            const novosMoradores = prompt('Novos moradores: ');
            atualizarResidencia(index,{ bairro: novoBairro, rua: novaRua, numero: novoNumero, moradores: novosMoradores})
            console.log('Residencia atualizada com sucesso!')
            menu()
            break
        case '4':
            index = parseInt(prompt('Número da Residencia que deseja remover: ')) - 1;
            removerResidencia(index);
            console.log('Residencia removido com sucesso!');
            menu();
        break;
        case '5':
            break;
        default:
            console.log('Opção inválida!');
            menu();
    }
}

menu()


            


        



