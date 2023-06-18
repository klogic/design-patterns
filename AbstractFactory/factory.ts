import { MacButton, MacCheckbox, WinButton, WinCheckbox } from "./concret";
import { Button, CheckBox, GUIFactory } from "./interface";

export class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckBox(): CheckBox {
    return new WinCheckbox();
  }
}

export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckBox(): CheckBox {
    return new MacCheckbox();
  }
}
