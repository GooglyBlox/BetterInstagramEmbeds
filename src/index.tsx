import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { React, Messages } from 'enmity/metro/common';
import { get } from 'enmity/api/settings';
import manifest from '../manifest.json';
import Settings from './components/Settings';

const Patcher = create('ChangeInstagramLink');
const ChangeInstagramLink: Plugin = {
   ...manifest,

   onStart() {      
      Patcher.before(Messages, "sendMessage", (self, args, orig) => {
         const content = args[1]["content"];
         if (content.includes("https://www.instagram.com/p/")) {
            args[1]["content"] = content.replace(
               new RegExp("https://www.instagram.com/p/", "g"), 
               "https://www.ddinstagram.com/p/"
            );
         }
      });
   },
   onStop() {
      Patcher.unpatchAll();
   },
   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(ChangeInstagramLink);
