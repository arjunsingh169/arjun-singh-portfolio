
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b5bbc63422f940a9aa4a34066eabd93b',
  appName: 'singh-portfolio-clone',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "https://b5bbc634-22f9-40a9-aa4a-34066eabd93b.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
