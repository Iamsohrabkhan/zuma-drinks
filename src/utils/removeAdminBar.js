// wpAdminBar.js
export function removeWpAdminBar() {
    const wpAdminBar = document.getElementById('wpadminbar');
    if (wpAdminBar) {
      wpAdminBar.remove();
    }
  }
  