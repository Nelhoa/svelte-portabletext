import { SvelteComponent } from "svelte";
import type { ToolkitPortableTextList } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        indexInParent: number;
        node: ToolkitPortableTextList;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RenderListProps = typeof __propDef.props;
export type RenderListEvents = typeof __propDef.events;
export type RenderListSlots = typeof __propDef.slots;
export default class RenderList extends SvelteComponent<RenderListProps, RenderListEvents, RenderListSlots> {
}
export {};
