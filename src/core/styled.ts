export function withProps<A, B>(component: A, properties: B): A & B {
  Object.keys(properties).forEach((key) => {
    (component as any)[key] = (properties as any)[key];
  });
  return component as A & B;
}
