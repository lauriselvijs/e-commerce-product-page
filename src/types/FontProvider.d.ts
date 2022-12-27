import { Container } from "./Container";

export interface FontProvider {
  fontFamilyName: string;
  fontWeight: { [key: string]: string };
  children: Container["children"];
}
