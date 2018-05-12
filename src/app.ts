import { EventAggregator } from "aurelia-event-aggregator";
import { autoinject } from "aurelia-framework";
import { Person } from "resources/models/person";

@autoinject
export class App {
  message = 'Hello World!';

  constructor(private element: Element,
              private ea: EventAggregator) {
  }

  loadList() {
    this.ea.publish('list-updated', ['James', 'John', 'Robert']);
  }
}
