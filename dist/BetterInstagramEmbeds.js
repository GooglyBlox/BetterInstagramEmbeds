function s(o){window.enmity.plugins.registerPlugin(o)}function d(o){return window.enmity.patcher.create(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const w=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;var a="BetterInstagramEmbeds",c="1.0.0",l="patch-1.0.16",r="Convert Instagram links to ddInstagram links so the embed is better.",u=[{name:"GooglyBlox",id:"327559129705218049"}],y="#ff0069",g="https://raw.githubusercontent.com/GooglyBlox/BetterInstagramEmbeds/main/dist/BetterInstagramEmbeds.js",p={name:a,version:c,build:l,description:r,authors:u,color:y,sourceUrl:g};const t=d("BetterInstagramEmbeds"),v={...p,onStart(){t.before(w,"sendMessage",(o,m,h)=>{const n=m[1].content,e=/https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g;e.test(n)&&(m[1].content=n.replace(e,i=>i.replace("https://www.instagram.com","https://www.ddinstagram.com")))})},onStop(){t.unpatchAll()}};s(v);
