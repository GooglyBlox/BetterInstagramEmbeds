import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { React, Messages } from 'enmity/metro/common';
import { get } from 'enmity/api/settings';
import manifest from '../manifest.json';

const Patcher = create('BetterInstagramEmbeds');
const BetterInstagramEmbeds: Plugin = {
   ...manifest,

   onStart() {      
      Patcher.before(Messages, "sendMessage", (self, args, orig) => {
         const content = args[1]["content"];
         if (content.includes("https://www.instagram.com/")) {
            args[1]["content"] = content.replace(
               new RegExp("https://www.instagram.com/", "g"), 
               "https://www.ddinstagram.com/"
            );
         }
      });
   },
   onStop() {
      Patcher.unpatchAll();
   },
};

registerPlugin(BetterInstagramEmbeds);
