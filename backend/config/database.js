const mongoose = require('mongoose')

module.exports = mongoose.connect(`mongodb://db_finance_api:BwTlYVJH2Diq!MR5kj@ds019839.mlab.com:19839/db_finance`)

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' para o atributo '{PATH}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' para o atributo '{PATH}' informado é menor que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE} não é um valor permitido para o atributo '{PATH}'"