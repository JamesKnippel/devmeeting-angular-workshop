import { CustomElement } from './interfaces';

export const isTruthy = (item: CustomElement) => !!item;

export function el(tagName: string, ...children: CustomElement[]): CustomElement {
  return { tagName, children };
}

export function createElement(node: CustomElement): HTMLElement | Text {
  if (typeof node === 'string') return document.createTextNode(node);

  const el = document.createElement(node.tagName);

  node.children
    .filter(isTruthy)
    .map(createElement)
    .forEach(child => el.appendChild(child));

  return el;
}