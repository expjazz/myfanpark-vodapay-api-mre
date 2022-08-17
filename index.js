
const getData = async () => {
  const p = document.getElementById('result')
  try {
    const res = await axios.get('https://app.starsona.com/api/v2/partner/partner_config/', {
      headers: {
        device: 'web',
        'Content-Type': 'application/json',
      }
    })
    if (res && res.data) {
      p.innerText = "Api call loaded"
    }
  } catch {
    p.innerText = "Api call failed"
  }
}

getData()