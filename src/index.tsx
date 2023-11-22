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
         const instagramRegex = /https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g;
         if (instagramRegex.test(content)) {
            args[1]["content"] = content.replace(
               instagramRegex, 
               (match) => match.replace("https://www.instagram.com", "https://www.ddinstagram.com")
            );
         }
      });
   },
   onStop() {
      Patcher.unpatchAll();
   },
};

registerPlugin(BetterInstagramEmbeds);
