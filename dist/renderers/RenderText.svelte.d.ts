import { SvelteComponent } from "svelte";
import type { ToolkitTextNode } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        node: ToolkitTextNode;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RenderTextProps = typeof __propDef.props;
export type RenderTextEvents = typeof __propDef.events;
export type RenderTextSlots = typeof __propDef.slots;
export default class RenderText extends SvelteComponent<RenderTextProps, RenderTextEvents, RenderTextSlots> {
}
export {};
