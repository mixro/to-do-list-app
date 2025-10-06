// declaration.d.ts

// This tells TypeScript that importing any image file results in an asset module.
// The `any` type here will resolve to a number (the asset ID) at runtime,
// which is what <Image source={...} /> expects.
declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}