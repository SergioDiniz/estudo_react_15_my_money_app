const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/my-money')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor ue o limite mínimo de '{MIN}."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior ue o limite mínimo de '{MAX}."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."