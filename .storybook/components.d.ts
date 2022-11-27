import type {JSX as StencilJSX} from "../src/components";

declare global {
    namespace JSX{
        interface IntrinsicElements extends StencilJSX.IntrinsicElements {}
    }
}