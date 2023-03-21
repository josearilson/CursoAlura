//TemplateLiteral ou TemplateString

const nome = "Arilson"
const idade = 2023 - 1987
const cidadeDeNascimento = "Minas Gerais"
const apresentacao =
    "meu nome é "
    + nome + " e minha idade é "
    + idade + " e meu estado de Nascimento é "
    + cidadeDeNascimento;



const TemplateString =
    `meu nome é ${nome} e minha idade é ${idade} e meu estado de Nascimento é ${cidadeDeNascimento} `

console.log(apresentacao)
console.log(TemplateString)