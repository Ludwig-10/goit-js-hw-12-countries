import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import { error } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

export default function onError() {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      width: '300px',
      delay: 1000,
    });
  }