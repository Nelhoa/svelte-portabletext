import { SvelteComponent } from "svelte";
import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        node: ArbitraryTypedObject;
        parentBlock: PortableTextBlock;
        indexInParent: number;
        isInline?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RenderCustomBlockProps = typeof __propDef.props;
export type RenderCustomBlockEvents = typeof __propDef.events;
export type RenderCustomBlockSlots = typeof __propDef.slots;
export default class RenderCustomBlock extends SvelteComponent<RenderCustomBlockProps, RenderCustomBlockEvents, RenderCustomBlockSlots> {
}
export {};
