export interface GUIFactory {
  createButton(): Button;
  createCheckBox(): CheckBox;
}

export interface Button {
  paint(): string;
}

export interface CheckBox {
  paint(): string;
}
