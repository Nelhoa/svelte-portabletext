import { SvelteComponent } from "svelte";
import type { ToolkitPortableTextListItem } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        indexInParent: number;
        node: ToolkitPortableTextListItem;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RenderListItemProps = typeof __propDef.props;
export type RenderListItemEvents = typeof __propDef.events;
export type RenderListItemSlots = typeof __propDef.slots;
export default class RenderListItem extends SvelteComponent<RenderListItemProps, RenderListItemEvents, RenderListItemSlots> {
}
export {};
