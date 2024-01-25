import cartIcon from '../../assets/images/cart.svg';
import userIcon from '../../assets/images/user.svg';
import profile from '../../assets/images/profile.svg';
import finances from '../../assets/images/finances.svg';
import serveces from '../../assets/images/serveces.svg';
import serversIcon from '../../assets/images/servers.svg';
import dataBasesIcon from '../../assets/images/data_bases.svg';
import ipAdressesIcon from '../../assets/images/ip_adresses.svg';
import balancersIcon from '../../assets/images/balansers.svg';
import backupsIcon from '../../assets/images/backups.svg';
import monitoringIcon from '../../assets/images/monitoring.svg';
import domensIcon from '../../assets/images/domens.svg';
import sslIcon from '../../assets/images/ssl.svg';
import shopIcon from '../../assets/images/shop.svg';
import seoIcon from '../../assets/images/seo.svg';
import supportIcon from '../../assets/images/support.svg';
import ideaIcon from '../../assets/images/idea.svg';

export function getMenuData() {
  const menu = [
    [
      { id: 'vps', name: 'Заказать VPS', icon: cartIcon, submenu: null },
      {
        id: 'account', name: 'Аккаунт', icon: userIcon, submenu: [
          { name: 'Профиль', type: 'menu', icon: profile },
          { name: 'Финансы', type: 'menu', icon: finances },
          { name: 'Услуги', type: 'menu', icon: serveces },
        ]
      }
    ],
    [
      {
        id: 'servers', name: 'Серверы', icon: serversIcon, submenu: [
          { name: 'username_vps_1', type: 'monitor', icon: 'active' },
          { name: 'username_vps_2', type: 'monitor', icon: 'active' },
          { name: 'username_vps_3', type: 'monitor', icon: 'inactive' }
        ]
      },
      { id: 'database', name: 'Базы данных', icon: dataBasesIcon, submenu: null },
      { id: 'ip_addresses', name: 'IP-адреса', icon: ipAdressesIcon, submenu: null },
      { id: 'balancers', name: 'Балансировщики', icon: balancersIcon, submenu: null },
      { id: 'backups', name: 'Облачные бэкапы', icon: backupsIcon, submenu: null }
    ],
    [
      { id: 'monitoring', name: 'Мониторинг', icon: monitoringIcon, submenu: null },
      { id: 'domains', name: 'Домены', icon: domensIcon, submenu: [] },
      { id: 'ssl', name: 'SSL', icon: sslIcon, submenu: null },
      { id: 'shop', name: 'Магазин', icon: shopIcon, submenu: null },
      { id: 'seo', name: 'SEO и реклама', icon: seoIcon, submenu: null }
    ],
    [
      { id: 'support', name: 'Поддержка', icon: supportIcon, submenu: null },
      { id: 'idea', name: 'Есть идея', icon: ideaIcon, submenu: null },
    ],
  ]

  return menu;
}

