import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(Element, EventAggregator)
export class ListPresenterCustomElement {
  list: any[] = [];

  constructor(private element: Element,
              private ea: EventAggregator) {
    this.ea.subscribe('list-updated', updatedList => {
      // this.list = [...updatedList];
      this.list.splice(0, this.list.length);
      updatedList.forEach(listItem => this.list.push(listItem));
    });
  }
}
