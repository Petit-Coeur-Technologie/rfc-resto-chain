interface Window {
  glfBindButtons?: () => void;
  glfLoaded?: boolean;
  glfOpenWindow?: (cuid: string, ruid: string, options?: any) => void;
  glfWidget?: any;
}