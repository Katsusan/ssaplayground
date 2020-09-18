// Copyright 2020 The golang.design Initiative authors.
// All rights reserved. Use of this source code is governed
// by a GPLv3 license that can be found in the LICENSE file.

document.getElementById('dark-mode-checkbox').onchange = () => {
  darkmode()
}
var enabled = localStorage.getItem('dark-mode')
if (enabled === null) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enable(); document.getElementById("dark-mode-checkbox").checked = true;
  }
} else if (enabled === 'true') {
  enable(); document.getElementById("dark-mode-checkbox").checked = true;
}
function enable()  {
  DarkReader.enable({brightness: 100, contrast: 85, sepia: 10}, null, true);
  localStorage.setItem('dark-mode', 'true');
}
function disable() {
  DarkReader.disable();
  localStorage.setItem('dark-mode', 'false')
}
function darkmode() {
  if (localStorage.getItem('dark-mode') === 'false') { enable(); } else { disable();}
}