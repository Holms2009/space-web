import cartIcon from '../../assets/images/cart.svg';
import userIcon from '../../assets/images/user.svg';
import serversIcon from '../../assets/images/servers.svg';
import dataBasesIcon from '../../assets/images/data_bases.svg';
import ipAdressesIcon from '../../assets/images/ip_adresses.svg';
import balansersIcon from '../../assets/images/balansers.svg';
import backupsIcon from '../../assets/images/backups.svg';
import monitoringIcon from '../../assets/images/monitoring.svg';
import domensIcon from '../../assets/images/domens.svg';
import sslIcon from '../../assets/images/ssl.svg';
import shopIcon from '../../assets/images/shop.svg';
import seoIcon from '../../assets/images/seo.svg';
import supportIcon from '../../assets/images/support.svg';
import ideaIcon from '../../assets/images/idea.svg';

export const menu = [
  [
    { name: 'Заказать VPS', icon: cartIcon, submenu: null },
    { name: 'Аккаунт', icon: userIcon, submenu: [] }
  ],
  [
    { name: 'Серверы', icon: serversIcon, submenu: [] },
    { name: 'Базы данных', icon: dataBasesIcon, submenu: null },
    { name: 'IP-адреса', icon: ipAdressesIcon, submenu: null },
    { name: 'Балансировщики', icon: balansersIcon, submenu: null },
    { name: 'Облачные бэкапы', icon: backupsIcon, submenu: null }
  ],
  [
    { name: 'Мониторинг', icon: monitoringIcon, submenu: null },
    { name: 'Домены', icon: domensIcon, submenu: [] },
    { name: 'SSL', icon: sslIcon, submenu: null },
    { name: 'Магазин', icon: shopIcon, submenu: null },
    { name: 'SEO и реклама', icon: seoIcon, submenu: null }
  ],
  [
    { name: 'Поддержка', icon: supportIcon, submenu: null },
    { name: 'Есть идея', icon: ideaIcon, submenu: null },
  ],
]