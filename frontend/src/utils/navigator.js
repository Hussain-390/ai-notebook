// Global navigator utility — allows navigation from outside React components
// (e.g., from API interceptors or utility functions)
let _navigate = null;

/**
 * Store the React Router navigate function for global use.
 * Called once from a component inside <BrowserRouter> (NavigationSetter in App.jsx).
 */
export const setNavigator = (navigate) => {
  _navigate = navigate;
};

/**
 * Navigate programmatically from anywhere in the app.
 * Falls back to window.location if navigate is not yet set.
 */
export const navigateTo = (path) => {
  if (_navigate) {
    _navigate(path);
  } else {
    window.location.href = path;
  }
};
