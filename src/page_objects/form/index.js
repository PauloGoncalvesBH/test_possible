const helper = require('protractor-helper');

const alerta = $('[role=alert');

const acessar = () => {
  browser.get('form');
};

const salvar = () => {
  helper.click(element(by.cssContainingText('button', 'Salvar')));
};

module.exports = {
  acessar,
  alerta,
  dadosDoEquipamento: require('./dadosDoEquipamento.po'),
  dadosPessoais: require('./dadosPessoais.po'),
  salvar
};
