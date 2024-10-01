import { SvelteComponent } from "svelte";
import type { PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        node: PortableTextBlock;
        indexInParent: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RenderBlockProps = typeof __propDef.props;
export type RenderBlockEvents = typeof __propDef.events;
export type RenderBlockSlots = typeof __propDef.slots;
export default class RenderBlock extends SvelteComponent<RenderBlockProps, RenderBlockEvents, RenderBlockSlots> {
}
export {};
