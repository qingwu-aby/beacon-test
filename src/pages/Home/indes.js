// import Qs from 'qs'
import { parse } from 'querystring';
const a = 'screen_width=1680&screen_height=1050&dpr=2&app_version=&platform=unknown&op=impr&tab_id=0&idx=13&p_rec=%7B%22set%22%3A%22sh2%22%2C%22list_id%22%3A%22push_landing__mlp-push-rec-list_AQmXdo-featured%22%2C%22m_goodscat%22%3A%220%22%2C%22org%22%3A%22rec%22%2C%22g%22%3A%220-base%22%2C%22has_fav_today%22%3A0%2C%22bk%22%3A%2289%22%2C%22m%22%3A%22hot%22%2C%22app_name%22%3A%22push_landing%22%2C%22te%22%3A%221587363856114%22%2C%22s%22%3A%223198%22%2C%22t%22%3A%220%22%2C%22pvid%22%3A%22fae63dfa-30f6-4598-b0eb-8bce185b4c93%22%2C%22m_goodsid%22%3A%22%22%2C%22has_odr_pv%22%3A0%2C%22campaign%22%3A%22%22%2C%22request_id%22%3A%2208c29f0f-0047-438c-8c3b-2e37b5784dee%22%2C%22tg1%22%3A%222%22%2C%22ts%22%3A%221587363856042%22%7D&list_id=mlp-push-rec-list_AQmXdo-featured&goods_id=984013131&rec_goods_id=984013131&page_sn=11384&page_el_sn=39009&log_id=15873638634593sju6zv2xmm88ppe&user_id=0&rk_tag=1587363863459i4l083wwgrdj6w8x2920504746&uin=&cookie_fp=XpdJXqPxX0dbnpdqXC_aYj2MgvXLy7taTsOnBGYn&storage_fp=XpdJXqPxXqPylpXJno_XUKe7zp4oeWb6jb45Y5dP&app_id=&time=1587363863459&page_name=mlp_push&page_id=11384_1587363855865_QKpvM0Tpgi&mlp_push_type=1&support_beacon=1';

const b = a.split('&')
console.table(b)
const c = b.map(item => parse(item))
// console.log(c)

export { c }