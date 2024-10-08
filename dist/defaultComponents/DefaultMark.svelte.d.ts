import { SvelteComponent } from "svelte";
import type { MarkComponentProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        portableText: MarkComponentProps;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DefaultMarkProps = typeof __propDef.props;
export type DefaultMarkEvents = typeof __propDef.events;
export type DefaultMarkSlots = typeof __propDef.slots;
export default class DefaultMark extends SvelteComponent<DefaultMarkProps, DefaultMarkEvents, DefaultMarkSlots> {
}
export {};
