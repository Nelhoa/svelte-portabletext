import { SvelteComponent } from "svelte";
import type { ToolkitNestedPortableTextSpan } from '@portabletext/toolkit';
import type { PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        node: ToolkitNestedPortableTextSpan;
        parentBlock: PortableTextBlock;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RenderSpanProps = typeof __propDef.props;
export type RenderSpanEvents = typeof __propDef.events;
export type RenderSpanSlots = typeof __propDef.slots;
export default class RenderSpan extends SvelteComponent<RenderSpanProps, RenderSpanEvents, RenderSpanSlots> {
}
export {};
