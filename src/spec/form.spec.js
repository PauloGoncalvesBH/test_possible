const faker = require('faker/locale/pt_BR');
const gerarCpf = require('gerar-cpf');
const helper = require('protractor-helper');

const form = require('../page_objects/form');
const login = require('../page_objects/login.po');

describe('Cadastro de seguro fictício', () => {
  beforeEach(() => {
    login.acessar();
    login.realizarlogin(browser.params.login.usuario, browser.params.login.senha);
  });

  afterEach(() => browser.driver.manage().deleteAllCookies());

  it('Preenchimento com sucesso do formulário', () => {
    const dadosPessoais = {
      nome: faker.name.firstName(),
      cpfCnpj: gerarCpf(),
      telefone: faker.phone.phoneNumber(),
      cep: faker.random.number({ min: 10000000, max: 99999999, precision: 1 }),
      cidade: faker.address.city(),
      rua: faker.address.streetAddress(),
      numero: faker.random.number({ min: 1, max: 10000, precision: 1 })
    };

    const dadosDoEquipamento = {
      tipoDoEquipamento: faker.commerce.productName(),
      marca: faker.company.companyName(),
      ano: faker.random.number({ min: 1900, max: 2020, precision: 1 }),
      numeroDeSerie: faker.random.number(),
      valorDeMercado: faker.commerce.price()
    };

    form.acessar();
    form.dadosPessoais.preencherDadosPessoais(dadosPessoais);
    form.dadosDoEquipamento.preencherDadosDoEquipamento(dadosDoEquipamento);
    form.salvar();

    helper.waitForTextToBePresentInElement(form.alerta ,'Formulário salvo com sucesso!')
  });
});
