import { SvelteComponent } from "svelte";
import type { ListComponentProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        portableText: ListComponentProps;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DefaultListProps = typeof __propDef.props;
export type DefaultListEvents = typeof __propDef.events;
export type DefaultListSlots = typeof __propDef.slots;
export default class DefaultList extends SvelteComponent<DefaultListProps, DefaultListEvents, DefaultListSlots> {
}
export {};
