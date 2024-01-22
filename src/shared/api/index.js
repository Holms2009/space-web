export async function fetchPlans() {
  return await fetch('https://api.sweb.ru/notAuthorized/', {
    method: 'POST',
    body: '{"jsonrpc":"2.0","method":"vpsOsConfig","params":{}}'
  })
    .then((res) => res.json())
    .then((data) => data.result)
}