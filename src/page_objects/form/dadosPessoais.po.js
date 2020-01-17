const helper = require('protractor-helper');

const nomeInput = $('#input-name');
const cpfCnpjInput = $('#input-document');
const telefoneInput = $('#input-phone');
const cepInput = $('#input-cep');
const cidadeInput = $('#input-city');
const ruaInput = $('#input-street');
const numeroInput = $('#input-number');

const preencherDadosPessoais = dadosPessoais => {
  helper.fillFieldWithText(nomeInput, dadosPessoais.nome);
  helper.fillFieldWithText(cpfCnpjInput, dadosPessoais.cpfCnpj);
  helper.fillFieldWithText(telefoneInput, dadosPessoais.telefone);
  helper.fillFieldWithText(cepInput, dadosPessoais.cep);
  helper.fillFieldWithText(cidadeInput, dadosPessoais.cidade);
  helper.fillFieldWithText(ruaInput, dadosPessoais.rua);
  helper.fillFieldWithText(numeroInput, dadosPessoais.numero);
};

module.exports = {
  preencherDadosPessoais
};
