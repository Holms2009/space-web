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