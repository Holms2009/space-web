import nvmeIcon from '../../assets/images/nvme-cat.svg';
import turboIcon from '../../assets/images/turbo-cat.svg';
import hddIcon from '../../assets/images/hdd-cat.svg';

export function getCategoryIcon(slug) {
  switch (slug) {
    case 'nvme':
      return nvmeIcon;
    case 'turbo':
      return turboIcon;
    case 'hdd':
      return hddIcon;
    default:
      return nvmeIcon;
  }
}

export function getCPUFrequency(category) {
  switch (category) {
    case 'nvme':
      return '2.8 ГГц';
    case 'turbo':
      return '5 ГГц';
    case 'hdd':
      return '2.1 ГГц';
    default:
      return '2.8 ГГц'
  }
}

export function getPanelSelectOptions(data) {
  return data.map((item) => ({ name: item.description, id: item.name }));
}

export function getOsSelectOptions(data) {
  return data.map((item) => ({ name: item.description, id: item.name }));
}

export function filterAvailableOs(data, panel) {
  return data.filter((item) => item.panel_type.includes(panel) || (panel.includes('isp') && item.panel_type.includes('isp')));
}

export function getDCOptions(data) {
  return data.map((item) => ({ name: item.location, id: item.name }));
}