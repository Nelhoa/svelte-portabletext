import { SvelteComponent } from "svelte";
import type { BlockComponentProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        portableText: BlockComponentProps;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DefaultBlockProps = typeof __propDef.props;
export type DefaultBlockEvents = typeof __propDef.events;
export type DefaultBlockSlots = typeof __propDef.slots;
export default class DefaultBlock extends SvelteComponent<DefaultBlockProps, DefaultBlockEvents, DefaultBlockSlots> {
}
export {};
