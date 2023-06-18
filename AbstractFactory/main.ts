import { MacFactory, WinFactory } from "./factory";
import { Button, CheckBox, GUIFactory } from "./interface";

class Application {
  private factory: GUIFactory;
  private button: Button;
  private checkBox: CheckBox;
  constructor(factory: GUIFactory) {
    this.factory = factory;
  }
  createUI() {
    this.button = this.factory.createButton();
    this.checkBox = this.factory.createCheckBox();
  }
  paint() {
    console.log(this.button.paint());
    console.log(this.checkBox.paint());
  }
}

let applicationCreation;
const platform = "windows";

if (platform === "windows") {
  applicationCreation = new Application(new WinFactory());
} else {
  applicationCreation = new Application(new MacFactory());
}
applicationCreation.createUI();
applicationCreation.paint();
