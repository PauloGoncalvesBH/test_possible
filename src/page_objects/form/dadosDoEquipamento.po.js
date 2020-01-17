const helper = require('protractor-helper');

const tipoDoEquipamentoInput = $('#input-equipment-type');
const marcaInput = $('#input-equipment-brand');
const anoInput = $('#input-equipment-year');
const numeroDeSerieInput = $('#input-equipment-serial');
const valorDeMercadoInput = $('#input-equipment-market-value');

const preencherDadosDoEquipamento = dadosDoEquipamento => {
  helper.fillFieldWithText(tipoDoEquipamentoInput, dadosDoEquipamento.tipoDoEquipamento);
  helper.fillFieldWithText(marcaInput, dadosDoEquipamento.marca);
  helper.fillFieldWithText(anoInput, dadosDoEquipamento.ano);
  helper.fillFieldWithText(numeroDeSerieInput, dadosDoEquipamento.numeroDeSerie);
  helper.fillFieldWithText(valorDeMercadoInput, dadosDoEquipamento.valorDeMercado);
};

module.exports = {
  preencherDadosDoEquipamento
};
