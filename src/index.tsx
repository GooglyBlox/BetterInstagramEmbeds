import { get, set, SettingsStore } from "enmity/api/settings";
import { FormRow, FormSection, FormSwitch } from "enmity/components";
import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { Messages, React, Toasts } from "enmity/metro/common";
import { create } from "enmity/patcher";
import SettingsPage from "../../common/components/_pluginSettings/settingsPage";
import { Icons } from "../../common/components/_pluginSettings/utils";
import manifest from "../manifest.json";

interface SettingsProps {
    settings: SettingsStore;
}

const Patcher = create(manifest.name);

const BetterInstagramEmbeds: Plugin = {
    ...manifest,
    onStart() {
        try {
            Patcher.before(Messages, "sendMessage", (_self, args, _orig) => {
                const content = args[1]["content"];
                const instagramLinks = content.match(/http(s)?:\/\/(www\.)?instagram\.com\/\w{4,15}\/p\/\w+/gim);
                if (!instagramLinks) return;
                args[1]["content"] = content.replace(/http(s)?:\/\/(www\.)?instagram\.com/gim, `https://www.ddinstagram.com`);
            });
        } catch (err) {
            console.log("[ BetterInstagramEmbeds Error ]", err);
        }
    },
    onStop() {
        Patcher.unpatchAll();
    },
    patches: [],
    getSettingsPanel({ settings }: SettingsProps) {
        return <SettingsPage manifest={manifest} settings={settings} hasToasts={false} commands={null}>
            <FormSection title="Plugin Settings">
                {/* no settings are really necessary */}
            </FormSection>
        </SettingsPage>
    },
};

registerPlugin(BetterInstagramEmbeds);
