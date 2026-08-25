import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{t as i}from"./Button-DGi0Yh9b.js";import{t as a}from"./Button-CzExRxz8.js";import{t as o}from"./Card-CG1fCN1q.js";import{t as s}from"./Card-B3rLEjzu.js";import{t as c}from"./ToastViewport-Blou5XQa.js";import{i as l,t as u}from"./Dialog-DxIP1Jy-.js";import{c as d,t as f}from"./Stack-B-ZKhRVg.js";import{i as p,t as m}from"./Link-DmDUmHwG.js";import{j as h,k as g}from"./iframe-DLY82zfR.js";function _({onClose:e}){let t=h();return(0,b.jsxs)(d,{gap:3,children:[(0,b.jsx)(`p`,{children:`This dialog has its own toast viewport. Toasts fired here render inside the dialog, above its overlay.`}),(0,b.jsxs)(d,{direction:`horizontal`,gap:2,wrap:`wrap`,children:[(0,b.jsx)(i,{label:`Close`,variant:`secondary`,onClick:e}),(0,b.jsx)(i,{label:`Show toast`,onClick:()=>{t({body:`Toast from inside the dialog!`})}}),(0,b.jsx)(i,{label:`Error toast`,variant:`destructive`,onClick:()=>{t({body:`Something went wrong.`,type:`error`})}})]})]})}function v({type:e,body:t,endContent:n,dismissButton:r}){return(0,b.jsxs)(`div`,{className:`x78zum5 x1cy8zhl xjcht0a xh8yej3`,children:[(0,b.jsx)(`div`,{...{0:{className:`xkh2ocl x51ohtg xjspbzw x2lah0s x1ewilqj`},1:{className:`xkh2ocl x51ohtg xjspbzw x2lah0s x1ob8fc3`}}[(e===`error`)<<0]}),(0,b.jsx)(`div`,{className:`x98rzlu xeuugli`,children:t}),n,r]})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{y=t(n()),g(),a(),m(),s(),f(),u(),b=r(),x={title:`Core/Toast`,tags:[`autodocs`],parameters:{docs:{description:{component:"Imperative toast notification system. Use `useToast()` to show transient feedback messages. Works with or without `LayerProvider`."}}}},S={render:function(){let e=h();return(0,b.jsx)(i,{label:`Show toast`,onClick:()=>e({body:`This is an info toast`})})}},C={render:function(){let e=h();return(0,b.jsx)(d,{direction:`horizontal`,gap:2,children:[`info`,`error`].map(t=>(0,b.jsx)(i,{label:t,variant:t===`error`?`destructive`:`secondary`,onClick:()=>e({body:`This is a ${t} notification.`,type:t})},t))})},parameters:{docs:{description:{story:`Two toast types: info (default) and error. Error toasts persist until dismissed.`}}}},w={render:function(){let e=h();return(0,b.jsxs)(d,{direction:`horizontal`,gap:2,children:[(0,b.jsx)(i,{label:`With button`,onClick:()=>e({body:`Item deleted`,isAutoHide:!1,endContent:(0,b.jsx)(i,{label:`Undo`,variant:`secondary`,size:`sm`,onClick:()=>console.log(`Undo!`)})})}),(0,b.jsx)(i,{label:`With link`,variant:`secondary`,onClick:()=>e({body:`Your report is ready.`,isAutoHide:!1,endContent:(0,b.jsx)(p,{href:`#`,hasUnderline:!0,children:`View report`})})})]})},parameters:{docs:{description:{story:"Use `endContent` for trailing actions: buttons, links, or any content."}}}},T={render:function(){let e=h();return(0,b.jsx)(i,{label:`Trigger error`,variant:`destructive`,onClick:()=>e({body:`Check your network connection and try again.`,type:`error`})})},parameters:{docs:{description:{story:"Error toasts default to `isAutoHide: false`; they persist until the user dismisses them."}}}},E={render:function(){let e=h(),t=(0,y.useRef)(null);return(0,b.jsxs)(d,{direction:`horizontal`,gap:2,children:[(0,b.jsx)(i,{label:`Show persistent toast`,onClick:()=>{t.current=e({body:`Uploading...`,isAutoHide:!1})}}),(0,b.jsx)(i,{label:`Dismiss`,variant:`secondary`,onClick:()=>{t.current?.(),t.current=null}})]})},parameters:{docs:{description:{story:"`useToast()` returns a dismiss function. Call it to remove the toast programmatically."}}}},D={render:function(){let e=h();return(0,b.jsxs)(d,{direction:`horizontal`,gap:2,children:[(0,b.jsx)(i,{label:`Offline (ignore)`,onClick:()=>e({body:`You are offline`,uniqueID:`offline`,collisionBehavior:`ignore`,isAutoHide:!1})}),(0,b.jsx)(i,{label:`Progress (overwrite)`,variant:`secondary`,onClick:()=>e({body:`Uploading... ${Math.floor(Math.random()*100)}%`,uniqueID:`upload-progress`,collisionBehavior:`overwrite`,isAutoHide:!1})})]})},parameters:{docs:{description:{story:"`uniqueID` prevents duplicate toasts. `ignore` keeps the existing; `overwrite` replaces it."}}}},O={render:function(){let e=h(),t=(0,y.useRef)(0);return(0,b.jsx)(i,{label:`Add toast`,onClick:()=>{t.current++;let n=[`info`,`error`],r=n[t.current%n.length];e({body:`Toast #${t.current} — ${r} notification.`,type:r})}})},parameters:{docs:{description:{story:`Multiple toasts stack vertically. Default max visible is 5.`}}}},k={render:function(){let e=h();return(0,b.jsx)(o,{padding:4,children:(0,b.jsxs)(d,{gap:2,children:[(0,b.jsx)(`p`,{style:{margin:0,fontSize:14},children:`No LayerProvider: the hook creates a fallback viewport on document.body automatically.`}),(0,b.jsx)(i,{label:`Show toast`,onClick:()=>e({body:`Works without a provider!`})})]})})},parameters:{docs:{description:{story:"`useToast()` works without a provider. It lazily mounts a fallback viewport on first call."}}}},A={render:function(){let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(d,{gap:2,children:[(0,b.jsx)(i,{label:`Open dialog`,onClick:()=>t(!0)}),(0,b.jsx)(l,{isOpen:e,onOpenChange:()=>t(!1),children:(0,b.jsx)(c,{isTopLayer:!1,children:(0,b.jsx)(_,{onClose:()=>t(!1)})})})]})},parameters:{docs:{description:{story:"Dialog with its own `ToastViewport`: toasts render inside the dialog's top layer context and appear above the dialog overlay."}}}},j=e=>(0,b.jsx)(v,{...e}),M={name:`Custom content (renderContent)`,render:function(){let e=h();return(0,b.jsxs)(d,{direction:`horizontal`,gap:2,wrap:`wrap`,children:[(0,b.jsx)(i,{label:`Show`,onClick:()=>{e({body:`Your changes have been saved.`,renderContent:j})}}),(0,b.jsx)(i,{label:`With an action`,variant:`secondary`,onClick:()=>{e({body:`Row deleted.`,endContent:(0,b.jsx)(i,{variant:`ghost`,size:`sm`,label:`Undo`}),renderContent:j})}}),(0,b.jsx)(i,{label:`Error`,variant:`destructive`,onClick:()=>{e({body:`Could not reach the server.`,type:`error`,renderContent:j})}}),(0,b.jsx)(i,{label:`Without renderContent`,variant:`ghost`,onClick:()=>{e({body:`A toast from code that knows nothing about it.`})}})]})},parameters:{docs:{description:{story:"`renderContent` on the `showToast` options replaces the content of that toast's card with your own layout — here a leading status stripe. Astryx keeps the card and the transport, and hands over the message, the `endContent` and its own dismiss `Button`, so the close stays themed, translated and correctly named. The last button omits `renderContent`, showing what a toast raised by code that has never heard of this layout looks like: an ordinary Astryx toast, intact and dismissible."}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function DefaultStory() {
    const toast = useToast();
    return <Button label="Show toast" onClick={() => toast({
      body: 'This is an info toast'
    })} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function TypesStory() {
    const toast = useToast();
    const types: ToastType[] = ['info', 'error'];
    return <Stack direction="horizontal" gap={2}>
        {types.map(type => <Button key={type} label={type} variant={type === 'error' ? 'destructive' : 'secondary'} onClick={() => toast({
        body: \`This is a \${type} notification.\`,
        type
      })} />)}
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Two toast types: info (default) and error. Error toasts persist until dismissed.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function WithActionStory() {
    const toast = useToast();
    return <Stack direction="horizontal" gap={2}>
        <Button label="With button" onClick={() => toast({
        body: 'Item deleted',
        isAutoHide: false,
        endContent: <Button label="Undo" variant="secondary" size="sm" onClick={() => console.log('Undo!')} />
      })} />
        <Button label="With link" variant="secondary" onClick={() => toast({
        body: 'Your report is ready.',
        isAutoHide: false,
        endContent: <Link href="#" hasUnderline>
                  View report
                </Link>
      })} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`endContent\` for trailing actions: buttons, links, or any content.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function ErrorPersistsStory() {
    const toast = useToast();
    return <Button label="Trigger error" variant="destructive" onClick={() => toast({
      body: 'Check your network connection and try again.',
      type: 'error'
    })} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Error toasts default to \`isAutoHide: false\`; they persist until the user dismisses them.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function ProgrammaticDismissStory() {
    const toast = useToast();
    const dismissRef = useRef<(() => void) | null>(null);
    return <Stack direction="horizontal" gap={2}>
        <Button label="Show persistent toast" onClick={() => {
        dismissRef.current = toast({
          body: 'Uploading...',
          isAutoHide: false
        });
      }} />
        <Button label="Dismiss" variant="secondary" onClick={() => {
        dismissRef.current?.();
        dismissRef.current = null;
      }} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`useToast()\` returns a dismiss function. Call it to remove the toast programmatically.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function DeduplicationStory() {
    const toast = useToast();
    return <Stack direction="horizontal" gap={2}>
        <Button label="Offline (ignore)" onClick={() => toast({
        body: 'You are offline',
        uniqueID: 'offline',
        collisionBehavior: 'ignore',
        isAutoHide: false
      })} />
        <Button label="Progress (overwrite)" variant="secondary" onClick={() => toast({
        body: \`Uploading... \${Math.floor(Math.random() * 100)}%\`,
        uniqueID: 'upload-progress',
        collisionBehavior: 'overwrite',
        isAutoHide: false
      })} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`uniqueID\` prevents duplicate toasts. \`ignore\` keeps the existing; \`overwrite\` replaces it.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function StackingStory() {
    const toast = useToast();
    const countRef = useRef(0);
    return <Button label="Add toast" onClick={() => {
      countRef.current++;
      const types: ToastType[] = ['info', 'error'];
      const type = types[countRef.current % types.length];
      toast({
        body: \`Toast #\${countRef.current} — \${type} notification.\`,
        type
      });
    }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple toasts stack vertically. Default max visible is 5.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function NoProviderStory() {
    const toast = useToast();
    return <Card padding={4}>
        <Stack gap={2}>
          <p style={{
          margin: 0,
          fontSize: 14
        }}>
            No LayerProvider: the hook creates a fallback viewport on
            document.body automatically.
          </p>
          <Button label="Show toast" onClick={() => toast({
          body: 'Works without a provider!'
        })} />
        </Stack>
      </Card>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`useToast()\` works without a provider. It lazily mounts a fallback viewport on first call.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function ToastOverDialogStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <Stack gap={2}>
        <Button label="Open dialog" onClick={() => setIsOpen(true)} />
        <Dialog isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
          <ToastViewport isTopLayer={false}>
            <DialogToastContent onClose={() => setIsOpen(false)} />
          </ToastViewport>
        </Dialog>
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog with its own \`ToastViewport\`: toasts render inside the dialog's top layer context and appear above the dialog overlay."
      }
    }
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Custom content (renderContent)',
  render: function CustomContentStory() {
    const toast = useToast();
    return <Stack direction="horizontal" gap={2} wrap="wrap">
        <Button label="Show" onClick={() => {
        toast({
          body: 'Your changes have been saved.',
          renderContent: renderProductContent
        });
      }} />
        <Button label="With an action" variant="secondary" onClick={() => {
        toast({
          body: 'Row deleted.',
          endContent: <Button variant="ghost" size="sm" label="Undo" />,
          renderContent: renderProductContent
        });
      }} />
        <Button label="Error" variant="destructive" onClick={() => {
        toast({
          body: 'Could not reach the server.',
          type: 'error',
          renderContent: renderProductContent
        });
      }} />
        <Button label="Without renderContent" variant="ghost" onClick={() => {
        toast({
          body: 'A toast from code that knows nothing about it.'
        });
      }} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: "\`renderContent\` on the \`showToast\` options replaces the content of that toast's card with your own layout — here a leading status stripe. Astryx keeps the card and the transport, and hands over the message, the \`endContent\` and its own dismiss \`Button\`, so the close stays themed, translated and correctly named. The last button omits \`renderContent\`, showing what a toast raised by code that has never heard of this layout looks like: an ordinary Astryx toast, intact and dismissible."
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Types`,`WithAction`,`ErrorPersists`,`ProgrammaticDismiss`,`Deduplication`,`Stacking`,`NoProvider`,`ToastOverDialog`,`CustomContent`]}))();export{M as CustomContent,D as Deduplication,S as Default,T as ErrorPersists,k as NoProvider,E as ProgrammaticDismiss,O as Stacking,A as ToastOverDialog,C as Types,w as WithAction,N as __namedExportsOrder,x as default};