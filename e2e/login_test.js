Feature('login');

Scenario('usuário obrigatório', ({ I }) => {
    I.login('', 'senha123')
    I.toast('Informe o seu nome de usuário!')
});

Scenario('senha obrigatória', ({ I }) => {
    I.login('qa', '')
    I.toast('Informe a sua senha secreta!')
})

Scenario('usuário não existe', ({ I }) => {
    I.login('teste', 'teste')
    I.toast('Oops! Credenciais inválidas :(')
})

Scenario('senha incorreta', ({ I }) => {
    I.login('qa', 'teste')
    I.toast('Oops! Credenciais inválidas :(')
})

Scenario('com sucesso', ({ I }) => {
    I.login('qa', 'xperience')
    I.modal('Suas credenciais são válidas :)')
})