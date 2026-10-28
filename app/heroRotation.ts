export type HeroPlayback = {enabled:boolean; reduced:boolean};

/** One cancellable clock; every permitted restart receives the full interval. */
export function createHeroRotation(root:HTMLElement, onScene:(scene:number)=>void, onPlayback:(state:HeroPlayback)=>void){
 const doc=root.ownerDocument;
 const win=doc.defaultView!;
 const motion=win.matchMedia("(prefers-reduced-motion: reduce)");
 let reduced=motion.matches;
 let enabled=!reduced;
 let scene=0;
 let disposed=false;
 let timer:number|undefined;
 let hovered=win.matchMedia("(hover: hover)").matches&&root.matches(":hover");
 const visible=()=>{
  const rect=root.getBoundingClientRect();
  const header=doc.querySelector("header")?.getBoundingClientRect().bottom??0;
  return rect.bottom>Math.max(0,header)&&rect.top<win.innerHeight&&rect.right>0&&rect.left<win.innerWidth;
 };
 let inView=visible();
 let active=doc.visibilityState==="visible";
 const allowed=()=>!disposed&&enabled&&!reduced&&!motion.matches&&!hovered&&inView&&active&&doc.visibilityState==="visible"&&visible();
 const cancel=()=>{if(timer!==undefined){win.clearTimeout(timer);timer=undefined;}};
 const schedule=()=>{
  cancel();
  if(allowed())timer=win.setTimeout(()=>{
   timer=undefined;
   if(!allowed())return;
   scene=(scene+1)%3;
   onScene(scene);
   schedule();
  },8000);
 };
 const publish=()=>onPlayback({enabled,reduced});
 const pause=()=>{enabled=false;cancel();publish();};
 const enter=(event:PointerEvent)=>{if(event.pointerType==="mouse"){hovered=true;schedule();}};
 const leave=(event:PointerEvent)=>{if(event.pointerType==="mouse"){hovered=false;schedule();}};
 // Pointer focus must not invert the meaning of a pending Pause click.
 // Keyboard focus pauses persistently; Resume itself may explicitly enable it again.
 const focus=(event:FocusEvent)=>{
  const target=event.target as HTMLElement;
  if(target.matches("a,button,[tabindex]")&&target.matches(":focus-visible"))pause();
 };
 const visibility=()=>{
  const next=doc.visibilityState==="visible";
  if(next!==active){active=next;schedule();}
 };
 const viewport=()=>{const next=visible();if(next!==inView){inView=next;schedule();}};
 const preference=()=>{reduced=motion.matches;if(reduced)enabled=false;publish();schedule();};
 root.addEventListener("pointerenter",enter);
 root.addEventListener("pointerleave",leave);
 root.addEventListener("focusin",focus);
 doc.addEventListener("visibilitychange",visibility);
 win.addEventListener("scroll",viewport,{passive:true});
 win.addEventListener("resize",viewport);
 motion.addEventListener("change",preference);
 publish();
 schedule();
 return {
  select(index:number){if(disposed)return;scene=index;pause();onScene(scene);},
  toggle(){if(disposed||reduced)return;enabled=!enabled;publish();schedule();},
  dispose(){
   disposed=true;cancel();
   root.removeEventListener("pointerenter",enter);
   root.removeEventListener("pointerleave",leave);
   root.removeEventListener("focusin",focus);
   doc.removeEventListener("visibilitychange",visibility);
   win.removeEventListener("scroll",viewport);
   win.removeEventListener("resize",viewport);
   motion.removeEventListener("change",preference);
  },
 };
}
