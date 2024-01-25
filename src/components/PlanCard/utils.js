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

export function filterAvailablePanels(planId, distributives, panels) {
  const result = [];

  panels.forEach((panel) => {
    const isAvailable =
      distributives.filter((item) => item.panel === panel.id)
        .some((item) => item.availablePlanIds.includes(planId));

    if (isAvailable) result.push(panel);
  })

  return result;
}

export function filterAvailableOs(planId, distributives, osList) {
  const result = [];

  osList.forEach((os) => {
    const isAvailable =
      distributives.filter((item) => item.os === os.id)
        .some((item) => item.availablePlanIds.includes(planId));

    if (isAvailable) result.push(os);
  })

  return result;
}

export function filterOsByPanel(panel, osList, distributives) {
  const result = [];
  const filteredDistributives = distributives.filter((item) => item.panel === panel.id);

  osList.forEach((os) => {
    if (filteredDistributives.some((item) => item.os === os.id)) result.push(os);
  })

  return result;
}

export function getPanelSelectOptions(data) {
  return data.map((item) => ({ name: item.description, id: item.id }));
}

export function getOsSelectOptions(data) {
  return data.map((item) => ({ name: item.description, id: item.id }));
}

export function getDCOptions(data) {
  return data.map((item) => ({ name: item.location, id: item.name }));
}