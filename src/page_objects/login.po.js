const helper = require('protractor-helper');

const usuarioInput = $('[placeholder="Usuário"]');
const senhaInput = $('[placeholder="Senha"]');
const entrarButton = element(by.cssContainingText('button', 'Entrar'));

const acessar = () => {
  browser.get('login');
};

const realizarlogin = (usuario, senha) => {
  helper.fillFieldWithText(usuarioInput, usuario);
  helper.fillFieldWithText(senhaInput, senha);
  helper.click(entrarButton);
  helper.waitForElementNotToBePresent(entrarButton);
};

module.exports = {
  acessar,
  realizarlogin
};
