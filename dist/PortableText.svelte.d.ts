import { SvelteComponent } from "svelte";
import type { InputValue, PortableTextSvelteContext } from './ptTypes';
import type { MissingComponentHandler, PortableTextComponents } from './rendererTypes';
declare const __propDef: {
    props: {
        value?: InputValue | undefined;
        /**
           * Svelte components used to render portable text.
           * This is an object with user-defined components merged with native ones.
           */ components: PortableTextComponents;
        /**
           * User-defined data context, as passed to the `<PortableText>` component.
           */ context?: PortableTextSvelteContext | undefined;
        /**
           * Function to call when encountering unknown unknown types, eg blocks, marks,
           * block style, list styles without an associated Svelte component.
           *
           * Will print a warning message to the console by default.
           * Pass `false` to disable.
           */ onMissingComponent?: boolean | MissingComponentHandler | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PortableTextProps = typeof __propDef.props;
export type PortableTextEvents = typeof __propDef.events;
export type PortableTextSlots = typeof __propDef.slots;
export default class PortableText extends SvelteComponent<PortableTextProps, PortableTextEvents, PortableTextSlots> {
}
export {};
