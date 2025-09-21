const buildMockUser = (client, pass) => {
  return {
    name: client.name,
    email: client.email,
    password: pass,
    accountNumber: client.accountNumber,
    balance: client.balance,
    logged: client.status
  }
}
// Após pegar objeto client e uma senha, exporta um “mock” de cliente
module.exports = { buildMockUser }