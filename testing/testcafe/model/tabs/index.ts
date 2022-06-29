import { WidgetName } from '../../helpers/createWidget';
import Widget from '../internal/widget';
import TabItem from './item';

const CLASS = {
  item: 'dx-tab',
};
export default class Tabs extends Widget {
  itemElements: Selector;

  constructor(id: string) {
    super(id);

    this.itemElements = this.element.find(`.${CLASS.item}`);
  }

  // eslint-disable-next-line class-methods-use-this
  getName(): WidgetName { return 'dxTabs'; }

  getItem(index = 0): TabItem {
    return new TabItem(this.itemElements.nth(index));
  }
}
