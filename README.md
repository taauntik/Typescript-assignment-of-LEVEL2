## What are some differences between interfaces and types in TypeScript?
`interface` and `type` are both used for defining types. `type` is more flexible than `interface`
because `interface` is only used for defining types for objects whereas `type` can be used for defining
unions, intersections and more complex types. And `interface` can be delcared multiple times, but you cannot
delcare types multiple times.

## What is the use of the keyof keyword in TypeScript? Provide an example.
The `keyof` keyowrd is used to create union of keys of an object type. For example
```typescript
interface User {
    id    : number;
    name  : string;
    age   : number;
    email : string;
}

type UserKeysUnion = keyof User; // Output : "id" | "name" | "age" | "email"
```
