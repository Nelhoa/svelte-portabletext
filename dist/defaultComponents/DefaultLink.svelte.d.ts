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
export type DefaultLinkProps = typeof __propDef.props;
export type DefaultLinkEvents = typeof __propDef.events;
export type DefaultLinkSlots = typeof __propDef.slots;
export default class DefaultLink extends SvelteComponent<DefaultLinkProps, DefaultLinkEvents, DefaultLinkSlots> {
}
export {};
