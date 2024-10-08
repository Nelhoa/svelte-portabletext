import { SvelteComponent } from "svelte";
import type { PortableTextBlock } from '@portabletext/types';
import type { GenericNode } from './ptTypes';
import type { GlobalProps } from './rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        options: {
            indexInParent: number;
            node: GenericNode;
            parentBlock?: PortableTextBlock;
            isInline?: boolean;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RenderNodeProps = typeof __propDef.props;
export type RenderNodeEvents = typeof __propDef.events;
export type RenderNodeSlots = typeof __propDef.slots;
export default class RenderNode extends SvelteComponent<RenderNodeProps, RenderNodeEvents, RenderNodeSlots> {
}
export {};
