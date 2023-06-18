import { Button } from "./interface";

export class WinButton implements Button {
  paint() {
    return "Windows Button rendered";
  }
}
export class WinCheckbox implements Button {
  paint() {
    return "Windows Checkbox rendered";
  }
}

export class MacButton implements Button {
  paint() {
    return "Mac Button rendered";
  }
}
export class MacCheckbox implements Button {
  paint() {
    return "Mac Checkbox rendered";
  }
}
