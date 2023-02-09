import { GiftController } from "./Controllers/GiftController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  giftController = new GiftController();
}

window["app"] = new App();
