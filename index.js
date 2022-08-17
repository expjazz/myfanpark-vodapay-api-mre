
const getData = async (endpoint = 'https://app.starsona.com/api/v2/partner/partner_config/') => {
  const p = document.getElementById('result')
  try {
    const res = await axios.get(endpoint, {
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

getData('https://app.starsona.com/api/v1/config/')
getData('https://app.starsona.com/api/v2/user/user_details/expeditoandrade67/get_details/?entity=MYFANPARK-US-1')
getData('https://app.starsona.com/api/v2/request/featured_videos/?user_id=expeditoandrade67&limit=20&offset=0')
getData('https://app.starsona.com/api/v2/fun_stuff/celebrity_fun_stuff/expeditoandrade67')
getData('https://app.starsona.com/api/v2/request/reactions_full_listing/expeditoandrade67?limit=10&offset=0')
getData('https://app.starsona.com/api/v2/user/similar_stars/expeditoandrade67?limit=10&offset=0')
getData('https://app.starsona.com/api/v2/promotions/celeb_promo_templates/?vanity=expeditoandrade67')
getData('https://app.starsona.com/api/v2/social_media/social_media_list/expeditoandrade67')
getData('https://app.starsona.com/api/v2/products/celebrity_product/expeditoandrade67')
getData('https://app.starsona.com/api/v2/user/top_products/expeditoandrade67')