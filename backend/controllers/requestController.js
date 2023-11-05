const getAll = async (req, res) => {
  const data = []
  for (i = 3; i < 16; i++) {
     const response = await fetch(`https://rumilog.kintone.com/k/v1/record.json?app=3&id=${i}`, {
      method: 'GET', // The method is GET
      headers: {
        'X-Cybozu-API-Token': process.env.KINTONE_TOKEN // Setting the header with your API token
      }
    })
    const jsonResponse = await response.json()
    data.push({
      id: jsonResponse.record.Record_number.value,
      name: jsonResponse.record.Drop_down.value,
      definition: jsonResponse.record.Text.value,
      phonetic: jsonResponse.record.Drop_down_0.value
    })
  }
  res.status(200).json(data)
}

module.exports = {getAll}