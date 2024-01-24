import { OrderVPS } from "../components/OrderVPS";
import { Placeholder } from "../components/Placeholder";

export function selectSection(sectionId) {
  switch (sectionId) {
    case 'vps':
      return <OrderVPS />
    default:
      return <Placeholder />
  }
}